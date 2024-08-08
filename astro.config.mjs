import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";
import expressiveCode, { ExpressiveCodeTheme } from "astro-expressive-code";

import fs from "node:fs";

const jsoncString = fs.readFileSync(
  new URL("public/ttl-theme.jsonc", import.meta.url),
  "utf-8",
);
const ttlTheme = ExpressiveCodeTheme.fromJSONString(jsoncString);

// https://astro.build/config
export default defineConfig({
  server: {
    port: 1999,
  },
  site: "https://boogerbuttcheeks.com",
  integrations: [
    icon(),
    tailwind(),
    sitemap(),
    expressiveCode({
      themes: [ttlTheme],
      styleOverrides: {
        borderRadius: "0",
        codeFontFamily: "IntelOneMono",
        uiFontFamily: "Verdana",
      },
    }),
  ],
});
