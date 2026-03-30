---
title: "Reportes de Compliance"
date: 2026-03-30
tags:
  - features
  - reportes
  - auditoría
---

# Reportes de Compliance

Los reportes de Lupar son documentos HTML autocontenidos que capturan el estado completo de compliance de tu organización en un momento específico. Están diseñados para ser compartidos directamente con auditores, reguladores y stakeholders sin necesidad de infraestructura adicional.

## Archivos HTML Autocontenidos

Cada reporte se genera como un archivo HTML único y completamente independiente. Esto significa:

- **Sin dependencias externas**: no carga CSS, JavaScript ni imágenes de internet
- **Funciona offline**: abrilo en cualquier navegador sin conexión
- **Sin vinculación con la nube**: no hay servidor que pueda caerse o dejar de estar disponible
- **Estilo profesional**: diseño limpio y corporativo listo para presentar

El formato del nombre del archivo es:

```
ai-compliance-report-YYYY-MM-DD.html
```

Por ejemplo: `ai-compliance-report-2026-03-30.html`.

## Contenido del Reporte

Cada reporte incluye cuatro secciones principales:

### 1. Portada
- Nombre de la organización (configurado en [[settings]])
- Persona responsable del compliance
- Fecha de generación del reporte
- Resumen ejecutivo con score de riesgo global

### 2. Tabla de Inventario
Listado completo de todas las herramientas de IA detectadas con:
- Nombre de la herramienta
- Categoría funcional
- Nivel de riesgo asignado
- Estado actual (Detectado, Confirmado, Autorizado, Descartado)
- Departamento o área de uso

### 3. Mapa de Compliance
La sección más valiosa del reporte: una matriz cruzada que muestra el estado de cada requisito regulatorio para cada herramienta. Cada celda indica si la evaluación está Completa, Pendiente, No Aplicable o Vencida, organizada por regulación:

- **[[eu-ai-act]]**: 8 artículos × herramientas
- **[[iso-42001]]**: 5 controles × herramientas
- **[[colorado-sb205]]**: 5 requisitos × herramientas

Esta matriz permite a auditores identificar rápidamente gaps de compliance sin necesidad de acceso al sistema.

### 4. Resumen de Riesgo
- Score de riesgo global (0-100) con el umbral correspondiente
- Desglose por nivel de riesgo (cuántas herramientas en cada nivel)
- Herramientas que requieren atención prioritaria

## Cómo Generar un Reporte

1. Navegá a la pestaña **Reports** en la interfaz principal
2. Hacé clic en **Generate**
3. El sistema compila todos los datos actuales
4. Previsualizá el reporte en el navegador
5. Descargá el archivo HTML

> [!tip] Generá un reporte antes y después de cada ciclo de evaluación para documentar el progreso de compliance ante auditores.

## Compartir con Auditores

El reporte está diseñado para ser compartido directamente:

- **Enviá el archivo HTML por email** – el auditor lo abre en cualquier navegador
- **No requiere acceso al sistema** – toda la información está contenida en el archivo
- **No requiere instalación** – funciona en cualquier sistema operativo
- **Es inmutable** – una vez generado, refleja el estado en ese momento exacto

> [!warning] El reporte es una instantánea del estado de compliance al momento de la generación. No se actualiza automáticamente. Generá reportes frescos antes de cada auditoría.

## Sin Dependencia Cloud

A diferencia de herramientas SaaS que generan reportes alojados en la nube, los reportes de Lupar son completamente standalone. Esto garantiza privacidad total, perennidad del documento, compliance con políticas de retención de datos corporativas, y cero costo de infraestructura para acceder a reportes históricos.

## Relacionado

- [[compliance-tracking]] – Cómo se recopilan los datos que alimentan los reportes
- [[how-to-generate-compliance-report]] – Guía paso a paso
- [[how-to-prepare-for-audit]] – Preparación completa para auditorías
- [[dashboard]] – Vista previa de las métricas del reporte
