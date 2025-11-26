import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // a tesztek helye
  testDir: './smartselectors_autowaiting',

  // a tesztek párhuzamos futtatásához
  fullyParallel: true,

  // HTML report
  reporter: 'html',

  // beállítások
  use: {
    baseURL: 'https://demo.playwright.dev/todomvc/',
    trace: 'on-first-retry',
  },

  // browser (egyelőre csak egy)
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
