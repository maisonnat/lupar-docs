# Lupar Docs — Knowledge Base

Knowledge base y documentación de **Lupar**, la extensión de compliance para Shadow AI.

Generado con [Quartz 4](https://quartz.jzhao.xyz). Deployado en Cloudflare Pages.

## Comandos

```bash
npm install               # Instalar dependencias
npx quartz build           # Build estático → public/
npx quartz build --serve   # Build + preview local en localhost:8080
```

## Estructura

```
content/                # Markdown con Obsidian wikilinks
├── getting-started/    # Instalación, primeros pasos, tour
├── features/           # Detección, riesgo, inventario, compliance, reportes
├── regulations/        # EU AI Act, ISO 42001, CO SB 205
├── guides/             # Guías paso a paso
├── security/           # Arquitectura, privacidad, datos
├── faq.md              # Preguntas frecuentes
├── glossary.md         # Glosario de términos
├── roadmap.md          # Roadmap de features
└── changelog.md        # Historial de versiones

quartz.config.ts       # Configuración de Quartz
quartz.layout.ts       # Layout de componentes
```

## Deploy en Cloudflare Pages

1. Conectá este repo en Cloudflare Dashboard → Pages → Connect to Git
2. Build command: `npx quartz build`
3. Build output directory: `public`
4. Production branch: `main`

## Licencia

MIT
