import { AxeBuilder } from '@axe-core/playwright';
import { aboutMeTest } from '@fixtures/AboutMe';
import { navBarTest } from '@fixtures/NavBar';
import { expect, mergeTests } from '@playwright/test';

const test = mergeTests(aboutMeTest, navBarTest);

const { describe } = test;

describe('all devices', () => {
  describe('AxeBuilder.analyze', () => {
    test('has no accessibility violations', async ({ page }) => {
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations, 'no accessibility violations').toEqual([]);
    });
  });

  test('<NavBar /> renders correctly', async ({ navBar }) => {
    expect(await navBar.rendersCorrectly()).toBeTruthy();
  });

  test('renders headers', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'About Me' }), 'page header should be visible').toBeVisible();
    await expect(page.locator('h2').getByText('Jack Maclennan'), 'name header should be visible').toBeVisible();
  });

  test('renders image', async ({ page }) => {
    await expect(
      page.getByAltText('Portrait of Jack Maclennan - Web Developer'),
      'image should be visible'
    ).toBeVisible();
  });
});
