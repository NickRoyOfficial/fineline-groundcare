# Fineline Groundcare concept

Independent website concept built from the shared React/Vite/Tailwind/shadcn starter. Home, About Us, Services, Projects, and Contact pages. All six source gallery photos and nine supporting photos are included locally; public/assets/sources.json records their provenance.

Cloudflare: Worker fineline-groundcare, main branch, root /, build command empty, deploy command npx wrangler deploy. npm ci runs prepare and builds dist. Direct page routes are emitted during build.

Development: npm ci, npm run dev. Validate with npm run check and npm run build. Use an already installed Chromium with npm run review; do not download a browser during a prospect build.

The inquiry form prepares a reviewable email draft. Visitors send it themselves. No live WordPress/backend integration is configured. Kept noindex and identified as an independent concept.
