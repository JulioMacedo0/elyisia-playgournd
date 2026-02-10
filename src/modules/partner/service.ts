import { oracleDataSource } from "../../db/oracle";
import { normalizeCpfCnpj, normalizeEmail } from "../../lib/normalize";
import { getContactEmailsByCodParc } from "../contat/service";
import { Partner } from "./model";

export type PartnerEmailMatch = {
  codparc: number;
  nomeparc: string;
  cgcCpf: string | null;
  tippessoa: string;
  origin: "MAIN" | "CONTACT";
};

export const findPartnersByEmail = async (
  email: string,
): Promise<PartnerEmailMatch[]> => {
  const normalizedEmail = normalizeEmail(email);
  if (!normalizedEmail) return [];

  const sql = `
    WITH hits AS (
      SELECT
        p.CODPARC AS "codparc",
        p.NOMEPARC AS "nomeparc",
        p.CGC_CPF AS "cgcCpf",
        p.TIPPESSOA AS "tippessoa",
        'MAIN' AS "origin",
        2 AS "originPriority"
      FROM SANKHYA.TGFPAR p
      WHERE LOWER(TRIM(p.EMAIL)) = LOWER(TRIM(:email))

      UNION ALL

      SELECT
        p.CODPARC AS "codparc",
        p.NOMEPARC AS "nomeparc",
        p.CGC_CPF AS "cgcCpf",
        p.TIPPESSOA AS "tippessoa",
        'CONTACT' AS "origin",
        1 AS "originPriority"
      FROM SANKHYA.TGFCTT c
      JOIN SANKHYA.TGFPAR p ON p.CODPARC = c.CODPARC
      WHERE LOWER(TRIM(c.EMAIL)) = LOWER(TRIM(:email))
    ),
    dedup AS (
      SELECT
        h.*,
        ROW_NUMBER() OVER (
          PARTITION BY h."codparc"
          ORDER BY h."originPriority"
        ) AS "rn"
      FROM hits h
    )
    SELECT
      "codparc",
      "nomeparc",
      "cgcCpf",
      "tippessoa",
      "origin"
    FROM dedup
    WHERE "rn" = 1
    ORDER BY "nomeparc"
  `;

  const rows = await oracleDataSource.query(sql, {
    email: normalizedEmail,
  } as any);
  return rows as PartnerEmailMatch[];
};

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
  ].filter((value): value is string => Boolean(value));

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

export const getCompanyById = async (
  companyId: number,
): Promise<Pick<Partner, "id" | "nomeparc"> | null> => {
  const partnerRepository = oracleDataSource.getRepository(Partner);
  const partner = await partnerRepository.findOne({
    select: ["id", "nomeparc"],
    where: { id: companyId },
  });
  console.log(partner);
  return partner ?? null;
};
