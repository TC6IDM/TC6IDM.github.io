# Ride The Bus page: decisions

2026-11-15

## The pick

**C, the equation**, with **B's route navigation and section headers** carried onto it. Built as `ride-the-bus/index.html` (one file, inline CSS and JS, no build step).

## The owner's answers

1. **B's navigation onto C: yes.** The route line with the bus that rides it as you scroll sits at the top, and every section opens with B's destination-blind heading. Both are restyled into C's palette: the bar is pale baize (`#e0e6dc`) with a dark felt bus in the light scheme and well-dark felt (`#06140d`) with a gold bus in the dark one; the blinds are a felt plate with cream letters (light) or gold letters (dark), and the last stop is the crimson terminus as in B. B's phone defect is fixed (below).
2. **Hero poster: a takeover frame.** `media/round-classic-hero-poster.webp` is the Big Win frame at 6.8 s of `round-classic.mp4` ($17.20 on the board, no chip over the cards or the figure), 25 KB. The clip still plays the whole 12 s round on a muted loop.
3. **The solver must not jump.** Fixed (below). Measured: zero movement.
4. **GitHub link** goes to the profile, `https://github.com/TC6IDM`, with "The game's source is private." under it.
5. **Dollar amounts stay**, described as a play balance of demo money in each caption that shows one (hero, Last Stop, Max takeover). The Last Stop clip's "Big Win" title is kept.
6. **"Built by one person" stays.**

## Directions passed on

- **A. The case file** (`design/ride-the-bus/a.html`, `shots/a-1280.png`, `shots/a-375.png`): an editorial long read, footage as captioned evidence. Safest, least memorable, nothing on it only this game could have.
- **B. The route** as a whole page (`design/ride-the-bus/b.html`, `shots/b-1280.png`, `shots/b-375.png`): the room's walnut and well-black, departures board, split-flap ceilings, "Roll the blind" button, dark only. Only its route bar and blind headings were taken; the rest was passed on as the closest to a casino landing page in colour.
- **C as drawn** (`design/ride-the-bus/c.html`, `shots/c-*.png`): kept as the record of the pick before the changes.

## Built differently from the mock-ups, and why

- **Route stops on a phone.** B's stops were 12 px wide with the names hidden and the current name shown at the right. Now the five stops are equal grid columns across the line, each link the full column (55 x 68 px at 375, 44+ px down to 320), and below 900 px the names switch to short ones that always show under their dots: Start, Maths, Plays, Craft, Built. The visible text is the link's accessible name at every width (the long and short names swap with `display`, so no label mismatch).
- **Route order follows C's page**, not B's: Start, The maths, How it plays, The craft, How it was built.
- **Headings are two parts.** The blind carries the stop's name (so the nav and the heading agree), and C's sentence heading follows it as a standfirst ("Every card is priced by one equation."), balanced with `text-wrap: balance`.
- **The bus** is centred on each dot and rides between stops by scroll position, with each stop's anchor taken as the scroll position its link lands on (capped at the end of the page), so after a jump the bus sits exactly on the stop. Under reduced motion it does not glide: it snaps to the current stop. Smooth anchor scrolling is on only without reduced motion.
- **The solver, made still.** Every live number is an inline-block of fixed width with fixed decimals (p and 1 − p to three places, m to two, r to two, the percentage to one) in tabular figures, so a value change never changes a box. The equation is `white-space: nowrap` and sized by a container query: one line, `min(40px, 4.9cqi)`, when its column is 600 px or wider, otherwise three deliberate rows aligned on an operator column (`0.500 × 1.99` / `+ 0.500 × 0.00` / `= 0.9975`). The fields are drawn as fill-in slots (a 2 px rule under each) so the reserved width reads as intended rather than as a gap. The big multiplier is a block of fixed height on its own line with its caption below (C had it beside a wrapping caption). Measured at 375 and 1280 with the slider at 1%, 6%, 25%, 50% and 99%, for both "what a miss keeps" cases: the position and size of all 45 elements in and below the solver moved by 0.00 px.
- **Slider range** widened from 2-98% to 1-99% (the stability test's values), and the chart's top to 100× (99.75× at 1%).
- **Hero title stacked on three lines** ("Ride / The / Bus") at 1000 px and wider, deliberately, rather than C's accidental "Ride The / Bus" break. Below that it is one line.
- **Videos carry width and height** so nothing shifts as posters and metadata arrive. The Max takeover caption and the Last Stop caption now name the play balance.
- **No aria-live on the equation**: it would announce on every slider step. The slider's `aria-valuetext` carries the percentage and the multiplier.
- **The built section's list** is four across at desktop (C wrapped "Solo" onto a second row).
- **Favicon** is an inline SVG bus on felt (the mocks had none).

## Measured

- Widths checked: 375 (mobile emulation), 768, 1280, 1920; light and dark at 375 and 1280; reduced motion at 1280. No horizontal scroll at any of them, no console messages.
- Each route stop lands its section 12 px under the bar and the bus centre matches the stop's centre within 1 px.
- Videos play only in view and pause out of it; the hero loops the full round. Under reduced motion all six are paused with controls, every entrance is shown and the bars are drawn at full length.
- First load, excluding lazy media: HTML 31 KB, fonts about 76 KB, six posters 238 KB, so about 345 KB (372 KB with the hero's metadata request).

## Left open

- The phone clip's poster (`phone-round-poster.webp`) has a thin green line along its top edge, from the capture. A media fix, not a page one.
- In the dark scheme, while the family bars grow in, the dark ceiling label on the two near-full bars sits on the dark track for about a second until the bar reaches it.
