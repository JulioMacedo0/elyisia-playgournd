import { Elysia } from "elysia";
import { openapi } from "@elysiajs/openapi";
import { cors } from "@elysiajs/cors";
import "./lib/env";
import { authController, authPlugin } from "./modules/auth";
import { userController } from "./modules/user";
import { OpenAPI } from "./modules/auth/service";
import { env } from "./lib/env";
import { clientItemController } from "./modules/client-item";
import "reflect-metadata";
import { oracleDataSource } from "./db/oracle";
import { partnerController } from "./modules/partner";

const createApp = async () => {
  return new Elysia()
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
    .guard({}, (app) =>
      app.use(userController).use(clientItemController).use(partnerController),
    );
};

export type App = Awaited<ReturnType<typeof createApp>>;

async function bootstrap() {
  try {
    await oracleDataSource.initialize();

    const app = await createApp();
    app.listen(3000);

    console.log(
      `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
    );
  } catch (error) {
    console.error("Error during application bootstrap:", error);
    process.exit(1);
  }
}

bootstrap();
