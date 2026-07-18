"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

export function VideoWelcome() {
  const [playing, setPlaying] = useState(false);
  const { video } = site;

  if (!video.enabled) return null;

  // Privacidad: youtube-nocookie no instala cookies hasta reproducir.
  const embedSrc =
    video.provider === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`
      : `https://player.vimeo.com/video/${video.id}?autoplay=1`;

  const thumb =
    video.provider === "youtube"
      ? `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`
      : undefined;

  return (
    <section id="video" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="font-script text-3xl text-royal">Un mensaje para ti</p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
            {video.title}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 overflow-hidden rounded-3xl shadow-2xl shadow-navy/20 ring-1 ring-navy/10">
            <div className="relative aspect-video w-full bg-navy">
              {playing ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={embedSrc}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 flex items-center justify-center"
                  aria-label={`Reproducir: ${video.title}`}
                  style={
                    thumb
                      ? {
                          backgroundImage: `url(${thumb})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                >
                  <span className="absolute inset-0 bg-navy/40 transition-colors group-hover:bg-navy/25" />
                  <PlayCircle
                    size={80}
                    className="relative text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:text-gold"
                    strokeWidth={1.5}
                  />
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
