import { test, expect } from '@playwright/test';

test.describe('Tool - Rsshub code builder', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/rsshub-code-builder');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Rsshub code builder - IT Tools');
  });

  test('', async ({ page }) => {});
});
