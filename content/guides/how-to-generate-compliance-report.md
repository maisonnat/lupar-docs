---
title: Cómo generar un reporte de cumplimiento
date: 2026-03-30
tags: [guides, how-to, reports, audit]
---

# Cómo generar un reporte de cumplimiento

Los reportes de Lupar son documentos HTML autocontenidos que documentan el estado de cumplimiento de IA en tu organización. Generarlos toma menos de un minuto y son tu principal herramienta para auditorías y revisiones.

> [!info] Requisito previo
> Para que el reporte sea útil, necesitás haber evaluado al menos algunas herramientas en el [[inventory]]. Un reporte con todo en "Pendiente" técnicamente funciona, pero no aporta valor. Te recomendamos empezar con [[how-to-assess-a-tool]].

## Paso 1: Navegá a la pestaña Reportes

Abrí Lupar y seleccioná la sección **"Reportes"** en la navegación principal.

![Pestaña de reportes](assets/screenshots/guides/reports-tab.png)

## Paso 2: Hacé clic en "Generar reporte"

Pulsá el botón **"Generar reporte"**. Lupar recopila automáticamente todos los datos actuales:

- Inventario completo de herramientas
- Estado de [[compliance-tracking]] por regulación
- Puntuaciones de [[risk-assessment]]
- Datos de la organización (de [[settings]])

![Botón generar reporte](assets/screenshots/guides/generate-report-button.png)

## Paso 3: Revisá la vista previa

Antes de descargar, Lupar te muestra una vista previa del reporte con las métricas clave:

- Total de herramientas detectadas
- Distribución por nivel de riesgo
- Porcentaje de cumplimiento por regulación
- Herramientas con evaluaciones vencidas

Revisá que los datos tengan sentido. Si algo no cuadra, cancelá, corregí en el inventario y generá de nuevo.

> [!warning] Snapshot en el tiempo
> El reporte captura el estado exacto al momento de generarse. Cualquier cambio posterior requiere un nuevo reporte.

## Paso 4: Descargá el archivo HTML

Hacé clic en **"Descargar"**. El archivo se guarda con el formato:

```
ai-compliance-report-YYYY-MM-DD.html
```

Por ejemplo: `ai-compliance-report-2026-03-30.html`.

El archivo es completamente autocontenido: incluye estilos, datos y navegación interna. No necesita servidor ni conexión a internet para verse.

![Descarga del reporte](assets/screenshots/guides/download-report.png)

## Qué contiene el reporte

El archivo HTML incluye cinco secciones:

1. **Portada** — Nombre de organización, responsable, fecha
2. **Resumen ejecutivo** — Métricas clave de un vistazo
3. **Tabla de inventario** — Todas las herramientas con su estado y riesgo
4. **Mapa de cumplimiento** — Estado de cada requisito por regulación
5. **Resumen de riesgos** — Distribución y herramientas críticas

## Cómo compartirlo con auditores

El reporte está diseñado para ser compartido directamente:

- **Email:** Adjuntá el archivo HTML. El auditor lo abre en su navegador.
- **Pen drive:** Copialo a un medio físico para compartir offline.
- **Impresión:** Abrí en navegador y usá "Imprimir" para PDF o papel.
- **Portal del auditor:** Subí el archivo tal cual. No requiere instalación.

> [!tip] Generá reportes periódicos
> No esperes a una auditoría para generar un reporte. Hacelo mensualmente y guardá cada archivo. Esto crea un historial que demuestra diligencia continua — algo que los auditores valoran enormemente. Para más consejos, leé [[how-to-prepare-for-audit]].

## Relacionado

- [[reports]] — Descripción completa de los reportes
- [[how-to-prepare-for-audit]] — Guía de preparación para auditorías
- [[compliance-tracking]] — Cómo completar las evaluaciones previas
