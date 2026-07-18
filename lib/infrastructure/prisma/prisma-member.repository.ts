import type { Prisma, PrismaClient } from "@prisma/client";
import type { MemberRepository } from "@/lib/domain/members/member.repository";
import type { Member, NewMember } from "@/lib/domain/members/member";

/** Acepta el cliente base o un cliente de transacción (Unit of Work). */
type PrismaExecutor = PrismaClient | Prisma.TransactionClient;

export class PrismaMemberRepository implements MemberRepository {
  constructor(private readonly prisma: PrismaExecutor) {}

  async add(data: NewMember): Promise<Member> {
    return this.prisma.member.create({
      data: {
        fullName: data.fullName,
        birthDate: data.birthDate ?? null,
        gender: data.gender ?? null,
        maritalStatus: data.maritalStatus ?? null,
        address: data.address ?? null,
        phone: data.phone ?? null,
        email: data.email ?? null,
        baptized: data.baptized ?? false,
        children: data.children ?? 0,
        ministry: data.ministry ?? null,
        howFound: data.howFound ?? null,
      },
    });
  }

  async count(): Promise<number> {
    return this.prisma.member.count();
  }
}
