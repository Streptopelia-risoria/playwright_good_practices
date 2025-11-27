import { test, expect } from '@playwright/test';

test.describe('Wait strategies demo', () => {
  // alap setup: a TodoMVC page-en
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
    // this URL redirects itself to .../todomvc/#/ and then renders the app
  });

  test('BAD: hard-coded timeout & weak selectors', async ({ page }) => {
    // ❌ 1) textet keres, nem robusztuus
    await page.click('text=What needs to be done?');

    // ❌ 2) generic input szelektor használata
    await page.fill('input', 'buy milk');

    // enterre vár
    await page.keyboard.press('Enter');

    // ❌ 3) a várakozás találgatáson alapszik, ahelyett hogy valóban tudná
    await page.waitForTimeout(2000);

    // ❌ 4) a locator nincs rendesen meghatározva
    const firstItem = page.locator('li').first();
    await expect(firstItem).toContainText('buy milk');
  });

  test('GOOD: auto-wait & smart selectors', async ({ page }) => {
    // ✅ határozott, szemantikus input szelektor
    const todoInput = page.getByPlaceholder('What needs to be done?');

    await todoInput.fill('buy milk');
    await todoInput.press('Enter');

    // ✅ szemantikus locator a listaelemekhez
    const firstItem = page.getByRole('listitem').first();

    // ✅ expect(...) automatikusan vár, amíg az elem a megfelelő állapotba kerül
    await expect(firstItem).toBeVisible();
    await expect(firstItem).toHaveText('buy milk');
  });
});
