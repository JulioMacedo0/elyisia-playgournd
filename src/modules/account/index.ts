import { Elysia, t } from "elysia";
import { findAccountsByUserId } from "./service";

const ErrorResponse = t.Object({
  message: t.String(),
});

const AccountSchema = t.Object({
  id: t.String(),
  accountId: t.String(),
  providerId: t.String(),
  userId: t.String(),
  accessToken: t.Union([t.String(), t.Null()]),
  refreshToken: t.Union([t.String(), t.Null()]),
  idToken: t.Union([t.String(), t.Null()]),
  accessTokenExpiresAt: t.Union([t.Date(), t.Null()]),
  refreshTokenExpiresAt: t.Union([t.Date(), t.Null()]),
  scope: t.Union([t.String(), t.Null()]),
  password: t.Union([t.String(), t.Null()]),
  createdAt: t.Date(),
  updatedAt: t.Date(),
});

export const accountController = new Elysia({
  name: "account-controller",
  prefix: "/accounts",
}).get(
  "/user/:userId",
  async ({ params, set }) => {
    const userId = params.userId;
    if (!userId) {
      set.status = 400;
      return { message: "userId is required" };
    }

    const accounts = await findAccountsByUserId(userId);
    return accounts;
  },
  {
    params: t.Object({ userId: t.String() }),
    response: {
      200: t.Array(AccountSchema),
      400: ErrorResponse,
    },
    detail: {
      tags: ["Account"],
      summary: "Lista contas por usuário",
    },
  },
);

export type AccountController = typeof accountController;
