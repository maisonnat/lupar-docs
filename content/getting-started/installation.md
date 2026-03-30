---
title: "Instalación"
date: 2026-03-30
tags:
  - getting-started
  - installation
---

# Instalación

Lupar es una extensión de **Google Chrome**. Funciona exclusivamente en este navegador por ahora.

> [!warning] Requisito
> Necesitás **Google Chrome** versión 114 o superior. Otros navegadores basados en Chromium (Edge, Brave, Arc) pueden funcionar pero no están oficialmente soportados.

---

## Opción 1: Chrome Web Store (próximamente)

En el futuro, Lupar estará disponible en la Chrome Web Store con un click. Por ahora, usá la Opción 2.

## Opción 2: Cargar como extensión desempaquetada

Esta es la forma actual de instalar Lupar. Son 5 pasos simples:

### Paso 1: Descargar los archivos

Descargá el archivo `.zip` de la última versión de Lupar y extraelo en una carpeta de tu elección.

![Carpeta de Lupar extraída del ZIP](assets/screenshots/installation/step1.png)

### Paso 2: Abrir la página de extensiones

En Chrome, navegá a `chrome://extensions/` o usá el menú: **⋮ → Más herramientas → Extensiones**.

![Página de extensiones de Chrome](assets/screenshots/installation/step2.png)

### Paso 3: Activar modo desarrollador

En la esquina superior derecha de la página de extensiones, activá el toggle **"Modo de desarrollador"**.

> [!note] ¿Qué es el modo desarrollador?
> No te asustés con el nombre. "Modo desarrollador" simplemente permite cargar extensiones que no vienen de la Chrome Web Store. No requiere conocimientos de programación ni afecta la seguridad de tu navegador.

![Toggle de modo desarrollador](assets/screenshots/installation/step3.png)

### Paso 4: Cargar la extensión

Hacé click en **"Cargar descomprimida"** (o "Load unpacked") y seleccioná la carpeta `dist/` que extrajiste en el Paso 1.

> [!tip] Seleccioná la carpeta correcta
> Asegurate de seleccionar la carpeta `dist/` adentro de la carpeta extraída, no la carpeta raíz. La carpeta `dist/` es la que contiene el archivo `manifest.json`.

![Seleccionando la carpeta dist](assets/screenshots/installation/step4.png)

### Paso 5: Verificar la instalación

Deberías ver la extensión **Lupar** en tu lista de extensiones con su ícono. Fijate el badge del ícono de Lupar en la barra de extensiones.

![Lupar instalada correctamente](assets/screenshots/installation/step5.png)

---

## Despues de instalar

1. Leé [[first-steps|Primeros pasos]] para configurar tu organización
2. Hacé el [[quick-tour|Recorrido rápido]] para conocer la interfaz

> [!warning] La extensión se mantiene
> Mientras no borres la carpeta `dist/`, la extensión seguirá funcionando. Si movés o eliminás la carpeta, vas a tener que cargarla de nuevo.
