export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

interface NavLink {
  label: string;
  href: string;
}

interface Action {
  label: string;
  href: string;
}

interface Metric {
  value: string;
  label: string;
}

interface Capability {
  title: string;
  description: string;
}

interface ContactLink {
  label: string;
  href: string;
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
    items: readonly Capability[];
    stack: readonly string[];
    stackAriaLabel: string;
  };
  projects: {
    eyebrow: string;
    heading: string;
    lead: string;
    coverAltPrefix: string;
    stackAriaLabelPrefix: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    links: readonly ContactLink[];
  };
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
    nowText: "Siempre aprendiendo algo nuevo y abierto a nuevos retos profesionales."
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
    title: "Stack y competencias",
    items: [
      {
        title: "Frontend",
        description: "Interfaces claras y responsive."
      },
      {
        title: "Backend y arquitectura",
        description: "Código modular y fácil de mantener."
      },
      {
        title: "Ingeniería con IA",
        description: "Uso agentes de IA (Claude Code, Codex) en mi trabajo diario."
      }
    ],
    stack: ["TypeScript", "Astro", "Angular", "Vue", "Java", "Spring", "Node.js", "APIs REST", "SQL", "MongoDB", "Docker"],
    stackAriaLabel: "Stack principal"
  },
  projects: {
    eyebrow: "Proyectos",
    heading: "Proyectos seleccionados.",
    lead: "Trabajos que muestran cómo pienso y cómo construyo.",
    coverAltPrefix: "Captura de",
    stackAriaLabelPrefix: "Tecnologías usadas en"
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos",
    body: "Si este perfil encaja con lo que necesitas, hablemos.",
    links: [
      { label: "GitHub", href: "https://github.com/tonocp" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/tcarrascosa" },
      { label: "Email", href: "mailto:amcp88@gmail.com" },
      { label: "Teléfono", href: "tel:+34620100398" }
    ]
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
    nowText: "Always learning something new and open to new professional challenges."
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
    title: "Stack & skills",
    items: [
      {
        title: "Frontend",
        description: "Clear, responsive interfaces."
      },
      {
        title: "Backend & architecture",
        description: "Modular code that's easy to maintain."
      },
      {
        title: "AI-assisted engineering",
        description: "I use AI agents (Claude Code, Codex) in my daily work."
      }
    ],
    stack: ["TypeScript", "Astro", "Angular", "Vue", "Java", "Spring", "Node.js", "REST APIs", "SQL", "MongoDB", "Docker"],
    stackAriaLabel: "Main stack"
  },
  projects: {
    eyebrow: "Projects",
    heading: "Selected projects.",
    lead: "Work that shows how I think and how I build.",
    coverAltPrefix: "Screenshot of",
    stackAriaLabelPrefix: "Technologies used in"
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk",
    body: "If this profile fits what you need, let's talk.",
    links: [
      { label: "GitHub", href: "https://github.com/tonocp" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/tcarrascosa" },
      { label: "Email", href: "mailto:amcp88@gmail.com" },
      { label: "Phone", href: "tel:+34620100398" }
    ]
  }
};

export const siteContent: Record<Locale, SiteContent> = { es, en };
