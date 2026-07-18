import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Nuestra Historia",
  description:
    "Más de 50 años de fe: desde 1972 en Las Palmas de Herrera hasta el concilio Iglesias Visionarias Hebreos 11.",
};

const timeline = [
  {
    year: "1972",
    text: "La Iglesia Hebreos 11 nace cuando los misioneros Rafael Guillén y Miledys Mateo llegan al sector Las Palmas de Herrera para compartir el evangelio y servir a la comunidad. Los primeros cultos se realizan en hogares de la zona.",
  },
  {
    year: "1974",
    text: "Al continuar su labor misionera en el Cibao, los esposos Guillén entregan el liderazgo a los pastores Julio César Peña y Lucila de Peña, quienes durante décadas impulsan el crecimiento espiritual y social de la congregación.",
  },
  {
    year: "2000s",
    text: "Debido al crecimiento de la iglesia, se construye un nuevo templo con el apoyo de líderes y miembros, ampliando significativamente su capacidad e impacto.",
  },
  {
    year: "Nueva etapa",
    text: "La iglesia se convierte en una obra independiente, dando origen al concilio Iglesias Visionarias Hebreos 11, con iglesias afiliadas en República Dominicana, Estados Unidos y Turcos y Caicos.",
  },
  {
    year: "2010 — hoy",
    text: "Bajo el pastorado del Dr. Leonardo Piña y la Lic. Eunice Peña, la iglesia fortalece su visión de formar personas sanas espiritualmente, desarrollar líderes y servir integralmente a la comunidad.",
  },
];

export default function HistoriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Desde 1972"
        title="Nuestra Historia"
        subtitle="Más de medio siglo compartiendo el evangelio y transformando vidas en Las Palmas de Herrera."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal>
            <p className="text-lg leading-relaxed text-steel">
              El nombre <strong className="text-navy">Hebreos 11</strong> se adoptó oficialmente al
              formar parte del Concilio Evangélico de las Iglesias Misioneras Asambleas Cristianas
              (IMAC). Desde entonces, la obra ha crecido sin perder su esencia: el evangelismo, la
              formación de líderes y el servicio a la comunidad.
            </p>
          </Reveal>

          <ol className="mt-14 space-y-10 border-l-2 border-cloud pl-8">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.05}>
                <li className="relative">
                  <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-gold ring-4 ring-white" />
                  <p className="text-sm font-bold uppercase tracking-widest text-royal">
                    {item.year}
                  </p>
                  <p className="mt-2 leading-relaxed text-steel">{item.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <div className="mt-16 rounded-3xl gradient-brand p-10 text-center">
              <p className="font-script text-4xl text-gold">{site.motto[0]}</p>
              <p className="mt-2 font-script text-3xl text-white/90">{site.motto[1]}</p>
              <p className="mt-4 text-sm uppercase tracking-widest text-white/60">
                Nuestro lema, ayer y hoy
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
