import { eq } from "drizzle-orm";
import { db } from "../../db";
import { verification } from "./model";

export const findVerificationByIdentifier = async (identifier: string) => {
  const [found] = await db
    .select()
    .from(verification)
    .where(eq(verification.identifier, identifier))
    .limit(1);
  return found ?? null;
};
