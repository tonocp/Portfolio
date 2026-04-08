export const siteContent = {
  seo: {
    title: "Toño Carrascosa | Software Engineer",
    description:
      "Portfolio personal de Toño Carrascosa. Diseño y desarrollo de experiencias web con foco en producto, claridad y ejecución full stack."
  },
  hero: {
    eyebrow: "Portfolio 2026",
    title: "Construyo productos web con criterio técnico y sensibilidad visual.",
    intro:
      "Soy Toño Carrascosa, software engineer. Me gusta transformar ideas en interfaces rápidas, sistemas mantenibles y experiencias que se sienten cuidadas de verdad.",
    primaryCta: {
      label: "Ver proyectos",
      href: "#proyectos"
    },
    secondaryCta: {
      label: "Contactar",
      href: "#contacto"
    },
    metrics: [
      { value: "10+", label: "proyectos publicados" },
      { value: "Full stack", label: "de frontend a backend" },
      { value: "Producto", label: "pensado para personas reales" }
    ]
  },
  about: {
    title: "Ingeniería, diseño y delivery en la misma conversación.",
    body: [
      "Trabajo cómodo entre frontend, backend y arquitectura. Me interesa que cada decisión técnica mejore también el resultado visual, el rendimiento y la mantenibilidad.",
      "He construido aplicaciones con Angular, Vue, TypeScript, Java, Spring y APIs de terceros. En esta nueva etapa del portfolio priorizo enseñar mejor el criterio detrás del trabajo, no solo listar tecnologías."
    ]
  },
  capabilities: {
    title: "Lo que aporto",
    items: [
      {
        title: "Frontend con intención",
        description: "Interfaces claras, responsive y con una dirección visual consistente."
      },
      {
        title: "Arquitectura pragmática",
        description: "Código modular, tipado y fácil de evolucionar sin sobreingeniería."
      },
      {
        title: "Entrega end to end",
        description: "Desde el modelado de datos hasta la última interacción visible."
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
    body:
      "Si estás montando un producto, renovando una experiencia digital o necesitas a alguien que combine ejecución y criterio, aquí me encuentras.",
    links: [
      { label: "GitHub", href: "https://github.com/tonocp" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/tcarrascosa" },
      { label: "Email", href: "mailto:amcp88@gmail.com" },
      { label: "Teléfono", href: "tel:+34620100398" }
    ]
  }
} as const;
