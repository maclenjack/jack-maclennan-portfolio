import { test } from '@playwright/test';

/** @hidden */
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
