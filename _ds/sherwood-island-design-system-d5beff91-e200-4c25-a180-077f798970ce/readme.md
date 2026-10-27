# Sherwood Island Design System

A warm, parchment-and-forest interface system for a cosy island-management dashboard. Everything here is derived from one source file.

## Source

- `uploads/sherwood-design-system.html` — a self-contained design-system document titled **Sherwood Island System v1.0**. Documentation prose is written in Russian; all interface copy in the examples is Swedish. It contains 28 colour tokens taken by eyedropper from a reference mock, a type scale, radii/shadow/spacing scales, a `.sw-*` CSS component library, and a full dashboard replica.

No Figma file, no repository, no design tokens export, and no image or font binaries were provided. If those exist, sending them would let this system be tightened considerably (see **Caveats**).

## Product context

One product: a single-page dashboard for a personal island — rating, dream address, residents, task progress, collections, villagers, photos and a calendar. The tone is that of a cosy life-sim companion app: the user is greeted by name-less warmth ("Välkommen tillbaka!"), told what is left to do, and nudged gently ("Plantera fler träd för att öka din ö:s betyg!").

The system's own summary of itself: five colour families — parchment for every surface, forest for navigation and action, wood for physical objects, gold for achievement, ink for text.

---

## Content fundamentals

**Language.** Interface copy is Swedish; documentation is Russian. Keep new UI strings in Swedish unless asked otherwise, and keep them short — most labels are one or two words (`Hem`, `Översikt`, `Uppgifter`, `Samlingar`, `Invånare`, `Bilder`, `Visa alla`, `Klart`, `Pågår`).

**Person and address.** Second person, singular, informal — "din ö", "ditt betyg". Never formal address, never a corporate "we". The app speaks as a friendly neighbour, not as a service.

**Sentence shape.** Greeting first, orientation second: *"Välkommen tillbaka!" / "Här är en översikt av din ö Sherwood."* Tips are single imperative sentences ending in an exclamation mark: *"Plantera fler träd för att öka din ö:s betyg!"* Notes are fragments, jotted rather than written: *"Skapa en marknadsplats vid Resident Services. Göra en äppelodling bakom museet."*

**Casing.** Sentence case everywhere for titles and labels. Uppercase is reserved for two things: the tracked eyebrow above a section head (`01 · ЦВЕТ`, `KNAPPAR`) and the small tracked field label. No Title Case Headlines.

**Numbers.** Always a fraction with spaces around the slash — `210 / 602`, `43 / 80`, `8 / 10` — set in tabular figures. Percentages appear only inside progress fills, never as label text.

**Rules copy** (the discipline section) is written as a short imperative title plus one explanatory sentence with the offending hex inline: *"Одна тёмная зона — тёмно-зелёный `#3A4932` живёт только в боковой панели."*

**Emoji.** Used in exactly one place: animal emoji stand in for villager portraits (🦌 🐻 🦏 🐨 🐿️ 🐤). Everywhere else, glyphs are typographic dingbats (see Iconography). Do not add emoji to buttons, headings or body copy.

**Vibe.** Handmade, unhurried, seasonal. Nothing shouts. No growth-product language, no urgency, no exclamation marks outside the daily tip.

---

## Visual foundations

**Colour.** Five families, no sixth. Parchment (`#EFE6D2` page → `#F5EDE0` card → `#EFE7D3` inset) carries every surface; forest green carries navigation, buttons and progress; wood brown appears only on objects that are meant to read as made of wood; gold appears only on ratings and awards; ink is a warm-olive text ramp from `#2F3020` to `#B6AE99`. Pure black and pure white are banned — they read as holes in the parchment. Cold greys are banned — every neutral leans warm olive.

**Type.** Entirely serif. **Fraunces** 600/700 for headings, card titles and achievement numerals — soft, slightly hand-cut serifs. **Faustina** 400/600 for all interface text down to 11.5px. **JetBrains Mono** only for codes, dream addresses and hex values. Display is 42/46 at −1.5% tracking; section heads 26/31; card titles 16; body 15/24; labels 11.5 at +6% tracking, uppercase. Body copy line-height is 1.6.

**Spacing.** A 4px rhythm: 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40. Card padding 16, gap between cards 16, gap between page sections 24. The sidebar is a fixed 212px and never collapses above 900px; below that the layout stacks and the rail goes full-width.

**Layout.** One dark rail on the left, everything else on parchment. The content area is a card grid of unequal columns — the first column is wider because it holds the calendar. Page top is a greeting on the left and a small date/season clock card on the right.

**Backgrounds.** No photography, no illustration, no repeating pattern or texture. The page background is two soft warm radial hazes over the canvas colour (`#F7F0DF` upper right, `#E3E4CD` lower left) — a suggestion of landscape light, nothing more. The dashboard shell sits on a second, tighter haze. The photo placeholder is a green watercolour-ish gradient standing in for real island imagery.

**Corners.** 6px icon tiles, 10px nested panels, 14px cards, 20px sections, 28px the outer dashboard shell, fully round for buttons, chips and nav items. Large but never capsule-shaped for containers.

**Cards.** Parchment fill `#F5EDE0`, 1px `#DCD5BF` border, 14px radius, and the card shadow — an inner 1px white top highlight plus a soft green drop (`0 1px 0 rgba(255,255,255,.55) inset, 0 6px 16px rgba(58,73,50,.09)`). Cards always have a border *and* a shadow; the border is what keeps them legible against parchment.

**Shadows.** Three levels only: flat (nested panels — no shadow), card, and pop (`0 10px 26px rgba(58,73,50,.16)` for menus and hover lift). All shadows are green-tinted; black shadows kill the watercolour feel. The wooden sign uses a hard `0 3px 0 rgba(60,42,20,.35)` to read as a physical board, and the primary button uses a hard `0 2px 0` in leaf-dark as its underside.

**Transparency and blur.** Almost never. Two exceptions: the sticky doc nav (`rgba(245,237,224,.92)` + `blur(8px)`) and hover on dark ground (`rgba(245,238,225,.12)`). No glass panels, no scrims, no protection gradients — text always sits on solid parchment.

**Hover.** Subtle and fast, 0.16s. Buttons darken (`#74845A` → `#66754D`); ghost buttons take an inset fill; links change colour and grow a 1px underline; nav items on dark take a 12%-white wash; swatches lift 2px and swap the card shadow for the pop shadow.

**Press.** The primary button translates down 2px and its hard underside shadow collapses to zero — a physical button-press, 0.1s. Nothing scales.

**Focus.** A 2.5px solid outline offset 2px — leaf on parchment, forest on green.

**Animation.** Only transitions: background, colour, transform, opacity, box-shadow, all between 0.1s and 0.2s, default easing. No bounce, no spring, no entrance animation, no motion loops. A `prefers-reduced-motion` block flattens everything to 0.001ms.

**Borders.** 1px `#DCD5BF` on cards and chips, 1px `#E8E0CB` for list dividers, 2px `#6E5029` around the wooden sign, and a 3px left rule on notes and rule cards (leaf for do, wood for don't). The left-rule pattern is used *only* on those two — do not spread it onto cards generally.

**Imagery.** Warm and green. No photographs are supplied; where imagery would go, the system shows a green gradient frame with a caption strip beneath. No grain, no duotone, no cool tones.

---

## Iconography

There is **no icon font, no SVG sprite and no icon set** in the source. Icons are Unicode dingbats set in the body serif and tinted `--sw-icon` `#737C52`:

`⌂` Hem · `❦` Översikt · `✦` Uppgifter · `✿` Samlingar/blommor · `☘` Invånare · `◨` Bilder · `♣` Träd · `≈` Fisk · `✎` Recept/anteckningar · `◷` Tid/kalender · `★` Betyg · `‹` `›` calendar navigation.

Rules:
- Icons live at 15px next to card titles, 17px in the sidebar, and inside a 26px inset tile with 6px radius in task rows.
- Emoji appear **only** as villager portraits inside the round 52px avatar.
- No outline/stroke icon library is referenced. **If you need a glyph the dingbat set doesn't cover, ask for one rather than importing an icon library** — dropping Lucide or Heroicons in would break the all-serif character immediately. No substitution has been made here.

## Assets

`assets/` is empty and intentionally so. **The source contains no logo, no brand mark, no illustrations and no images.** The closest thing to a mark is the wooden signboard in the sidebar, which is pure CSS and is published as the `IslandSign` component — use it wherever a logo would go, or set the island name in Fraunces 700. Nothing has been drawn or reconstructed.

## Fonts

Fraunces, Faustina and JetBrains Mono are all Google Fonts and load from the Google CDN via `tokens/fonts.css`. No binaries were supplied and none were substituted; if you self-host, drop the `.woff2` files in `assets/fonts/` and replace the `@import` with `@font-face` rules.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Entry point — imports every token file. Consumers link this one file. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `base.css` |
| `components/` | React primitives, grouped by concern |
| `guidelines/` | Foundation specimen cards (colour, type, spacing, brand) |
| `ui_kits/island-dashboard/` | Click-through recreation of the dashboard — see its README |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-skill wrapper |

### Components

**core** — `Button`, `Pill`, `Tag`, `Card`, `CardLink`, `Panel`, `Note`, `Toast`
**data** — `StarRating`, `ProgressBar`, `TaskRow`, `InsetStat`, `Calendar`
**navigation** — `Sidebar`, `NavList`, `NavItem`, `IslandSign`, `TipBox`
**media** — `PhotoCard`, `VillagerAvatar`, `VillagerGrid`

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when, usage, variants). Every one corresponds to a `.sw-*` class in the source document; nothing was invented.

**Intentional additions:** `CardLink`, `NavList` and `VillagerGrid` are split out of the source's `.sw-link`, `.sw-nav` and `.sw-villagers` classes so the layout wrappers are reusable on their own. `Panel` is the source's documentation `.panel` class, kept because the kit itself uses it as a section container.

### UI kits

- **Island Dashboard** — `ui_kits/island-dashboard/index.html`. Six views behind the sidebar rail, composed entirely from the components above.

## Caveats

- Colour values are exact (eyedropped in the source). Type sizes, radii and shadows are exact. Nothing was rounded.
- The dashboard's "reference mock" that the source was sampled from was not provided, so the recreation follows the source's own replica rather than the original artwork.
- No logo, imagery, or icon assets exist to copy in.
