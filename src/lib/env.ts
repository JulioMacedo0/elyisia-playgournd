import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]),
  DATABASE_URL: z.string().url("DATABASE_URL must be a valid URL"),
  REDIS_URL: z
    .url("REDIS_URL must be a valid URL")
    .min(1, "REDIS_URL is required"),
  REDIS_USER: z.string().min(1, "REDIS_USER is required"),
  REDIS_PASSWORD: z.string().min(1, "REDIS_PASSWORD is required"),
  DOMAIN: z.url("DOMAIN must be a valid URL").min(1, "DOMAIN is required"),
  BETTER_AUTH_SECRET: z.string().min(1, "BETTER_AUTH_SECRET is required"),
  BETTER_AUTH_URL: z
    .url("BETTER_AUTH_URL must be a valid URL")
    .min(1, "BETTER_AUTH_URL is required"),
  RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY is required"),
  ORACLE_USER: z.string().min(1, "ORACLE_USER is required"),
  ORACLE_PASSWORD: z.string().min(1, "ORACLE_PASSWORD is required"),
  ORACLE_PORT: z
    .number("ORACLE_PORT must be a number")
    .min(1, "ORACLE_PORT is required"),
  ORACLE_DB_NAME: z.string().min(1, "ORACLE_DB_NAME is required"),
  ORACLE_HOST: z.string().min(1, "ORACLE_HOST is required"),
});

const parsedEnv = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  REDIS_URL: process.env.REDIS_URL,
  REDIS_USER: process.env.REDIS_USER,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  DOMAIN: process.env.DOMAIN,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  ORACLE_USER: process.env.ORACLE_USER,
  ORACLE_PASSWORD: process.env.ORACLE_PASSWORD,
  ORACLE_PORT: Number(process.env.ORACLE_PORT),
  ORACLE_DB_NAME: process.env.ORACLE_DB_NAME,
  ORACLE_HOST: process.env.ORACLE_HOST,
});

if (!parsedEnv.success) {
  parsedEnv.error.issues.forEach((issue) => {
    const path = issue.path.join(".");
    console.error(`- ${path}: ${issue.message} (${issue.code})`);
  });

  process.exit(1);
}

export const env = parsedEnv.data;
export type Env = z.infer<typeof envSchema>;
