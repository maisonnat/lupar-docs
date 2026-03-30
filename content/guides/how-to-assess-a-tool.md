---
title: Cómo evaluar una herramienta
date: 2026-03-30
tags: [guides, how-to, assessment, compliance]
---

# Cómo evaluar una herramienta de IA

Evaluar una herramienta es el proceso central de Lupar. Consiste en revisar su información, evaluar su cumplimiento regulatorio y documentar las decisiones. Esta guía te lleva paso a paso.

> [!note] Tiempo estimado: 10-15 minutos por herramienta
> La primera evaluación toma un poco más. Una vez que te familiaricés con el proceso, vas a ser mucho más rápido.

## Paso 1: Abrí el inventario

Navegá a la sección **Inventario** en Lupar. Vas a ver la lista completa de herramientas detectadas.

![Vista del inventario de herramientas](assets/screenshots/guides/inventory-list.png)

Identificá la herramienta que querés evaluar. Las herramientas en estado "Detectado" (sin evaluar) son las que necesitan atención prioritaria.

> [!tip] Priorizá por riesgo
> Ordená el inventario por nivel de riesgo descendente. Empezá por las herramientas con riesgo "Crítico" o "Alto". Esas son las que mayor impacto tienen en tu [[compliance-tracking]].

## Paso 2: Seleccioná la herramienta

Hacé clic en la herramienta para abrir el **modal de detalle**. Acá vas a ver toda la información disponible:

- **Dominio y URL** del servicio
- **Categoría** de IA asignada
- **Nivel de riesgo** actual y puntuación
- **Fechas** de primera detección y último acceso
- **Departamento** asignado (si lo hay)

![Modal de detalle de herramienta](assets/screenshots/guides/tool-detail.png)

Revisá esta información para entender de qué herramienta se trata y cómo se usa en tu organización.

## Paso 3: Navegá a la pestaña Compliance

Dentro del modal, seleccioná la pestaña **"Cumplimiento"**. Acá vas a ver el checklist de requisitos regulatorios para la herramienta:

- **EU AI Act**: 8 artículos
- **ISO 42001**: 5 controles
- **Colorado SB 205**: 5 requisitos

![Checklist de cumplimiento](assets/screenshots/guides/compliance-tab.png)

## Paso 4: Evaluá cada requisito

Para cada artículo, control o requisito:

1. **Leé** la descripción de lo que exige.
2. **Evaluá** si tu organización cumple con ese requisito para esta herramienta.
3. **Asigná un estado:**
   - **Completo** — Se cumple con el requisito
   - **No aplica** — El requisito no es relevante para esta herramienta (agregá justificación)
   - **Pendiente** — Necesitás más información o tiempo para evaluar
4. **Agregá notas** explicando tu decisión.
5. **Configurá fecha de vencimiento** si corresponde (recomendado para estados "Pendiente").

> [!warning] "No aplica" no es un atajo
> Marcar algo como "No aplica" sin justificación no te protege ante un auditor. Siempre documentá por qué un requisito no aplica para esa herramienta específica.

## Paso 5: Revisá la evaluación de riesgo

Antes de cerrar, verificá que el nivel de [[risk-assessment]] asignado es correcto:

- ¿La categoría automática refleja el uso real?
- ¿La puntuación de riesgo tiene sentido?
- ¿Necesitás hacer un override manual?

Si ajustás el riesgo, documentá el motivo en las notas.

## Paso 6: Guardá los cambios

Hacé clic en **"Guardar"** para confirmar todas las evaluaciones. Los cambios se reflejan inmediatamente en el [[dashboard]] y estarán disponibles para los próximos [[reports]].

![Guardado exitoso de evaluación](assets/screenshots/guides/save-assessment.png)

> [!tip] Evaluá en tandas
> No intentes evaluar todas las herramientas de una vez. Dedica 30-45 minutos por sesión y evaluá 3-4 herramientas. Es más sostenible y la calidad de las evaluaciones es mejor.

## Después de evaluar

Una vez evaluada, la herramienta puede:

- **Autorizarse** → [[how-to-authorize-a-tool]]
- **Descartarse** (si es falso positivo) → [[how-to-dismiss-false-positive]]
- **Quedarse en seguimiento** si requiere más investigación
