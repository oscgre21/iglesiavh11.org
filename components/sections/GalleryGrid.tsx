"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type Photo = (typeof site.gallery.photos)[number];

export function GalleryGrid() {
  const { categories, photos } = site.gallery;
  const [active, setActive] = useState<string>("Todos");
  const [index, setIndex] = useState<number | null>(null);

  const filtered: Photo[] =
    active === "Todos" ? [...photos] : photos.filter((p) => p.category === active);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  const current = index !== null ? filtered[index] : null;

  return (
    <>
      {/* Filtros por categoría */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
              active === c
                ? "bg-navy text-white"
                : "bg-cloud text-steel hover:bg-navy/10 hover:text-navy",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grilla */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-navy focus-visible:outline-none"
            aria-label={`Abrir foto: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority={i < 4}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" />
            <span className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-navy/90 to-transparent p-3 text-left text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-y-0">
              {photo.alt}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/95 p-4 backdrop-blur"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 text-white/80 hover:text-gold"
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 text-white/80 hover:text-gold sm:left-8"
            aria-label="Anterior"
          >
            <ChevronLeft size={44} />
          </button>
          <figure className="relative max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={current.src}
              alt={current.alt}
              width={1200}
              height={900}
              className="mx-auto h-auto max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/70">
              {current.alt} · {current.category}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 text-white/80 hover:text-gold sm:right-8"
            aria-label="Siguiente"
          >
            <ChevronRight size={44} />
          </button>
        </div>
      )}
    </>
  );
}
