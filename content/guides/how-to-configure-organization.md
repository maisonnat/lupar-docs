---
title: Cómo configurar la organización
date: 2026-03-30
tags: [guides, how-to, settings, organization]
---

# Cómo configurar los datos de tu organización

La configuración de la organización es el primer paso después de instalar Lupar. Son tres campos que aparecen en todos tus reportes y documentación. Tomate 2 minutos para completarlos bien.

> [!warning] Hacé esto primero
> Si generás un reporte sin configurar la organización, va a aparecer "Organización sin nombre" en la portada. No es la mejor impresión ante un auditor.

## Qué campos configurar

Navegá a la sección **[[settings]]** y completá los siguientes datos:

### Nombre de la empresa

- **Qué es:** El nombre legal o comercial de tu organización.
- **Dónde aparece:** Portada de [[reports]], encabezados de documentos, etiquetas de compliance.
- **Recomendación:** Usá el nombre legal completo para reportes formales.

### Persona responsable

- **Qué es:** El compliance officer o persona designada como responsable de la gestión de IA.
- **Dónde aparece:** Portada de reportes, campo "Responsible" en auditorías.
- **Recomendación:** Ingresá nombre completo y cargo (ej: "María García, Compliance Officer").

### Fecha de instalación

- **Qué es:** La fecha en que Lupar fue instalado en la organización.
- **Se completa automáticamente:** Lupar registra esta fecha durante la instalación.
- **Por qué importa:** Los auditores quieren saber desde cuándo está activo el monitoreo. Una fecha de instalación temprana demuestra diligencia proactiva.

![Campos de configuración de organización](assets/screenshots/guides/organization-settings.png)

## Por qué importa para los reportes

Los [[reports]] de Lupar usan estos datos en la portada y los encabezados. Un reporte con datos completos se ve profesional:

```
┌─────────────────────────────────────────┐
│  REPORTE DE CUMPLIMIENTO DE IA          │
│                                         │
│  Organización: Acme Corp S.A.          │
│  Responsable: María García, CCO        │
│  Fecha de generación: 30/03/2026       │
│  Monitoreo desde: 15/01/2026           │
└─────────────────────────────────────────┘
```

Sin configuración, se ve así:

```
┌─────────────────────────────────────────┐
│  REPORTE DE CUMPLIMIENTO DE IA          │
│                                         │
│  Organización: Sin configurar          │
│  Responsable: Sin configurar           │
│  Fecha de generación: 30/03/2026       │
│  Monitoreo desde: N/A                  │
└─────────────────────────────────────────┘
```

> [!tip] La diferencia es clara
> El primer reporte transmite seriedad y profesionalismo. El segundo genera dudas. Dos minutos de configuración hacen una diferencia enorme.

## Paso a paso

1. Abrí Lupar y navegá a **Configuración**.
2. Completá el campo **"Nombre de la organización"**.
3. Completá el campo **"Persona responsable"**.
4. Verificá que la **fecha de instalación** sea correcta.
5. Hacé clic en **"Guardar"**.

Los cambios se aplican inmediatamente. El próximo reporte que generés incluirá los datos actualizados.

## Relacionado

- [[settings]] — Todas las opciones de configuración
- [[reports]] — Descripción de los reportes de cumplimiento
- [[how-to-generate-compliance-report]] — Cómo generar tu primer reporte
