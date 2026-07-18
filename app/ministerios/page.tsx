import type { Metadata } from "next";
import {
  Music, BookOpen, Sprout, Megaphone, PartyPopper, Wallet,
  HandHeart, Volleyball, Palette, MonitorPlay,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Ministerios",
  description:
    "Conoce los pilares de la Iglesia Hebreos 11: Adoración, Enseñanza, Conservación, Evangelismo, Intercesión, Multimedia y más.",
};

// Un ícono por cada pilar (en el mismo orden que site.pillars)
const icons = [
  Music, BookOpen, Sprout, Megaphone, PartyPopper, Wallet,
  HandHeart, Volleyball, Palette, MonitorPlay,
];

export default function MinisteriosPage() {
  return (
    <>
      <PageHero
        eyebrow="Sirviendo juntos"
        title="Nuestros Pilares"
        subtitle="Cada pilar sostiene la visión de la iglesia. Hay un lugar para ti donde crecer, servir y desarrollar tus dones."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {site.pillars.map((pillar, i) => {
              const Icon = icons[i] ?? Music;
              return (
                <Reveal key={pillar.name} delay={(i % 4) * 0.08}>
                  <div className="group h-full rounded-2xl border border-cloud bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-navy/10">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl gradient-brand p-3 text-gold transition-transform duration-300 group-hover:scale-105">
                      <Icon size={24} />
                    </div>
                    <h2 className="mt-5 text-lg font-bold text-navy">
                      Pilar de {pillar.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-steel">{pillar.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <p className="mt-14 text-center text-sm text-steel">
              ¿Quieres integrarte a un pilar?{" "}
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
