---
title: Cómo descartar un falso positivo
date: 2026-03-30
tags: [guides, how-to, dismiss, false-positive]
---

# Cómo descartar un falso positivo

No todo lo que Lupar detecta es realmente una herramienta de IA. A veces un dominio puede estar en la lista porque ofrece funcionalidades de IA secundarias que tu equipo no usa, o porque la detección se confunde con un servicio similar. En esos casos, descartá la herramienta.

> [!note] Descartar es una decisión documentada
> Al igual que autorizar, descartar es una decisión que queda registrada. Un auditor podría preguntar por qué una herramienta fue descartada, así que siempre documentá el motivo.

## ¿Cuándo descartar?

Descartá una herramienta cuando:

- El dominio fue detectado pero tu equipo **no usa las funcionalidades de IA** del servicio.
- El servicio cambió y **ya no ofrece IA** (Lupar actualiza su lista periódicamente, pero puede haber rezago).
- La detección corresponde a un **subdominio o recurso específico** que no constituye uso de IA.
- Determinaste que la herramienta **no procesa datos relevantes** y su riesgo es despreciable.

> [!warning] No descartes por conveniencia
> Si la herramienta SÍ usa IA pero no querés evaluarla, eso es un problema. Descartarla sin justificación válida es peor que dejarla pendiente. Mejor evaluá y autorizá si corresponde.

## ¿Cómo decide Lupar qué detectar?

Lupar monitorea los dominios que visita tu navegador y los cruza con una base de datos de servicios de IA conocidos. Para entender el proceso completo, leé [[shadow-ai-detection]].

El sistema es preciso pero no infalible. Algunos escenarios comunes de falsos positivos:

- Un servicio web que **ofrece IA como feature opcional** pero tu equipo solo usa funciones tradicionales.
- Un dominio de **CDN o infraestructura** que comparte dominio con un servicio de IA.
- Un **portal educativo** que menciona IA pero no la utiliza activamente en las funciones que usás.

## Paso a paso

### Paso 1: Verificá que es un falso positivo

Antes de descartar, confirmá que la herramienta realmente no constituye uso de IA:

- ¿El servicio ofrece funcionalidades de IA?
- ¿Tu equipo usa esas funcionalidades?
- ¿El dominio pertenece al servicio de IA o es un dominio compartido?

Si la respuesta a las dos primeras es "no", es un falso positivo legítimo.

### Paso 2: Abrí la herramienta en el inventario

Navegá al [[inventory]] y seleccioná la herramienta que querés descartar.

![Selección de herramienta para descartar](assets/screenshots/guides/select-tool-dismiss.png)

### Paso 3: Cambiá el estado a "Descartado"

En el modal de detalle, cambiá el estado a **"Descartado"**.

![Cambio de estado a Descartado](assets/screenshots/guides/change-status-dismissed.png)

### Paso 4: Documentá el motivo

Esto es **crítico**. Antes de guardar, agregá una nota explicando por qué se descarta:

- **Por qué** no constituye uso de IA
- **Qué verificaste** para determinarlo
- **Quién** realizó la verificación

> [!tip] Ejemplo de nota
> "Descartado por María García, Compliance. El dominio cdn.openai.com es un CDN de infraestructura. El equipo no accede directamente a la plataforma OpenAI, solo carga recursos estáticos. Verificado con el equipo de Desarrollo el 30/03/2026."

### Paso 5: Guardá los cambios

Hacé clic en **"Guardar"**. La herramienta aparece en gris en el inventario con estado "Descartado".

## Qué pasa después

Una herramienta descartada:

- **No desaparece** del inventario — sigue visible pero marcada como descartada.
- **No afecta** la puntuación de riesgo de la organización.
- **No se incluye** como herramienta activa en los [[reports]].
- **Puede reactivarse** si volvés a detectar uso significativo.

## ¿Y si me equivoqué?

Si descartaste una herramienta por error, simplemente abrila de nuevo y cambiá el estado a "Detectado" o "Confirmado". El historial de cambios registra la corrección.

## Relacionado

- [[inventory]] — Gestión del inventario de herramientas
- [[shadow-ai-detection]] — Cómo funciona la detección de IA
- [[how-to-authorize-a-tool]] — Cuándo autorizar en lugar de descartar
