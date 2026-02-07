export const normalizeCpfCnpj = (value: string): string =>
  value.replace(/\D/g, "");

export const normalizeEmail = (
  value: string | null | undefined,
): string | null => {
  const normalized = value?.trim().toLowerCase();
  return normalized ? normalized : null;
};
