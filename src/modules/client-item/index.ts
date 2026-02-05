import { Elysia, t } from "elysia";
import { findClientItemByParId } from "./service";
import { authPlugin } from "../auth";

const ErrorResponse = t.Object({ message: t.String() });

const ClientItemSchema = t.Object({
  id: t.Integer(),
  name: t.String(),
  value: t.String(),
  codpar: t.Integer(),
});

export const clientItemController = new Elysia({
  name: "client-item-controller",
  prefix: "/client-items",
})
  .use(authPlugin)
  .get(
    "/:id",
    async ({ params, set }) => {
      const id = params.id;
      if (!id) {
        set.status = 400;
        return { message: "Invalid client item id" };
      }

      const clientItem = await findClientItemByParId(id);
      if (!clientItem) {
        set.status = 404;
        return { message: "Client item not found" };
      }

      return clientItem;
    },
    {
      auth: true,
      params: t.Object({ id: t.String() }),
      response: {
        200: ClientItemSchema,
        400: ErrorResponse,
        404: ErrorResponse,
      },
      detail: {
        tags: ["ClientItem"],
        summary: "Busca client item por codpar",
        description:
          "Retorna um client item pelo codpar (UUID/ID do do parceiro sankhya).",
      },
    },
  );

export type ClientItemController = typeof clientItemController;
