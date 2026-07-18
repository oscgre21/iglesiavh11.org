import type { PrismaClient } from "@prisma/client";
import type { Repositories, UnitOfWork } from "@/lib/domain/unit-of-work";
import { PrismaMemberRepository } from "./prisma-member.repository";

/**
 * Implementación del Unit of Work sobre las transacciones interactivas de Prisma.
 * Cada repositorio se instancia con el cliente transaccional (`tx`), de modo que
 * todas las operaciones comparten la misma transacción atómica.
 */
export class PrismaUnitOfWork implements UnitOfWork {
  constructor(private readonly prisma: PrismaClient) {}

  execute<T>(work: (repos: Repositories) => Promise<T>): Promise<T> {
    return this.prisma.$transaction(async (tx) => {
      const repositories: Repositories = {
        members: new PrismaMemberRepository(tx),
      };
      return work(repositories);
    });
  }
}
