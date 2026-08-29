# Images folder

Drop real photos here, then point to them from `src/siteConfig.js` (the `IMAGES`
object). Suggested layout:

```
public/images/
├── portrait/       → the artist's portrait photo (used in the About section)
├── hero/           → an optional hero photo (replaces the illustrated hand art)
├── gallery/        → mehndi gallery photos (bridal, arabic, minimal, etc.)
├── instagram/      → photos for the Instagram-style grid section
└── og-image.jpg    → a single social-share preview image (1200x630px recommended)
```

## How to wire up an image

1. Add the file, e.g. `public/images/portrait/pooja.jpg`.
2. Open `src/siteConfig.js`.
3. Set the matching field in `IMAGES`, e.g.:

```js
export const IMAGES = {
  portrait: "/images/portrait/pooja.jpg",
  ...
};
```

Paths are root-relative (start with `/images/...`) and automatically work
under the GitHub Pages subpath — no need to add the repo name yourself.

Any slot left as `null` keeps the current placeholder artwork, so you can
add real photos gradually without breaking the layout.
