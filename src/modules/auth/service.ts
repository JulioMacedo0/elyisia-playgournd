import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI } from "better-auth/plugins";
import { db } from "../../db";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  basePath: "/api",
  plugins: [openAPI()],
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
});

let _schema: ReturnType<typeof auth.api.generateOpenAPISchema>;
const getSchema = async () => (_schema ??= auth.api.generateOpenAPISchema());

export const OpenAPI = {
  getPaths: (prefix = "/auth/api") =>
    getSchema().then(({ paths }) => {
      const reference: typeof paths = Object.create(null);

      for (const path of Object.keys(paths)) {
        const key = prefix + path;
        reference[key] = paths[path];

        for (const method of Object.keys(paths[path])) {
          const operation = (reference[key] as any)[method];

          operation.tags = ["Auth"];
        }
      }

      return reference;
    }) as Promise<any>,
  components: getSchema().then(({ components }) => components) as Promise<any>,
} as const;
