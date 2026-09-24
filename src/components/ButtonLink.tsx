import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "@/components/Icon";

type Variant = "primary" | "secondary" | "neon" | "ghost-dark" | "light";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink/85",
  secondary:
    "border border-line-strong bg-white/60 text-ink hover:border-ink/30 hover:bg-white",
  neon: "bg-padlr-neon text-padlr-ink hover:bg-padlr-neon-soft hover:shadow-[0_0_32px_rgba(200,255,0,0.35)]",
  "ghost-dark":
    "border border-white/20 text-white hover:border-white/50 hover:bg-white/5",
  light: "bg-white text-ink hover:bg-canvas",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  /** Opens in a new tab and shows an outbound arrow. */
  external?: boolean;
  /** Override the trailing icon; pass null for none. */
  icon?: "arrow-right" | "arrow-up-right" | "mail" | null;
  className?: string;
}

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  icon,
  className = "",
}: ButtonLinkProps) {
  const trailing =
    icon === undefined ? (external ? "arrow-up-right" : "arrow-right") : icon;
  const classes = `group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 ${
    size === "lg" ? "h-12 px-6 text-[15px]" : "h-11 px-5 text-sm"
  } ${VARIANTS[variant]} ${className}`;

  const content = (
    <>
      {children}
      {trailing && (
        <Icon
          name={trailing}
          className={`h-4 w-4 transition-transform duration-300 ${
            trailing === "arrow-up-right"
              ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              : trailing === "arrow-right"
                ? "group-hover:translate-x-1"
                : ""
          }`}
        />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  if (!href.startsWith("/")) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
