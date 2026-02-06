import { betterAuth } from "better-auth";
import { env } from "../../lib/env";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { createAuthMiddleware, openAPI } from "better-auth/plugins";
import { db } from "../../db";
import * as schema from "../../db/schema";
import { redis } from "bun";
import { resend } from "../../lib/resend";
import { getCompanyIdByDocument } from "../partner/service";

export const auth = betterAuth({
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      const res = await resend.emails.send({
        from: "Agronorte <no-reply@updates.agronorte.com>",
        to: [user.email],
        subject: "Verify your email address",
        html: `<p>Clique <a href="${url}">aqui</a> para verificar.</p>`,
      });
      console.log(res);
    },
  },

  secondaryStorage: {
    get: async (key) => {
      return await redis.get(key);
    },
    set: async (key, value, ttl) => {
      if (ttl) {
        await redis.set(key, value, "EX", ttl);
      } else {
        await redis.set(key, value);
      }
    },
    delete: async (key) => {
      await redis.del(key);
    },
  },
  user: {
    additionalFields: {
      companyId: {
        type: "number",
        input: true,
      },
      documentId: {
        // CPF or CNPJ
        type: "string",
        input: true,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    password: {
      hash: (password) => Bun.password.hash(password),
      verify: ({ password, hash }) => Bun.password.verify(password, hash),
    },
    sendResetPassword: async ({ user, url, token }, request) => {
      void resend.emails.send({
        from: "Agronorte <no-reply@updates.agronorte.com>",
        to: [user.email],
        subject: "Reset your password",
        html: `<p>Click <a href="${url}">here</a> to reset your password.</p>`,
      });
    },
  },
  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      if (auth.api.signUpEmail.path === ctx.path) {
        const { documentId } = ctx.body;
        const companyId =
          documentId && typeof documentId === "string"
            ? await getCompanyIdByDocument(documentId)
            : null;
        return {
          context: {
            ...ctx,
            body: {
              ...ctx.body,
              companyId: companyId ?? -1,
            },
          },
        };
      }
    }),
  },
  basePath: "/auth",
  baseURL: env.BETTER_AUTH_URL,
  trustedOrigins: [env.DOMAIN],
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
