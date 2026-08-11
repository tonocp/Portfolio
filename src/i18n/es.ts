import { buildStackGroups, stackPrincipal } from "./shared";
import type { SiteContent } from "./types";

export const es: SiteContent = {
  seo: {
    title: "Toño Carrascosa Prieto | Senior Software Engineer",
    description: "Portfolio de Toño Carrascosa Prieto, Senior Software Engineer - Fullstack Developer."
  },
  nav: {
    brand: "TCarrascosa.dev",
    ariaLabel: "Principal",
    menuLabel: "Menú",
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
    stackGroups: buildStackGroups({
      frontend: "Frontend",
      backend: "Backend",
      data: "Datos",
      devops: "DevOps & CI/CD",
      cloud: "Cloud",
      iot: "IoT"
    }),
    stackAriaLabelPrefix: "Tecnologías de",
    trademarkNote: "Las marcas y logotipos pertenecen a sus respectivos titulares."
  },
  projects: {
    eyebrow: "Proyectos",
    heading: "Proyectos con los que he aprendido.",
    lead: "Trabajos que muestran cómo pienso y cómo construyo.",
    coverAltPrefix: "Captura de",
    stackAriaLabelPrefix: "Tecnologías usadas en",
    secondaryLabel: "También he construido"
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos",
    body: "Si tienes un proyecto entre manos, o simplemente te apetece conectar, aquí me tienes.",
    links: [
      { label: "Email", href: "mailto:amcp88@gmail.com", icon: "email", primary: true, group: "cta" },
      { label: "Teléfono", href: "tel:+34620100398", icon: "phone", group: "cta" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/tcarrascosa", icon: "linkedin", group: "social" },
      { label: "GitHub", href: "https://github.com/tonocp", icon: "github", group: "social" }
    ]
  },
  footer: {
    builtWith: "Desarrollado con"
  }
};
