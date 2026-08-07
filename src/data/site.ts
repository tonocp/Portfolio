export const siteContent = {
  seo: {
    title: "Toño Carrascosa Prieto | Senior Software Engineer",
    description: "Portfolio de Toño Carrascosa Prieto, Senior Software Engineer - Fullstack Developer."
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
    metrics: [
      { value: "5+ años", label: "Experiencia" },
      { value: "Fullstack · DevOps", label: "Stack Tecnológico" },
      { value: "Logroño · La Rioja\nRemoto · Híbrido", label: "Ubicación" },
      { value: "Español · Nativo\nInglés · B2", label: "Idiomas" }
    ]
  },
  about: {
    title: "Distinto oficio, misma disciplina.",
    body: [
      "Durante más de <b>15 años fui electromecánico</b>. Aprendí a no cambiar una pieza sin entender antes el sistema completo, a diagnosticar antes de actuar y a comprobar cada solución antes de dar el trabajo por terminado.",
      "<b>Cambié las herramientas, no la forma de trabajar.</b>",
      "Hoy aplico esa misma disciplina a la ingeniería de software. Me gusta entender sistemas complejos, encontrar la causa real de los problemas y mejorar software que ya está en producción. He corregido y refactorizado software para el sector de la aviación, liderado proyectos de IoT para la industria vitivinícola en La Rioja y actualmente lidero técnicamente un pequeño equipo como senior software engineer."
    ]
  },
  capabilities: {
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
    stack: [
      "TypeScript",
      "Astro",
      "Angular",
      "Vue",
      "Java",
      "Spring",
      "Node.js",
      "APIs REST",
      "SQL",
      "MongoDB",
      "Docker"
    ]
  },
  contact: {
    title: "Hablemos",
    body: "Si este perfil encaja con lo que necesitas, hablemos.",
    links: [
      { label: "GitHub", href: "https://github.com/tonocp" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/tcarrascosa" },
      { label: "Email", href: "mailto:amcp88@gmail.com" },
      { label: "Teléfono", href: "tel:+34620100398" }
    ]
  }
} as const;
