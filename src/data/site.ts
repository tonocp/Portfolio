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
      "Antes de dedicarme al software, pasé <b>más de 15 años como electromecánico</b> en el sector de la automoción. Ese oficio me enseñó una forma de trabajar muy concreta: diagnosticar antes de actuar, entender el sistema completo antes de tocar una pieza, y no dar nada por resuelto hasta comprobarlo.",
      "Es el mismo enfoque que aplico hoy a la ingeniería de software: entender bien el problema, antes de escribir la primera línea de código.",
      "En producción, he corregido y refactorizado sistemas críticos —incluyendo el sistema de mensajería ICARS de un aeropuerto, para un cliente del sector de la aviación— y liderado proyectos de IoT en la industria del vino en mi tierra natal, La Rioja. Ahora mismo dirijo un equipo pequeño en un proyecto para una marca de equipos de protección individual; ya mentorizaba en el taller, y sigo haciéndolo hoy, como ingeniero de software senior."
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
    body: "Si buscas un perfil como este para tu equipo, aquí me encuentras.",
    links: [
      { label: "GitHub", href: "https://github.com/tonocp" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/tcarrascosa" },
      { label: "Email", href: "mailto:amcp88@gmail.com" },
      { label: "Teléfono", href: "tel:+34620100398" }
    ]
  }
} as const;
