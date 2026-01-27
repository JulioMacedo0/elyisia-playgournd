import { eq } from "drizzle-orm";
import { db } from "../../db";
import { account } from "./model";

export const findAccountsByUserId = async (userId: string) => {
  const accounts = await db
    .select()
    .from(account)
    .where(eq(account.userId, userId));
  return accounts;
};
