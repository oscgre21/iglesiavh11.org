import type { MemberRepository } from "@/lib/domain/members/member.repository";
import type { CountMembersResult } from "./count-members.query";

/**
 * Handler de la query CountMembers.
 * Las lecturas no requieren transacción: usan el repositorio directamente.
 */
export class CountMembersHandler {
  constructor(private readonly members: MemberRepository) {}

  async execute(): Promise<CountMembersResult> {
    return this.members.count();
  }
}
