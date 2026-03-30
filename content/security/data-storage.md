---
title: Almacenamiento de Datos
date: 2026-03-30
tags: [security, data-storage, technical, chrome-storage]
---

# Almacenamiento de Datos

Esta página describe en detalle técnico cómo Lupar almacena los datos. Está pensada para compradores técnicos y equipos de seguridad que necesitan evaluar la herramienta antes de su adopción.

> [!info] Para audiencia técnica
> Si sos compliance officer y no necesitás este nivel de detalle, con saber que "todo se guarda localmente en tu navegador y nunca sale de ahí" es suficiente. Pero si tu equipo de seguridad pregunta, acá están las respuestas.

## Mecanismo de almacenamiento

Lupar utiliza **`chrome.storage.local`**, la API de almacenamiento local de extensiones de Chrome. Esto NO es:

- `localStorage` del navegador web
- `IndexedDB`
- Cookies
- Cache del navegador

Es un almacenamiento propio de la extensión, aislado por origen. Solo Lupar puede leer y escribir en su espacio de almacenamiento. Otras extensiones, sitios web o scripts no tienen acceso.

### Características

| Propiedad | Valor |
|-----------|-------|
| **Tipo** | Almacenamiento key-value de Chrome Extension API |
| **Persistencia** | Sobrevive cierre del navegador y reinicio del equipo |
| **Capacidad** | Limitado por Chrome (típicamente ~5MB, expandible con permisos) |
| **Aislamiento** | Solo accesible por Lupar |
| **Encriptación** | La que provea el SO subyacente (Chrome no encripta adicionalmente) |

## Las 3 claves de datos

Lupar organiza los datos en tres claves principales:

### `ai_discoveries`

Almacena todas las detecciones de herramientas de IA:

```json
{
  "chatgpt.com": {
    "category": "chatbot",
    "riskLevel": "high",
    "riskScore": 72,
    "status": "confirmed",
    "department": "Marketing",
    "firstDetected": "2026-01-15T10:30:00Z",
    "lastDetected": "2026-03-28T14:22:00Z",
    "accessCount": 156,
    "notes": "Uso autorizado para generación de contenido",
    "tags": ["contenido", "marketing"],
    "compliance": {
      "eu-ai-act": {
        "art4": { "status": "complete", "notes": "...", "dueDate": "..." },
        "art6": { "status": "complete", "notes": "..." }
      },
      "iso-42001": { ... },
      "co-sb205": { ... }
    }
  }
}
```

### `app_settings`

Configuración global de la aplicación:

```json
{
  "organization": {
    "name": "Acme Corp S.A.",
    "responsible": "María García, CCO",
    "installDate": "2026-01-15"
  },
  "notifications": {
    "enabled": true,
    "frequency": "daily",
    "threshold": "high"
  },
  "excludedDomains": ["internal.company.com"],
  "customDomains": [{ "domain": "...", "category": "..." }],
  "badge": { "enabled": true }
}
```

### `activity_log`

Registro de acciones realizadas dentro de Lupar:

```json
[
  {
    "timestamp": "2026-03-28T14:22:00Z",
    "action": "status_change",
    "domain": "chatgpt.com",
    "from": "detected",
    "to": "confirmed"
  },
  {
    "timestamp": "2026-03-28T14:30:00Z",
    "action": "compliance_update",
    "domain": "chatgpt.com",
    "regulation": "eu-ai-act",
    "article": "art4",
    "status": "complete"
  }
]
```

## Ciclo de vida de los datos

```
[Detección] → [Almacenamiento] → [Evaluación] → [Reporte] → [Backup/Opcional]
                                            ↓
                              [activity_log registra todo]
```

1. **Detección:** El Service Worker detecta un dominio de IA.
2. **Almacenamiento:** Se crea/actualiza la entrada en `ai_discoveries`.
3. **Evaluación:** El compliance officer evalúa la herramienta.
4. **Registro:** Cada acción se agrega al `activity_log`.
5. **Reporte:** Los datos se exportan a HTML autocontenido.
6. **Backup:** Opcionalmente, el usuario exporta un JSON con todo.

## Eliminación de datos

Los datos se eliminan en estos escenarios:

- **Desinstalación de la extensión:** Chrome elimina automáticamente todos los datos de `chrome.storage.local` asociados a la extensión.
- **Limpieza de datos de navegación:** Si el usuario selecciona "Datos de extensiones" al limpiar datos de navegación.
- **Importación de backup:** La importación reemplaza los datos actuales con los del archivo.

> [!warning] No hay recuperación automática
> Si desinstalás Lupar sin backup previo, los datos se pierden permanentemente. No hay papelera de reciclaje ni período de gracia. Configurá backups regulares con [[how-to-backup-restore]].

## Auditoría de datos

Para auditar qué datos tiene Lupar:

1. Navegá a [[settings]] → Backup.
2. Exportá el archivo JSON.
3. Abrilo con cualquier editor de texto o visor JSON.
4. Revisá las tres secciones: discoveries, settings, activity log.

No hay datos ocultos. Lo que ves en el JSON es todo lo que Lupar almacena.

## Relacionado

- [[zero-cloud-architecture]] — Por qué no hay datos en servidores
- [[privacy-first]] — Política de privacidad
- [[how-to-backup-restore]] — Exportar e importar datos
- [[settings]] — Panel de configuración
