import { Elysia, t } from "elysia";
import { verifyPartnerEmail } from "./service";

const ErrorResponse = t.Object({ message: t.String() });

const VerifyEmailResponse = t.Object({
  valid: t.Boolean(),
});

export const partnerController = new Elysia({
  name: "partner-controller",
  prefix: "/partners",
}).post(
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
);

export type PartnerController = typeof partnerController;
