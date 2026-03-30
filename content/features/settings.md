---
title: "Configuración"
date: 2026-03-30
tags:
  - features
  - configuración
  - settings
---

# Configuración

La página de configuración de Lupar permite personalizar la herramienta según las necesidades de tu organización. Desde aquí se gestiona la identidad corporativa, los dominios monitoreados y la protección de datos.

![Página de configuración de Lupar](assets/screenshots/settings-page.png)

## Datos de la Organización

El primer bloque de configuración permite definir la identidad de tu organización:

- **Nombre de la empresa**: se utiliza en la portada de los [[reports]] y en toda la documentación generada
- **Persona responsable**: el compliance officer o responsable designado para la gestión de IA
- **Fecha de instalación**: cuándo se comenzó a utilizar Lupar

> [!important] Estos datos aparecen en los reportes de compliance que se comparten con auditores y reguladores. Completarlos correctamente es esencial para la trazabilidad y credibilidad de la documentación.

Ver la guía completa en [[how-to-configure-organization]].

## Notificaciones por Badge

Lupar puede mostrar un badge en el ícono de la extensión cuando hay eventos que requieren atención:

- Nuevas herramientas detectadas
- Evaluaciones próximas a vencer
- Cambios en el score de riesgo

Este toggle permite habilitar o deshabilitar estas notificaciones según la preferencia del equipo.

## Dominios Personalizados

### Agregar Dominios

Lupar monitorea por defecto más de 113 dominios de herramientas de IA. Sin embargo, tu organización puede utilizar herramientas internas o menos conocidas que no están en la lista predeterminada.

La sección de dominios personalizados permite agregar:

- **URL del dominio**: la dirección web de la herramienta (ej: `ai.tuempresa.com`)
- **Nombre de la herramienta**: cómo se identifica en el [[inventory]]
- **Categoría**: la categoría funcional (chatbot, generación de código, etc.)
- **Nivel de riesgo**: el riesgo inicial asignado (Prohibido, Alto, Limitado, Mínimo)

Una vez agregado, el dominio se monitorea igual que los dominios predeterminados de Lupar.

### Excluir Dominios

Si tu organización utiliza herramientas de IA que ya están gestionadas por otro sistema o que no son relevantes para el inventario de compliance, podés excluirlas. Los dominios excluidos no generan detecciones ni aparecen en el inventario.

> [!tip] Excluí dominios de herramientas de IA que tu organización ya gestiona mediante otros controles. Esto evita duplicaciones y reduce el ruido en el inventario.

## Respaldo y Restauración

Lupar almacena todos los datos localmente en el navegador (ver [[data-storage]]). Para proteger contra pérdida de datos, la configuración incluye funcionalidades de backup:

### Exportar Datos

Genera un archivo JSON con toda la información de Lupar:

- Herramientas detectadas y su metadata
- Evaluaciones de compliance
- Configuración de la organización
- Registro de actividad

### Importar Datos

Restaura un backup previo desde un archivo JSON. Esto es útil cuando:

- Se reinstala la extensión en el mismo navegador
- Se migra a otro equipo
- Se comparte la configuración entre miembros del equipo de compliance

> [!warning] Al importar un backup, los datos actuales se reemplazan completamente. Asegurate de exportar un backup reciente antes de importar.

La guía completa está en [[how-to-backup-restore]].

## Arquitectura Subyacente

Toda esta configuración se almacena de forma local sin pasar por servidores externos. Para entender por qué esto es seguro y beneficioso, ver [[zero-cloud-architecture]] y [[data-storage]].

## Relacionado

- [[how-to-configure-organization]] – Guía paso a paso
- [[how-to-backup-restore]] – Exportar e importar datos
- [[data-storage]] – Detalles técnicos del almacenamiento
- [[zero-cloud-architecture]] – Por qué no hay servidor
