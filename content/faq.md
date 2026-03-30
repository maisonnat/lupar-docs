---
title: Preguntas Frecuentes
date: 2026-03-30
tags: [faq, questions, support]
---

# Preguntas Frecuentes

## ¿Qué es Shadow AI?

Shadow AI es el uso de herramientas de inteligencia artificial dentro de una organización sin que el equipo de compliance o los responsables lo sepan o lo gestionen. Incluye desde empleados usando ChatGPT para tareas cotidianas hasta equipos completos dependiendo de herramientas de IA sin evaluación formal. Leé más en [[shadow-ai-detection]].

## ¿Lupar envía datos afuera?

**No.** Nunca. Lupar funciona completamente dentro de tu navegador usando `chrome.storage.local`. No hay servidor, no hay API, no hay backend. Tus datos no salen de tu computadora. Para más detalles, leé [[zero-cloud-architecture]] y [[privacy-first]].

## ¿Qué regulaciones cubre?

Lupar cubre tres marcos regulatorios:

- **EU AI Act** — 8 artículos clave. Leé [[eu-ai-act]].
- **ISO 42001** — 5 controles AIMS. Leé [[iso-42001]].
- **Colorado SB 205** — 5 requisitos. Leé [[colorado-sb205]].

Cada herramienta se evalúa contra las tres regulaciones simultáneamente. Ver [[compliance-tracking]].

## ¿Necesito instalar algo en servidores?

No. Lupar es una extensión de Chrome. La instalás en el navegador y listo. No hay componente de servidor, no hay agent que instalar, no hay acceso a la red corporativa necesario. Ver [[zero-cloud-architecture]].

## ¿Cómo se actualiza la lista de dominios?

Lupar incluye una base de datos integrada de más de 500 dominios de servicios de IA conocidos. La lista se actualiza con cada nueva versión de la extensión. Cuando Chrome actualiza las extensiones automáticamente, recibís la lista más reciente.

## ¿Puedo agregar dominios propios?

Sí. En la sección de [[settings]], podés agregar dominios personalizados con su categoría. Lupar los monitoreará igual que cualquier otro dominio de la lista. También podés excluir dominios que no querés que se monitoreen.

## ¿El reporte sirve para auditorías?

Sí. Los [[reports]] de Lupar están diseñados específicamente para auditorías. Son archivos HTML autocontenidos con portada, inventario, mapa de cumplimiento y resumen de riesgos. Los auditores pueden abrirlos en cualquier navegador sin necesidad de instalar nada. Para preparar una auditoría, leé [[how-to-prepare-for-audit]].

## ¿Qué pasa si desinstalo Lupar?

Los datos almacenados en `chrome.storage.local` se eliminan automáticamente al desinstalar la extensión. Por eso es fundamental hacer backups regulares. Ver [[how-to-backup-restore]] y [[data-storage]].

## ¿Es compatible con Firefox o Edge?

Actualmente Lupar es una extensión de Chrome y funciona en navegadores basados en Chromium (Chrome, Brave, Arc). La compatibilidad con Edge está planificada. Firefox no está en el roadmap inmediato. Ver [[roadmap]].

## ¿Cuántos dominios monitorea?

Lupar monitorea más de 500 dominios de servicios de IA conocidos, organizados en categorías (chatbots, generadores de imágenes, herramientas de código, etc.). La lista se expande con cada actualización. Ver [[shadow-ai-detection]].

## ¿Puedo usarlo en múltiples equipos?

Cada instalación de Lupar es independiente. No hay sincronización automática entre dispositivos. Para transferir datos entre equipos, usá la función de backup/restore en [[settings]]. Leé [[how-to-backup-restore]] para instrucciones.

## ¿Qué costo tiene?

Consultá la página oficial de Lupar en el Chrome Web Store para información de precios actualizada.

## ¿Cómo empiezo a usar Lupar?

1. Instalá la extensión desde el Chrome Web Store. Ver [[installation]].
2. Configurá los datos de tu organización. Ver [[how-to-configure-organization]].
3. Navegá normalmente — Lupar detecta las herramientas de IA automáticamente.
4. Evaluá las herramientas detectadas. Ver [[how-to-assess-a-tool]].
5. Generá tu primer reporte. Ver [[how-to-generate-compliance-report]].

## ¿Tengo más preguntas?

Si tenés una pregunta que no está en esta lista, consultá el [[glossary]] para definiciones de términos o explorá las secciones de [[features]] y [[guides]].
