import { Elysia } from "elysia";
import { auth } from "./service";
import type { AuthContext } from "./model";

export const authController = new Elysia({ name: "auth-controller" })
  .mount("/auth", auth.handler)
  .macro({
    auth: {
      async resolve({ status, request: { headers } }) {
        const session = await auth.api.getSession({ headers });
        if (!session) return status(401);
        return {
          user: session.user,
          session: session.session,
        };
      },
    },
  });

export type { AuthContext };
