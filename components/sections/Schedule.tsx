import { CalendarDays, Clock } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

export function Schedule() {
  return (
    <section id="horarios" className="gradient-brand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="font-script text-3xl text-gold">Te esperamos</p>
          <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Horarios de Cultos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Reúnete con nosotros para adorar, crecer y compartir en comunidad.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {site.services.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  <CalendarDays size={24} />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-gold">
                  {s.day}
                </p>
                <p className="mt-1 text-xl font-bold text-white">{s.type}</p>
                <p className="mt-3 flex items-center gap-2 text-white/70">
                  <Clock size={16} className="text-sky" />
                  {s.time}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
