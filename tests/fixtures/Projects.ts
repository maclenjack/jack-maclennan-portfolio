import { test } from '@playwright/test';

/**
 * Test environment for Projects page.
 * @remarks
 * Sets up testing environment for Projects page tests by navigating to the page before each test.
 *
 * @includeExample tests/e2e/Projects.spec.ts[7]
 * @source
 *
 */
export const projectsTest = test.extend<{ forEachTest: void }>({
  forEachTest: [
    async ({ page }, use) => {
      await page.goto('http://localhost:3000/projects');
      await page.waitForURL('http://localhost:3000/projects');
      await use();
    },
    { auto: true }
  ]
});
