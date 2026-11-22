// Live PADLR. numbers for /work/padlr, so the page never needs editing by hand.
//
// Set PADLR_STATS_URL as a build variable (Cloudflare: Workers & Pages >
// rll-website > Settings > Build > Variables and secrets) to a public JSON
// endpoint that returns, for example:
//   { "players": 1240, "matches": 5310, "downloads": 2100 }
// Any field can be left out. The site is a static export, so the numbers are
// fetched when the site is built and refresh with each deploy. A
// number only shows once it passes its threshold, because "12 matches played"
// does more harm than good. See docs/padlr-stats.md for the Firebase side.

interface StatsPayload {
  players?: number;
  matches?: number;
  downloads?: number;
}

const STATS = [
  { key: "downloads", label: "Downloads", min: 500 },
  { key: "players", label: "Players", min: 250 },
  { key: "matches", label: "Matches played", min: 500 },
] as const;

export interface PadlrStat {
  label: string;
  value: string;
}

// Rounds down so the figure stays true until the next refresh: 1,240 -> "1,200+".
function roundDown(n: number): string {
  const step = n >= 10_000 ? 1000 : n >= 1000 ? 100 : 50;
  return `${(Math.floor(n / step) * step).toLocaleString("en-IE")}+`;
}

export async function getPadlrStats(): Promise<PadlrStat[]> {
  const url = process.env.PADLR_STATS_URL;
  if (!url) return [];
  try {
    const response = await fetch(url, { cache: "force-cache" });
    if (!response.ok) return [];
    const data = (await response.json()) as StatsPayload;
    return STATS.flatMap(({ key, label, min }) => {
      const n = data[key];
      return typeof n === "number" && n >= min
        ? [{ label, value: roundDown(n) }]
        : [];
    });
  } catch {
    // A stats outage should never break the page; it just hides the numbers.
    return [];
  }
}
