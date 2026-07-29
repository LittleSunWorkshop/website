# Little Sun Workshop

The website for Little Sun Workshop, handcrafted jewelry made in Phoenix,
Arizona. The current version is a visually complete brand foundation with real
product photography, a Netlify-ready email signup form, and room to grow into a
full shop.

## Stack

- Next.js 16, React, and TypeScript
- Plain CSS with a project-specific visual system
- Netlify deployment from GitHub
- Netlify Forms for the early-access list
- pnpm for package management

## Local development

Requirements:

- Node.js 22
- pnpm 11

```bash
pnpm install
pnpm dev
```

Open the local URL printed in the terminal.

## Commands

```bash
pnpm dev       # Start local development
pnpm build     # Create a production build
pnpm test      # Check the site foundation and required assets
pnpm lint      # Run code quality checks
```

## Project map

```text
app/
  page.tsx              Homepage composition and copy
  globals.css           Complete brand and responsive design system
  thanks/page.tsx       Netlify form confirmation page
components/
  PieceCard.tsx         Reusable product preview
  SunMark.tsx           Code-native sun accent
content/
  site.ts               Featured pieces and process copy
public/
  __forms.html          Static Netlify Forms detection manifest
  brand/                Brand artwork
  products/             Product photography
netlify.toml             GitHub-to-Netlify build configuration
```

## Deploying to Netlify

1. In Netlify, choose **Add new site → Import an existing project**.
2. Connect GitHub and select `LittleSunWorkshop/website`.
3. Netlify will read `netlify.toml`; no build settings should need changing.
4. Deploy the `main` branch.
5. Add the final domain in **Domain management**, then point the domain’s DNS
   records to the values Netlify provides.

Do not change DNS until the Netlify preview is approved and the custom domain
has been added to the site.

## Next decisions

1. Confirm final product names, prices, materials, and availability.
2. Add the maker’s name and full workshop story.
3. Choose the sales path: Netlify-hosted storefront, Shopify, Etsy, or inquiry.
4. Add Instagram, contact details, shipping, returns, and jewelry care.
5. Create a final favicon and social sharing card from the approved brand art.
