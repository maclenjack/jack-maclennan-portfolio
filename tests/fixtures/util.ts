import { Page, test } from '@playwright/test';

const pageTest = test.extend<{ page: Page }>({
  page: async ({ page }, use) => {
    await use(page);
  }
});

export default pageTest;
