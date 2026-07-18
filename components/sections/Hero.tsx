"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ChevronDown, MapPin, PlayCircle } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden gradient-brand"
    >
      {/* Capa de imagen de banner: descomenta y coloca /images/hero.jpg (mín. 1920×600).
          Mientras no exista, el degradado de marca luce por sí solo. */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
        aria-hidden
      /> */}
      {/* Textura sutil de puntos (sin archivos externos) */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />
      {/* Overlay degradado para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent" aria-hidden />

      {/* Emblema gigante como marca de agua */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 md:block"
        aria-hidden
      >
        <Image src="/logo/emblem-white.png" alt="" width={640} height={640} priority className="h-auto w-auto" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-28 lg:px-8">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-script text-3xl text-gold sm:text-4xl"
          >
            {site.hero.welcomeLine}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {site.hero.verse}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 text-lg font-semibold uppercase tracking-[0.2em] text-sky"
          >
            {site.hero.verseRef}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href={site.hero.primaryCta.href} size="lg">
              <MapPin size={20} />
              {site.hero.primaryCta.label}
            </Button>
            <Button href={site.hero.secondaryCta.href} variant="secondary" size="lg">
              <PlayCircle size={20} />
              {site.hero.secondaryCta.label}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60"
        aria-hidden
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
