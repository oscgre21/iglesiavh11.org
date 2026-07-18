import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-gold text-navy hover:bg-gold-soft shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-0.5",
        secondary:
          "border-2 border-white/80 text-white hover:bg-white hover:text-navy",
        navy: "bg-navy text-white hover:bg-royal",
        outline:
          "border-2 border-navy/20 text-navy hover:border-gold hover:text-royal",
        ghost: "text-navy hover:text-royal",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base py-3.5",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = VariantProps<typeof button> & {
  href?: string;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  href,
  variant,
  size,
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(button({ variant, size }), className);

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
