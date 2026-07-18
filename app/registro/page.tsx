import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/reveal";
import { MemberForm } from "@/components/sections/MemberForm";

export const metadata: Metadata = {
  title: "Regístrate",
  description:
    "Únete a la familia de la Iglesia Visionaria Hebreos 11. Completa el formulario de registro de miembros.",
};

export default function RegistroPage() {
  return (
    <>
      <PageHero
        eyebrow="Da el primer paso"
        title="Regístrate"
        subtitle="Queremos conocerte. Completa tus datos y forma parte de nuestra familia de fe."
      />

      <section className="bg-cloud py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal>
            <MemberForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
