# TC6IDM.github.io: the portfolio

A public GitHub Pages site that shows two private projects: **Ride The Bus**
(a card game for Stake Engine) at `/ride-the-bus/` and **PTrainr** (a training
app for coaches and clients, web + Android + iOS) at `/ptrainr/`, behind a
short home page. Served at https://tc6idm.github.io/.

Both source repos are **private**. This one is **public**: everything committed
here is readable by anyone, forever (git history keeps what a later commit
deletes).

## Standing rules

1. **Commits** (the owner's words, 2026-11-15): *"Fable may commit and push on
   `fable/*` branches in the site repo, never `main`."* Any other session asks
   before committing or pushing, every time. Nothing ever force-pushes, and
   nothing merges: the owner merges, and the merge publishes.
2. **Nothing private reaches this repo.** Never copy source, docs, issue text,
   or files out of `Ride-The-Bus-monorepo` or `PTrainer` wholesale. Never:
   - a secret, a `.env*`, a Firebase or Google client file (PTrainer's root has
     several), a token, a live Stake session ID or Studio link;
   - Ride The Bus's published books, `library/`, `RGS_TEST_PLAN.md`, anything
     in `licence-evidence/`;
   - **any real person or health data from PTrainr**: every PTrainr image comes
     from a seeded demo account with invented names, meals and measurements,
     captured against local dev, never production.
   Check every staged file before a commit; a doubt is a stop, not a guess.
3. **Every image of a product is captured from the real product**, never drawn
   or generated to look like it (the same rule as Ride The Bus's lobby tile).
   Decorative art made for the site is fine and is labelled as such in its
   commit.
4. **The figures are the published ones.** Ride The Bus's RTP, ceilings and
   rules come from its `FAMILY_RULES` / CLAUDE.md as of the capture date, and
   the page says they are a game in development. Nothing reads as an offer to
   bet: this is a portfolio about building a game, not a casino advert. No
   "pays", no "bonus", no calls to play for money.
5. **No build step unless one is earned.** Plain HTML, CSS and JS first. Any
   external script comes from cdnjs / jsDelivr / unpkg at an exact version.
6. **Phone first, both colour schemes, reduced motion respected**, at 375,
   768, 1280 and 1920 wide. First load of a project page under 3 MB; video is
   lazy, muted, has a poster frame and a text alternative.

## How work is tracked

The issues live on the **source** repos' boards, not here:
- Ride The Bus: epic TC6IDM/Ride-The-Bus#39 (hosting #40 is decided: this
  repo), page #41, media #42, payout explainer #43, design gallery #44,
  deploy #45, demo decision #46. Board: https://github.com/users/TC6IDM/projects/3
- PTrainr: TC6IDM/PTrainer#477. Board: https://github.com/users/TC6IDM/projects/2

A commit here names the issue it serves (`… (TC6IDM/Ride-The-Bus#41)`). The
issues are private; their numbers in a public commit message are fine, their
contents are not.

## How a page is designed: the `site-design` skill

The Ride The Bus overhaul's method (capture, audit, two or three directions as
playable pages, the owner picks, build in sections, record what was passed on),
adapted for web pages. Read `.claude/skills/site-design/SKILL.md` before any
design work. It names the design skills to use at each step; they are copied
into `.claude/skills/` locally and gitignored.

## Layout

```
index.html             the home page: who, the two projects, contact
ride-the-bus/          the Ride The Bus page and its assets
ptrainr/               the PTrainr page and its assets
assets/                shared: fonts, the site's own CSS and JS
design/                direction mock-ups and DECISIONS.md (published too: it is part of the story)
captures-raw/          unedited captures (gitignored)
```
