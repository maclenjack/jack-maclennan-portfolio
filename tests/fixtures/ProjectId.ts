import { test } from '@playwright/test';

/**
 * Test environment for individual Project detail page.
 * @remarks
 * Sets up testing environment for Project detail page tests by navigating to a project page before each test.
 * Uses the first available project id from the projects list.
 *
 * @includeExample tests/e2e/ProjectId.spec.ts[7]
 * @source
 *
 */
export const projectIdTest = test.extend<{ forEachTest: void }>({
  forEachTest: [
    async ({ page }, use) => {
      // First go to projects page to get an actual project id
      await page.goto('http://localhost:3000/projects');
      await page.waitForURL('http://localhost:3000/projects');

      // Get the first project card's link using correct semantic locators
      const cardList = page.getByRole('list', { name: 'card list' });
      const firstProjectLink = cardList.getByRole('listitem').first().getByRole('link');
      const projectHref = await firstProjectLink.getAttribute('href');

      // Navigate to the project detail page
      await page.goto(`http://localhost:3000${projectHref}`);
      await page.waitForURL(`http://localhost:3000${projectHref}`);

      await use();
    },
    { auto: true }
  ]
});
