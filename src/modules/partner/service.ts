import { oracleDataSource } from "../../db/oracle";
import { normalizeCpfCnpj, normalizeEmail } from "../../lib/normalize";
import { getContactEmailsByCodParc } from "../contats/service";
import { Partner } from "./model";

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

  if (!partner?.id) return false;

  const contactEmails = await getContactEmailsByCodParc(partner.id);
  const normalizedEmail = normalizeEmail(email);
  if (!normalizedEmail) return false;

  const candidatesEmails = [
    normalizeEmail(partner.email),
    ...contactEmails.map((contactEmail) => normalizeEmail(contactEmail)),
  ]
    .filter((value): value is string => Boolean(value))

  return candidatesEmails.includes(normalizedEmail);
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
