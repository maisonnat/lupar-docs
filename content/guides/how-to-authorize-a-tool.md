---
title: Cómo autorizar una herramienta
date: 2026-03-30
tags: [guides, how-to, authorize, inventory]
---

# Cómo autorizar una herramienta de IA

Autorizar una herramienta significa que tu organización ha evaluado la herramienta, determinado que su uso es aceptable y documentado la decisión. Es el paso final del proceso de gestión de IA.

> [!note] Autorizar ≠ Ignorar
> Autorizar una herramienta no es hacer la vista gorda. Es una decisión documentada que dice: "Evaluamos esta herramienta, entendemos sus riesgos, y determinamos que puede usarse con las mitigaciones apropiadas."

## ¿Cuándo autorizar?

Autorizá una herramienta cuando:

- La evaluación de [[compliance-tracking]] está completa o razonablemente avanzada.
- El nivel de [[risk-assessment]] fue revisado y aceptado.
- Las notas documentan el razonamiento detrás de la autorización.
- Las mitigaciones necesarias (si las hay) están implementadas.

> [!warning] No autorices sin evaluar
> Cambiar el estado a "Autorizado" sin haber completado la evaluación de cumplimiento genera un riesgo de cumplimiento en sí mismo. Si un auditor pregunta por qué una herramienta fue autorizada sin evaluación, no vas a tener una respuesta sólida.

## Paso a paso

### Paso 1: Asegurate de haber evaluado la herramienta

Antes de autorizar, completá la evaluación siguiendo [[how-to-assess-a-tool]]. Verificá que:

- Los requisitos regulatorios relevantes estén evaluados.
- El nivel de riesgo sea correcto.
- Las notas estén completas.

### Paso 2: Abrí la herramienta en el inventario

Navegá al [[inventory]] y seleccioná la herramienta que querés autorizar.

![Selección de herramienta en inventario](assets/screenshots/guides/select-tool-authorize.png)

### Paso 3: Cambiá el estado a "Autorizado"

En el modal de detalle, buscá el selector de estado y cambiá de "Detectado" o "Confirmado" a **"Autorizado"**.

![Cambio de estado a Autorizado](assets/screenshots/guides/change-status-authorized.png)

### Paso 4: Documentá la decisión

Antes de guardar, agregá una nota explicando la autorización:

- **Por qué** se autoriza (uso legítimo, riesgo mitigado, etc.)
- **Qué evaluaciones** se completaron
- **Qué mitigaciones** están en su lugar (si aplica)
- **Quién** aprobó la autorización

> [!tip] Sé específico
> Una nota como "Autorizado por Juan Pérez, Compliance Lead. Herramienta de bajo riesgo usada para generación de imágenes en marketing. Cumplimiento EU AI Act evaluado: 6/8 artículos completos, 2 no aplicable. Sin datos personales involucrados." vale oro ante un auditor.

### Paso 5: Guardá los cambios

Hacé clic en **"Guardar"**. La herramienta ahora aparece con estado "Autorizado" en el inventario, con indicador verde.

## Qué significa para el cumplimiento

Una herramienta autorizada:

- Se refleja como "gestionada" en los [[reports]]
- Ya no suma puntos de riesgo por falta de evaluación
- Aparece en el mapa de cumplimiento con su estado documentado
- Se incluye en el feed de actividad del [[dashboard]]

## Revisión periódica

La autorización no es permanente. Las condiciones cambian:

- La herramienta puede actualizar sus funcionalidades.
- Nuevas regulaciones pueden aplicar.
- El uso dentro de la organización puede evolucionar.

> [!info] Reevaluación
> Te recomendamos revisar las herramientas autorizadas al menos una vez por trimestre. Verificá que la evaluación sigue siendo válida y actualizá las notas si es necesario.

## Relacionado

- [[inventory]] — Gestión del inventario de herramientas
- [[compliance-tracking]] — Evaluación de cumplimiento regulatorio
- [[how-to-dismiss-false-positive]] — Cuándo descartar en lugar de autorizar
