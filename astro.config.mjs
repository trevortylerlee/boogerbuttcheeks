import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 1999
  },
  site: "https://boogerbuttcheeks.com",
  integrations: [icon(), tailwind(), sitemap(), expressiveCode()]
});