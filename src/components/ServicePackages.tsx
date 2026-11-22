import { SERVICES } from "@/lib/constants";
import { fromPrice } from "@/lib/format";

interface ServicePackagesProps {
  id: (typeof SERVICES)[number]["id"];
}

// The packages and starting prices for one service, as shown on /services and
// on that service's own page.
export default function ServicePackages({ id }: ServicePackagesProps) {
  const service = SERVICES.find((s) => s.id === id);
  if (!service) return null;
  return (
    <>
      <ul className="space-y-3">
        {service.packages.map((pkg) => (
          <li
            key={pkg.name}
            className="rounded-2xl border border-line bg-canvas p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-semibold tracking-tight text-ink">
                {pkg.name}
              </h3>
              <p className="font-semibold text-lion">
                {fromPrice(pkg.price)}
                {"unit" in pkg && (
                  <span className="font-normal text-ink-muted">
                    {" "}
                    {pkg.unit}
                  </span>
                )}
              </p>
            </div>
            <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
              {pkg.description}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm leading-relaxed text-ink-muted">
        {service.extra}
      </p>
    </>
  );
}
