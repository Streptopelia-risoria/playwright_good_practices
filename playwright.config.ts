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
    // no baseURL for this demo – we’ll use full URL in the test
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
