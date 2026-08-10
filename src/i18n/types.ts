export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export interface NavLink {
  label: string;
  href: string;
}

export interface Action {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Capability {
  title: string;
  description: string;
}

export interface StackGroup {
  label: string;
  items: readonly string[];
}

export interface ContactLink {
  label: string;
  href: string;
  icon?: "github" | "linkedin" | "email" | "phone";
  primary?: boolean;
  group: "cta" | "social";
}

export interface SiteContent {
  seo: {
    title: string;
    description: string;
  };
  nav: {
    brand: string;
    ariaLabel: string;
    links: readonly NavLink[];
  };
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: Action;
    secondaryCta: Action;
    metricsAriaLabel: string;
    metrics: readonly Metric[];
    nowKicker: string;
    nowText: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: readonly string[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    lead: string;
    items: readonly Capability[];
    stackPrincipalLabel: string;
    stackPrincipal: readonly string[];
    stackSecondaryLabel: string;
    stackGroups: readonly StackGroup[];
    stackAriaLabelPrefix: string;
    trademarkNote: string;
  };
  projects: {
    eyebrow: string;
    heading: string;
    lead: string;
    coverAltPrefix: string;
    stackAriaLabelPrefix: string;
    secondaryLabel: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    links: readonly ContactLink[];
  };
  footer: {
    builtWith: string;
  };
}
