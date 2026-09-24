import type { ReactNode } from "react";
import Eyebrow from "@/components/Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {eyebrow && <Eyebrow tone={dark ? "neon" : "lion"}>{eyebrow}</Eyebrow>}
      <h2
        className={`heading mt-5 text-[2.25rem] sm:text-5xl ${dark ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/65" : "text-ink-soft"}`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
