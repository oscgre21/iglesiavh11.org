import Image from "next/image";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

/** Encabezado estándar para páginas internas. */
export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden gradient-brand pb-16 pt-32 lg:pb-20 lg:pt-40">
      <div
        className="pointer-events-none absolute -right-16 -top-10 opacity-[0.07]"
        aria-hidden
      >
        <Image src="/logo/emblem-white.png" alt="" width={340} height={340} className="h-auto w-auto" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
        {eyebrow && <p className="font-script text-3xl text-gold">{eyebrow}</p>}
        <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
