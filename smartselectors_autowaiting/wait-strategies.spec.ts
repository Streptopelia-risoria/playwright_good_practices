import { test, expect } from '@playwright/test';

test('demo waitForTimeout vs smart waiting', async ({ page }) => {
  await page.goto('/'); // uses baseURL from config

  // ide jön majd az "rossz" verzió: waitForTimeout + sima selector
  // és alá a "jó" verzió: getByRole + expect(...).toBeVisible()
});
