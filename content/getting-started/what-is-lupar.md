---
title: "¿Qué es Lupar?"
date: 2026-03-30
tags:
  - getting-started
  - shadow-ai
  - compliance
---

# ¿Qué es Lupar?

## El problema: Shadow AI

**Shadow AI** es el uso de herramientas de inteligencia artificial por parte de empleados sin la autorización, supervisión ni conocimiento del área de compliance. Incluye desde un analista usando ChatGPT para procesar datos de clientes hasta un desarrollador usando Copilot para escribir código con propiedad intelectual sensible.

No es un problema técnico. Es un **problema de compliance**.

Las regulaciones actuales —EU AI Act, ISO 42001, Colorado SB 205— exigen que las organizaciones:

- **Sepan** qué sistemas de IA están usando
- **Evalúen** los riesgos de cada sistema
- **Documenten** las decisiones tomadas
- **Puedan demostrar** cumplimiento ante un auditor

Si no sabés qué IA usa tu equipo, no podés cumplir con ninguna de esas obligaciones. Punto.

## La solución: Lupar

Lupar es una extensión de navegador que **detecta automáticamente** cuando alguien en tu organización accede a una herramienta de IA. Funciona en segundo plano, sin intervenir en el flujo de trabajo, y genera un inventario completo, clasificado por riesgo y alineado con las regulaciones que te aplican.

### ¿Cómo funciona?

1. **Detección automática**: Lupar monitorea las URLs que visitás y las compara contra una base de **113+ dominios de IA** organizados en 10 categorías
2. **Evaluación de riesgo**: Cada herramienta detectada recibe un nivel de riesgo automático basado en su categoría ([[risk-assessment|más sobre evaluación de riesgos]])
3. **Seguimiento de compliance**: Para cada herramienta, Lupar genera un checklist de cumplimiento para las 3 regulaciones soportadas ([[compliance-tracking|más sobre seguimiento de compliance]])
4. **Reportes**: Generás reportes HTML auto-contenidos, listos para presentar a auditores ([[reports|más sobre reportes]])

### Las tres regulaciones

| Regulación | Alcance | Artículos/Controles |
|---|---|---|
| **EU AI Act** | Unión Europea | 8 artículos clave |
| **ISO 42001** | Internacional | 5 controles AIMS |
| **Colorado SB 205** | Colorado, EE.UU. | 5 requisitos |

> [!info] ¿Por qué estas tres?
> Son las regulaciones más relevantes para organizaciones que despliegan (deploy) sistemas de IA. El EU AI Act es la regulación más completa y la primera en el mundo. ISO 42001 es el estándar internacional de gestión de IA. Colorado SB 205 es la primera ley estatal de IA en EE.UU. y establece un precedente importante.

## La propuesta de valor

Lupar no es solo un detector de URLs. Es una **herramienta de compliance** que te permite:

- **Demostrar diligencia**: Podés probar que estás monitoreando activamente el uso de IA
- **Reducir riesgo**: Identificás herramientas de alto riesgo antes de que sean un problema
- **Ahorrar tiempo**: En lugar de inventarios manuales en Excel, todo se genera automáticamente
- **Estar preparado**: Cuando llegue la auditoría, tenés todo documentado y a un click de distancia

> [!note] Zero-Cloud, Privacy-First
> Todo esto sin que tus datos salgan del navegador. Sin servidores, sin APIs externas, sin telemetría. Leé más sobre la [[zero-cloud-architecture|arquitectura zero-cloud]].

---

**Siguiente paso**: Pasá a la [[installation|guía de instalación]] para instalar Lupar en tu navegador.
