import { Elysia, t } from "elysia";
import {
  findPartnersByEmail,
  getCompanyById,
  verifyPartnerEmail,
} from "./service";

const ErrorResponse = t.Object({ message: t.String() });

const VerifyEmailResponse = t.Object({
  valid: t.Boolean(),
});

const PartnerEmailMatchResponse = t.Object({
  codparc: t.Number(),
  nomeparc: t.String(),
  cgcCpf: t.Nullable(t.String()),
  tippessoa: t.String(),
  origin: t.Union([t.Literal("MAIN"), t.Literal("CONTACT")]),
});

const Partner = t.Object({
  id: t.Number(),
  nomeparc: t.String(),
});

export const partnerController = new Elysia({
  name: "partner-controller",
  prefix: "/partners",
})
  .get(
    "/:companyId",
    async ({ params, set }) => {
      const companyId = Number(params.companyId);

      if (!params.companyId || Number.isNaN(companyId)) {
        set.status = 400;
        return { message: "companyId must be a valid number" };
      }

      const company = await getCompanyById(companyId);

      if (!company) {
        set.status = 404;
        return { message: "Company not found" };
      }

      return company;
    },
    {
      params: t.Object({ companyId: t.String() }),
      response: {
        200: Partner,
        400: ErrorResponse,
        404: ErrorResponse,
      },
      detail: {
        tags: ["Partner"],
        summary: "Busca parceiro por ID",
        description: "Retorna o parceiro (TGFPAR) pelo CODPARC informado.",
      },
    },
  )
  .post(
    "/verify-email",
    async ({ body, set }) => {
      const { cpfCnpj, email } = body;

      if (!cpfCnpj || !email) {
        set.status = 400;
        return { message: "cpfCnpj and email are required" };
      }

      const valid = await verifyPartnerEmail(cpfCnpj, email);
      return { valid };
    },
    {
      body: t.Object({
        cpfCnpj: t.String(),
        email: t.String(),
      }),
      response: {
        200: VerifyEmailResponse,
        400: ErrorResponse,
      },
      detail: {
        tags: ["Partner"],
        summary: "Verifica email do parceiro por CPF/CNPJ",
        description:
          "Valida se o email informado corresponde ao email cadastrado no parceiro (TGFPAR).",
      },
    },
  )
  .post(
    "/by-email",
    async ({ body, set }) => {
      const { email } = body;

      if (!email) {
        set.status = 400;
        return { message: "email is required" };
      }

      const matches = await findPartnersByEmail(email);
      return matches;
    },
    {
      body: t.Object({
        email: t.String(),
      }),
      response: {
        200: t.Array(PartnerEmailMatchResponse),
        400: ErrorResponse,
      },
      detail: {
        tags: ["Partner"],
        summary: "Busca parceiros por email",
        description:
          "Retorna parceiros encontrados pelo email no cadastro principal ou contatos, com prioridade de origem.",
      },
    },
  );

export type PartnerController = typeof partnerController;
