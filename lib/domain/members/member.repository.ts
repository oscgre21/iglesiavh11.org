import type { Member, NewMember } from "./member";

/**
 * Contrato del repositorio de miembros (puerto de dominio).
 * La infraestructura (Prisma) provee la implementación concreta.
 */
export interface MemberRepository {
  add(data: NewMember): Promise<Member>;
  count(): Promise<number>;
}
