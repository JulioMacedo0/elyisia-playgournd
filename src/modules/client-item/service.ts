import { oracleDataSource } from "../../db/oracle";
import { ClientItem } from "./model";

export const findClientItemByParId = async (codpar: string) => {
  const clientItemRepository = oracleDataSource.getRepository(ClientItem);
  return await clientItemRepository.findOneBy({ codpar: parseInt(codpar) });
};
