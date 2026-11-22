import Icon from "@/components/Icon";
import { STRENGTHS } from "@/lib/constants";

export default function Strengths() {
  return (
    <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
      {STRENGTHS.map((item, index) => (
        <li
          key={item.title}
          className={`reveal ${index % 2 ? "reveal-1" : ""} flex gap-5`}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink text-white">
            <Icon name={item.icon} />
          </span>
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-2 leading-relaxed text-ink-soft">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
