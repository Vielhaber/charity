import { defineConfig } from "astro/config";

// WICHTIG: An dein Repo anpassen, bevor du deployst.
//
// Fall A – Projekt-Pages (https://DEIN-USERNAME.github.io/DEIN-REPO/):
//   site: "https://DEIN-USERNAME.github.io",
//   base: "/DEIN-REPO",
//
// Fall B – eigene Domain (via CNAME-Datei in public/):
//   site: "https://deine-domain.de",
//   base: "/",

export default defineConfig({
  site: "https://DEIN-USERNAME.github.io",
  base: "/DEIN-REPO",
  output: "static",
});
