import { MapPin, Clock, Share2, Phone } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

const cards = [
  {
    Icon: MapPin,
    title: "Ubicación",
    lines: [
      site.contact.address.line,
      `${site.contact.address.city}, ${site.contact.address.country}`,
    ],
    action: { label: "Ver en el mapa", href: site.contact.mapsUrl, external: true },
  },
  {
    Icon: Clock,
    title: "Horario",
    lines: site.services.slice(0, 2).map((s) => `${s.day} · ${s.time}`),
    action: { label: "Ver todos", href: "#horarios", external: false },
  },
  {
    Icon: Share2,
    title: "Redes sociales",
    lines: ["Síguenos y mantente conectado", "con toda la comunidad"],
    action: { label: "Facebook", href: site.social.facebook, external: true },
  },
  {
    Icon: Phone,
    title: "Teléfono",
    lines: [site.contact.phone, "Escríbenos por WhatsApp"],
    action: {
      label: "WhatsApp",
      href: `https://wa.me/${site.contact.whatsapp}`,
      external: true,
    },
  },
];

export function InfoIcons() {
  return (
    <section id="ubicacion" className="bg-white pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ Icon, title, lines, action }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-cloud bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-navy/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-gold">
                  <Icon size={26} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
                <div className="mt-2 flex-1 space-y-0.5 text-sm text-steel">
                  {lines.map((l, j) => (
                    <p key={j}>{l}</p>
                  ))}
                </div>
                {action.href && (
                  <a
                    href={action.href}
                    {...(action.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mt-4 text-sm font-semibold text-royal transition-colors hover:text-gold"
                  >
                    {action.label} →
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
