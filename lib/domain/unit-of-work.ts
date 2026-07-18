import type { MemberRepository } from "./members/member.repository";

/**
 * Conjunto de repositorios disponibles dentro de una unidad de trabajo.
 * Al agregar nuevos agregados (Eventos, Cursos, etc.) se añaden aquí.
 */
export interface Repositories {
  members: MemberRepository;
}

/**
 * Unit of Work: coordina uno o varios repositorios dentro de una misma
 * transacción. Si `work` resuelve → commit; si lanza → rollback.
 */
export interface UnitOfWork {
  execute<T>(work: (repos: Repositories) => Promise<T>): Promise<T>;
}
