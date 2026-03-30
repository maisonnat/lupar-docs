---
title: "Inventario de Herramientas"
date: 2026-03-30
tags:
  - features
  - inventario
  - herramientas
---

# Inventario de Herramientas

El inventario es la vista centralizada de todas las herramientas de IA detectadas y gestionadas por tu organización. Funciona como el registro maestro que los auditores esperan encontrar cuando evalúan el cumplimiento del [[eu-ai-act]] Art.26 y los controles de inventario de [[iso-42001]].

![Tabla de inventario de herramientas](assets/screenshots/inventory-table.png)

## Vista de Tabla

El inventario se presenta como una tabla con las siguientes columnas:

| Columna | Descripción |
|---------|-------------|
| **Herramienta** | Nombre de la herramienta de IA |
| **Categoría** | Categoría funcional (chatbot, generación de código, análisis, etc.) |
| **Nivel de Riesgo** | Clasificación de [[risk-assessment]] (Prohibido, Alto, Limitado, Mínimo) |
| **Estado** | Estado de gestión dentro del inventario |
| **Departamento** | Área de la organización que la utiliza |

## Estados de Herramienta

Cada herramienta pasa por un ciclo de vida con cuatro estados posibles:

### Detectado
La herramienta fue identificada automáticamente por la [[shadow-ai-detection]] cuando un usuario accedió al dominio. Este es el estado inicial de toda herramienta nueva. Indica que la herramienta está presente pero aún no ha sido revisada por el equipo de compliance.

### Confirmado
Un compliance officer ha revisado la detección y verificado que la herramienta es legítima y efectivamente está en uso. La herramienta pasa a formar parte formal del inventario de IA de la organización.

### Autorizado
La herramienta ha sido evaluada y aprobada para uso dentro de la organización. Esto implica que se han completado las evaluaciones de [[compliance-tracking]] pertinentes y que el riesgo residual es aceptable. Ver [[how-to-authorize-a-tool]] para el proceso completo.

### Descartado
La detección fue un falso positivo o la herramienta ya no está en uso. Las herramientas descartadas no se incluyen en los cálculos de riesgo ni en los [[reports]] de compliance. Ver [[how-to-dismiss-false-positive]].

## Modal de Detalle

Al hacer clic en una herramienta se abre un modal con tres pestañas:

### Pestaña Details
- Número total de visitas
- Fecha de primera detección
- Fecha de última actividad
- Categoría y nivel de riesgo (editable)
- Estado actual

![Modal de detalle de herramienta](assets/screenshots/tool-detail-modal.png)

### Pestaña Compliance
Lista los requisitos de cada regulación ([[eu-ai-act]], [[iso-42001]], [[colorado-sb205]]) aplicables a la herramienta con su estado de evaluación. Desde aquí se puede acceder a la evaluación individual de cada artículo o control. Ver [[compliance-tracking]].

### Pestaña Notes
Espacio para que el compliance officer documente observaciones, justificaciones de sobrescritura de riesgo, o cualquier contexto relevante para auditorías futuras.

## Filtrado y Búsqueda

El inventario incluye herramientas de filtrado por:

- **Categoría**: filtrar por tipo de herramienta de IA
- **Estado**: ver solo herramientas detectadas, confirmadas, autorizadas o descartadas
- **Nivel de riesgo**: concentrarse en herramientas de alto riesgo o prohibidas

Además, el campo de búsqueda permite encontrar herramientas por nombre de forma instantánea.

> [!tip] Usá el filtro de estado "Detectado" regularmente para identificar nuevas herramientas que aún no han sido revisadas. Cada herramienta sin revisar incrementa el score de riesgo del [[dashboard]].

## Importancia Regulatoria

El inventario responde a requisitos explícitos de múltiples regulaciones:

- **[[eu-ai-act]] Art.26**: obligación del desplegador de mantener un inventario de sistemas de IA
- **[[iso-42001]]**: control de inventario de sistemas de IA
- **[[colorado-sb205]]**: documentación de herramientas de IA de alto riesgo

Un inventario completo y actualizado es la base sobre la cual se construyen todas las demás actividades de compliance.

## Relacionado

- [[shadow-ai-detection]] – Cómo se detectan las herramientas
- [[risk-assessment]] – Clasificación de riesgo
- [[how-to-authorize-a-tool]] – Autorizar una herramienta
- [[how-to-dismiss-false-positive]] – Descartar detecciones incorrectas
- [[compliance-tracking]] – Evaluación regulatoria por herramienta
