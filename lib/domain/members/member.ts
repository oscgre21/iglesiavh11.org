/**
 * Entidad de dominio: Miembro.
 * Independiente de Prisma / la base de datos.
 */
export interface Member {
  id: number;
  fullName: string;
  birthDate: string | null;
  gender: string | null;
  maritalStatus: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  baptized: boolean;
  children: number;
  ministry: string | null;
  howFound: string | null;
  createdAt: Date;
}

/** Datos necesarios para crear un miembro (sin id ni createdAt). */
export interface NewMember {
  fullName: string;
  birthDate?: string | null;
  gender?: string | null;
  maritalStatus?: string | null;
  address?: string | null;
  phone?: string | null;
  email?: string | null;
  baptized?: boolean;
  children?: number;
  ministry?: string | null;
  howFound?: string | null;
}
