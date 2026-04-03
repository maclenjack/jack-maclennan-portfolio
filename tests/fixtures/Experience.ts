import { test } from '@playwright/test';

/**
 * Test environment for Experience page.
 * @remarks
 * Sets up testing environment for Experience page tests by navigating to the page before each test.
 *
 * @includeExample tests/e2e/Experience.spec.ts[5]
 * @source
 */
export const experienceTest = test.extend<{ forEachTest: void }>({
  forEachTest: [
    async ({ page }, use) => {
      await page.goto('http://localhost:3000/experience');
      await page.waitForURL('http://localhost:3000/experience');
      await use();
    },
    { auto: true }
  ]
});
