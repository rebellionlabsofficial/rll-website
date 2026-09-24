import Image from "next/image";
import type { ReactNode } from "react";

interface CtaBandProps {
  title: ReactNode;
  lead: ReactNode;
  /** Action buttons. */
  children: ReactNode;
}

export default function CtaBand({ title, lead, children }: CtaBandProps) {
  return (
    <section
      data-surface="brand"
      className="panel-inset relative isolate overflow-clip bg-lion text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.16),transparent_55%)]"
      />
      <Image
        src="/brand/rll-shield-white.png"
        alt=""
        width={357}
        height={384}
        className="pointer-events-none absolute -bottom-24 -right-20 -z-10 w-[22rem] opacity-[0.08] sm:w-[28rem] lg:-bottom-20 lg:right-10 lg:w-[30rem]"
      />
      <div className="container-page py-20 sm:py-24 lg:py-28">
        <div className="reveal max-w-2xl">
          <h2 className="heading text-[2.5rem] text-white sm:text-6xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80">{lead}</p>
          <div className="mt-10 flex flex-wrap gap-3">{children}</div>
        </div>
      </div>
    </section>
  );
}
