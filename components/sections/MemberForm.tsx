"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

const genders = ["Femenino", "Masculino"];
const maritalStatuses = ["Soltero(a)", "Casado(a)", "Unión libre", "Viudo(a)", "Divorciado(a)"];
const howFoundOptions = [
  "Un amigo o familiar",
  "Redes sociales",
  "Pasé por la iglesia",
  "Una actividad o evento",
  "Otro",
];

const labelCls = "mb-1.5 block text-sm font-semibold text-navy";
const fieldCls =
  "w-full rounded-xl border border-cloud bg-white px-4 py-2.5 text-sm text-navy outline-none transition-colors placeholder:text-steel/60 focus:border-royal focus:ring-2 focus:ring-royal/20";

export function MemberForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Error al registrar.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Error al registrar.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-cloud bg-white p-10 text-center shadow-sm">
        <CheckCircle2 size={56} className="text-green-600" />
        <h2 className="mt-4 text-2xl font-extrabold text-navy">¡Registro recibido!</h2>
        <p className="mt-2 max-w-md text-steel">
          Gracias por registrarte en {site.name}. Pronto nos pondremos en contacto contigo. ¡Bienvenido a la familia!
        </p>
        <div className="mt-6">
          <Button onClick={() => setStatus("idle")} variant="outline">
            Registrar a otra persona
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-cloud bg-white p-6 shadow-sm sm:p-8"
    >
      {/* Honeypot anti-spam (oculto para humanos) */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0"
        aria-hidden
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="fullName" className={labelCls}>
            Nombre completo <span className="text-gold">*</span>
          </label>
          <input id="fullName" name="fullName" required className={fieldCls} placeholder="Ej. Juan Pérez" />
        </div>

        <div>
          <label htmlFor="birthDate" className={labelCls}>Fecha de nacimiento</label>
          <input id="birthDate" name="birthDate" type="date" className={fieldCls} />
        </div>

        <div>
          <label htmlFor="gender" className={labelCls}>Género</label>
          <select id="gender" name="gender" className={fieldCls} defaultValue="">
            <option value="" disabled>Selecciona…</option>
            {genders.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="maritalStatus" className={labelCls}>Estado civil</label>
          <select id="maritalStatus" name="maritalStatus" className={fieldCls} defaultValue="">
            <option value="" disabled>Selecciona…</option>
            {maritalStatuses.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="children" className={labelCls}>¿Cuántos hijos tienes?</label>
          <input id="children" name="children" type="number" min={0} max={30} defaultValue={0} className={fieldCls} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="address" className={labelCls}>Dirección</label>
          <input id="address" name="address" className={fieldCls} placeholder="Calle, sector, ciudad" />
        </div>

        <div>
          <label htmlFor="phone" className={labelCls}>Teléfono / WhatsApp</label>
          <input id="phone" name="phone" type="tel" className={fieldCls} placeholder="809-000-0000" />
        </div>

        <div>
          <label htmlFor="email" className={labelCls}>Correo electrónico</label>
          <input id="email" name="email" type="email" className={fieldCls} placeholder="correo@ejemplo.com" />
        </div>

        <div>
          <label htmlFor="baptized" className={labelCls}>¿Eres bautizado(a)?</label>
          <select id="baptized" name="baptized" className={fieldCls} defaultValue="">
            <option value="" disabled>Selecciona…</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        <div>
          <label htmlFor="ministry" className={labelCls}>Ministerio / pilar de interés</label>
          <select id="ministry" name="ministry" className={fieldCls} defaultValue="">
            <option value="" disabled>Selecciona…</option>
            {site.pillars.map((p) => <option key={p.name} value={p.name}>{p.name}</option>)}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="howFound" className={labelCls}>¿Cómo te enteraste de la iglesia?</label>
          <select id="howFound" name="howFound" className={fieldCls} defaultValue="">
            <option value="" disabled>Selecciona…</option>
            {howFoundOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      {status === "error" && (
        <p className="mt-5 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={18} className="shrink-0" />
          {error}
        </p>
      )}

      <div className="mt-7 flex items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Enviando…
            </>
          ) : (
            "Enviar registro"
          )}
        </Button>
        <p className="text-xs text-steel">
          <span className="text-gold">*</span> Campo obligatorio
        </p>
      </div>
    </form>
  );
}
