// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:9000');
  await page.screenshot({path: 'test-results/screenshot-main.png'});
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Fortytwo | Home/);
});

test('check category Migration', async ({ page }) => {
  await page.goto('http://localhost:9000/categories/Migration/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Understanding the lifecycle of file-migration' }).click();
  await page.screenshot({path: 'test-results/screenshot-migration.png'});
  await page.waitForURL('**/understanding-lifecycle-of-file-migration/');
  // Expects the URL to contain posts.
  await expect(page).toHaveURL(/.*understanding-lifecycle-of-file-migration/);
});
