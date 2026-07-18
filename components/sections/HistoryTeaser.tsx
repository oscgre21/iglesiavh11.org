import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function HistoryTeaser() {
  return (
    <section className="bg-cloud py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative flex items-center justify-center rounded-3xl gradient-brand p-14">
            <Image src="/logo/emblem-gold.png" alt={site.fullName} width={220} height={220} className="h-auto w-auto max-w-[220px]" />
            <div className="absolute inset-x-8 bottom-8 text-center">
              <p className="font-script text-3xl text-gold">{site.motto[0]}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <p className="font-script text-3xl text-royal">Nuestra Historia</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              Más de medio siglo transformando vidas
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-steel">
              La Iglesia Hebreos 11 nació en 1972 cuando los misioneros Rafael Guillén y Miledys
              Mateo llegaron al sector Las Palmas de Herrera con el propósito de compartir el
              evangelio y servir a la comunidad. Hoy, bajo el pastorado del Dr. Leonardo Piña y la
              Lic. Eunice Peña, somos un concilio con iglesias afiliadas en República Dominicana,
              Estados Unidos y Turcos y Caicos.
            </p>
            <div className="mt-8">
              <Button href="/historia" variant="navy">
                Conoce nuestra historia
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
