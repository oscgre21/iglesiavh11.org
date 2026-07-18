import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Visítanos o escríbenos. ${site.fullName} en ${site.contact.address.city}, ${site.contact.address.country}.`,
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Estamos para ti"
        title="Contáctanos"
        subtitle="Nos encantaría conocerte. Escríbenos, llámanos o visítanos en cualquiera de nuestros servicios."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          {/* Datos de contacto */}
          <Reveal>
            <div className="space-y-6">
              <ContactRow Icon={MapPin} title="Dirección">
                {site.contact.address.line}
                <br />
                {site.contact.address.city}, {site.contact.address.country}
              </ContactRow>
              <ContactRow Icon={Phone} title="Teléfono">
                <a
                  href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-royal"
                >
                  {site.contact.phone}
                </a>
              </ContactRow>
              <ContactRow Icon={Mail} title="Correo">
                <a href={`mailto:${site.contact.email}`} className="hover:text-royal">
                  {site.contact.email}
                </a>
              </ContactRow>
              <ContactRow Icon={Clock} title="Horarios">
                {site.services.map((s, i) => (
                  <span key={i} className="block">
                    {s.day} · {s.time} — {s.type}
                  </span>
                ))}
              </ContactRow>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button href={`https://wa.me/${site.contact.whatsapp}`} variant="navy">
                  <MessageCircle size={18} />
                  WhatsApp
                </Button>
                <Button href={site.contact.mapsUrl} variant="outline">
                  <MapPin size={18} />
                  Cómo llegar
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Mapa */}
          <Reveal delay={0.15}>
            <div className="h-full min-h-80 overflow-hidden rounded-3xl border border-cloud shadow-sm">
              {/* PLACEHOLDER: reemplaza el src con el iframe real de Google Maps de la iglesia. */}
              <iframe
                title="Ubicación de la iglesia"
                src="https://www.google.com/maps?q=Las+Palmas+de+Herrera+Santo+Domingo&output=embed"
                className="h-full min-h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  Icon,
  title,
  children,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-brand text-gold">
        <Icon size={22} />
      </div>
      <div>
        <h2 className="text-lg font-bold text-navy">{title}</h2>
        <p className="mt-1 leading-relaxed text-steel">{children}</p>
      </div>
    </div>
  );
}
