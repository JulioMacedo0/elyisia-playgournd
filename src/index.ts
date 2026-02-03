import { Elysia } from "elysia";
import { openapi } from "@elysiajs/openapi";
import { cors } from "@elysiajs/cors";
import "./lib/env";
import { authController, authPlugin } from "./modules/auth";
import { userController } from "./modules/user";
import { OpenAPI } from "./modules/auth/service";
import { env } from "./lib/env";

const app = new Elysia()
  .use(
    openapi({
      path: "/docs",
      documentation: {
        components: await OpenAPI.components,
        paths: await OpenAPI.getPaths(),
      },
    }),
  )
  .use(
    cors({
      origin:
        env.NODE_ENV === "development" ? "http://localhost:5173" : env.DOMAIN,
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
    }),
  )
  .use(authPlugin)
  .use(authController)
  .guard({ auth: true }, (app) => app.use(userController))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

export type App = typeof app;
