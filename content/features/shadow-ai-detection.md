---
title: "Detección de Shadow AI"
date: 2026-03-30
tags:
  - features
  - detection
  - shadow-ai
---

# Detección de Shadow AI

La detección es el corazón de Lupar. Sin saber qué herramientas de IA usa tu equipo, no hay gestión de riesgo ni compliance posible.

---

## ¿Cómo funciona?

Lupar monitorea las URLs que visitás en el navegador y las compara contra una **base de datos de 113+ dominios de IA**. La comparación se hace completamente en tu navegador — no hay llamadas a servidores externos.

### Mecanismo de detección

1. Cada vez que navegás a una página, Lupar verifica si el dominio coincide con alguno de los dominios de IA conocidos
2. La verificación usa un sistema de **throttling** (máximo una verificación cada 5 segundos por dominio) para no afectar el rendimiento
3. Si hay coincidencia, se registra la detección en el inventario con timestamp, categoría y riesgo inicial
4. El **badge** del ícono se actualiza mostrando el total de detecciones

> [!info] Detección sin fricción
> El proceso es completamente invisible. No hay popups, no hay alertas intrusivas, no hay impacto en la velocidad de navegación. Solo se registra la detección para que vos, como compliance officer, la revisés después.

---

## Las 10 categorías de IA

Lupar clasifica los dominios de IA en **10 categorías**. Cada categoría tiene asociada un nivel de riesgo por defecto que se usa para la [[risk-assessment|evaluación automática de riesgos]].

| # | Categoría | Ejemplos | Riesgo por defecto |
|---|---|---|---|
| 1 | **Chatbots y asistentes conversacionales** | ChatGPT, Claude, Gemini, Perplexity | Alto |
| 2 | **Generación de código** | GitHub Copilot, CodeWhisperer, Tabnine | Alto |
| 3 | **Generación de imágenes** | DALL-E, Midjourney, Stable Diffusion | Limitado |
| 4 | **Generación de video y audio** | Synthesia, ElevenLabs, Runway | Limitado |
| 5 | **Generación y edición de texto** | Jasper, Copy.ai, Grammarly AI | Limitado |
| 6 | **Análisis de datos y BI con IA** | Julius AI, Obviously AI, Akkio | Alto |
| 7 | **Automatización y agentes** | Zapier AI, AutoGPT, AgentGPT | Alto |
| 8 | **Búsqueda y recuperación con IA** | Perplexity, You.com, Phind | Limitado |
| 9 | **Diseño y creatividad asistida** | Canva AI, Figma AI, Adobe Firefly | Mínimo |
| 10 | **Productividad y oficina con IA** | Notion AI, Microsoft Copilot, Google Duet | Limitado |

> [!note] ¿Por qué estas categorías?
> La clasificación sigue la lógica del EU AI Act: las herramientas que procesan datos sensibles o toman decisiones automatizadas reciben un riesgo más alto. Los chatbots y herramientas de código son "Alto" porque suelen usarse con datos internos. Las herramientas de diseño son "Mínimo" porque generalmente no procesan datos sensibles.

---

## Detección en la práctica

Cuando un miembro de tu equipo navega a `chat.openai.com`, Lupar:

1. Identifica el dominio como perteneciente a la categoría **Chatbots**
2. Crea una entrada en el [[inventory|inventario]] con estado **"Detectado"**
3. Asigna automáticamente el nivel de riesgo **Alto**
4. Genera los checklists de [[compliance-tracking|compliance]] pendientes para las 3 regulaciones
5. Registra la detección en el activity log

Todo esto en menos de un segundo, sin intervención humana.

---

## Actualización de dominios

La lista de dominios se actualiza con cada nueva versión de Lupar. También podés agregar [[settings|dominios personalizados]] para herramientas internas o de nicho que no estén en la base de datos.

> [!warning] No es un proxy ni un firewall
> Lupar detecta, no bloquea. Si necesitás bloquear acceso a herramientas de IA, necesitás una solución de red (como un proxy o firewall). Lupar complementa esas soluciones dándote visibilidad del uso real.

---

**Relacionado**: [[risk-assessment|Evaluación de riesgos]] · [[inventory|Inventario]] · [[eu-ai-act|EU AI Act]]
