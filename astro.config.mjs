import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://tonocp.dev",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false
    }
  }
});
