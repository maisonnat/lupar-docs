---
title: Cómo prepararse para una auditoría
date: 2026-03-30
tags: [guides, how-to, audit, preparation, compliance]
---

# Cómo prepararse para una auditoría de IA

Una auditoría de IA puede parecer intimidante, pero con Lupar y un poco de preparación, vas a estar listo. Esta guía te lleva a través de los pasos para que llegues al día de la auditoría con confianza.

> [!note] La clave es la anticipación
> Una auditoría no se prepara la noche anterior. Es un proceso continuo de evaluación, documentación y revisión. Si usás Lupar regularmente, ya estás haciendo gran parte del trabajo.

## Paso 1: Evaluá todas las herramientas

El primer requisito de cualquier auditor es saber **qué IA usás**. Abrí el [[inventory]] y verificá:

- **No queden herramientas en estado "Detectado"** — Cada una debe estar confirmada, autorizada o descartada.
- **Las evaluaciones de [[compliance-tracking]] estén completas** — Idealmente al 100% (completas o no aplicables).
- **Los niveles de [[risk-assessment]] estén actualizados** — Con overrides justificados donde corresponda.

> [!warning] Herramientas pendientes = bandera roja
> Si un auditor ve herramientas en "Detectado" sin evaluar, la primera pregunta va a ser "¿Por qué no evaluaron esto?". No hay buena respuesta. Evaluá todo antes de la auditoría.

Para cada herramienta, seguí el proceso de [[how-to-assess-a-tool]].

![Estado del inventario antes de auditoría](assets/screenshots/guides/pre-audit-inventory.png)

## Paso 2: Generá un reporte actualizado

El día antes de la auditoría (o el mismo día), generá un reporte actualizado:

1. Navegá a la sección de [[reports]].
2. Hacé clic en "Generar reporte".
3. Revisá la vista previa.
4. Descargá el archivo HTML.

Para el proceso completo, leé [[how-to-generate-compliance-report]].

> [!tip] Generá dos copias
> Una para vos (digital) y otra impresa o en PDF. Algunos auditores prefieren papel, otros digital. Tené ambas opciones.

## Paso 3: Revisá la puntuación de riesgo

Mirá el gauge de riesgo en el [[dashboard]]:

- **0-25 (Bajo):** Posición cómoda. El auditor va a ver que hay gestión activa.
- **26-50 (Moderado):** Aceptable, pero prepará explicaciones para las herramientas de riesgo alto.
- **51-75 (Alto):** Necesitás documentar por qué hay riesgo alto y qué mitigaciones existen.
- **76-100 (Crítico):** Esto requiere una explicación detallada. Esperá preguntas difíciles.

Para cada herramienta con riesgo Alto o Crítico, prepará una explicación:

- **Por qué** tiene ese nivel de riesgo.
- **Qué evaluación de cumplimiento** se realizó.
- **Qué mitigaciones** están en su lugar.
- **Qué plan de acción** existe para reducir el riesgo.

## Paso 4: Prepará la evidencia

Los auditores quieren ver evidencia, no solo afirmaciones. Reuní:

### Documentación de evaluación

- Los [[reports]] generados por Lupar.
- Notas detalladas en cada herramienta del inventario.
- Justificaciones para estados "No aplica".
- Documentación de overrides de riesgo.

### Políticas y procedimientos

- Política de gestión de IA de la organización.
- Procedimientos de autorización de herramientas.
- Criterios para descartar falsos positivos.

### Evidencia de capacitación

- Registros de capacitación en IA (requisito del Art.4 del [[eu-ai-act]]).
- Quién fue capacitado, cuándo y en qué temas.

### Timeline de gestión

- El historial de actividad de Lupar muestra cuándo se evaluó cada herramienta.
- Un patrón de evaluación regular demuestra diligencia continua.

![Checklist de preparación para auditoría](assets/screenshots/guides/audit-checklist.png)

## Paso 5: Entendé qué esperan los auditores

Los auditores de IA generalmente evalúan:

1. **Visibilidad** — ¿La organización sabe qué IA usa?
2. **Evaluación** — ¿Se evaluaron los riesgos de cada herramienta?
3. **Documentación** — ¿Hay evidencia de las evaluaciones?
4. **Mitigación** — ¿Se tomaron acciones para reducir riesgos?
5. **Continuidad** — ¿La gestión es continua o fue un esfuerzo puntual?

Lupar te ayuda con las cinco. El inventario responde a la visibilidad. El [[compliance-tracking]] responde a la evaluación. Los [[reports]] responden a la documentación. Las notas y etiquetas responden a la mitigación. Y el historial de actividad responde a la continuidad.

> [!tip] Sé proactivo, no reactivo
> Mostrá el reporte antes de que lo pidan. Un compliance officer que llega con documentación lista transmite confianza y preparación.

## Relacionado

- [[reports]] — Generación de reportes
- [[compliance-tracking]] — Seguimiento de cumplimiento
- [[risk-assessment]] — Evaluación de riesgos
- [[how-to-assess-a-tool]] — Cómo evaluar cada herramienta
