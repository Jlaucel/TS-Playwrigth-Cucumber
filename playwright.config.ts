import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'steps/**/*.ts',
});

export default defineConfig({
  testDir,
  reporter: [
    ['list'],
    ['allure-playwright', { detail: true, outputFolder: 'allure-results', suiteTitle: false }]
  ],
  use: {
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure',
  },
});
