import type { Metadata } from "next";
import { HeartHandshake, Users, GraduationCap, Music, Baby, Globe } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Ministerios",
  description:
    "Conoce los ministerios de Iglesia Hebreos 11: alabanza, jóvenes, niños, formación de líderes, servicio social y misiones.",
};

// TODO: reemplazar con los ministerios reales de la iglesia y su descripción.
const ministries = [
  { Icon: Music, name: "Alabanza y Adoración", desc: "Conduce a la congregación a la presencia de Dios a través de la música." },
  { Icon: Users, name: "Jóvenes", desc: "Espacio para que la nueva generación crezca en fe, propósito y comunidad." },
  { Icon: Baby, name: "Niños", desc: "Formación bíblica con amor para los más pequeños de la casa." },
  { Icon: GraduationCap, name: "Formación de Líderes", desc: "Instituto y discipulado para desarrollar líderes íntegros." },
  { Icon: HeartHandshake, name: "Servicio Social", desc: "Servimos integralmente a la comunidad de Las Palmas y más allá." },
  { Icon: Globe, name: "Misiones", desc: "Extendemos la obra con iglesias afiliadas en varios países." },
];

export default function MinisteriosPage() {
  return (
    <>
      <PageHero
        eyebrow="Sirviendo juntos"
        title="Ministerios"
        subtitle="Hay un lugar para ti. Descubre cómo puedes crecer, servir y conectar con nuestra comunidad de fe."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map(({ Icon, name, desc }, i) => (
              <Reveal key={name} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-cloud bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-navy/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-gold transition-transform duration-300 group-hover:scale-105">
                    <Icon size={26} />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-navy">{name}</h2>
                  <p className="mt-2 leading-relaxed text-steel">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-14 text-center text-sm text-steel">
              ¿Quieres integrarte a un ministerio?{" "}
              <a href="/contacto" className="font-semibold text-royal hover:text-gold">
                Contáctanos →
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
