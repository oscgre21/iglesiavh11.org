import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** "white" para fondos oscuros, "navy" para fondos claros. */
  tone?: "white" | "navy";
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ tone = "white", className, showWordmark = true }: LogoProps) {
  const src = tone === "white" ? "/logo/emblem-white.png" : "/logo/emblem-navy.png";
  const textColor = tone === "white" ? "text-white" : "text-navy";

  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)} aria-label={`${site.fullName} — Inicio`}>
      <span className="block h-11 w-11 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src={src}
          alt={site.fullName}
          width={44}
          height={44}
          priority
          className="h-full w-full object-contain"
        />
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className={cn("text-[0.7rem] font-medium uppercase tracking-[0.25em]", tone === "white" ? "text-gold" : "text-gold")}>
            Iglesia
          </span>
          <span className={cn("text-lg font-extrabold uppercase tracking-tight", textColor)}>
            Hebreos 11
          </span>
        </span>
      )}
    </Link>
  );
}
