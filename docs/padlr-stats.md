# Live PADLR. stats on /work/padlr

The case study page can show live numbers (downloads, players, matches played).
They stay hidden until two things are true:

1. `PADLR_STATS_URL` is set as a build variable in Cloudflare (Workers &
   Pages > rll-website > Settings > Build > Variables and secrets) to a public
   URL that returns JSON like:

   ```json
   { "players": 1240, "matches": 5310, "downloads": 2100 }
   ```

   Every field is optional. Leave out anything you don't want shown.

2. A number passes its threshold in `src/lib/padlr-stats.ts` (500 downloads,
   250 players, 500 matches), so small early numbers never appear.

Numbers are rounded down ("1,200+"). The site is built as static files, so
they're fetched when the site is built and refresh with each deploy. If the
URL fails, the section quietly disappears; the page itself never breaks.

## The PADLR. side

The simplest source is a small HTTPS Cloud Function in the PADLR. Firebase
project that returns totals only, never personal data. A sketch, to adapt to
the real collection names:

```ts
import { onRequest } from "firebase-functions/v2/https";
import { getFirestore } from "firebase-admin/firestore";

export const publicStats = onRequest({ cors: true }, async (_req, res) => {
  const db = getFirestore();
  const [players, matches] = await Promise.all([
    db.collection("users").count().get(),
    db.collection("matches").where("status", "==", "confirmed").count().get(),
  ]);
  res.set("Cache-Control", "public, max-age=3600");
  res.json({ players: players.data().count, matches: matches.data().count });
});
```

Downloads aren't in Firebase. They come from App Store Connect (Sales and
Trends, or the App Store Connect API with an API key) and can be added to the
same function later.
