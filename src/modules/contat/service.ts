import { oracleDataSource } from "../../db/oracle";
import { Contat } from "./model";

export const getContactEmailsByCodParc = async (
  codparc: number,
): Promise<string[]> => {
  const contatRepository = oracleDataSource.getRepository(Contat);

  const contacts = await contatRepository.find({
    where: { codparc },
    select: ["email"],
  });

  return contacts
    .map((contact) => contact.email?.trim())
    .filter((email): email is string => Boolean(email));
};
