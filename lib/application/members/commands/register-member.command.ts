import type { NewMember } from "@/lib/domain/members/member";

/** Comando (escritura): registrar un nuevo miembro. */
export type RegisterMemberCommand = NewMember;

export interface RegisterMemberResult {
  id: number;
}
