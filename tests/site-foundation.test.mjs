import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("includes the Little Sun brand, real product photography, and Netlify setup", async () => {
  const [page, layout, formComponent, formManifest, packageJson, netlifyConfig] =
    await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("components/FirstLightForm.tsx", root), "utf8"),
    readFile(new URL("public/__forms.html", root), "utf8"),
    readFile(new URL("package.json", root), "utf8"),
    readFile(new URL("netlify.toml", root), "utf8"),
    ]);

  assert.match(page, /Little Sun Workshop/);
  assert.match(page, /Handcrafted jewelry · Phoenix, Arizona/);
  assert.match(page, /FirstLightForm/);
  assert.match(formComponent, /fetch\("\/__forms\.html"/);
  assert.match(formManifest, /data-netlify="true"/);
  assert.match(formManifest, /name="first-light"/);
  assert.match(page, /featuredPieces/);
  assert.match(layout, /handcrafted jewelry/i);
  assert.match(packageJson, /"build": "next build"/);
  assert.doesNotMatch(packageJson, /vinext|wrangler|cloudflare/i);
  assert.match(netlifyConfig, /command = "pnpm build"/);

  await Promise.all([
    access(new URL("public/brand/little-sun-workshop-logo.png", root)),
    access(new URL("public/products/golden-shell-hoops.png", root)),
    access(new URL("public/products/desert-bloom-necklace.png", root)),
  ]);
});
