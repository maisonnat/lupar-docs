---
title: "Primeros pasos"
date: 2026-03-30
tags:
  - getting-started
  - configuration
---

# Primeros pasos

Una vez instalada la extensión, Lupar empieza a funcionar **automáticamente**. No necesitás configurar nada para que la detección comience. Pero hay algunas configuraciones recomendadas para sacar el máximo provecho.

---

## La primera detección

Simplemente navegá como lo harías normalmente. Si visitás una página que pertenece a un dominio de IA (por ejemplo, `chat.openai.com`, `claude.ai`, `github.com/copilot`), Lupar la detecta automáticamente.

Verás que el **badge** del ícono de Lupar en la barra de extensiones se actualiza: muestra un número que indica la cantidad de herramientas de IA detectadas en la sesión actual.

![Badge de Lupar mostrando detecciones](assets/screenshots/installation/first-detection.png)

> [!tip] No hay interrupción
> Lupar no muestra popups, no bloquea páginas, no interrumpe tu trabajo. La detección es completamente silenciosa. Solo el badge te avisa que algo fue detectado.

## Configurar tu organización

Antes de generar reportes o hacer seguimiento de compliance, te recomendamos configurar los datos de tu organización:

1. Hacé click derecho en el ícono de Lupar y seleccioná **"Opciones"** (o naveá a `chrome-extension://[id]/options.html`)
2. En la sección **Configuración de la organización**, completá:
   - **Nombre de la empresa**: El nombre legal de tu organización
   - **Persona responsable**: Tu nombre o el del responsable de compliance
   - **Fecha de instalación**: Se completa automáticamente

![Página de opciones de Lupar](assets/screenshots/settings/options-page.png)

> [!info] ¿Por qué es importante?
> Estos datos aparecen en los reportes de compliance que generás. Un reporte sin datos de organización es menos útil para un auditor.

## Explorá la interfaz

Abrí el popup de Lupar haciendo click en el ícono de la extensión. Vas a ver el [[dashboard|Dashboard]] con las métricas principales.

Luego explorá las cuatro secciones:

- **[[dashboard|Dashboard]]**: Vista general de métricas y actividad reciente
- **[[inventory|Inventario]]**: Lista de todas las herramientas de IA detectadas
- **[[reports|Reportes]]**: Generación de reportes de compliance
- **[[settings|Configuración]]**: Ajustes de la organización y la herramienta

---

**Siguiente paso**: Hacé el [[quick-tour|Recorrido rápido]] para ver cada sección en detalle.
