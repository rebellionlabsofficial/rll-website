import Link from "next/link";
import Icon from "@/components/Icon";
import { SERVICES } from "@/lib/constants";
import { fromPrice } from "@/lib/format";

const STAGGER = ["", "reveal-1", "reveal-2"];

export default function ServiceCards() {
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {SERVICES.map((service, index) => (
        <li key={service.id} className={`reveal ${STAGGER[index]}`}>
          <Link
            href={`/services#${service.id}`}
            className="group flex h-full flex-col rounded-3xl border border-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lion-tint text-lion">
              <Icon name={service.icon} />
            </span>
            <h3 className="mt-8 text-xl font-semibold tracking-tight">
              {service.title}
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-ink-soft">
              {service.summary}
            </p>
            <p className="mt-8 flex items-center justify-between border-t border-line pt-5">
              <span className="font-semibold text-ink">
                {fromPrice(service.price)}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-lion">
                Details
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
