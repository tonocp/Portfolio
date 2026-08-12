# Portfolio personal

Portfolio personal de Toño Carrascosa Prieto, reconstruido con Astro como una landing de una sola página con foco en marca personal, proyectos seleccionados y una dirección visual más cuidada. Disponible en español e inglés.

## Sobre el proyecto

Este repositorio reúne la nueva versión de mi portfolio: una web rápida, estática y mantenible, pensada para presentar mejor mi trabajo como senior software engineer y dejar una base cómoda de seguir evolucionando.

La idea no era solo migrar de tecnología, sino replantear por completo la estructura, el contenido y la estética del sitio.

## Stack

- Astro (salida estática)
- TypeScript
- Astro Content Collections, con imágenes tipadas vía `image()`
- i18n nativo de Astro (español por defecto, inglés en `/en`)
- `simple-icons` para los logotipos de tecnologías
- CSS global con diseño custom

## Desarrollo local

```bash
npm install
npm run dev
```

La aplicación quedará disponible en `http://localhost:4321`.

## Scripts disponibles

- `npm run dev`: arranca el entorno de desarrollo
- `npm run check`: valida tipos y archivos Astro
- `npm run build`: genera la versión de producción
- `npm run preview`: sirve la build localmente

## Estructura del proyecto

- `src/pages/index.astro` y `src/pages/en/index.astro`: entradas de cada idioma, ambas montan `HomePage.astro`
- `src/components/HomePage.astro`: composición de la página (hero, sobre mí, stack, proyectos, contacto) y lectura de la colección de proyectos
- `src/components/`: resto de secciones y piezas reutilizables (`HeroSection`, `AboutSection`, `CapabilitiesSection`, `StackIcon`, `ProjectsSection`, `ContactSection`, `LanguageSwitcher`)
- `src/content/projects/`: proyectos gestionados como colección tipada, con una subcarpeta por idioma (`es/`, `en/`)
- `src/content.config.ts`: esquema y loader de las content collections
- `src/i18n/`: contenido editorial y tipos, separado por idioma (`types.ts`, `shared.ts`, `es.ts`, `en.ts`, `index.ts`)
- `src/data/stackIcons.ts`: registro de iconos de tecnologías usado por `StackIcon.astro`
- `src/assets/projects/`: capturas de los proyectos, optimizadas por Astro en build
- `src/styles/global.css`: sistema visual global
- `public/`: assets estáticos que no pasan por el pipeline de build (favicon)

## Cómo actualizar contenido

Los proyectos se definen en la colección `projects` usando frontmatter tipado, con una versión por idioma (`src/content/projects/es/*.md` y `src/content/projects/en/*.md`). Para destacar uno en la home, basta con marcar `featured: true` y ajustar `order`. La portada (`cover`) apunta a un archivo en `src/assets/projects/`.

Los textos generales de la web viven en `src/i18n/es.ts` y `src/i18n/en.ts`, cada uno tipado contra `src/i18n/types.ts`, así que es fácil cambiar copies, CTAs o bloques de presentación sin tocar el layout ni el otro idioma.

## Licencia

Todos los derechos reservados (ver [`LICENSE`](./LICENSE)). Este repositorio es público solo como referencia de mi trabajo; no está permitido copiar, modificar, redistribuir ni reutilizar el código, el contenido o los assets sin permiso previo.
