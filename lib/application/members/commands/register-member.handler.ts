import type { UnitOfWork } from "@/lib/domain/unit-of-work";
import type {
  RegisterMemberCommand,
  RegisterMemberResult,
} from "./register-member.command";

/**
 * Handler del comando RegisterMember.
 * Ejecuta la escritura dentro de una unidad de trabajo (transacción).
 */
export class RegisterMemberHandler {
  constructor(private readonly uow: UnitOfWork) {}

  async execute(command: RegisterMemberCommand): Promise<RegisterMemberResult> {
    return this.uow.execute(async (repos) => {
      const member = await repos.members.add(command);
      return { id: member.id };
    });
  }
}
