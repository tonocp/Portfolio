export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

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
}

interface SiteContent {
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
    archiveLabel: string;
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

// Technology names are never translated — only the group labels are (e.g. "Datos" vs "Data") —
// so the item lists live here once and get paired with each locale's labels below.
const stackPrincipal = ["Java", "Spring Boot", "Vue", "Capacitor", "PostgreSQL", "GitLab CI", "Docker", "Claude", "Codex"];

const stackGroupItems = [
  ["TypeScript", "Angular", "Astro"],
  ["Node.js", "NestJS", "Python", "FastAPI"],
  ["MySQL", "MSSQL", "MongoDB"],
  ["Kubernetes", "GitHub Actions"],
  ["Google Cloud", "Azure", "AWS", "Cloudflare"],
  ["RabbitMQ", "FIWARE", "Raspberry Pi"]
];

function buildStackGroups(labels: readonly string[]): StackGroup[] {
  return labels.map((label, i) => ({ label, items: stackGroupItems[i] }));
}

const es: SiteContent = {
  seo: {
    title: "Toño Carrascosa Prieto | Senior Software Engineer",
    description: "Portfolio de Toño Carrascosa Prieto, Senior Software Engineer - Fullstack Developer."
  },
  nav: {
    brand: "TCarrascosa.dev",
    ariaLabel: "Principal",
    links: [
      { label: "Sobre mí", href: "#sobre-mi" },
      { label: "Stack", href: "#stack" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Contacto", href: "#contacto" }
    ]
  },
  hero: {
    eyebrow: "Senior Software Engineer",
    title: "Toño Carrascosa Prieto",
    intro:
      "Diseño, construyo y despliego software de principio a fin, poniendo el foco en la calidad, la seguridad y el rendimiento en cada etapa del desarrollo.",
    primaryCta: {
      label: "Ver proyectos",
      href: "#proyectos"
    },
    secondaryCta: {
      label: "Contactar",
      href: "#contacto"
    },
    metricsAriaLabel: "Ficha rápida",
    metrics: [
      { value: "5+ años", label: "Experiencia" },
      { value: "Fullstack · DevOps", label: "Stack Tecnológico" },
      { value: "Logroño · La Rioja\nRemoto · Híbrido", label: "Ubicación" },
      { value: "Español · Nativo\nInglés · B2", label: "Idiomas" }
    ],
    nowKicker: "Ahora mismo",
    nowText: "Siempre aprendiendo algo nuevo, tanto en lo profesional como en lo personal."
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Distinto oficio, misma disciplina.",
    body: [
      "Durante más de <b>15 años fui electromecánico</b>. Aprendí a no cambiar una pieza sin entender antes el sistema completo, a diagnosticar antes de actuar y a comprobar cada solución antes de dar el trabajo por terminado.",
      "<b>Cambié las herramientas, no la forma de trabajar.</b>",
      "Hoy aplico esa misma disciplina a la ingeniería de software. Me gusta entender sistemas complejos, encontrar la causa real de los problemas y mejorar software que ya está en producción. He corregido y refactorizado software para el sector de la aviación, liderado proyectos de IoT para la industria vitivinícola en La Rioja y actualmente lidero técnicamente un pequeño equipo como senior software engineer."
    ]
  },
  capabilities: {
    eyebrow: "Stack",
    title: "Cómo trabajo",
    lead: "Full stack equilibrado, centrado en construir un producto efectivo y fiable en cada etapa.",
    items: [
      {
        title: "Frontend & Mobile",
        description:
          "Interfaces centradas en el usuario para web y aplicaciones móviles, con foco en accesibilidad, usabilidad y visión de producto."
      },
      {
        title: "Backend & Arquitectura",
        description: "Arquitectura hexagonal y Domain-Driven Design para construir backends desacoplados, testables y fáciles de evolucionar con el tiempo."
      },
      {
        title: "DevOps & CI/CD",
        description: "CI/CD y automatización de despliegues dentro de un flujo ágil (Scrum), orientado a entregas continuas e iterativas."
      },
      {
        title: "IA aplicada al desarrollo",
        description:
          "Diseño mis propios agentes y herramientas de IA, con desarrollo guiado por especificaciones, TDD y tests automatizados en cada feature."
      }
    ],
    stackPrincipalLabel: "Actualmente trabajo con",
    stackPrincipal,
    stackSecondaryLabel: "También he trabajado con",
    stackGroups: buildStackGroups(["Frontend", "Backend", "Datos", "DevOps & CI/CD", "Cloud", "IoT"]),
    stackAriaLabelPrefix: "Tecnologías de",
    trademarkNote: "Las marcas y logotipos pertenecen a sus respectivos titulares."
  },
  projects: {
    eyebrow: "Proyectos",
    heading: "Proyectos con los que he aprendido.",
    lead: "Trabajos que muestran cómo pienso y cómo construyo.",
    coverAltPrefix: "Captura de",
    stackAriaLabelPrefix: "Tecnologías usadas en",
    archiveLabel: "También he construido"
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos",
    body: "Si tienes un proyecto entre manos, o simplemente te apetece conectar, aquí me tienes.",
    links: [
      { label: "Email", href: "mailto:amcp88@gmail.com", icon: "email", primary: true },
      { label: "Teléfono", href: "tel:+34620100398", icon: "phone" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/tcarrascosa", icon: "linkedin" },
      { label: "GitHub", href: "https://github.com/tonocp", icon: "github" }
    ]
  },
  footer: {
    builtWith: "Desarrollado con"
  }
};

const en: SiteContent = {
  seo: {
    title: "Toño Carrascosa Prieto | Senior Software Engineer",
    description: "Portfolio of Toño Carrascosa Prieto, Senior Software Engineer - Fullstack Developer."
  },
  nav: {
    brand: "TCarrascosa.dev",
    ariaLabel: "Main",
    links: [
      { label: "About", href: "#sobre-mi" },
      { label: "Stack", href: "#stack" },
      { label: "Projects", href: "#proyectos" },
      { label: "Contact", href: "#contacto" }
    ]
  },
  hero: {
    eyebrow: "Senior Software Engineer",
    title: "Toño Carrascosa Prieto",
    intro:
      "I design, build and deploy software end to end, with a focus on quality, security and performance at every stage of development.",
    primaryCta: {
      label: "View projects",
      href: "#proyectos"
    },
    secondaryCta: {
      label: "Contact",
      href: "#contacto"
    },
    metricsAriaLabel: "Quick facts",
    metrics: [
      { value: "5+ years", label: "Experience" },
      { value: "Fullstack · DevOps", label: "Tech Stack" },
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
    lead: "A balanced full stack developer, focused on building an effective, reliable product at every stage.",
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
    stackGroups: buildStackGroups(["Frontend", "Backend", "Data", "DevOps & CI/CD", "Cloud", "IoT"]),
    stackAriaLabelPrefix: "Technologies used in",
    trademarkNote: "Trademarks and logos belong to their respective owners."
  },
  projects: {
    eyebrow: "Projects",
    heading: "Projects I've learned from.",
    lead: "Work that shows how I think and how I build.",
    coverAltPrefix: "Screenshot of",
    stackAriaLabelPrefix: "Technologies used in",
    archiveLabel: "Also built"
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk",
    body: "If you have a project in mind, or just want to connect, here I am.",
    links: [
      { label: "Email", href: "mailto:amcp88@gmail.com", icon: "email", primary: true },
      { label: "Phone", href: "tel:+34620100398", icon: "phone" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/tcarrascosa", icon: "linkedin" },
      { label: "GitHub", href: "https://github.com/tonocp", icon: "github" }
    ]
  },
  footer: {
    builtWith: "Built with"
  }
};

export const siteContent: Record<Locale, SiteContent> = { es, en };
