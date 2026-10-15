// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

import aiRobotsTxt from "astro-ai-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }), sitemap(), aiRobotsTxt()],
  site: "https://launchpointzero.com",
  output: "static",
});