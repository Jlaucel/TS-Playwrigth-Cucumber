# language: es
Característica: Búsqueda en Google

  Escenario: Detección de tráfico inusual por parte de Google (Escenario Negativo)
    Dado que abro la página de Google
    Cuando busco "Playwright Cucumber Allure"
    Entonces debo ver la pantalla de verificación de tráfico inusual
