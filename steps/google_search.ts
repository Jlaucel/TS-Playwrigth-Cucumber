import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('que abro la página de Google', async ({ page }) => {
  await page.goto('https://www.google.com');
  
  // Aceptar cookies si aparece el popup (útil para Europa/Incógnito)
  const cookieButton = page.locator('button:has-text("Aceptar todo"), button:has-text("Accept all"), button:has-text("Rechazar todo")').first();
  if (await cookieButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await cookieButton.click({ force: true });
  }
});

When('busco {string}', async ({ page }, searchText: string) => {
  const searchInput = page.locator('textarea[name="q"], input[name="q"]').first();
  await searchInput.waitFor({ state: 'visible' });
  await searchInput.fill(searchText);
  await searchInput.press('Enter');
});

Then('debo ver la pantalla de verificación de tráfico inusual', async ({ page }) => {
  // Validamos que aparezca el mensaje de tráfico inusual
  const avisoElement = page.locator('text=Our systems have detected unusual traffic');
  await expect(avisoElement).toBeVisible();
  
  // Opcionalmente podemos validar el título si cambia
  // await expect(page).toHaveTitle(/Google/i);
});
