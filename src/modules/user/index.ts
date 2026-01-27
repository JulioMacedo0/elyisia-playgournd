import { Elysia, t } from "elysia";
import { findUserById } from "./service";

const ErrorResponse = t.Object({ message: t.String() });

const UserSchema = t.Object({
  id: t.String(),
  name: t.String(),
  email: t.String(),
  emailVerified: t.Boolean(),
  image: t.Union([t.String(), t.Null()]),
  createdAt: t.Date(),
  updatedAt: t.Date(),
});

export const userController = new Elysia({
  name: "user-controller",
  prefix: "/users",
}).get(
  "/:id",
  async ({ params, set }) => {
    const id = params.id;
    if (!id) {
      set.status = 400;
      return { message: "Invalid user id" };
    }

    const user = await findUserById(id);
    if (!user) {
      set.status = 404;
      return { message: "User not found" };
    }

    return user;
  },
  {
    params: t.Object({ id: t.String() }),
    response: {
      200: UserSchema,
      400: ErrorResponse,
      404: ErrorResponse,
    },
    detail: {
      tags: ["User"],
      summary: "Busca usuário por id",
      description: "Retorna um usuário pelo id (UUID/ID do auth).",
    },
  },
);

export type UserController = typeof userController;
