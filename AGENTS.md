# Automatización con Playwright

- Los escenarios Gherkin viven en `features/` y los pasos en `steps/`.
- `playwright-bdd` genera las pruebas nativas desde Gherkin. Edita `features/` o `steps/` y ejecuta `npx bddgen` antes de seleccionar pruebas con Playwright. La configuración está en `playwright.config.ts`.
- Usa `npm run qa:check` para validar sintaxis y trazabilidad. Ejecuta una prueba contra el sitio externo cuando su comportamiento sea parte de la tarea.
- Consulta [la guía ISTQB](docs/qa.md) para diseñar pruebas y [la skill de diagnóstico](.agents/skills/qa-triage/SKILL.md) para analizar fallos. Conserva los IDs y usa datos sintéticos.
- Para usar Figma, Jira, Zephyr o Slack en una tarea de QA, consulta [la guía de conexiones](docs/integraciones-qa.md) y la [skill de trazabilidad entre herramientas](.agents/skills/qa-integrations/SKILL.md).
