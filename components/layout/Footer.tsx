import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { site } from "@/content/site";
import { Logo } from "./Logo";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/brand-icons";

const socials = [
  { key: "facebook", label: "Facebook", Icon: FacebookIcon, href: site.social.facebook },
  { key: "instagram", label: "Instagram", Icon: InstagramIcon, href: site.social.instagram },
  { key: "youtube", label: "YouTube", Icon: YoutubeIcon, href: site.social.youtube },
].filter((s) => s.href);

export function Footer() {
  const year = 2026; // Actualizar anualmente o generar en build

  return (
    <footer className="gradient-brand text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Marca + visión */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo tone="white" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {site.description}
          </p>
          <p className="mt-4 font-script text-2xl text-gold">{site.motto[0]}</p>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gold">Explora</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/75 transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gold">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
              <span>
                {site.contact.address.line}, {site.contact.address.city},{" "}
                {site.contact.address.country}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={18} className="shrink-0 text-gold" />
              <a href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`} className="hover:text-gold">
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={18} className="shrink-0 text-gold" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-gold">
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Redes + horarios */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gold">Síguenos</h3>
          <div className="mt-4 flex gap-3">
            {socials.map(({ key, label, Icon, href }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-navy"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-gold">Horarios</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-white/75">
            {site.services.map((s, i) => (
              <li key={i}>
                <span className="text-white">{s.day}</span> · {s.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/60 sm:flex-row lg:px-8">
          <p>
            © {year} {site.fullName}. Todos los derechos reservados.
          </p>
          <p className="font-script text-lg text-gold/90">{site.motto[1]}</p>
        </div>
      </div>
    </footer>
  );
}
