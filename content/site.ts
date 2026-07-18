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

  // ── Quiénes Somos (textos oficiales del checklist) ────────────────────────
  about: {
    mission:
      "Formar individuos en las áreas socio-psico-emocional y espiritual a través de la Palabra de Dios, para que estén equipados y aptos para toda buena obra, con el fin de expandir el evangelio de Jesucristo a las naciones.",
    vision:
      "Ser una iglesia que expanda el reino de Dios nacional e internacionalmente a través de la predicación del evangelio, fomentando una cultura de crecimiento que refleje el amor de Cristo.",
    objective:
      "Enseñar a los creyentes a ser dignos representantes del reino de los cielos, obedeciendo a toda autoridad terrenal y siendo buenos ciudadanos, expandiendo esta visión en toda la geografía nacional e internacional.",
    values: [
      "Amor", "Fidelidad", "Sinceridad", "Compañerismo", "Lealtad", "Honradez",
      "Responsabilidad", "Tolerancia", "Servicio", "Solidaridad", "Emprendimiento",
      "Creatividad", "Honestidad", "Respeto", "Paciencia", "Competencia",
    ],
    pastors: [
      {
        name: "Dr. Eduardo Leonardo Piña Mateo",
        role: "Pastor Principal",
        bio: "Desde 2010 pastorea la Iglesia Hebreos 11, fortaleciendo la visión de formar personas sanas espiritualmente, desarrollar líderes y servir integralmente a la comunidad. Su ministerio se caracteriza por la enseñanza de la Palabra y el discipulado.",
        // TODO: agregar foto en /images/pastores/pastor.jpg
        photo: "",
      },
      {
        name: "Lic. Eunice Elizabeth Peña de la Rosa",
        role: "Pastora",
        bio: "Impulsa espacios de crecimiento para mujeres, promoviendo el amor propio sano, el perdón y el liderazgo espiritual en el hogar y la iglesia. Es fundadora y directora de un colegio infantil con más de 30 años de experiencia en la formación emocional, social y espiritual de niños. Su compromiso es extender el Reino de Dios mediante la enseñanza, el discipulado y la consejería.",
        // TODO: agregar foto en /images/pastores/pastora.jpg
        photo: "",
      },
    ],
  },

  // ── Ministerios: Pilares de la iglesia (checklist 7.2) ────────────────────
  pillars: [
    { name: "Adoración", desc: "Conduce a la congregación a la presencia de Dios a través de la música y la alabanza." },
    { name: "Enseñanza", desc: "Formación bíblica y discipulado para el crecimiento espiritual de los creyentes." },
    { name: "Conservación", desc: "Acompaña e integra a los nuevos creyentes para que echen raíces en la fe." },
    { name: "Evangelismo", desc: "Comparte el evangelio de Cristo dentro y fuera de la comunidad." },
    { name: "Eventos Ceremoniales", desc: "Coordina bautismos, dedicaciones y celebraciones especiales de la iglesia." },
    { name: "Mayordomía", desc: "Administra con integridad los recursos y bienes de la casa de Dios." },
    { name: "Intercesión", desc: "Sostiene la vida de la iglesia mediante la oración y la intercesión." },
    { name: "Recreación", desc: "Promueve la sana convivencia, el compañerismo y la integración familiar." },
    { name: "Arte", desc: "Expresa el mensaje de Dios a través de las artes creativas y escénicas." },
    { name: "Multimedia", desc: "Lleva el mensaje más allá del templo con producción audiovisual y digital." },
  ],

  // ── Sermones / Transmisiones (checklist 7.1) ──────────────────────────────
  sermons: {
    channelUrl: "https://www.youtube.com/@iglesiavisionariahebreos1130",
    channelHandle: "@iglesiavisionariahebreos1130",
    // TODO: reemplazar con los IDs reales de videos destacados (parte final de la URL de YouTube).
    featured: [
      { id: "", title: "Prédica destacada 1" },
      { id: "", title: "Prédica destacada 2" },
      { id: "", title: "Prédica destacada 3" },
    ],
  },

  // ── Galería (checklist 7.4) — imágenes PLACEHOLDER hasta recibir las reales ─
  gallery: {
    categories: ["Todos", "Cultos", "Eventos", "Comunidad"] as const,
    photos: [
      { src: "/images/gallery/foto-1.jpg", alt: "Culto", category: "Cultos" },
      { src: "/images/gallery/foto-2.jpg", alt: "Alabanza", category: "Cultos" },
      { src: "/images/gallery/foto-3.jpg", alt: "Bautismos", category: "Eventos" },
      { src: "/images/gallery/foto-4.jpg", alt: "Jóvenes", category: "Comunidad" },
      { src: "/images/gallery/foto-5.jpg", alt: "Servicio", category: "Cultos" },
      { src: "/images/gallery/foto-6.jpg", alt: "Comunidad", category: "Comunidad" },
      { src: "/images/gallery/foto-7.jpg", alt: "Evento", category: "Eventos" },
      { src: "/images/gallery/foto-8.jpg", alt: "Familia", category: "Comunidad" },
    ],
  },

  // ── Donaciones / Diezmos (checklist 7.3) ──────────────────────────────────
  // La integración de pagos en línea queda para una fase posterior.
  giving: {
    verse:
      "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre.",
    verseRef: "2 Corintios 9:7",
    intro:
      "Tu diezmo y ofrenda sostienen la obra de Dios: el evangelismo, la formación de líderes y el servicio a nuestra comunidad. Gracias por sembrar en el Reino.",
    onlineEnabled: false, // TODO: activar cuando se integre la plataforma de pago
    // TODO: completar con los datos bancarios reales de la iglesia
    bank: {
      bankName: "—",
      accountName: "Iglesia Visionaria Hebreos 11",
      accountNumber: "—",
      accountType: "Cuenta Corriente",
      currency: "DOP (RD$)",
    },
  },

  // ── Navegación ────────────────────────────────────────────────────────────
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Quiénes Somos", href: "/quienes-somos" },
    { label: "Ministerios", href: "/ministerios" },
    { label: "Sermones", href: "/sermones" },
    { label: "Galería", href: "/galeria" },
    { label: "Contacto", href: "/contacto" },
  ],
  // Acciones destacadas (botones del header)
  actions: {
    register: { label: "Regístrate", href: "/registro" },
    donate: { label: "Dona", href: "/donaciones" },
  },
} as const;

export type Site = typeof site;
