---
title: "Dashboard"
date: 2026-03-30
tags:
  - features
  - dashboard
  - métricas
---

# Dashboard

El dashboard es la pantalla principal de Lupar y proporciona una vista ejecutiva del estado de compliance de IA de tu organización. Está diseñado para que un compliance officer pueda evaluar la situación en menos de 30 segundos.

![Dashboard principal de Lupar](assets/screenshots/dashboard-full.png)

## Métricas Clave

El dashboard muestra cuatro bloques de información principales:

### 1. Total de Herramientas Detectadas

Un contador con el número total de herramientas de IA que Lupar ha identificado a través de la [[shadow-ai-detection]]. Este número se actualiza automáticamente cada vez que un usuario de la organización visita un nuevo dominio de IA.

### 2. Gauge de Score de Riesgo (0-100)

El indicador más importante del dashboard: un medidor visual que muestra el **score de riesgo global** de la organización, calculado en base a los datos del [[risk-assessment]].

El gauge utiliza cuatro umbrales de color:

| Rango | Color | Interpretación |
|-------|-------|----------------|
| 0–25 | Verde | Gestión adecuada – pocas herramientas sin evaluar |
| 26–50 | Amarillo | Atención necesaria – hay evaluaciones pendientes |
| 51–75 | Naranja | Riesgo significativo – herramientas de alto riesgo sin gestión |
| 76–100 | Rojo | Crítico – presencia de herramientas prohibidas o sin evaluar |

El score se calcula dinámicamente combinando `RISK_WEIGHTS` (peso por nivel de riesgo de cada herramienta) y `STATUS_WEIGHTS` (peso por estado de evaluación). Las herramientas de alto riesgo que no han sido evaluadas contribuyen significativamente más al score.

### 3. Estado de Compliance por Regulación

Tres tarjetas muestran el progreso de [[compliance-tracking]] para cada marco regulatorio:

- **[[eu-ai-act]]**: progreso sobre 8 artículos por herramienta
- **[[iso-42001]]**: progreso sobre 5 controles por herramienta
- **[[colorado-sb205]]**: progreso sobre 5 requisitos por herramienta

Cada tarjeta incluye una barra de progreso y contadores de evaluaciones completadas, pendientes y vencidas.

### 4. Actividad Reciente

Un feed de los últimos eventos relevantes en el sistema:

- **Nueva detección**: se detectó una herramienta de IA no registrada previamente
- **Riesgo clasificado**: se asignó o modificó el nivel de riesgo de una herramienta
- **Estado cambiado**: una herramienta cambió de estado (Confirmado, Autorizado, etc.)
- **Evaluación completada**: se completó la evaluación de compliance de un artículo
- **Reporte generado**: se generó un [[reports|reporte de compliance]]
- **Configuración actualizada**: se modificaron los [[settings]] de la organización

## Cómo Interpretar el Dashboard

> [!tip] Un dashboard saludable muestra: score de riesgo verde o amarillo, barras de compliance con más del 70% completado, y actividad reciente que incluye evaluaciones completadas regularmente.

Si el dashboard muestra un score rojo o naranja, el primer paso es ir al [[inventory]] y revisar las herramientas de alto riesgo que están sin evaluar. Luego, completar las evaluaciones pendientes en [[compliance-tracking]].

## Actualización en Tiempo Real

El dashboard se actualiza automáticamente cada vez que:

- Se detecta una nueva herramienta
- Se modifica el riesgo o estado de una herramienta
- Se completa una evaluación de compliance
- Se genera un reporte

No es necesario recargar la página manualmente.

## Relacionado

- [[risk-assessment]] – Cómo se calcula el score de riesgo
- [[compliance-tracking]] – Detalle del seguimiento por regulación
- [[inventory]] – Lista completa de herramientas
- [[shadow-ai-detection]] – Cómo se detectan las herramientas
- [[reports]] – Generación de reportes detallados
