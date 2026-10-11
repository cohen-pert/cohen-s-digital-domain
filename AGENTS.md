# Architecture rules
- Keep the site a React/Vite SPA with only the homepage and catch-all route; static SEO and favicon files live in public so they bypass React Router.
- Keep portfolio content, shared motion controls, and section rendering in the portfolio modules; this separates factual data from presentation and keeps redesigns manageable.
- Use global semantic color tokens and existing shadcn controls, with Radix Sheet for drawer focus and keyboard handling; this maintains theme consistency and accessibility.
- Apply reduced-motion preferences to canvas, counters, reveals, timeline transitions, card effects and parallax; this keeps all content usable without animation.
- Keep metadata in the static HTML head and retain only supported factual structured data; this gives non-JavaScript crawlers accurate sitewide metadata without SSR or build changes.
