import { NextResponse } from "next/server";
import { registerMemberHandler } from "@/lib/container";
import type { RegisterMemberCommand } from "@/lib/application/members/commands/register-member.command";

// Prisma requiere el runtime de Node (no edge).
export const runtime = "nodejs";

function str(v: unknown, max = 500): string | undefined {
  if (typeof v !== "string") return undefined;
  const s = v.trim();
  return s ? s.slice(0, max) : undefined;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));

    // Honeypot anti-spam: si el campo oculto viene lleno, lo ignoramos "en silencio".
    if (typeof body.website === "string" && body.website.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const fullName = str(body.fullName, 120);
    if (!fullName || fullName.length < 3) {
      return NextResponse.json(
        { ok: false, error: "El nombre completo es obligatorio." },
        { status: 400 },
      );
    }

    const childrenRaw = Number.parseInt(String(body.children ?? "0"), 10);
    const children = Number.isFinite(childrenRaw)
      ? Math.max(0, Math.min(30, childrenRaw))
      : 0;

    const command: RegisterMemberCommand = {
      fullName,
      birthDate: str(body.birthDate, 20),
      gender: str(body.gender, 20),
      maritalStatus: str(body.maritalStatus, 30),
      address: str(body.address, 300),
      phone: str(body.phone, 40),
      email: str(body.email, 120),
      baptized: body.baptized === "si" || body.baptized === true,
      children,
      ministry: str(body.ministry, 60),
      howFound: str(body.howFound, 120),
    };

    const { id } = await registerMemberHandler.execute(command);
    return NextResponse.json({ ok: true, id });
  } catch {
    return NextResponse.json(
      { ok: false, error: "No se pudo procesar el registro. Inténtalo más tarde." },
      { status: 500 },
    );
  }
}
