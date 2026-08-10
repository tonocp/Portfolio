import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://tcarrascosa.dev",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false
    }
  }
});
