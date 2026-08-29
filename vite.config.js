import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * GitHub Pages base path
 * ------------------------------------------------------------------------
 * GitHub Pages serves project sites from a subpath:
 *   https://USERNAME.github.io/REPO_NAME/
 *
 * Update REPO_NAME below to match your GitHub repository name exactly
 * (case-sensitive), then build + deploy. If you deploy to a custom domain
 * or to a user/organization page (USERNAME.github.io), set REPO_NAME to "".
 * ------------------------------------------------------------------------
 */
const REPO_NAME = "pooja-mehandi-art";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use the repo subpath only for production builds so `npm run dev`
  // keeps working normally at http://localhost:5173/
  base: command === "build" ? `/${REPO_NAME}/` : "/",
}));
