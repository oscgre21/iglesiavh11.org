import { prisma } from "@/lib/db/prisma";
import { PrismaUnitOfWork } from "@/lib/infrastructure/prisma/prisma-unit-of-work";
import { PrismaMemberRepository } from "@/lib/infrastructure/prisma/prisma-member.repository";
import { RegisterMemberHandler } from "@/lib/application/members/commands/register-member.handler";
import { CountMembersHandler } from "@/lib/application/members/queries/count-members.handler";

/**
 * Composition root: cablea las dependencias (inversión de control).
 * Aquí se decide qué implementación concreta recibe cada handler.
 *
 * - Escrituras (commands) → Unit of Work (transaccional).
 * - Lecturas (queries)    → repositorio directo (sin transacción).
 */

// Lado de escritura
const unitOfWork = new PrismaUnitOfWork(prisma);
export const registerMemberHandler = new RegisterMemberHandler(unitOfWork);

// Lado de lectura
const memberReadRepository = new PrismaMemberRepository(prisma);
export const countMembersHandler = new CountMembersHandler(memberReadRepository);
