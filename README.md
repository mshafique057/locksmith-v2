# Bradford Locksmith Pro 24 7 Service

A responsive React + Vite website for a Bradford residential locksmith. The site covers household locks, doors and windows only.

## Run locally

1. Install Node.js (current LTS).
2. Open a terminal in this `site` folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite (normally `http://localhost:5173`).

Create and test a production build with:

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push the contents of this `site` folder to a Git repository.
2. In Vercel, import that repository.
3. Set the project root to the `site` folder if the repository contains other folders.
4. Framework preset: **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy. `vercel.json` rewrites direct visits and refreshes on nested React Router routes to `index.html`.

## Exact configuration values to replace

All business-specific settings are centralised in `src/data.js`, in the `BUSINESS` object:

- `phoneDisplay`: replace `01274 XXX XXX` with the confirmed public telephone number.
- `phoneHref`: add the matching `tel:` URI, for example `tel:+441274123456`. Leave empty until the number is real.
- `email`: replace `hello@example.com` with the confirmed business email.
- `emailHref`: add the matching `mailto:` URI. Leave empty until the address is real.
- `address`: replace `Bradford, West Yorkshire` only if a public business address is confirmed. Do not add a private address without permission.
- `serviceArea`: currently limited to `Bradford`; add other locations only when coverage is confirmed.
- `hours`: replace `Operating hours to be confirmed` with the actual opening/response schedule. The business name contains “24 7”, but that name alone is not evidence of confirmed operating hours.
- `formEndpoint`: add the HTTPS endpoint that accepts the form's `FormData` POST request. Until configured, the form remains validated but a valid submission displays a clear not-connected message. No success message is shown without a successful HTTP response.
- `socialLinks`: add only confirmed official social profile URLs if needed.

The contact page displays recognisable placeholders as text. It does not create working telephone or email links until the corresponding `*Href` setting is configured.

## Contact form connection

The form validates name, contact details, service type and message in the browser. Configure `BUSINESS.formEndpoint` to a real HTTPS endpoint that accepts a `multipart/form-data` POST and returns a successful 2xx response. Review the endpoint's spam protection, data handling, retention and privacy terms before launch. The project does not include a pretend submission or local-only success state.

## Privacy policy — details to complete

`/privacy-policy` is a configurable draft, not legal advice. Before publishing, the business operator should confirm:

- The legal identity and contact details of the data controller.
- The lawful basis for each purpose of processing.
- The form processor/hosting provider and any other recipients.
- Actual retention periods and deletion procedures.
- Any analytics, cookies, embedded third-party content or tracking added after this build.
- A process for handling data-subject requests and complaints.

If the form is connected to an external provider, update the privacy notice to name that provider and accurately describe the data flow. If analytics or non-essential cookies are introduced, assess consent and cookie-notice requirements before launch.

## Scope and content notes

- Residential customers only: household lock changes, home lockouts, lost/stolen/broken/stuck keys, jammed household locks and doors, uPVC/composite multipoint mechanisms, and residential window locks.
- No commercial, automotive, safe, CCTV, alarm, shop-shutter or unrelated security service pages are included.
- No invented reviews, ratings, credentials, insurance claims, memberships, response-time promises, fixed prices or guarantees are used.
- Bradford is the only stated service location.
- Supplied local WebP assets are used; no competitor images are hotlinked.
