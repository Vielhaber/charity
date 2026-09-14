# Charity-Shop — Starter-Projekt (Astro)

Lauffähiges Grundgerüst für den in der Architektur-Skizze beschriebenen
Charity-Shop: Astro, Content Collections für Produkte, Impact-Tracker,
Spendenanteil-Badges, Transparenzbericht, Decap-CMS-Vorbereitung und
GitHub-Actions-Deploy auf GitHub Pages.

Der Build wurde vor der Übergabe erfolgreich getestet (`npm run build`).

## 1. Lokal testen (optional, aber empfohlen)

```bash
npm install
npm run dev
```

Öffnet unter `http://localhost:4321`.

## 2. Auf GitHub bringen

1. Auf [github.com/new](https://github.com/new) ein **leeres** Repository anlegen
   (kein README/License/​.gitignore anhaken — die sind schon dabei).
2. In diesem Projektordner:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Charity-Shop Grundgerüst"
   git branch -M main
   git remote add origin https://github.com/DEIN-USERNAME/DEIN-REPO.git
   git push -u origin main
   ```

## 3. `astro.config.mjs` anpassen

Vor dem ersten Push unbedingt `site` und `base` in `astro.config.mjs` auf
deinen echten GitHub-Usernamen/Repo-Namen setzen (Kommentare in der Datei
erklären Projekt-Pages vs. eigene Domain). Danach committen und erneut
pushen.

## 4. GitHub Pages aktivieren

Im Repo auf GitHub: **Settings → Pages → Build and deployment → Source:
"GitHub Actions"** auswählen. Das war's — der mitgelieferte Workflow
(`.github/workflows/deploy.yml`) baut und deployt bei jedem Push auf `main`
automatisch. Nach dem ersten erfolgreichen Lauf (Tab **Actions** im Repo
verrät den Fortschritt) ist die Seite unter der in Schritt 3 konfigurierten
URL live.

## 5. Decap CMS anschließen (optional, für Pflege ohne Code)

`public/admin/config.yml` enthält `repo:` und `base_url:` als Platzhalter.
`base_url` muss auf einen kleinen GitHub-OAuth-Proxy zeigen, da GitHub Pages
selbst keinen Server für den Login-Handshake bereitstellen kann — dafür
reicht ein kostenloser Cloudflare Worker (fertige Vorlage z. B.
[decap-cms-github-oauth-provider-cloudflare](https://github.com/ottmartens/decap-cms-github-oauth-provider-cloudflare)).
Nach dem Deploy ist die Verwaltung unter `/admin/` erreichbar.

## 6. Eigene Inhalte pflegen

- Neues Produkt: Datei in `src/content/produkte/` anlegen (Vorlagen siehe
  vorhandene Beispiele) — Bilder nach `public/produkte/` legen.
- Neuer Spendenbeleg: Datei in `src/content/belege/`, PDF/Bild
  **geschwärzt** (keine vollständige IBAN/Kontoinhaber) nach
  `public/belege/`.
- Gesamtsumme im Impact-Tracker: `src/data/spenden.json` aktualisieren.
- Stripe-Payment-Link pro Produkt: im Frontmatter-Feld `stripeLink`
  eintragen (Nutzungslimit "1×" im Stripe-Dashboard setzen, siehe
  Architektur-Dokument).

## 7. Vor dem echten Launch noch offen

- `src/pages/impressum.astro` und `src/pages/datenschutz.astro` mit echten
  Angaben füllen (siehe Platzhalter-Hinweise dort).
- Rechtscheckliste aus dem Architektur-Dokument durchgehen
  (Widerrufsausschluss für Unikate, Kleinunternehmerregelung,
  "100%"-Formulierung, Barrierefreiheit).
- Alle `buy.stripe.com/ERSETZEN_...`-Platzhalter durch echte Payment Links
  ersetzen.

Vollständiges Architektur- und Rechtskonzept:
https://claude.ai/artifact/G8535EVTbR5D7fG7wGhr4j
