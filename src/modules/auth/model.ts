import type { auth } from "./service";

export type AuthInstance = typeof auth;

type SessionResult = Awaited<
  ReturnType<AuthInstance["api"]["getSession"]>
>;

export type AuthContext = {
  user: NonNullable<SessionResult>["user"];
  session: NonNullable<SessionResult>["session"];
};
