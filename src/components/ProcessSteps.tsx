import { PROCESS } from "@/lib/constants";

export default function ProcessSteps() {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {PROCESS.map((step, index) => (
        <li
          key={step.title}
          className={`reveal ${["", "reveal-1", "reveal-2", "reveal-3"][index]} rounded-3xl border border-line bg-white p-7`}
        >
          <span className="font-serif text-4xl italic leading-none text-lion">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-6 text-lg font-semibold tracking-tight">
            {step.title}
          </h3>
          <p className="mt-2 leading-relaxed text-ink-soft">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
