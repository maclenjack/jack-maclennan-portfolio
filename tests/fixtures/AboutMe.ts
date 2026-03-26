import { test } from '@playwright/test';

/**
 * Test environment for About Me page.
 * @remarks
 * Sets up testing environment for About Me page tests by navigating to the page before each test.
 *
 * @includeExample tests/e2e/AboutMe.spec.ts[5]
 * @source
 *
 */
export const aboutMeTest = test.extend<{ forEachTest: void }>({
  forEachTest: [
    async ({ page }, use) => {
      await page.goto('http://localhost:3000/about-me');
      await page.waitForURL('http://localhost:3000/about-me');
      await use();
    },
    { auto: true }
  ]
});
