import { defineConfig } from "astro/config";
import { defaultLocale, locales } from "./src/i18n/types.ts";

export default defineConfig({
  output: "static",
  site: "https://tcarrascosa.dev",
  i18n: {
    locales: [...locales],
    defaultLocale,
    routing: {
      prefixDefaultLocale: false
    }
  }
});
