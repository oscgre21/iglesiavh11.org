import type { Metadata } from "next";
import { Landmark, CreditCard, HandCoins, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Donaciones y Diezmos",
  description:
    "Sé parte de la obra de la Iglesia Visionaria Hebreos 11 a través de tus diezmos y ofrendas.",
};

export default function DonacionesPage() {
  const { giving, contact } = site;

  return (
    <>
      <PageHero
        eyebrow="Sembrar en el Reino"
        title="Donaciones y Diezmos"
        subtitle={giving.intro}
      />

      {/* Versículo */}
      <section className="bg-white pt-16 lg:pt-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <Reveal>
            <p className="text-2xl font-light italic leading-relaxed text-navy sm:text-3xl">
              “{giving.verse}”
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {giving.verseRef}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Métodos */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Transferencia bancaria */}
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-cloud bg-white p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-gold">
                  <Landmark size={26} />
                </div>
                <h2 className="mt-5 text-xl font-bold text-navy">Transferencia bancaria</h2>
                <dl className="mt-4 space-y-2 text-sm">
                  <Row label="Banco" value={giving.bank.bankName} />
                  <Row label="Beneficiario" value={giving.bank.accountName} />
                  <Row label="Cuenta" value={giving.bank.accountNumber} />
                  <Row label="Tipo" value={giving.bank.accountType} />
                  <Row label="Moneda" value={giving.bank.currency} />
                </dl>
                <p className="mt-4 text-xs text-steel">
                  * Datos bancarios pendientes de confirmar por la iglesia.
                </p>
              </div>
            </Reveal>

            {/* En línea (próximamente) */}
            <Reveal delay={0.1}>
              <div className="relative flex h-full flex-col rounded-3xl border border-cloud bg-white p-8 shadow-sm">
                <span className="absolute right-5 top-5 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                  Próximamente
                </span>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-gold">
                  <CreditCard size={26} />
                </div>
                <h2 className="mt-5 text-xl font-bold text-navy">Pago en línea</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">
                  Muy pronto podrás dar tu diezmo u ofrenda de forma segura con tarjeta desde este
                  sitio. Estamos habilitando la plataforma de pago.
                </p>
                <div className="mt-5">
                  <Button variant="outline" size="sm" className="pointer-events-none opacity-60">
                    <Clock size={16} />
                    Disponible pronto
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Presencial */}
            <Reveal delay={0.2}>
              <div className="flex h-full flex-col rounded-3xl border border-cloud bg-white p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-gold">
                  <HandCoins size={26} />
                </div>
                <h2 className="mt-5 text-xl font-bold text-navy">En el templo</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">
                  También puedes entregar tu ofrenda de forma presencial durante nuestros servicios.
                  Te esperamos en {contact.address.line}.
                </p>
                <div className="mt-5">
                  <Button href="/#horarios" variant="outline" size="sm">
                    Ver horarios
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-14 rounded-3xl gradient-brand p-10 text-center">
              <p className="font-script text-3xl text-gold">Gracias por tu generosidad</p>
              <p className="mx-auto mt-3 max-w-xl text-white/75">
                ¿Tienes dudas sobre cómo dar? Escríbenos y con gusto te orientamos.
              </p>
              <div className="mt-6 flex justify-center">
                <Button href="/contacto" size="lg">
                  Contáctanos
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-cloud pb-2">
      <dt className="text-steel">{label}</dt>
      <dd className="text-right font-semibold text-navy">{value}</dd>
    </div>
  );
}
