import { test } from '@playwright/test';

/**
 * Test environment for individual Experience detail page.
 * @remarks
 * Sets up testing environment for Experience detail page tests by navigating to an experience page before each test.
 * Uses the first available experience id from the experience list.
 *
 * @includeExample tests/e2e/ExperienceId.spec.ts[7]
 * @source
 *
 */
export const experienceIdTest = test.extend<{ forEachTest: void }>({
  forEachTest: [
    async ({ page }, use) => {
      // First go to experience page to get an actual experience id
      await page.goto('http://localhost:3000/experience');
      await page.waitForURL('http://localhost:3000/experience');

      // Get the first experience card's link using correct semantic locators
      const cardList = page.getByRole('list', { name: 'card list' });
      const firstExperienceLink = cardList.getByRole('listitem').first().getByRole('link');
      const experienceHref = await firstExperienceLink.getAttribute('href');

      // Navigate to the experience detail page
      await page.goto(`http://localhost:3000${experienceHref}`);
      await page.waitForURL(`http://localhost:3000${experienceHref}`);

      await use();
    },
    { auto: true }
  ]
});
