import type { ReactNode } from "react";

const TONES = {
  lion: { text: "text-ink-muted", dot: "bg-lion" },
  neon: { text: "text-white/60", dot: "bg-padlr-neon" },
} as const;

interface EyebrowProps {
  children: ReactNode;
  tone?: keyof typeof TONES;
  className?: string;
}

export default function Eyebrow({
  children,
  tone = "lion",
  className = "",
}: EyebrowProps) {
  return (
    <p
      className={`eyebrow inline-flex items-center gap-2.5 ${TONES[tone].text} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${TONES[tone].dot}`}
      />
      {children}
    </p>
  );
}
