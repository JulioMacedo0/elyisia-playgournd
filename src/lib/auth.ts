import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/db";
import { openAPI } from "better-auth/plugins";
import { Elysia, Context } from "elysia";

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

type SessionResult = Awaited<ReturnType<typeof auth.api.getSession>>;
type SessionNonNull = NonNullable<SessionResult>;

type AuthContext = {
  user: SessionNonNull["user"];
  session: SessionNonNull["session"];
};

export const betterAuthPlugin = new Elysia({ name: "better-auth" })
  .mount(auth.handler)
  .macro({
    auth: {
      async resolve(ctx: Context): Promise<AuthContext | Response> {
        const session = await auth.api.getSession({
          headers: ctx.request.headers,
        });
        if (!session) return new Response("Unauthorized", { status: 401 });

        return { user: session.user, session: session.session };
      },
    },
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

          operation.tags = ["Better Auth"];
        }
      }

      return reference;
    }) as Promise<any>,
  components: getSchema().then(({ components }) => components) as Promise<any>,
} as const;
