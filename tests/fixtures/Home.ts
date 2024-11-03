import { test } from '@playwright/test';

const homeTest = test.extend<{ forEachTest: void }>({
  forEachTest: [
    async ({ page }, use) => {
      await page.goto('http://localhost:3000');
      await use();
    },
    { auto: true }
  ]
});

export default homeTest;
