import { en } from "./en";
import { es } from "./es";
import type { Locale, SiteContent } from "./types";

export const siteContent: Record<Locale, SiteContent> = { es, en };

export * from "./types";
