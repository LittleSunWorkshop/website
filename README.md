# Little Sun Workshop

The website home for Little Sun Workshop, a small-batch beaded jewelry brand.
This first commit establishes the project structure and a lightweight visual
starting point. Product photography, final brand copy, commerce, and customer
features will be added as the business takes shape.

## Stack

- React and TypeScript
- Next-compatible routing through vinext
- Vite development and production builds
- Cloudflare-ready output
- Plain CSS for the initial visual system

## Local development

Requirements:

- Node.js 22.13 or newer
- pnpm 11

```bash
pnpm install
pnpm dev
```

Then open the local URL printed in the terminal.

## Useful commands

```bash
pnpm dev       # Start the local development server
pnpm dev:worker # Start the Cloudflare worker preview (macOS 13.5+)
pnpm build     # Create and validate a production build
pnpm test      # Build and test the rendered homepage
pnpm lint      # Run code quality checks
```

## Project map

```text
app/
  layout.tsx      Site metadata and shared page shell
  page.tsx        Current homepage
  globals.css     Brand tokens, layout, and responsive styles
public/
  brand/          Future logos and identity assets
  products/       Future optimized product photography
db/               Optional data layer for later phases
tests/            Rendered-page checks
.openai/          Optional hosting configuration
```

## Next decisions

1. Confirm the brand story, tone, and final business name styling.
2. Gather product categories, pricing, descriptions, and photography.
3. Choose the first sales path: inquiry, Etsy links, Shopify, or a custom shop.
4. Add contact details, social accounts, policies, shipping, and care guidance.
5. Connect the domain and deploy when the first public version is ready.
