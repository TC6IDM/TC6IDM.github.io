# Ride The Bus page: three directions

Steps 2 to 4 of the `site-design` skill. Nothing is built; the owner picks.

## Audit of the brief

1. **Five seconds is footage, not words.** "Finished-looking casino-style game, built solo" is only believed from a moving frame of the real table. In all three the round clip is on the first screen at 1280 and 375.
2. **The advert risk is the colour.** Dark, gold, crimson and a big figure with an × is exactly what a casino landing page looks like. The figures are kept as engineering facts (ceilings, return, floor) and never set beside a currency or a call to action; the only $ amounts on the page are inside capture captions.
3. **"Pays" is everywhere in the subject's own vocabulary.** Every line was written around it ("highest multiplier", "what a miss keeps", "recorded return"). Grepped: no "pays", "bonus", "play now", no em dashes.
4. **The maths is the part no other game page has**, and in prose it reads as a claim. Only an equation with numbers in it, or something the visitor moves, reads as proof. C makes that the live thing; A and B set the formula large.
5. **The figures must be exactly the published ones.** Used only: the formula, d = 0.99^(1/4), retention 0.30 (and nothing on card one, 50% Second Chance, 15% High Stakes, from the game's own rules), 257 = 4 × 64 + 1, 96%, the 0.1× floor, the five ceilings, 250× cost. The solver's presets are exact: 26 of 52 and 3 of 51; the suit is labelled "about 1 in 4" because the real chance depends on the cards already dealt.
6. **Seven clips is a lot of weight.** All are `preload="none"` except the hero (`metadata`), and play only in view. First load is dominated by the seven poster frames (246 KB).
7. **Posters do not match captions.** The round-classic poster is mid-reveal ($1.90), not the $17.20 takeover the caption describes; harmless once it plays, but a poster from the takeover moment would sell the first screen better (a media task, not a page task).

**All three directions share:** the same copy deck and section content; Big Shoulders Display for the name and figures with Overpass for text (the game's own pair); the real captures with a text alternative each; the video policy above; a staggered entrance (opacity + 24px rise, 480-500 ms, cubic-bezier(.2,.7,.2,1), 60-90 ms stagger) that leaves content visible without script and is dropped under reduced motion, where videos stop and show controls; a family list in the game's volatility colours; a skip link and a 3px focus ring.

**None of them touches:** `ride-the-bus/media/` (read only), the home page, any game source; no gradients, shadows, glass, eyebrows, index numbers or monospace (the taste skill's house rules); no external script.

## A. The case file

- **The idea:** an editorial long read where the footage is evidence: the page reads like a write-up, and each clip is a captioned exhibit under the claim it proves.
- **What it reuses:** brand red (#a80828) as the light accent and the dark field of "How it was built", the game's warm ink ramp for the dark scheme, its gold as the dark accent, the five volatility colours as swatches in a real table.
- **Motion:** the shared entrance only. Videos play in view. Reduced motion: no travel, videos paused with controls.
- **Weight:** about 360 KB first load (HTML 20 KB, fonts ~90 KB, posters 246 KB, hero video metadata only); 475 KB once the lazy stills arrive.
- **Risk:** the safest and the least memorable; nothing on it could only belong to this game except the footage. Light by default, so it is the furthest from the game's own room.

## B. The route

- **The idea:** the game's takeover becomes the page. The sticky navigation is the route line with five stops and a bus that rides it with the scroll; every section heading is a destination blind that rolls in; the families are a departures board with split-flap ceilings; the last section is the crimson terminus, as Max is in the game. The live thing is a "Roll the blind" button that steps the tier names Big to Max in their own colours.
- **What it reuses:** the room's walnut, felt green for the maths, the well black of the signs, gold-bright lettering, the crimson cloth of Max, the tier colour ramp (Big green, Huge amber, Mega red, Epic amethyst).
- **Motion:** the bus is `transform: translateX` on scroll through requestAnimationFrame (no transition, so it also stays under reduced motion as a position indicator); headings roll `translateY(105%) -> 0` over 620 ms on cubic-bezier(.2,.9,.25,1.12); flap tiles `rotateX(-90deg) -> 0`, 320 ms, cubic-bezier(.3,1.4,.5,1), 45 ms per character; the blind reel 550 ms on the roll curve. Reduced motion: all static, reel jumps.
- **Weight:** about 370 KB first load (HTML 27 KB); 490 KB with stills.
- **Dark only, on purpose:** the page is the game's room, lit by one lamp; a light version would be a different idea.
- **Risk:** the closest to a casino landing page in colour and tone; the gold-on-black sign and flapping multipliers are the elements to watch. On phones the route dots are 12 px wide tap targets (the links are full height, but narrow); the stop names hide and the current one shows at the right.

## C. The equation

- **The idea:** the formula the game is built on becomes the page's instrument. After the footage, the visitor drags the chance of a guess (or picks a real one: red or black, an Equal, a suit) and toggles what a miss keeps; the equation fills in with numbers, the solved multiplier is set huge, and the right-hand side never moves from 0.9975. A log-scale chart draws both retention curves with the point riding the selected one. The families are a bar ladder of their ceilings.
- **What it reuses:** the table's felt (#0e2e1e) as the dark ground and the light scheme's ink, gold as the dark accent, brand red for the solved figure, the volatility colours on the family bars.
- **Motion:** the solver updates instantly with no tween (an honest readout); the family bars `scaleX(0) -> w`, 900 ms, cubic-bezier(.2,.7,.2,1), 80 ms stagger, once; the shared entrance. Reduced motion: bars drawn at full length, no travel. With script off a `<noscript>` line gives three solved examples.
- **Weight:** about 365 KB first load (HTML 24 KB); 480 KB with stills.
- **Risk:** an engineer's page first; a recruiter skimming may not drag anything. The hero title breaks onto two lines at desktop ("Ride The / Bus") because it shares the row with the video.

## My pick

**C.** It is the only one whose live thing proves the hardest claim on the page: that the maths was designed, not tuned. A visitor moves a slider and sees a 1-in-17 guess solved to 12.16× while the expectation stays at 0.9975, which no casino page and no template would ever show. The first screen still leads with the footage, so the five-second read holds. B's route line is the strongest borrowing from the game and could come across as C's navigation if the owner wants more of the room.

## Open questions for the owner

1. C, or B's route-line navigation carried onto C?
2. Should the hero poster be a frame from the takeover ($17.20 on the board) rather than mid-reveal? It needs a new still from the capture.
3. Is the Last Stop clip, the only one showing a "Big Win" title, acceptable on a page that must never read as an offer? Or should the maths section use the mode picker still instead?
4. The GitHub link points at the TC6IDM profile; the game's repo is private. Keep, or add a line saying the source is private?
5. The `$` amounts in captions ($17.20, $1,354.20) are play balances in the capture. Keep them, or describe the takeover in multipliers only?
6. Is "built by one person" right, given Claude Code is named as the pair in the build section?
