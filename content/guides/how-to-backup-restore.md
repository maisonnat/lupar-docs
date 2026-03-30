---
title: Cómo hacer backup y restauración
date: 2026-03-30
tags: [guides, how-to, backup, restore, data]
---

# Cómo hacer backup y restauración

Lupar almacena todos los datos localmente en tu navegador (ver [[data-storage]]). Esto significa que sos vos quien tiene el control total de la información. Pero también significa que necesitás un plan de backup.

> [!tip] Regla de oro
> Hacé un backup cada vez que completes una evaluación importante o antes de cualquier cambio significativo. Y al menos una vez por semana como mínimo.

## Exportar un backup

### Paso 1: Navegá a Configuración

Abrí Lupar y seleccioná la sección **[[settings]]**.

### Paso 2: Buscá la sección "Backup y restauración"

En la parte inferior de la configuración, vas a ver las opciones de backup.

![Sección de backup en configuración](assets/screenshots/guides/backup-section.png)

### Paso 3: Hacé clic en "Exportar datos"

Lupar genera un archivo JSON con todo el contenido:

- **Configuración** de la organización
- **Inventario completo** de herramientas (con estados, notas, etiquetas)
- **Evaluaciones de cumplimiento** por regulación
- **Historial de actividad** (activity log)
- **Dominios personalizados y excluidos**

El archivo se descarga con un nombre descriptivo: `lupar-backup-YYYY-MM-DD.json`.

> [!info] Formato JSON legible
> El archivo es JSON plano. Podés abrirlo con cualquier editor de texto (Notepad, VS Code) y ver exactamente qué datos contiene. No hay datos ocultos ni encriptados.

## Importar un backup

### Paso 1: Navegá a Configuración → Backup

Seguí los mismos pasos que para exportar.

### Paso 2: Hacé clic en "Importar datos"

Se abre un selector de archivos. Seleccioná el archivo JSON de backup.

### Paso 3: Confirmá la importación

Lupar te muestra un resumen de lo que contiene el backup:

- Cantidad de herramientas
- Cantidad de evaluaciones
- Fecha del backup original

> [!warning] La importación reemplaza datos
> Al importar un backup, los datos actuales se reemplazan con los del archivo. Si tenés evaluaciones más recientes que el backup, se pierden. Te recomendamos exportar un backup actual antes de importar uno viejo.

### Paso 4: Verificá los datos

Después de importar, revisá el [[dashboard]] y el [[inventory]] para confirmar que todo está correcto.

## Casos de uso

### Cambio de computadora

1. Exportá el backup en la computadora vieja.
2. Instalá Lupar en la nueva.
3. Importá el backup.

### Recuperación ante pérdida

Si desinstalaste Lupar accidentalmente o borraste datos del navegador:

1. Reinstalá Lupar.
2. Importá tu último backup.
3. Todo vuelve al estado del momento del backup.

### Compartir entre equipo

Si otro compliance officer necesita los mismos datos:

1. Exportá tu backup.
2. Enviá el archivo JSON por canal seguro.
3. La otra persona importa en su instancia de Lupar.

> [!tip] Seguridad del archivo
> El archivo JSON contiene datos de tu organización. Tratalo con la misma precaución que cualquier documento confidencial. No lo compartas por canales inseguros.

## Almacenamiento recomendado

Guardá los backups en:

- Un **repositorio seguro** de la organización (SharePoint, Google Drive con acceso restringido)
- Una **carpeta encriptada** local
- Un **sistema de gestión documental** con control de versiones

Para más detalles sobre cómo Lupar almacena datos, leé [[data-storage]].

## Relacionado

- [[settings]] — Panel de configuración completo
- [[data-storage]] — Detalles técnicos del almacenamiento
