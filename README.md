# Portfolio personal

Portfolio personal de Toño Carrascosa, reconstruido con Astro como una landing de una sola página con foco en marca personal, proyectos seleccionados y una dirección visual más cuidada.

## Sobre el proyecto

Este repositorio reúne la nueva versión de mi portfolio: una web rápida, estática y mantenible, pensada para presentar mejor mi trabajo como software engineer y dejar una base cómoda de seguir evolucionando.

La idea no era solo migrar de tecnología, sino replantear por completo la estructura, el contenido y la estética del sitio.

## Stack

- Astro
- TypeScript
- Astro Content Collections
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

- `src/pages/index.astro`: página principal del portfolio
- `src/components/`: secciones reutilizables de la landing
- `src/content/projects/`: proyectos gestionados como colección tipada
- `src/content.config.ts`: esquema y loader de las content collections
- `src/data/site.ts`: textos y contenido editorial principal
- `src/styles/global.css`: sistema visual global
- `public/`: assets estáticos e imágenes

## Cómo actualizar contenido

Los proyectos se definen en la colección `projects` usando frontmatter tipado. Para destacar uno en la home, basta con marcar `featured: true` y ajustar `order`.

Los textos generales de la web viven en `src/data/site.ts`, así que es fácil cambiar copies, CTAs o bloques de presentación sin tocar el layout.

## Estado actual

La versión actual ya corre sobre Astro, compila correctamente y deja preparada una base sólida para seguir refinando diseño, contenido y casos de estudio en el futuro.
