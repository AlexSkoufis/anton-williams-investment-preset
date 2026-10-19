# Anton Williams Holding Company: Built Across Generations

An **unsolicited, single-page redesign concept** for [Anton Williams Holding Company](https://www.arwhc.com/) of Kalamazoo, Michigan, by [CoreConcepts Design](https://coreconcepts.design/). It was not commissioned or endorsed by the company. The page is `noindex` and `robots.txt` disallows crawling.

React 19 · TypeScript · Vite 8 · Tailwind CSS 4 · GSAP 3 (ScrollTrigger, Flip, SplitText) · Lenis · Lucide. No router: one homepage, anchor navigation only.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build into ./dist
npx vite preview --port 4174   # serve ./dist for the QA scripts
npm run images     # rebuild WebP ladders from assets-src/ (only if sources change)
```

## Sections

| # | Section | Anchor | Composition |
|---|---|---|---|
| 01 | Monumental opening | `#top` | Asymmetric headline and photograph, survey plat motif, load choreography |
| 02 | The Passage of Time | `#heritage` | Pinned horizontal chronology with year index (desktop); vertical sequence elsewhere |
| 03 | Land. Energy. Enterprise. | `#holdings` | Split-screen tab index with cinematic panel; accordion below 1024px |
| 04 | Continuity in Motion | `#continuity` | Solid bronze typographic interlude with scroll-driven emphasis |
| 05 | The Enterprise Network | `#enterprise` | Asymmetric directory, GSAP Flip rows |
| 06 | Present-day perspective | `#leadership` | Magazine profile of the owner |
| 07 | The Next Chapter | `#contact` | Closing statement, magnetic CTA, verified contact details |

## Content rules

- All copy lives in `src/data/site.ts`. Every historical statement is tagged **Company account**, **Archive, published by the company**, or **Public record** (only for claims checked independently: the Gloucester NRHP listing, the 1782 to 1792 census wealth rankings, the 1798 Sargent marriage, and the 1859 Mississippi petition naming David P. Williams).
- Slavery is stated plainly, including the company's own statement about enslaved labor and the coerced context of the relationship between David P. Williams and Ellen Jones. Nothing is romanticized.
- The three subsidiaries are shown with only what the website publishes. They could not be found in public registries, so they carry no links.
- No em or en dashes in copy (`qa/audit.mjs` checks visible text).

## Imagery

- **Company media** (`assets-src/company/`): the owner portrait, the A.P. Williams portrait, newspaper clippings and the Duck Pond lease, captured from arwhc.com.
- **Supplementary photography** (`assets-src/photo/`): public domain, CC0 and CC BY / BY-SA images from Wikimedia Commons, each captioned *Illustrative* and credited in the footer (`src/data/credits.ts`). None depicts company property.

## Motion and safety

- All animation runs in `useGSAP` / `gsap.matchMedia` scopes and reverts on unmount. Everything is gated on `prefers-reduced-motion: no-preference`.
- Text reveals split **words only, with no overflow masks**, and revert when done. The Continuity statement dims letters to 16% at most, never to zero.
- Intro elements are hidden only behind an `intro-pending` class with a 3.2s failsafe; a stalled font load cannot hold the page hidden.
- The pinned chronology runs only at ≥1200px wide and ≥700px tall, or ≥1024px wide and ≥768px tall. Otherwise it is a vertical sequence with no scroll trapping. Keyboard focus inside the track scrolls the focused chapter into view.

## QA

With the preview server on port 4174:

```bash
node qa/audit.mjs                     # 15 widths (360 to 1920): overflow, clipped/invisible text, stuck reveals, dashes, credit, chronology fit
node qa/audit.mjs 1024,1280 720       # short laptop screens
node qa/audit.mjs 360,1440 "" reduced # reduced motion
INJECT=1 node qa/audit.mjs 390        # self-test: plants faults, every detector must fire
node qa/interact.mjs                  # menu, focus trap, anchors, tabs, accordion, Flip rows, chronology focus
node qa/links.mjs                     # anchors and every external URL
node qa/midanim.mjs 1440              # opening sequence frames
node qa/walk.mjs 390                  # viewport-by-viewport screenshots into qa/shots
```

Scripts use the Playwright Chromium at `%LOCALAPPDATA%/ms-playwright/chromium-1217`; adjust `exe` for other machines.

## Deploy

Static output in `dist/`. `vercel.json` sends `X-Robots-Tag: noindex, nofollow`. Keep it that way for an unsolicited concept.
