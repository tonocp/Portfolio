import { buildStackGroups, stackPrincipal } from "./shared";
import type { SiteContent } from "./types";

export const en: SiteContent = {
  seo: {
    title: "Toño Carrascosa Prieto | Senior Software Engineer",
    description: "Portfolio of Toño Carrascosa Prieto, Senior Software Engineer - Full-Stack Developer."
  },
  nav: {
    brand: "TCarrascosa.dev",
    ariaLabel: "Main",
    menuLabel: "Menu",
    links: [
      { label: "About", href: "#about" },
      { label: "Stack", href: "#stack" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" }
    ]
  },
  hero: {
    eyebrow: "Senior Software Engineer",
    title: "Toño Carrascosa Prieto",
    intro:
      "I design, build and deploy software end to end, with a focus on quality, security and performance at every stage of development.",
    primaryCta: {
      label: "View projects",
      href: "#projects"
    },
    secondaryCta: {
      label: "Contact",
      href: "#contact"
    },
    metricsAriaLabel: "Quick facts",
    metrics: [
      { value: "5+ years", label: "Experience" },
      { value: "Full-Stack · DevOps", label: "Tech Stack" },
      { value: "Logroño · La Rioja\nRemote · Hybrid", label: "Location" },
      { value: "Spanish · Native\nEnglish · B2", label: "Languages" }
    ],
    nowKicker: "Right now",
    nowText: "Always learning something new, both professionally and personally."
  },
  about: {
    eyebrow: "About",
    title: "Different trade, same discipline.",
    body: [
      "For over <b>15 years I worked as an automotive electromechanic</b>. I learned never to replace a part without first understanding the whole system, to diagnose before acting, and to verify every fix before calling the job done.",
      "<b>I changed my tools, not the way I work.</b>",
      "Today I apply that same discipline to software engineering. I like understanding complex systems, finding the real root cause of problems, and improving software that's already in production. I've fixed and refactored software for the aviation sector, led IoT projects for the wine industry in La Rioja, and I currently lead a small team technically as a senior software engineer."
    ]
  },
  capabilities: {
    eyebrow: "Stack",
    title: "How I work",
    lead: "A balanced full-stack developer, focused on building an effective, reliable product at every stage.",
    items: [
      {
        title: "Frontend & Mobile",
        description:
          "User-centered interfaces for web and mobile apps, with a focus on accessibility, usability, and product vision."
      },
      {
        title: "Backend & Architecture",
        description: "Hexagonal architecture and Domain-Driven Design to build decoupled, testable backends that are easy to evolve over time."
      },
      {
        title: "DevOps & CI/CD",
        description: "CI/CD and deployment automation within an agile workflow (Scrum), geared toward continuous, iterative delivery."
      },
      {
        title: "AI-assisted development",
        description:
          "I design my own AI agents and tools, with spec-driven development, TDD, and automated tests for every feature."
      }
    ],
    stackPrincipalLabel: "Currently working with",
    stackPrincipal,
    stackSecondaryLabel: "Also worked with",
    stackGroups: buildStackGroups({
      frontend: "Frontend",
      backend: "Backend",
      data: "Data",
      devops: "DevOps & CI/CD",
      cloud: "Cloud",
      iot: "IoT"
    }),
    stackAriaLabelPrefix: "Technologies used in",
    trademarkNote: "Trademarks and logos belong to their respective owners."
  },
  projects: {
    eyebrow: "Projects",
    heading: "Projects I've learned from.",
    lead: "Work that shows how I think and how I build.",
    coverAltPrefix: "Screenshot of",
    stackAriaLabelPrefix: "Technologies used in",
    secondaryLabel: "Also built"
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk",
    body: "If you have a project in mind, or just want to connect, here I am.",
    links: [
      { label: "Email", obfuscate: "email", icon: "email", primary: true, group: "cta" },
      { label: "Phone", obfuscate: "phone", icon: "phone", group: "cta" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/tcarrascosa", icon: "linkedin", group: "social" },
      { label: "GitHub", href: "https://github.com/tonocp", icon: "github", group: "social" }
    ]
  },
  footer: {
    builtWith: "Built with"
  }
};
