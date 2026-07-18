import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Compass, ArrowRight, Heart } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description:
    "Conoce la misión, visión, valores y el liderazgo pastoral de la Iglesia Visionaria Hebreos 11.",
};

const pillars = [
  { Icon: Target, title: "Misión", text: site.about.mission, accent: "from-royal to-navy" },
  { Icon: Eye, title: "Visión", text: site.about.vision, accent: "from-royal to-sky" },
  { Icon: Compass, title: "Objetivo", text: site.about.objective, accent: "from-navy to-gold" },
];

export default function QuienesSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestra esencia"
        title="Quiénes Somos"
        subtitle="Una iglesia comprometida con la transformación de vidas, la formación cristiana y el servicio a la comunidad."
      />

      {/* Misión · Visión · Objetivo */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-3xl border border-cloud bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-gold">
                    <Icon size={26} />
                  </div>
                  <h2 className="mt-5 text-2xl font-extrabold text-navy">{title}</h2>
                  <p className="mt-3 leading-relaxed text-steel">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valores institucionales */}
      <section className="gradient-brand py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <Reveal>
            <p className="font-script text-3xl text-gold">Lo que nos define</p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Valores Institucionales
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {site.about.values.map((v, i) => (
              <Reveal key={v} delay={i * 0.03}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-gold/50 hover:text-gold">
                  <Heart size={14} className="text-gold" />
                  {v}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pastores y liderazgo */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal className="text-center">
            <p className="font-script text-3xl text-royal">Nuestro liderazgo</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              Pastores
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {site.about.pastors.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div className="flex h-full flex-col items-center rounded-3xl border border-cloud bg-white p-8 text-center shadow-sm sm:flex-row sm:items-start sm:text-left">
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl gradient-brand sm:mr-6">
                    {p.photo ? (
                      <Image src={p.photo} alt={p.name} width={112} height={112} className="h-full w-full object-cover" />
                    ) : (
                      <Image src="/logo/emblem-gold.png" alt="" width={64} height={64} className="h-16 w-auto" />
                    )}
                  </div>
                  <div className="mt-5 sm:mt-0">
                    <h3 className="text-xl font-bold text-navy">{p.name}</h3>
                    <p className="mt-0.5 text-sm font-semibold uppercase tracking-widest text-gold">
                      {p.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-steel">{p.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Enlace a la historia */}
          <Reveal>
            <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-cloud p-10 text-center sm:flex-row sm:text-left">
              <div>
                <h3 className="text-2xl font-extrabold text-navy">Más de 50 años de fe</h3>
                <p className="mt-2 text-steel">
                  Conoce el recorrido de la Iglesia Hebreos 11 desde 1972 hasta hoy.
                </p>
              </div>
              <Button href="/historia" variant="navy" size="lg" className="shrink-0">
                Ver nuestra historia
                <ArrowRight size={18} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
