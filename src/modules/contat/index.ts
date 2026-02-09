import { Elysia, t } from "elysia";
import { getContactEmailsByCodParc } from "./service";

const ErrorResponse = t.Object({ message: t.String() });

export const contatsController = new Elysia({
  name: "contats-controller",
  prefix: "/contats",
}).get(
  "/:codparc/emails",
  async ({ params, set }) => {
    const codparc = Number(params.codparc);

    if (!params.codparc || Number.isNaN(codparc)) {
      set.status = 400;
      return { message: "codparc must be a valid number" };
    }

    const emails = await getContactEmailsByCodParc(codparc);
    return emails;
  },
  {
    params: t.Object({ codparc: t.String() }),
    response: {
      200: t.Array(t.String()),
      400: ErrorResponse,
    },
    detail: {
      tags: ["Contats"],
      summary: "Lista emails de contato por CODPARC",
      description:
        "Retorna todos os emails de contato cadastrados no TGFCTT para o CODPARC informado.",
    },
  },
);

export type ContatsController = typeof contatsController;
