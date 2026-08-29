# Pooja Mehandi Art — Portfolio Website

A premium, animated, mobile-first portfolio website for a mehndi artist, built
with React, Vite, Framer Motion and Lucide icons.

Live design source: `src/App.jsx` · Editable content: `src/siteConfig.js`

---

## 1. Install

You need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install
```

This will also create a `package-lock.json` the first time you run it — that
file isn't included in this ZIP, but is created automatically and should be
committed to your repository once it exists.

## 2. Run locally

```bash
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 3. Build for production

```bash
npm run build
```

This outputs the finished site into a `dist/` folder. To check the build
locally before deploying:

```bash
npm run preview
```

---

## 4. Where to change the artist's information

Everything editable lives in **`src/siteConfig.js`** — you shouldn't need to
touch any other file to update content.

| What to change              | Field in `src/siteConfig.js`                    |
| ---------------------------- | ------------------------------------------------ |
| Name / tagline               | `SITE.firstName`, `SITE.brandLine`, `SITE.tagline` |
| Instagram handle & link      | `SITE.instagramHandle`, `SITE.instagramUrl`      |
| WhatsApp number              | `SITE.whatsappNumber` (see below)                |
| Phone number                 | `SITE.phoneNumber`                               |
| Location                     | `SITE.location`                                  |
| Experience / client stats    | `SITE.experienceYears`, `SITE.happyClients`, `SITE.designsCreated` |
| Gallery categories & items   | `CATEGORIES`, `GALLERY`                          |
| Services offered             | `SERVICES`                                       |
| Booking process steps        | `PROCESS`                                        |

Every placeholder (`YOUR_WHATSAPP_NUMBER`, `YOUR_LOCATION`, etc.) is
intentional — nothing about the artist's experience, client count, pricing
or contact details was invented. Replace each one with real information
before launch. Testimonials are left as empty, clearly-labelled slots for
the same reason — add real client reviews when you have them.

### Setting the WhatsApp number

In `src/siteConfig.js`:

```js
whatsappNumber: "919876543210", // country code + number, digits only
```

No `+`, spaces, or dashes. The WhatsApp button and link (`whatsappLink`)
are generated automatically from this value.

### Changing the Instagram URL

```js
instagramHandle: "@your_handle",
instagramUrl: "https://www.instagram.com/your_handle/",
```

---

## 5. Adding real images

The site currently uses stylised placeholder artwork so it looks intentional
and complete even before real photos are added. To add real photos:

1. Put image files in `public/images/...` (see `public/images/README.md`
   for the suggested folder layout: `portrait/`, `gallery/`, `instagram/`, `hero/`).
2. Open `src/siteConfig.js` and fill in the `IMAGES` object, e.g.:

```js
export const IMAGES = {
  portrait: "/images/portrait/pooja.jpg",
  gallery: {
    1: "/images/gallery/bridal-1.jpg", // key matches the `id` in GALLERY
  },
  instagram: {
    0: "/images/instagram/post-1.jpg", // key matches the slot's index
  },
};
```

Any slot left as `null` keeps the current placeholder design — you can add
photos gradually.

---

## 6. Deploying to GitHub Pages

This project is pre-configured to deploy automatically via GitHub Actions.

### One-time setup

1. Create a new GitHub repository and push this project to it, on the
   `main` branch.
2. In your repository, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push a commit to `main` (or re-run the workflow manually from the
   **Actions** tab). The included workflow at
   `.github/workflows/deploy.yml` will install dependencies, build the
   site, and publish the `dist/` folder automatically.
4. Your site will be live at:

   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```

### If your repository name isn't "pooja-mehandi-art"

Vite needs to know the subpath your site is served from. Open
**`vite.config.js`** and update:

```js
const REPO_NAME = "pooja-mehandi-art"; // change to your repo's exact name
```

If you're deploying to a user/organization page (a repo literally named
`YOUR_USERNAME.github.io`) or a custom domain, set `REPO_NAME` to `""`
instead, since those are served from the domain root.

### Alternative manual deploy

A `gh-pages`-based script is also included if you'd rather deploy manually
instead of via GitHub Actions:

```bash
npm run deploy
```

This builds the project and pushes `dist/` to a `gh-pages` branch. If you
use this method, set GitHub Pages' source to the `gh-pages` branch instead
of "GitHub Actions" in your repo settings.

---

## 7. Project structure

```
pooja-mehandi-art/
├── index.html                  — HTML shell + SEO/meta tags
├── vite.config.js              — Vite config (GitHub Pages base path here)
├── package.json
├── .github/workflows/deploy.yml — GitHub Actions deploy workflow
├── public/
│   ├── favicon.svg
│   └── images/                 — put real photos here (see its README.md)
└── src/
    ├── main.jsx                — React entry point
    ├── App.jsx                 — all page sections/components
    ├── siteConfig.js           — ← the file you edit for content
    └── index.css               — all styling
```

## 8. What's still a demo

- The **booking form** is front-end only — it shows a confirmation state
  but doesn't send data anywhere yet. Wire it up to a form service (e.g.
  Formspree, Getform), an email API, or your own backend when ready.
- **Testimonials** are empty placeholder cards — add real client reviews
  when available.

## 9. Notes on accessibility & performance

- Respects `prefers-reduced-motion` — animations are minimised automatically
  for users who request it.
- Keyboard support: gallery lightbox can be closed with `Esc` and navigated
  with the arrow keys; all interactive elements are focusable with visible
  focus states.
- Images use `loading="lazy"` once you add real photos.
- No unnecessary dependencies — just React, Vite, Framer Motion and
  Lucide React.
