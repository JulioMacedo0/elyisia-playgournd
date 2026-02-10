import { oracleDataSource } from "../../db/oracle";
import { FinancialProfile } from "./model";

export const getFinancialProfileByCodParc = async (
  codparc: number,
): Promise<FinancialProfile | null> => {
  const repository = oracleDataSource.getRepository(FinancialProfile);
  const profile = await repository.findOne({
    where: { codparc },
  });

  return profile ?? null;
};
