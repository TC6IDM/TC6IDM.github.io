---
name: site-design
description: The method for designing and building any page of the TC6IDM.github.io portfolio (the home page, /ride-the-bus/, /ptrainr/, an explainer, a gallery), adapted from Ride The Bus's rtb-visual-redesign - capture the real product, audit, mock up two or three directions as playable pages, stop for the owner's pick, refine, record what was passed on, build in verified sections. Names the design skill to load at each step. Use whenever a page here is designed, redesigned, restyled or built, or the owner says "make it look better", "give me options" or "mock up" anything on the site.
---

# Designing a page of the portfolio

Ride The Bus's 2026-10 overhaul worked because the owner never had to imagine
a design from a description: every choice was a playable page, beside the real
thing, and every step stopped for the owner's call. This is the same loop for
web pages. Nothing is built on a guess.

## Which model does what

Spend the expensive model on judgement, not on chores:

| Work | Model |
|---|---|
| Captures, screenshots, clips, encoding, resizing, measuring | **Sonnet** (or Haiku for pure resizing/encoding). In Ride The Bus the `rtb-today-capture` agent already runs on Sonnet. |
| Directions, mock-ups, the build, the copy | the session's main model (Opus or Fable) |
| The finish review, the layout sweep | a fresh reviewer (`impeccable-finish-reviewer`), so the author does not grade its own page |

## The loop (stops for the owner at 4, 5 and 8)

### 0. Scope, and read what is settled
Name the page and its sections. Read `CLAUDE.md` (the public-repo rules),
`design/DECISIONS.md` (what was already picked or passed on), and the source
project's own design system for its colours and type: Ride The Bus's
`web-sdk/apps/Ride-The-Bus/design.md` and `styles/tokens.css`; PTrainr's
`design.md`. A project page borrows its project's identity; the home page and
the frame around both are the portfolio's own.

### 1. Capture the real product (Sonnet)
- **Ride The Bus:** from the monorepo, on the spare dev pair (`GAME_PORT=3002`,
  `REPLAY_PORT=3011`, the local replay RGS; never Stake): the `rtb-today-capture`
  agent, or `playwright-cli` / `npm run shots`. The moments that sell it: a
  Classic round, the held last card peeled, a Max takeover (the departures
  board and chip stream), the room lighting up after the help screen, a phone
  round. Clips as WebM + MP4 with a poster frame; stills as WebP.
- **PTrainr:** a seeded demo account on local dev only (`ptrainr-today-capture`
  in that repo). Never production, never a real name or measurement.
- Raw output goes to `captures-raw/` (gitignored); only encoded, checked files
  go under the page's folder.

### 2. Audit what exists (`hallmark`, `design-taste-frontend` audit mode)
Four to eight concrete findings, measured where possible. For a page that does
not exist yet, audit the brief instead: what must a visitor understand in five
seconds, in thirty, and what must they never think (a casino ad; a template).
End with **"All three directions share: ..."** and **"None of them touches:
..."**.

### 3. Two or three directions, playable (`design-taste-frontend` first, then `frontend-design`, `high-end-visual-design`)
- `design-taste-frontend` is the lead skill here: it is built for public pages
  (portfolio, one-pager, product page) and enforces a no-slop house style with
  a browser inspector. Use its researched directions as starting points, not
  as the answer.
- Each direction is a different idea, not a colour swap: e.g. one editorial and
  quiet, one that borrows the product's own world (Ride The Bus's destination
  blind and route as the page's navigation; PTrainr's own type and palette),
  one bold.
- Build each as a real page in `design/<page>/<direction>.html` with the real
  captures, real fonts and real copy, at the four widths, in both schemes.
- Motion (`design-motion-principles`, `emil-design-eng`,
  `find-animation-opportunities`; `animation-vocabulary` to name an effect):
  every direction states its motion as properties, durations and curves, and
  what reduced motion does.
- Give every direction: **The idea / What it reuses / Motion / Weight (KB on
  first load) / Risk**. Mark one **My pick** and say why.
- Check each in a browser before publishing: no console errors, nothing off
  screen at 375, video plays, dark scheme legible.

### 4. Publish side by side, then stop
A comparison page (`design/index.html`, a tab per page) published as a
claude.ai Artifact so the owner can open it on a phone. **Stop and wait for the
pick.** An unattended run ends here: directions done, questions listed, nothing
built.

### 5. Refine in rounds
The owner's notes go into a NEW file (`b`, `c` suffixes); earlier passes stay
playable.

### 6. Record it
`design/DECISIONS.md`: the pick, the owner's notes, every direction passed on
with its file, every question with its answer.

### 7. Build in sections (`impeccable` while building, `review-animations` for motion)
One section per commit (on a `fable/*` branch when Fable is the one working;
otherwise ask). After every section: look at it at 375, 768, 1280 and 1920 in
both schemes (`playwright-cli`, phones with `open --mobile` before `resize`),
check reduced motion, check the weight, and `web-design-guidelines` +
`accessibility` for the a11y basics (contrast, focus, alt text, captions).

### 8. Check the build against the pick
`impeccable-finish-reviewer` against the picked mock-up, element by element:
**built as drawn / built differently / not built**. Every "differently" is a
question for the owner, with the reason.

### 9. Publish
The owner merges; the merge publishes. Never push to `main`.

## Running it overnight

A good unattended run is steps 0-4 for one page: the owner wakes up to two or
three playable directions and a recommendation, and picks over breakfast. Do
not start step 7 for a page whose direction has not been picked.
