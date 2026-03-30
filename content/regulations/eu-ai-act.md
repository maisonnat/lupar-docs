---
title: "EU AI Act"
date: 2026-03-30
tags:
  - regulations
  - eu-ai-act
  - union-europea
---

# EU AI Act

El Reglamento (UE) 2024/1689 del Parlamento Europeo, conocido como EU AI Act, es el primer marco regulatorio comprehensivo para la inteligencia artificial a nivel mundial. Entró en vigor el 1 de agosto de 2024 con implementación progresiva. Establece obligaciones para proveedores y desplegadores de sistemas de IA basadas en el nivel de riesgo.

## Los 8 Artículos que Lupar Rastrea

Lupar permite evaluar cada herramienta de IA contra los artículos más relevantes para organizaciones desplegadoras:

### Art.4 – Alfabetización en IA

**Qué exige**: Las organizaciones deben asegurar que su personal que trabaja con sistemas de IA tenga un nivel adecuado de alfabetización en IA, incluyendo conocimiento sobre los riesgos y limitaciones de la tecnología.

**Cómo ayuda Lupar**: El [[inventory]] y los [[reports]] proporcionan documentación que puede usarse como material de capacitación, mostrando qué herramientas se usan, sus riesgos y el estado de gestión.

### Art.6 – Clasificación de Sistemas de Alto Riesgo

**Qué exige**: Los sistemas de IA deben clasificarse como de alto riesgo si se utilizan en áreas críticas (RRHH, crédito, salud, justicia, etc.) según los criterios del Anexo III.

**Cómo ayuda Lupar**: El sistema de [[risk-assessment]] asigna automáticamente niveles de riesgo basados en la categoría de la herramienta, con el nivel "Alto" mapeado directamente al criterio del Art.6.

### Art.9 – Sistema de Gestión de Riesgos

**Qué exige**: Los desplegadores de sistemas de alto riesgo deben implementar un sistema de gestión de riesgos documentado que identifique, analice y mitigue los riesgos.

**Cómo ayuda Lupar**: El score de riesgo 0-100, los niveles de riesgo por herramienta y el [[dashboard]] constituyen un sistema documentado de gestión de riesgos con trazabilidad completa.

### Art.11 – Documentación Técnica

**Qué exige**: Mantener documentación técnica actualizada de los sistemas de IA de alto riesgo desplegados.

**Cómo ayuda Lupar**: Los [[reports]] HTML autocontenidos generan documentación técnica del inventario con información de cada herramienta, su riesgo y su estado de compliance.

### Art.12 – Registro y Logs

**Qué exige**: Los sistemas de alto riesgo deben mantener logs de operación automáticamente.

**Cómo ayuda Lupar**: El feed de actividad en el [[dashboard]] y los datos de detección (primera visita, última visita, número de visitas) constituyen un registro auditable del uso de IA.

### Art.26 – Obligaciones del Desplegador

**Qué exige**: Los desplegadores deben usar sistemas de alto riesgo de acuerdo con las instrucciones, designar personal competente, y monitorizar el funcionamiento.

**Cómo ayuda Lupar**: El [[inventory]] completo con estados (Detectado, Confirmado, Autorizado) demuestra que la organización está monitorizando activamente sus sistemas de IA.

### Art.27 – Evaluación de Impacto en Derechos Fundamentales

**Qué exige**: Antes de desplegar un sistema de alto riesgo, los desplegadores deben realizar una evaluación de impacto en los derechos fundamentales.

**Cómo ayuda Lupar**: El flujo de [[compliance-tracking]] permite documentar la evaluación de impacto para cada herramienta antes de marcarla como Autorizada.

### Art.50 – Transparencia

**Qué exige**: Los desplegadores deben informar a las personas cuando interactúan con un sistema de IA, especialmente para chatbots y sistemas de generación de contenido.

**Cómo ayuda Lupar**: El inventario identifica herramientas de categorías sujetas a obligaciones de transparencia (chatbots, generadores de imágenes) para que la organización pueda implementar las divulgaciones necesarias.

## Tabla de Mapeo Artículo - Funcionalidad Lupar

| Artículo | Funcionalidad Lupar |
|----------|-------------------|
| Art.4 Alfabetización | [[inventory]], [[reports]] |
| Art.6 Clasificación alto riesgo | [[risk-assessment]] |
| Art.9 Gestión de riesgos | [[risk-assessment]], [[dashboard]] |
| Art.11 Documentación | [[reports]] |
| Art.12 Logs | [[dashboard]], actividad |
| Art.26 Obligaciones desplegador | [[inventory]], [[compliance-tracking]] |
| Art.27 Impacto derechos | [[compliance-tracking]], [[how-to-assess-a-tool]] |
| Art.50 Transparencia | [[inventory]], categorías |

> [!important] El EU AI Act aplica a cualquier organización que despliegue sistemas de IA dentro de la Unión Europea, independientemente de dónde esté constituida. Si tu empresa sirve clientes europeos, debés cumplir.

## Relacionado

- [[compliance-tracking]] – Evaluación por herramienta
- [[reports]] – Generación de documentación
- [[iso-42001]] – Estándar complementario
- [[colorado-sb205]] – Legislación estadounidense
- [[how-to-prepare-for-audit]] – Preparación para auditoría
- [[how-to-assess-a-tool]] – Evaluación paso a paso
