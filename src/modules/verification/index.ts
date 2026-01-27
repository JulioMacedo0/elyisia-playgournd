import { Elysia, t } from "elysia";
import { findVerificationByIdentifier } from "./service";

const ErrorResponse = t.Object({
  message: t.String(),
});

const VerificationSchema = t.Object({
  id: t.String(),
  identifier: t.String(),
  value: t.String(),
  expiresAt: t.Date(),
  createdAt: t.Date(),
  updatedAt: t.Date(),
});

export const verificationController = new Elysia({
  name: "verification-controller",
  prefix: "/verifications",
}).get(
  "/:identifier",
  async ({ params, set }) => {
    const identifier = params.identifier;
    if (!identifier) {
      set.status = 400;
      return { message: "identifier is required" };
    }

    const record = await findVerificationByIdentifier(identifier);
    if (!record) {
      set.status = 404;
      return { message: "Verification not found" };
    }

    return record;
  },
  {
    params: t.Object({ identifier: t.String() }),
    response: {
      200: VerificationSchema,
      400: ErrorResponse,
      404: ErrorResponse,
    },
    detail: {
      tags: ["Verification"],
      summary: "Busca verificação por identifier",
    },
  },
);

export type VerificationController = typeof verificationController;
