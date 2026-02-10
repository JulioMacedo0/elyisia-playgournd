import { Elysia, t } from "elysia";
import { getFinancialProfileByCodParc } from "./service";

const ErrorResponse = t.Object({ message: t.String() });

const FinancialProfileResponse = t.Object({
  codparc: t.Number(),
  nomeparc: t.String(),
  limcred: t.Number(),
  saldo: t.Number(),
  possuiVencido: t.Number(),
});

export const financialProfileController = new Elysia({
  name: "financial-profile-controller",
  prefix: "/perfil-fin-clientes",
}).get(
  "/:codparc",
  async ({ params, set }) => {
    const codparc = Number(params.codparc);

    if (!params.codparc || Number.isNaN(codparc)) {
      set.status = 400;
      return { message: "codparc must be a valid number" };
    }

    const profile = await getFinancialProfileByCodParc(codparc);

    if (!profile) {
      set.status = 404;
      return { message: "Financial profile not found" };
    }

    return profile;
  },
  {
    params: t.Object({ codparc: t.String() }),
    response: {
      200: FinancialProfileResponse,
      400: ErrorResponse,
      404: ErrorResponse,
    },
    detail: {
      tags: ["FinancialProfile"],
      summary: "Busca perfil financeiro por CODPARC",
      description:
        "Retorna o perfil financeiro do cliente na view VW_PERFIL_FIN_CLIENTES.",
    },
  },
);

export type FinancialProfileController = typeof financialProfileController;
