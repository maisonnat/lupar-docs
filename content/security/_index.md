---
title: Seguridad y Privacidad
date: 2026-03-30
tags: [security, privacy, trust, overview]
---

# Seguridad y Privacidad

La seguridad no es una feature de Lupar: es su arquitectura fundamental. Desde el primer día, Lupar fue diseñado bajo un principio simple: **tus datos nunca salen de tu navegador**.

> [!note] Confianza por diseño
> Sabemos que los compliance officers manejan información sensible sobre las herramientas y prácticas de IA de sus organizaciones. Por eso construimos Lupar con un modelo de confianza que no depende de promesas, sino de arquitectura.

## Tres pilares de seguridad

### [[zero-cloud-architecture]]

Sin backend, sin APIs externas, sin servidor. Todo funciona dentro de tu navegador usando `chrome.storage.local`. Comparado con herramientas cloud que almacenan datos en servidores de terceros, Lupar elimina completamente el riesgo de brechas externas.

### [[privacy-first]]

Sin telemetría, sin analytics, sin tracking. No hay Google Analytics, no hay Mixpanel, no hay píxel de seguimiento. No compartimos datos con nadie porque no hay canal de comunicación. Literalmente no podemos.

### [[data-storage]]

Los datos se almacenan en tres claves dentro de `chrome.storage.local`. Formato JSON, legible, auditable. Si borrás la extensión, los datos desaparecen. Si hacés backup, vos controlás dónde se guarda.

## Por qué esto importa para el compliance

Las regulaciones de IA ([[eu-ai-act]], [[iso-42001]], [[colorado-sb205]]) no solo exigen que gestiones el uso de IA, sino que también protejas la información relacionada con esa gestión. Usar una herramienta de compliance que a su vez envía datos a terceros sería contradictorio.

Con Lupar, no necesitás evaluar la herramienta de compliance como un riesgo en sí misma. No hay datos que se muevan, no hay superficies de ataque externas, no hay vectores de fuga.

> [!tip] Evaluá tus herramientas de compliance
> La próxima vez que evalúes una herramienta de compliance, preguntá: "¿Dónde se almacenan mis datos?" Si la respuesta involucra servidores cloud, APIs externas o terceros, evaluá si esa herramienta misma necesita estar en tu inventario de IA.

## Preguntas frecuentes

**¿Lupar envía datos por internet?** No. Nunca. Ver [[zero-cloud-architecture]].

**¿Quién puede ver mis datos?** Solo vos. Los datos están en tu navegador. Ver [[privacy-first]].

**¿Qué pasa si desinstalo Lupar?** Los datos se borran del navegador. Por eso es importante hacer backups. Ver [[data-storage]] y [[how-to-backup-restore]].

**¿Puedo auditar qué datos tiene Lupar?** Sí. Exportá un backup JSON y revisá el contenido. Todo es legible. Ver [[data-storage]].
