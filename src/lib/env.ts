import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]),
  DATABASE_URL: z.string().url("DATABASE_URL must be a valid URL"),
  BETTER_AUTH_SECRET: z.string().min(1, "BETTER_AUTH_SECRET is required"),
  DOMAIN: z.url("DOMAIN must be a valid URL").min(1, "DOMAIN is required"),
});

const parsedEnv = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  DOMAIN: process.env.DOMAIN,
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
