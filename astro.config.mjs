// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: process.env.URL || "https://vinoth-akithon.github.io",
  base: process.env.BASE_URL || "/3d-structures/",
});
