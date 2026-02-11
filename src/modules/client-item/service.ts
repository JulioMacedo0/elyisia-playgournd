import { oracleDataSource } from "../../db/oracle";
import { ClientItem } from "./model";

export const findClientItemByParId = async (codpar: string) => {
  const clientItemRepository = oracleDataSource.getRepository(ClientItem);

  const result = await clientItemRepository.find({
    where: { codpar: parseInt(codpar) },
    select: ["id", "name", "codpar", "value"],
  });
  return result;
};
