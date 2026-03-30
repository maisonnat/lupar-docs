---
title: Arquitectura Zero-Cloud
date: 2026-03-30
tags: [security, architecture, zero-cloud, local]
---

# Arquitectura Zero-Cloud

Lupar funciona completamente dentro de tu navegador. No tiene backend, no llama a APIs externas, no sincroniza con la nube. Es una extensión de Chrome que hace todo su procesamiento localmente.

> [!info] Zero-cloud significa literalmente cero cloud
> No es "cloud mínima" ni "cloud seguro". Es **cero**. No hay servidor de Lupar. No hay base de datos de Lupar. No hay función Lambda de Lupar. Tu navegador es el único lugar donde existen los datos.

## Cómo funciona

```
┌─────────────────────────────────────────┐
│           TU NAVEGADOR                  │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │     Lupar (Extensión Chrome)    │   │
│  │                                 │   │
│  │  ┌───────────────────────────┐  │   │
│  │  │   chrome.storage.local    │  │   │
│  │  │                           │  │   │
│  │  │  • ai_discoveries         │  │   │
│  │  │  • app_settings           │  │   │
│  │  │  • activity_log           │  │   │
│  │  └───────────────────────────┘  │   │
│  │                                 │   │
│  │  ┌───────────────────────────┐  │   │
│  │  │    Service Worker         │  │   │
│  │  │  (detección en background)│  │   │
│  │  └───────────────────────────┘  │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ❌ Sin conexión a servidores externos  │
│  ❌ Sin APIs de terceros               │
│  ❌ Sin telemetry ni analytics         │
└─────────────────────────────────────────┘
```

## Comparación con alternativas cloud

| Aspecto | Lupar (Zero-Cloud) | Herramientas Cloud |
|---------|-------------------|-------------------|
| **Almacenamiento** | chrome.storage.local | Servidores del proveedor |
| **Procesamiento** | Local en el navegador | Servidor remoto |
| **Datos en tránsito** | Ninguno | HTTPS al servidor |
| **Superficie de ataque** | Solo el navegador | Servidor + API + DB + CDN |
| **Acceso de terceros** | Imposible | Posible (proveedor, hosting) |
| **Brecha de datos** | No aplica | Riesgo real |
| **Dependencia de internet** | Ninguna | Total |
| **Latencia** | Cero | Variable |

> [!warning] El riesgo de las herramientas cloud de compliance
> Paradójicamente, muchas herramientas de compliance de IA envían datos sobre tu uso de IA a sus propios servidores. Esto significa que la herramienta de compliance se convierte en otro punto de fuga de datos. Con Lupar, ese riesgo es cero por diseño.

## Por qué esto importa para el compliance

### EU AI Act — Art. 12 (Logs)

El [[eu-ai-act]] exige que los desplegadores mantengan registros de actividad. Con Lupar, esos registros nunca salen de tu control. No hay riesgo de que un proveedor de cloud los exponga, los pierda o los use para sus propios fines.

### ISO 42001 — Control A.3 (Documentación)

La [[iso-42001]] requiere documentación del sistema de gestión de IA. Al estar todo local, la documentación está bajo tu control total. No dependés de la disponibilidad de un servidor ajeno.

### GDPR

Aunque Lupar no procesa datos personales directamente, el enfoque [[privacy-first]] se alinea con los principios del GDPR: minimización de datos, almacenamiento local y control del titular.

## Limitaciones

El enfoque zero-cloud tiene implicaciones que debés conocer:

- **No hay sincronización automática** entre dispositivos. Usá [[how-to-backup-restore]] para transferir datos.
- **No hay acceso multiusuario** simultáneo. Cada instancia es independiente.
- **Los datos se pierden si desinstalás** la extensión sin backup. Ver [[data-storage]].

> [!tip] Mitigá las limitaciones
> La falta de sincronización se resuelve con backups regulares. Exportá semanalmente y guardá en un repositorio seguro de la organización. Es un pequeño esfuerzo por un control total sobre tus datos.

## Relacionado

- [[privacy-first]] — Nuestra política de privacidad
- [[data-storage]] — Detalles técnicos del almacenamiento
- [[settings]] — Opciones de backup y configuración
