import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

export function Welcome() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="gradient-royal-sky aspect-[4/5] w-full max-w-md rounded-3xl" />
            {/* PLACEHOLDER: sustituye el bloque anterior por una foto real:
                <Image src="/images/bienvenida.jpg" ... className="rounded-3xl object-cover" /> */}
            <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl bg-navy px-6 py-4 shadow-xl sm:-right-6">
              <Image src="/logo/emblem-gold.png" alt="" width={44} height={44} className="h-auto w-auto" />
              <div className="leading-tight">
                <p className="text-2xl font-extrabold text-gold">+50</p>
                <p className="text-xs uppercase tracking-widest text-white/70">Años de fe</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <p className="font-script text-3xl text-royal">{site.welcome.title}</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              Bienvenido a <span className="text-gradient-gold">{site.name}</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-steel">{site.welcome.body}</p>
            <p className="mt-6 border-l-4 border-gold pl-4 text-sm font-semibold uppercase tracking-wider text-navy">
              {site.welcome.pastors}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
