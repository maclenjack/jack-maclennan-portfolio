import { Page, test } from '@playwright/test';

/**
 * @hidden
 */
export const pageTest = test.extend<{ page: Page }>({
  page: async ({ page }, use) => {
    await use(page);
  }
});
