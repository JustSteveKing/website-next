import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.juststeveking.uk/',
  experimental: {
    assets: true,
    viewTransitions: true
  },
  integrations: [mdx(), tailwind(), sitemap(), partytown(), prefetch(), compress()]
});