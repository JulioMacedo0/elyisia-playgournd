import { eq } from "drizzle-orm";
import { db } from "../../db";
import { user } from "./model";

export const findUserById = async (id: string) => {
  const [found] = await db.select().from(user).where(eq(user.id, id)).limit(1);
  return found ?? null;
};
