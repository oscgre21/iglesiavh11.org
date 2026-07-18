import type { Metadata } from "next";
import { Radio, PlayCircle } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { YoutubeIcon } from "@/components/ui/brand-icons";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Sermones y Transmisiones",
  description:
    "Mira las prédicas y transmisiones en vivo de la Iglesia Visionaria Hebreos 11 en YouTube.",
};

export default function SermonesPage() {
  const { sermons } = site;

  return (
    <>
      <PageHero
        eyebrow="Palabra que transforma"
        title="Sermones y En Vivo"
        subtitle="Revive las prédicas y acompáñanos en nuestras transmisiones en vivo desde cualquier lugar."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Acciones principales */}
          <Reveal className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
            <Button href={sermons.channelUrl} size="lg">
              <Radio size={20} />
              Ver en vivo
            </Button>
            <Button href={sermons.channelUrl} variant="outline" size="lg">
              <YoutubeIcon size={20} />
              Ir al canal de YouTube
            </Button>
          </Reveal>

          {/* Prédicas destacadas */}
          <Reveal className="mt-16 text-center">
            <p className="font-script text-3xl text-royal">Para tu crecimiento</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              Prédicas destacadas
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sermons.featured.map((v, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="overflow-hidden rounded-2xl border border-cloud bg-white shadow-sm">
                  <div className="relative aspect-video w-full bg-navy">
                    {v.id ? (
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0`}
                        title={v.title}
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      // Placeholder mientras no haya ID de video real
                      <a
                        href={sermons.channelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group absolute inset-0 flex flex-col items-center justify-center gap-2 gradient-brand"
                      >
                        <PlayCircle
                          size={56}
                          strokeWidth={1.5}
                          className="text-white/80 transition-transform duration-300 group-hover:scale-110 group-hover:text-gold"
                        />
                        <span className="text-xs uppercase tracking-widest text-white/60">
                          Próximamente
                        </span>
                      </a>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-navy">{v.title}</h3>
                    <p className="mt-1 text-sm text-steel">Iglesia Hebreos 11</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-12 text-center text-sm text-steel">
              Suscríbete en YouTube{" "}
              <a
                href={sermons.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-royal hover:text-gold"
              >
                {sermons.channelHandle} →
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
