/**
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │  CONFIGURACIÓN CENTRAL DEL SITIO — Iglesia Hebreos 11                     │
 * │                                                                          │
 * │  ⭐ Edita SOLO este archivo para actualizar textos, horarios, contacto,   │
 * │     redes sociales y el video de bienvenida en TODO el sitio.            │
 * │                                                                          │
 * │  Los valores marcados con "TODO:" o "PLACEHOLDER" son de ejemplo.        │
 * │  Reemplázalos con la información real de la iglesia.                     │
 * └─────────────────────────────────────────────────────────────────────────┘
 */

export const site = {
  name: "Iglesia Hebreos 11",
  fullName: "Iglesia Visionaria Hebreos 11",
  slogan: "Somos Templo",
  motto: ["Las Palmas para Cristo", "Uno más para Cristo"],
  description:
    "Iglesia comprometida con la transformación de vidas, la formación cristiana y el servicio social en Las Palmas de Herrera, República Dominicana.",
  url: "https://iglesiavh11.org",

  // ── Contacto (datos oficiales del checklist) ──────────────────────────────
  contact: {
    phone: "+1 (849) 472-4376",
    whatsapp: "18494724376", // solo dígitos, para el enlace wa.me
    email: "iglesiavh11@gmail.com",
    address: {
      line: "Calle Primera esq. Calle Bethania #37, Las Palmas de Herrera",
      city: "Santo Domingo Oeste",
      country: "República Dominicana",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Calle+Primera+esquina+Bethania+37+Las+Palmas+de+Herrera+Santo+Domingo+Oeste",
  },

  // ── Redes sociales (oficiales) ────────────────────────────────────────────
  social: {
    facebook: "https://www.facebook.com/share/1Kqjqbap4u/",
    instagram: "https://www.instagram.com/iglesiah11",
    youtube: "https://www.youtube.com/@iglesiavisionariahebreos1130",
    tiktok: "https://www.tiktok.com/@iglesiah11",
  },

  // ── Banner / Hero ─────────────────────────────────────────────────────────
  hero: {
    verse: "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.",
    verseRef: "Hebreos 11:1",
    welcomeLine: "Bienvenido a casa",
    // CTA principal + secundario (confirmado con el cliente)
    primaryCta: { label: "Visítanos", href: "#ubicacion" },
    secondaryCta: {
      label: "Ver en vivo",
      href: "https://www.youtube.com/@iglesiavisionariahebreos1130",
    },
  },

  // ── Mensaje de bienvenida (máx ~100 palabras) ─────────────────────────────
  welcome: {
    title: "Somos una familia de fe",
    body: "En Iglesia Hebreos 11 creemos en la transformación de vidas por medio del amor de Cristo. Desde 1972 servimos a nuestra comunidad formando personas sanas espiritualmente, desarrollando líderes y sirviendo integralmente al prójimo. No importa de dónde vengas: aquí encontrarás un lugar para crecer, sanar y pertenecer. Te esperamos con los brazos abiertos.",
    pastors: "Dr. Leonardo Piña y Lic. Eunice Peña — Pastores",
  },

  // ── Horarios de cultos (día / hora / tipo) — oficiales ────────────────────
  services: [
    { day: "Domingo", time: "10:00 AM", type: "Servicio Dominical" },
    { day: "Lunes", time: "7:30 PM", type: "Universidad Bíblica" },
    { day: "Martes", time: "7:00 PM", type: "Oración e Intercesión" },
    { day: "Viernes", time: "7:30 PM", type: "Escuela Bíblica" },
    { day: "Sábado", time: "7:30 PM", type: "Servicio Juvenil" },
  ],

  // ── Video de bienvenida ───────────────────────────────────────────────────
  // El cliente no solicitó video de bienvenida embebido (checklist sin marcar).
  // La transmisión en vivo se enlaza desde el botón "Ver en vivo" (YouTube).
  video: {
    enabled: false,
    provider: "youtube" as "youtube" | "vimeo",
    id: "",
    title: "Video de bienvenida",
  },

  // ── Navegación ────────────────────────────────────────────────────────────
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Nuestra Historia", href: "/historia" },
    { label: "Ministerios", href: "/ministerios" },
    { label: "Contacto", href: "/contacto" },
  ],
} as const;

export type Site = typeof site;
