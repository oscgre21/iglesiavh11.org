import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/reveal";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Momentos de fe, adoración y comunidad en la Iglesia Visionaria Hebreos 11.",
};

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Momentos que inspiran"
        title="Galería"
        subtitle="Un vistazo a la vida de nuestra iglesia: cultos, eventos y comunidad."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            {/* Nota: imágenes de ejemplo. Reemplázalas en /public/images/gallery/ */}
            <GalleryGrid />
          </Reveal>
        </div>
      </section>
    </>
  );
}
