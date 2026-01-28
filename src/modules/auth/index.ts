import { Elysia } from "elysia";
import { auth } from "./service";

export const authController = new Elysia({ name: "auth-controller" }).mount(
  "/auth",
  auth.handler,
);

export const authPlugin = new Elysia({ name: "auth-plugin" }).macro({
  auth: {
    async resolve({ status, request: { headers } }) {
      const session = await auth.api.getSession({ headers });
      if (!session) return status(401);
      return { user: session.user, session: session.session };
    },
  },
});
