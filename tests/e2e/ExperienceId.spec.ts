import { AxeBuilder } from '@axe-core/playwright';
import { experienceIdTest } from '@fixtures/ExperienceId';
import { expect, mergeTests } from '@playwright/test';

const test = mergeTests(experienceIdTest);

const { describe } = test;

describe('Experience detail page', () => {
  test('has no accessibility violations', async ({ page }) => {
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations, 'no accessibility violations').toEqual([]);
  });

  test('renders experience title correctly', async ({ page }) => {
    const experienceTitle = page.getByRole('main').getByRole('heading', { level: 1 });
    await expect(experienceTitle, 'experience title heading is visible').toBeVisible();
    await expect(experienceTitle, 'experience title has content').not.toBeEmpty();
  });

  test('renders experience description', async ({ page }) => {
    // Locate description as the first paragraph after the main heading
    const experienceDescription = page.getByRole('main').locator('p').first();
    await expect(experienceDescription, 'experience description is visible').toBeVisible();
    await expect(experienceDescription, 'experience description has content').not.toBeEmpty();
  });

  test('renders experience technologies list', async ({ page }) => {
    // Technology tags are typically presented as list items or badges
    const technologies = page.getByRole('main').getByRole('list').first();
    await expect(technologies, 'experience technologies section exists').toBeVisible();

    const techTags = technologies.getByRole('listitem');
    const tagCount = await techTags.count();
    expect(tagCount, 'at least one technology tag is present').toBeGreaterThan(0);
  });

  test('renders experience links', async ({ page }) => {
    // Experience links are external links after experience content
    const experienceLinks = page
      .getByRole('main')
      .getByRole('link')
      .filter({ hasText: /demo|github|view|company|website|back/i });
    await expect(experienceLinks.first(), 'at least one experience action link exists').toBeVisible();
  });

  test('back button navigates back to experience list', async ({ page }) => {
    const backButton = page.getByRole('link', { name: /back to experience/i });
    await backButton.click();

    await expect(page, 'navigates back to experience listing page').toHaveURL('http://localhost:3000/experience');
  });
});
