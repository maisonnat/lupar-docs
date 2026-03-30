---
title: "Evaluación de Riesgo"
date: 2026-03-30
tags:
  - features
  - riesgo
  - compliance
---

# Evaluación de Riesgo

El sistema de evaluación de riesgo de Lupar es el corazón de la plataforma. Cada herramienta de IA detectada recibe automáticamente un nivel de riesgo basado en su categoría funcional, lo que permite a los compliance officers priorizar esfuerzos y demostrar cumplimiento ante reguladores.

## Niveles de Riesgo

Lupar clasifica las herramientas de IA en cuatro niveles de riesgo, alineados con el enfoque proporcional del [[eu-ai-act]]:

| Nivel | Descripción | Ejemplos |
|-------|-------------|----------|
| **Prohibido** | Usos de IA que representan amenazas inaceptables | Biometría remota, puntuación social, manipulación subliminal |
| **Alto** | Sistemas que impactan derechos fundamentales | RRHH, finanzas, salud, crédito, justicia |
| **Limitado** | Sistemas con obligaciones de transparencia | Chatbots, generación de código, generación de imágenes |
| **Mínimo** | Herramientas de análisis simple sin impacto significativo | Correctores ortográficos, análisis de texto básico, herramientas de productividad |

## Asignación Automática por Categoría

Cuando Lupar detecta una nueva herramienta a través de la [[shadow-ai-detection]], el sistema consulta el mapeo interno `DEFAULT_RISK_BY_CATEGORY` para asignar el nivel de riesgo automáticamente. Este mapeo cubre las 10 categorías de IA monitoreadas y garantiza que cada herramienta reciba una clasificación inicial consistente y justificable.

> [!tip] La asignación automática está diseñada para cubrir el 90% de los casos. Siempre podés ajustar manualmente cuando el contexto lo requiera.

## Sobrescritura Manual

La clasificación automática es un punto de partida, no una sentencia. Los compliance officers pueden sobrescribir el nivel de riesgo asignado desde el modal de detalle de la herramienta en el [[inventory]]. Esto resulta esencial cuando:

- La herramienta se usa en un contexto diferente al típico de su categoría
- La organización ha implementado mitigaciones adicionales
- El riesgo real difiere del riesgo categorizado por defecto

![Selector de nivel de riesgo en el modal de detalle de herramienta](assets/screenshots/risk-level-selector.png)

## Cálculo del Score de Riesgo (0-100)

Más allá del nivel cualitativo, Lupar calcula un **score de riesgo cuantitativo** entre 0 y 100. Este score se obtiene combinando dos conjuntos de pesos:

- **RISK_WEIGHTS**: ponderan el nivel de riesgo de cada herramienta (las herramientas prohibidas contribuyen más al score global)
- **STATUS_WEIGHTS**: ponderan el estado de la herramienta (las herramientas detectadas pero no evaluadas incrementan el riesgo)

El score se actualiza en tiempo real cada vez que se añade, modifica o evalúa una herramienta.

## Umbrales de Riesgo

El score global se traduce en cuatro umbrales visuales en el [[dashboard]]:

| Umbral | Rango | Color | Significado |
|--------|-------|-------|-------------|
| **Bajo** | 0–25 | Verde | La organización gestiona adecuadamente sus herramientas de IA |
| **Moderado** | 26–50 | Amarillo | Hay herramientas que requieren atención y evaluación pendiente |
| **Alto** | 51–75 | Naranja | Herramientas de alto riesgo sin evaluar o con compliance incompleto |
| **Crítico** | 76–100 | Rojo | Presencia de herramientas prohibidas o alto riesgo sin gestión |

## Relevancia Regulatoria

Este sistema de evaluación está diseñado para satisfacer requisitos específicos de dos marcos normativos clave:

- **[[eu-ai-act]] Artículo 6**: exige la clasificación de sistemas de IA como de alto riesgo según criterios objetivos. Lupar proporciona esta clasificación automáticamente y mantiene un registro auditable de cada decisión.
- **[[iso-42001]]**: requiere una evaluación formal de riesgos de IA como parte del Sistema de Gestión de IA (AIMS). El score de Lupar y los niveles de riesgo sirven como base documentada para esta evaluación.

> [!warning] La evaluación de riesgo no es un ejercicio académico. Los reguladores esperan evidencia de que tu organización clasificó y gestionó cada herramienta de IA conscientemente. Lupar genera esa traza de auditoría automáticamente.

## Próximos Pasos

- Aprendé a evaluar una herramienta específica en [[how-to-assess-a-tool]]
- Revisá cómo el riesgo se refleja en los [[reports]]
- Entendé cómo el riesgo alimenta el [[compliance-tracking]]
