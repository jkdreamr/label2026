# NOVUM Website — Codex Prompt

Paste this into Codex (or ChatGPT o3 / Claude Code) to extend or customize the site.

---

## Prompt

I have a single-file HTML website for NOVUM, a dark creative label. The file is `index.html`.

**Tech stack:**
- Vanilla HTML/CSS/JS
- anime.js 3.2.1 (from CDN)
- Google Fonts: Cormorant Garant, Shippori Mincho, Space Mono
- Deployed on GitHub Pages at `jkdreamr.github.io/label2026/`

**Design system:**
- Background: `#07060a` (near-black)
- Text: `#e2d9cc` (warm ivory)
- Accent: `#1a3ef5` (electric blue)
- Stone mid-tone: `#9a8c7c`
- Fonts: Cormorant Garant (display, serif), Shippori Mincho (Japanese script), Space Mono (labels/UI)

**Current structure:**
1. `#hero` — Full-screen title with Japanese subtitle (新しい文化の形を作る)
2. `#story` — Scroll-driven sticky section: figure on left rotates via anime.js as user scrolls, 3 text panels appear alternating left/right on right column
3. `#artists` — 2-column artist card grid (Joshua Koo, Anna Matsumoto)
4. `#join` — Two application paths (Artist / Builder)
5. Footer

**Current placeholder in `#story`:**
There is an SVG silhouette as a placeholder figure. Replace it by swapping in an `<img>` tag:
```html
<img class="figure-img" src="./assets/YOUR_IMAGE.jpg" alt="" />
```

---

## Tasks — pick one or more to paste into Codex:

### Task A — Add a real image to the scroll section
```
In index.html, inside the `.figure-svg-wrap` div in the #story section,
replace the SVG placeholder with an actual image. The image path is
`./assets/figure.jpg`. Use the existing `.figure-img` CSS class.
Remove the `.figure-svg-wrap` div and its contents entirely.
Keep all edge-fade divs (figure-fade-left, figure-fade-top, figure-fade-bot).
```

### Task B — Add a 4th scroll panel
```
In index.html, add a 4th story panel to the #story section.
1. Change `.story-panels-scroll` height from 360vh to 480vh
2. Add a new panel div after #sp2:
   <div class="story-panel from-left" id="sp3">
     <div class="panel-eyebrow">03 / Sessions</div>
     <h2 class="panel-h">Live <em>Between</em><br>Worlds.</h2>
     <p class="panel-body">Not a concert. Not a demo day. NOVUM Sessions are live events at the intersection of performance, technology, and culture.</p>
   </div>
3. In the JS scroll handler, update panel index logic:
   const pIdx = progress < 0.25 ? 0 : progress < 0.5 ? 1 : progress < 0.75 ? 2 : 3;
4. Add sp3 to the panels array.
5. Add panelFlip entry: panelFlip = [false, true, false, true]
```

### Task C — Add a Projects section between #artists and #join
```
In index.html, add a #projects section between #artists and #join.
Match the existing design system exactly (same fonts, colors, border style).
Show 3 projects as a horizontal row, each with:
- A monospace label (e.g. "01 / MUSIC · TOOL")
- A serif title (e.g. "Voice Memo to World")
- 1-line description
- Border: 1px solid var(--border)
- Padding: 40px 36px
- Hover: border-color to var(--border-mid), subtle blue gradient overlay
Add the section to #side-nav dots and dot observer arrays.
```

### Task D — Mobile responsiveness
```
In index.html, add a @media (max-width: 768px) block that:
- Changes .story-sticky grid to single column (figure on top, text below)
- Sets figure height to 45vh
- Reduces hero font size to clamp(52px, 14vw, 80px)
- Changes .artists-grid to 1 column
- Changes .join-inner to 1 column
- Hides .atm-line and #side-nav
- Reduces all section padding to 80px 24px
- Reduces nav padding to 20px 24px
```

### Task E — Add smooth page loading animation
```
In index.html, add a full-screen loading overlay that:
- Covers the entire viewport with background #07060a
- Shows "NOVUM" centered in Space Mono, 12px, letter-spacing 0.35em
- After 800ms, animates out: overlay fades and slides up using anime.js
- Then triggers the existing hero entrance timeline
- Remove the window.addEventListener('load', ...) hero entrance and replace
  it with a function called after the overlay exits
```
