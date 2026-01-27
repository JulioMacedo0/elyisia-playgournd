import { Elysia, t } from "elysia";
import { findSessionByToken } from "./service";

const ErrorResponse = t.Object({
  message: t.String(),
});

const SessionSchema = t.Object({
  id: t.String(),
  expiresAt: t.Date(),
  token: t.String(),
  createdAt: t.Date(),
  updatedAt: t.Date(),
  ipAddress: t.Union([t.String(), t.Null()]),
  userAgent: t.Union([t.String(), t.Null()]),
  userId: t.String(),
});

export const sessionController = new Elysia({
  name: "session-controller",
  prefix: "/sessions",
}).get(
  "/:token",
  async ({ params, set }) => {
    const token = params.token;
    if (!token) {
      set.status = 400;
      return { message: "Token is required" };
    }

    const session = await findSessionByToken(token);
    if (!session) {
      set.status = 404;
      return { message: "Session not found" };
    }

    return session;
  },
  {
    params: t.Object({ token: t.String() }),
    response: {
      200: SessionSchema,
      400: ErrorResponse,
      404: ErrorResponse,
    },
    detail: {
      tags: ["Session"],
      summary: "Busca sessão por token",
    },
  },
);

export type SessionController = typeof sessionController;
