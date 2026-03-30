---
title: Privacidad Primero
date: 2026-03-30
tags: [security, privacy, gdpr, data-protection]
---

# Privacidad Primero

Lupar no recopila, no envía, no comparte y no almacena datos fuera de tu navegador. No es una política de privacidad negociable: es una limitación técnica. Literalmente no podemos acceder a tus datos aunque quisiéramos.

> [!note] No es una promesa, es arquitectura
> Muchas herramientas dicen "tu privacidad es importante". Nosotros vamos más allá: nuestra arquitectura hace imposible acceder a tus datos. No hay canal de comunicación, no hay endpoint, no hay base de datos remota.

## Lo que NO hacemos

### Sin telemetría

Lupar no envía datos de uso, rendimiento o errores a ningún servidor. No hay SDK de telemetry, no hay crash reporter, no hay heartbeat.

### Sin analytics

No usamos Google Analytics, Mixpanel, Amplitude, PostHog ni ningún otro servicio de analytics. No hay píxeles de seguimiento, no hay fingerprinting, no hay tracking.

### Sin datos de terceros

No compartimos datos con terceros porque no hay mecanismo para hacerlo. No hay integraciones que envíen datos externos. No hay webhooks. No hay API pública.

### Sin cookies

Lupar no usa cookies. Los datos se almacenan en `chrome.storage.local`, que es un almacenamiento local propio de la extensión, no un cookie del navegador.

### Sin identificación de usuario

Lupar no te pide crear cuenta, no te pide email, no te pide nombre. No hay sistema de autenticación. No hay perfil de usuario. La configuración de "Persona responsable" es un campo de texto libre que vos completás y que nunca sale de tu navegador.

## Alineación con GDPR

Aunque Lupar no procesa datos personales de manera automatizada, el diseño se alinea con los principios del GDPR:

| Principio GDPR | Cómo aplica Lupar |
|----------------|-------------------|
| **Minimización de datos** | Solo almacena lo necesario: dominios detectados, evaluaciones y configuración |
| **Finalidad limitada** | Los datos sirven exclusivamente para el cumplimiento de IA |
| **Almacenamiento limitado** | Los datos permanecen solo mientras la extensión esté instalada |
| **Transparencia** | Todo es auditable vía backup JSON |
| **Control del titular** | Vos decidís cuándo exportar, importar o eliminar |

> [!tip] Auditá vos mismo
> Exportá un backup desde [[settings]] y abrí el archivo JSON. Vas a ver exactamente qué datos tiene Lupar. No hay nada oculto, no hay metadatos secretos, no hay "datos de uso" escondidos.

## ¿Qué datos almacena Lupar exactamente?

Solo tres categorías de información, todas en `chrome.storage.local`:

1. **Detecciones de IA** (`ai_discoveries`) — Dominios detectados, categoría, frecuencia, fechas.
2. **Configuración** (`app_settings`) — Nombre de org, responsable, dominios excluidos.
3. **Activity log** (`activity_log`) — Historial de acciones dentro de Lupar.

Para detalles completos, leé [[data-storage]].

## Por qué esto es importante

Cuando evaluás herramientas de compliance, estás manejando información sensible sobre las prácticas de IA de tu organización. Si esa información se envía a un servidor externo:

- El proveedor de la herramienta **podría acceder** a tus datos.
- Un atacante **podría interceptar** los datos en tránsito.
- Un breach en el servidor **podría exponer** tu inventario de IA.

Con Lupar, esos escenarios simplemente no existen. Tu inventario de IA, tus evaluaciones de riesgo y tu estado de cumplimiento están donde deben estar: bajo tu control.

> [!warning] Evaluá todas tus herramientas
> Aplicá el mismo estándar de privacidad a todas las herramientas que usás. Si tu herramienta de compliance envía datos a terceros, esa herramienta misma debería estar en tu inventario de IA con una evaluación de riesgo correspondiente.

## Relacionado

- [[zero-cloud-architecture]] — Arquitectura sin servidor
- [[data-storage]] — Detalles técnicos del almacenamiento local
