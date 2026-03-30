---
title: "Seguimiento de Compliance"
date: 2026-03-30
tags:
  - features
  - compliance
  - regulaciones
---

# Seguimiento de Compliance

El seguimiento de compliance de Lupar permite evaluar cada herramienta de IA contra los requisitos específicos de tres marcos regulatorios, generando un mapa completo del estado de cumplimiento de tu organización.

## Tres Marcos Regulatorios

Lupar cubre las regulaciones más relevantes para organizaciones que utilizan IA:

### EU AI Act
El reglamento europeo de inteligencia artificial rastrea **8 artículos** específicos:
- **Art.4** – Alfabetización en IA para personal de la organización
- **Art.6** – Clasificación de sistemas de alto riesgo
- **Art.9** – Sistema de gestión de riesgos documentado
- **Art.11** – Documentación técnica del sistema
- **Art.12** – Registro y logs de operación
- **Art.26** – Obligaciones del desplegador (tu organización)
- **Art.27** – Evaluación de impacto en derechos fundamentales
- **Art.50** – Obligaciones de transparencia

### ISO 42001
El estándar internacional de gestión de IA incluye **5 controles** clave:
- **Inventario** de sistemas de IA
- **Evaluación de riesgos** IA
- **Documentación** del AIMS
- **Monitoreo** de rendimiento
- **Gobernanza** y responsabilidad

### Colorado SB 205
La ley estatal de Colorado exige **5 requisitos**:
- **Política de gestión de riesgos** documentada
- **Evaluación de impacto** antes del despliegue
- **Divulgación al consumidor** sobre uso de IA
- **Declaración pública** de uso de sistemas de alto riesgo
- **Defensa afirmativa** mediante certificación [[iso-42001]]

> [!note] Colorado SB 205 entró en vigencia en febrero de 2026. Si tu organización opera en Colorado o afecta consumidores coloradenses, debés cumplir desde ya.

## Evaluación por Herramienta

Cada herramienta en el [[inventory]] tiene una pestaña de Compliance donde se evalúa individualmente contra cada artículo, control o requisito aplicable. Los estados posibles para cada evaluación son:

| Estado | Significado | Color |
|--------|-------------|-------|
| **Pendiente** | Aún no evaluado | Amarillo |
| **Completo** | Evaluado y documentado | Verde |
| **No aplicable** | No corresponde para esta herramienta | Gris |
| **Vencido** | Requiere reevaluación | Rojo |

## Fechas de Reevaluación

El compliance no es estático. Lupar permite asignar **fechas de vencimiento** a cada evaluación, asegurando que las herramientas se reevalúen periódicamente. Cuando una evaluación vence, el sistema la marca automáticamente como "Vencida" y el score de riesgo del [[dashboard]] se incrementa.

## Alimentación de Reportes

El estado de compliance de cada herramienta alimenta directamente los [[reports]] generados. Cuando generás un reporte HTML, incluís:

- Un mapa completo de cumplimiento (regulación × artículo × herramienta × estado)
- Herramientas con evaluaciones pendientes o vencidas
- Progreso global por regulación

Esto permite a auditores y reguladores ver de un vistazo el estado de cumplimiento sin necesidad de acceder al sistema.

## Resumen en el Dashboard

El [[dashboard]] muestra un resumen visual del progreso de compliance para cada una de las tres regulaciones, con barras de progreso y contadores de evaluaciones completadas, pendientes y vencidas.

> [!tip] Establece fechas de reevaluación realistas. La buena práctica recomendada es reevaluar cada 6 meses para herramientas de alto riesgo y cada 12 meses para las de riesgo limitado o mínimo.

## Relacionado

- [[eu-ai-act]] – Detalle completo de los 8 artículos
- [[iso-42001]] – Los 5 controles del estándar
- [[colorado-sb205]] – Requisitos de Colorado
- [[how-to-assess-a-tool]] – Guía paso a paso
- [[reports]] – Cómo generar reportes
- [[dashboard]] – Métricas visuales
