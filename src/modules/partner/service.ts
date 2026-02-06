import { oracleDataSource } from "../../db/oracle";
import { Partner } from "./model";

const normalizeCpfCnpj = (value: string) => value.replace(/\D/g, "");

export const verifyPartnerEmail = async (
  cpfCnpj: string,
  email: string,
): Promise<boolean> => {
  const partnerRepository = oracleDataSource.getRepository(Partner);
  const normalized = normalizeCpfCnpj(cpfCnpj);
  const candidates =
    normalized && normalized !== cpfCnpj
      ? [{ cgcCpf: cpfCnpj }, { cgcCpf: normalized }]
      : [{ cgcCpf: cpfCnpj }];

  const partner = await partnerRepository.findOne({
    where: candidates,
    select: ["id", "email", "cgcCpf"],
  });

  if (!partner?.email) return false;

  return partner.email.trim().toLowerCase() === email.trim().toLowerCase();
};

export const getCompanyIdByDocument = async (
  documentId: string,
): Promise<number | null> => {
  const partnerRepository = oracleDataSource.getRepository(Partner);
  const normalized = normalizeCpfCnpj(documentId);
  const candidates =
    normalized && normalized !== documentId
      ? [{ cgcCpf: documentId }, { cgcCpf: normalized }]
      : [{ cgcCpf: documentId }];

  const partner = await partnerRepository.findOne({
    where: candidates,
    select: ["id", "cgcCpf"],
  });

  return partner?.id ?? null;
};
