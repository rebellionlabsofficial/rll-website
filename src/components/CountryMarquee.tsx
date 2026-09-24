interface CountryMarqueeProps {
  countries: readonly string[];
}

// Two identical lists scroll as one track; the second copy is hidden from
// assistive tech so the countries are only announced once.
export default function CountryMarquee({ countries }: CountryMarqueeProps) {
  return (
    <div className="marquee mask-fade-x min-w-0 flex-1 overflow-clip">
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-label={
              copy === 0 ? "Countries where PADLR. is available" : undefined
            }
            aria-hidden={copy === 1 ? true : undefined}
            className="flex shrink-0 items-center"
          >
            {countries.map((country) => (
              <li
                key={country}
                className="flex items-center gap-7 pr-7 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted"
              >
                {country}
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-lion/70"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
