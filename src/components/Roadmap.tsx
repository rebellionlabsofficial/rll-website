import { PADLR, STUDIO_ROADMAP_ITEM } from "@/lib/constants";

const LIVE_ITEM = {
  when: "Live now",
  title: "PADLR. on iOS",
  description:
    "Free on the App Store across 28 countries — ratings, match logging, booking, messaging, the social feed, leaderboards, and badges.",
};

const ITEMS = [LIVE_ITEM, ...PADLR.roadmap, STUDIO_ROADMAP_ITEM];

// Vertical timeline: [when | dot | content] from sm up, [dot | when+content] below.
export default function Roadmap() {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="absolute bottom-4 left-[7.5px] top-4 w-px bg-line-strong sm:left-[calc(12rem+7.5px)]"
      />
      <ol className="relative">
        {ITEMS.map((item, index) => {
          const live = index === 0;
          return (
            <li
              key={item.title}
              className="reveal relative grid grid-cols-[16px_1fr] gap-x-5 pb-10 last:pb-0 sm:grid-cols-[10rem_16px_1fr] sm:gap-x-8"
            >
              <p
                className={`eyebrow col-start-2 row-start-1 sm:col-start-1 sm:pt-1.5 sm:text-right ${
                  live ? "text-lion" : "text-ink-muted"
                }`}
              >
                {item.when}
              </p>
              <span
                aria-hidden="true"
                className="relative col-start-1 row-start-1 mt-1 flex h-4 w-4 items-center justify-center sm:col-start-2 sm:mt-1.5"
              >
                {live && (
                  <span className="absolute inset-0 rounded-full bg-lion/30 motion-safe:animate-ping" />
                )}
                <span
                  className={`relative h-3 w-3 rounded-full ${
                    live
                      ? "bg-lion ring-4 ring-lion/15"
                      : "border-2 border-line-strong bg-canvas"
                  }`}
                />
              </span>
              <div className="col-start-2 mt-2 sm:col-start-3 sm:row-start-1 sm:mt-0">
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
