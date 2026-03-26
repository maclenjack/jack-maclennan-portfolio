import { test } from '@playwright/test';

/**
 * Test environment for Home page.
 * @remarks
 * Sets up testing environment for Home page tests by navigating to the page before each test.
 *
 * @includeExample tests/e2e/Home.spec.ts[7]
 * @source
 *
 */
export const homeTest = test.extend<{ forEachTest: void }>({
  forEachTest: [
    async ({ page }, use) => {
      await page.goto('http://localhost:3000');
      await page.waitForURL('http://localhost:3000');
      await use();
    },
    { auto: true }
  ]
});
