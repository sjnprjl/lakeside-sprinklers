// @ts-check
import { defineConfig, fontProviders } from "astro/config";

const basePath = process.env.NODE_ENV === "production" ? "/lakeside-sprinklers" : "";

// https://astro.build/config
export default defineConfig({
  site: "https://sjnprjl.github.io",
  base: basePath,
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
      },
      {
        provider: fontProviders.google(),
        name: "Poppins",
        cssVariable: "--font-poppins",
      },
    ],
  },
});
