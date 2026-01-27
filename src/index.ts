import { Elysia } from "elysia";
import "./lib/env";
import { auth, betterAuthPlugin, OpenAPI } from "./lib/auth";
import { openapi } from "@elysiajs/openapi";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(
    openapi({
      documentation: {
        components: await OpenAPI.components,
        paths: await OpenAPI.getPaths(),
      },
    }),
  )
  .use(
    cors({
      origin: "http://localhost:3000",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
    }),
  )
  .use(betterAuthPlugin)
  .get("/", () => "Hello Elysia", { auth: false })
  .mount("/auth", auth.handler)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
