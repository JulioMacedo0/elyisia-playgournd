import { eq } from "drizzle-orm";
import { db } from "../../db";
import { session } from "./model";

export const findSessionByToken = async (token: string) => {
  const [found] = await db
    .select()
    .from(session)
    .where(eq(session.token, token))
    .limit(1);
  return found ?? null;
};
