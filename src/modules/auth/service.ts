import { betterAuth, env } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { createAuthMiddleware, openAPI } from "better-auth/plugins";
import { db } from "../../db";
import * as schema from "../../db/schema";

export const auth = betterAuth({
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      console.log(
        `Send verification email to ${user.email} with url: ${url} and token: ${token}`,
      );
    },
    //   void sendEmail({
    //     to: user.email,
    //     subject: "Verify your email address",
    //     text: `Click the link to verify your email: ${url}`,
    //   });
    // },
  },
  user: {
    additionalFields: {
      companyId: {
        type: "number",
        input: true,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: true,
    password: {
      hash: (password) => Bun.password.hash(password),
      verify: ({ password, hash }) => Bun.password.verify(password, hash),
    },
  },
  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      if (auth.api.signUpEmail.path === ctx.path) {
        return {
          context: {
            ...ctx,
            body: {
              ...ctx.body,
              companyId: -1,
            },
          },
        };
      }
    }),
  },
  baseURL: env.BETTER_AUTH_URL,
  plugins: [openAPI()],
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
});

let _schema: ReturnType<typeof auth.api.generateOpenAPISchema>;
const getSchema = async () => (_schema ??= auth.api.generateOpenAPISchema());

export const OpenAPI = {
  getPaths: (prefix = "/auth") =>
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
