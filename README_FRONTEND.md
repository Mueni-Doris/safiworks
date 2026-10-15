Frontend notes — Safiworks Clean

Setup
- The frontend is a Next.js app scaffolded in this folder. Network installs may be blocked in this environment.
- Set the API base URL before running the app using environment variable `NEXT_PUBLIC_API_URL`. Example:

```bash
export NEXT_PUBLIC_API_URL=http://localhost:8080
npm install
npm run dev
```

Design notes
- Uses system sans fonts for a clean, premium feel.
- CSS lives in `src/app/globals.css` and implements gradients, shadows, rounded cards, micro-animations, and layout utilities.
- The hero, services, testimonials and nav components are in `src/components/`.

API wiring
- `src/lib/api.js` is a lightweight helper. Services grid fetches `/api/packages` and falls back to example data if the backend is unreachable.
