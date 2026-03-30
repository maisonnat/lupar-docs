---
title: Glosario
date: 2026-03-30
tags: [glossary, terms, definitions]
---

# Glosario

Términos clave usados en Lupar y en el ecosistema de compliance de IA.

---

**Shadow AI**

El uso de herramientas de inteligencia artificial dentro de una organización sin conocimiento, evaluación ni gestión formal por parte del equipo de compliance. Incluye servicios cloud como ChatGPT, Midjourney o GitHub Copilot usados sin autorización institucional. Ver [[shadow-ai-detection]].

---

**Compliance**

El estado de cumplir con las leyes, regulaciones, estándares y políticas aplicables. En el contexto de IA, se refiere a cumplir con marcos como el [[eu-ai-act]], [[iso-42001]] o [[colorado-sb205]]. Ver [[compliance-tracking]].

---

**EU AI Act**

El Reglamento de Inteligencia Artificial de la Unión Europea. Es la legislación de IA más comprehensiva del mundo, con un enfoque basado en riesgos que clasifica los sistemas de IA en cuatro niveles: prohibido, alto riesgo, limitado y mínimo riesgo. Ver [[eu-ai-act]].

---

**ISO 42001**

La norma internacional ISO/IEC 42001 para Sistemas de Gestión de Inteligencia Artificial (AIMS). Proporciona un marco para que las organizaciones gestionen la IA de forma responsable. Es una norma voluntaria pero cada vez más reconocida por reguladores. Ver [[iso-42001]].

---

**Colorado SB 205**

La Colorado Senate Bill 24-205, primera ley estatal de IA en Estados Unidos. Regula los "sistemas de decisión algorítmica de alto riesgo" y aplica a organizaciones que afectan consumidores en Colorado. Ver [[colorado-sb205]].

---

**Risk Assessment (Evaluación de riesgos)**

El proceso de identificar, analizar y evaluar los riesgos asociados con el uso de sistemas de IA. En Lupar, cada herramienta recibe una puntuación de riesgo de 0 a 100 con cuatro umbrales: Bajo, Moderado, Alto y Crítico. Ver [[risk-assessment]].

---

**Desplegador (Deployer)**

La organización o persona que utiliza un sistema de IA en el ejercicio de su actividad profesional. Distinto del proveedor (desarrollador del sistema). El EU AI Act impone obligaciones específicas al desplegador, incluyendo evaluación de riesgos y documentación. Ver [[eu-ai-act]].

---

**Proveedor (Provider)**

La organización o persona que desarrolla un sistema de IA y lo pone en el mercado, ya sea para venta o uso propio. El proveedor tiene obligaciones distintas (y generalmente mayores) que el desplegador bajo el EU AI Act.

---

**Sistema de alto riesgo**

Un sistema de IA cuya función implica un impacto significativo en la vida de las personas, como decisiones sobre empleo, crédito, salud o servicios públicos. El EU AI Act (Art.6) establece criterios específicos para esta clasificación. Ver [[risk-assessment]].

---

**Audit Trail**

Un registro cronológico de todas las acciones relevantes realizadas en un sistema. En Lupar, el activity log funciona como audit trail, registrando quién hizo qué y cuándo. Es esencial para demostrar diligencia ante auditores. Ver [[data-storage]].

---

**Compliance Checklist**

Una lista estructurada de requisitos regulatorios que deben evaluarse para cada herramienta de IA. Lupar genera checklists automáticos para EU AI Act (8 artículos), ISO 42001 (5 controles) y Colorado SB 205 (5 requisitos). Ver [[compliance-tracking]].

---

**Zero-Cloud**

Un modelo de arquitectura donde toda la operación y el almacenamiento de datos ocurre localmente, sin depender de servidores remotos o servicios cloud. Lupar es zero-cloud por diseño: no tiene backend ni APIs externas. Ver [[zero-cloud-architecture]].

---

**chrome.storage.local**

Una API de Chrome Extensions que permite a las extensiones almacenar datos de forma persistente en el navegador. Los datos sobreviven al cierre del navegador y solo son accesibles por la extensión que los creó. Lupar usa esta API para todo su almacenamiento. Ver [[data-storage]].

---

**Service Worker**

Un script que corre en segundo plano en el navegador, independiente de las páginas web. En Lupar, el Service Worker monitorea la actividad de navegación para detectar accesos a dominios de IA sin necesidad de que la extensión esté abierta. Ver [[shadow-ai-detection]].

---

**Throttling**

La técnica de limitar la frecuencia con la que se ejecuta una acción. En Lupar, el Service Worker usa throttling para no verificar cada dominio visitado en tiempo real, sino en intervalos configurados, optimizando rendimiento y recursos del navegador.
