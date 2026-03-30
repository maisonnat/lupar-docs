---
title: Roadmap
date: 2026-03-30
tags: [roadmap, future, planning, features]
---

# Roadmap

Este es el plan de desarrollo de Lupar. Las funcionalidades están organizadas en fases, cada una construyendo sobre la anterior. Las fechas son estimadas y pueden cambiar.

## v1.0 — Disponible ahora

La versión actual de Lupar incluye todo lo necesario para empezar a gestionar el compliance de IA:

- **Detección** de Shadow AI con más de 500 dominios
- **Evaluación de riesgos** con puntuación 0-100 y 4 niveles
- **Inventario** de herramientas con estados y filtros
- **Cumplimiento** para EU AI Act, ISO 42001 y Colorado SB 205
- **Reportes** HTML autocontenidos
- **Dashboard** con métricas clave
- **Configuración** organizacional y backup/restore

---

## Phase 1 — Multiregulación avanzada

Profundización en el cumplimiento regulatorio con herramientas de gestión más sofisticadas.

### Configuración multiregulación

Posibilidad de activar o desactivar regulaciones individuales. Las organizaciones que solo necesitan EU AI Act no ven los checklists de ISO 42001 o Colorado SB 205. Relacionado: [[compliance-tracking]].

### Períodos de reevaluación

Configuración de períodos automáticos de reevaluación. Cuando un período vence, las evaluaciones cambian a "Vencido" y el riesgo se incrementa. Relacionado: [[risk-assessment]].

### Compliance por artículo individual

Vista detallada del estado de cada artículo, control o requisito, con progreso individual y tendencias. Relacionado: [[eu-ai-act]], [[iso-42001]], [[colorado-sb205]].

### Modo auditoría

Un modo especial que bloquea la edición y muestra solo la vista de solo lectura, ideal para compartir con auditores sin riesgo de modificación accidental. Relacionado: [[how-to-prepare-for-audit]].

---

## Phase 2 — Gobernanza y trazabilidad

Herramientas para documentar decisiones y establecer responsabilidad organizacional.

### Audit trail completo

Registro detallado de cada acción: quién, qué, cuándo, estado anterior, estado nuevo. Exportable como evidencia de auditoría. Relacionado: [[data-storage]].

### Snapshots de cumplimiento

Capturas del estado de cumplimiento en un momento específico, independientes de los reportes HTML. Permiten comparar evolución entre fechas. Relacionado: [[reports]].

### Perfil de administrador

Datos del administrador de Lupar con rol, departamento y contacto. Facilita la trazabilidad de acciones. Relacionado: [[settings]].

### Departamento obligatorio

Opción para requerir que cada herramienta tenga un departamento asignado antes de poder cambiar su estado. Relacionado: [[inventory]].

---

## Phase 3 — Proactividad y visibilidad

Funcionalidades que anticipan problemas y aumentan la visibilidad.

### Próximos vencimientos

Panel dedicado a evaluaciones próximas a vencer, con alertas configurables. Relacionado: [[dashboard]].

### Notificaciones

Sistema de notificaciones configurable: nuevas detecciones, evaluaciones vencidas, cambios de riesgo. Relacionado: [[settings]].

### Mapa de calor de riesgo

Visualización por departamento que muestra concentraciones de riesgo. Permite identificar áreas problemáticas de un vistazo. Relacionado: [[risk-assessment]], [[dashboard]].

---

## Phase 4 — Madurez operativa

Herramientas para organizaciones con programas de compliance de IA maduros.

### Timeline

Línea temporal visual de toda la actividad de IA en la organización. Facilita la narrativa ante auditores. Relacionado: [[reports]].

### Retención de datos

Configuración de políticas de retención: cuánto tiempo conservar detecciones, evaluaciones y logs. Relacionado: [[data-storage]].

### Alertas de surge

Detección de picos de uso de IA que pueden indicar cambios organizacionales significativos. Relacionado: [[shadow-ai-detection]].

### Métricas de madurez

Indicadores de madurez del programa de compliance de IA: tiempo promedio de evaluación, cobertura, consistencia. Relacionado: [[dashboard]].

### Reportes extendidos

Reportes con secciones adicionales: tendencias, comparativas, recomendaciones, métricas de madurez. Relacionado: [[reports]].

### Exportar configuración

Exportación separada de la configuración (sin datos de herramientas) para estandarizar setup entre equipos. Relacionado: [[settings]].

### Patrones de URL

Reglas basadas en patrones de URL (regex) para detectar dominios de IA con mayor precisión. Relacionado: [[shadow-ai-detection]].

### Configuración de throttle

Ajuste manual de la frecuencia de detección del Service Worker. Relacionado: [[settings]].

---

> [!info] Este roadmap es orientativo
> Las prioridades pueden cambiar según feedback de usuarios y cambios regulatorios. Si hay alguna funcionalidad que te gustaría ver, contactanos.
