---
title: Changelog
date: 2026-03-30
tags: [changelog, releases, updates, v1.0]
---

# Changelog

## v1.0.0 — 30 de marzo de 2026

Versión inicial de Lupar. Todas las funcionalidades core están incluidas.

---

### Detección

- Motor de detección de Shadow AI basado en Service Worker
- Base de datos con más de 500 dominios de servicios de IA
- Clasificación automática por categoría (chatbot, generación de imágenes, herramientas de código, etc.)
- Detección en segundo plano sin intervención del usuario
- Throttling configurable para optimizar rendimiento
- Monitoreo continuo de la actividad del navegador

### Evaluación de riesgos

- Puntuación de riesgo automática de 0 a 100 para cada herramienta
- 4 niveles de riesgo: Prohibido, Alto, Limitado, Mínimo
- 4 umbrales de score: Bajo (0-25), Moderado (26-50), Alto (51-75), Crítico (76-100)
- Override manual con documentación de justificación
- Cálculo basado en categoría, frecuencia de uso y estado de cumplimiento

### Inventario

- Lista completa de herramientas de IA detectadas
- 4 estados: Detectado, Confirmado, Autorizado, Descartado
- Modal de detalle con información general, cumplimiento y notas
- Asignación de departamento por herramienta
- Etiquetas (tags) personalizables
- Filtros por estado, riesgo, categoría, departamento y búsqueda libre
- Registro de fecha de primera detección y último acceso
- Contador de frecuencia de acceso

### Cumplimiento regulatorio

- **EU AI Act**: 8 artículos clave (Art.4, Art.6, Art.9, Art.11, Art.12, Art.26, Art.27, Art.50)
- **ISO 42001**: 5 controles AIMS (Inventario, Evaluación riesgos, Documentación, Monitoreo, Gobernanza)
- **Colorado SB 205**: 5 requisitos (Política riesgos, Evaluación impacto, Divulgación, Declaración pública, Defensa afirmativa)
- 4 estados por requisito: Pendiente, Completo, No aplica, Vencido
- Fechas de vencimiento configurables
- Notas por requisito individual
- Porcentaje de cumplimiento por regulación y global

### Reportes

- Generación de reportes HTML autocontenidos
- Formato de archivo: `ai-compliance-report-YYYY-MM-DD.html`
- Portada con datos de la organización
- Tabla de inventario completo
- Mapa de cumplimiento visual por regulación
- Resumen de riesgos con distribución por nivel
- Sin dependencias externas (CSS y datos inline)
- Compatible con cualquier navegador moderno

### Dashboard

- Total de herramientas detectadas desglosado por estado
- Gauge de puntuación de riesgo global
- Barras de progreso de cumplimiento por regulación
- Feed de actividad reciente
- Navegación directa a secciones relevantes

### Configuración

- Datos de la organización (nombre, responsable, fecha de instalación)
- Notificaciones de badge configurables
- Dominios excluidos con soporte de comodines
- Dominios personalizados con categoría asignable
- Exportación de backup en formato JSON
- Importación de backup desde archivo JSON
- Almacenamiento 100% local en `chrome.storage.local`

### Seguridad

- Arquitectura zero-cloud sin backend
- Sin telemetría ni analytics
- Sin comunicación con servidores externos
- Datos almacenados exclusivamente en el navegador del usuario
- Archivos de backup en formato JSON legible y auditable
