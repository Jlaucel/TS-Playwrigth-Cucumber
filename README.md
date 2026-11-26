# Playwright + Cucumber + Allure Reports

This project is a modern, robust End-to-End (E2E) testing automation framework built around **Playwright**, integrated with **Cucumber** for Behavior-Driven Development (BDD), and utilizing **Allure** for advanced test reporting. The framework is written in **TypeScript** and leverages `playwright-bdd` for native integration with the Playwright test runner.

## Advantages of this Tech Stack

Combining these specific technologies creates a highly efficient, scalable, and maintainable testing environment. Here is why they work so well together:

**1. Playwright (The Core E2E Engine)**
*   **Advantage:** Playwright is designed for modern web testing. It offers native multi-browser support (Chromium, Firefox, WebKit), auto-waiting, and runs out-of-process, which completely eliminates the flakiness found in traditional WebDriver tools. It also handles multiple contexts and tabs flawlessly.

**2. Cucumber / Gherkin (Behavior-Driven Development)**
*   **Advantage:** Test scenarios are written in plain-text Gherkin syntax (`.feature` files) using Given/When/Then steps.
*   **Business Alignment:** This serves as "living documentation" that is easily readable by non-technical stakeholders (Product Managers, Business Analysts, QA, and Developers), bridging the communication gap between business requirements and technical implementation.

**3. playwright-bdd (Native Integration)**
*   **Advantage:** Instead of using external test runners, `playwright-bdd` generates native Playwright tests from Cucumber feature files. This means we get all the benefits of Cucumber while retaining Playwright's native features like parallel execution, tracing, automatic screenshots, and video recording on failure without complex configurations.

**4. TypeScript (Type Safety & Developer Experience)**
*   **Advantage:** Writing the step definitions and Playwright configurations in TypeScript catches errors at compile-time rather than run-time. It provides excellent IDE support (like rich autocomplete and inline documentation), making the test codebase easier to refactor and scale securely as the project grows.

**5. Allure Report (Advanced Test Reporting)**
*   **Advantage:** Standard console outputs can be hard to interpret. `allure-playwright` generates highly visual, detailed, and interactive HTML reports.
*   **Visibility:** It provides a clear dashboard showing test pass rates, execution times, and historical trends. When a test fails, Allure automatically attaches Playwright's screenshots and videos directly to the specific failed step in the report, making debugging significantly easier.

## Instalación

Las dependencias pueden ser instaladas usando npm:
```bash
npm install
npx playwright install
```

## Ejecución

- **Ejecutar pruebas:**
  ```bash
  npm test
  ```
  *Esto primero generará los tests nativos desde los archivos `.feature` y luego los ejecutará usando Playwright.*

- **Ver el Reporte de Allure:**
  ```bash
  npm run report
  ```
  *Esto procesará los archivos de `allure-results` y abrirá tu navegador con el reporte detallado.*

## Automatización asistida por IA

La [guía de pruebas](docs/qa.md) reúne las prácticas ISTQB de diseño y gestión de riesgos, las skills de Codex y los hooks para orientar el diagnóstico. Ejecuta `npm run qa:check` para validar Gherkin y trazabilidad o `npm run qa:triage` después de una ejecución con resultados Allure.
