import { PrismaClient } from "@prisma/client";

/**
 * Cliente Prisma como singleton. Se cachea en globalThis durante el desarrollo
 * para evitar abrir múltiples conexiones con el hot-reload de Next.
 */
const globalForPrisma = globalThis as unknown as { __prisma?: PrismaClient };

export const prisma: PrismaClient = globalForPrisma.__prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.__prisma = prisma;
}
