import { AxeBuilder } from '@axe-core/playwright';
import { projectIdTest } from '@fixtures/ProjectId';
import { expect, mergeTests } from '@playwright/test';

const test = mergeTests(projectIdTest);

const { describe } = test;

describe('Project detail page', () => {
  test('has no accessibility violations', async ({ page }) => {
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations, 'no accessibility violations').toEqual([]);
  });

  test('renders project title correctly', async ({ page }) => {
    // Use more specific selector to avoid conflict with site header
    const projectTitle = page.getByRole('main').getByRole('heading', { level: 1 });
    await expect(projectTitle, 'project title heading is visible').toBeVisible();
    await expect(projectTitle, 'project title has content').not.toBeEmpty();
  });

  test('renders project description', async ({ page }) => {
    // Locate description as the first paragraph after the main heading
    const projectDescription = page.getByRole('main').locator('p').first();
    await expect(projectDescription, 'project description is visible').toBeVisible();
    await expect(projectDescription, 'project description has content').not.toBeEmpty();
  });

  test('renders project technologies list', async ({ page }) => {
    // Technology tags are spans, not list items
    const technologies = page.getByRole('main').getByText('Technologies Used');
    await expect(technologies, 'technologies heading is visible').toBeVisible();

    // Find technology tags (they are spans with specific classes)
    const techTags = page.getByRole('main').locator('span[class*="bg-emerald-100"]');
    const tagCount = await techTags.count();
    expect(tagCount, 'at least one technology tag is present').toBeGreaterThan(0);
  });

  test('renders project links (live demo / github)', async ({ page }) => {
    // Project links are external links after project content
    const projectLinks = page
      .getByRole('main')
      .getByRole('link')
      .filter({ hasText: /demo|github|view/i });
    await expect(projectLinks.first(), 'at least one project action link exists').toBeVisible();
  });

  test('back button navigates back to projects list', async ({ page }) => {
    // Back button is a link, not a button
    const backButton = page.getByRole('link', { name: /back to projects/i });
    await backButton.click();

    await expect(page, 'navigates back to projects listing page').toHaveURL('http://localhost:3000/projects');
  });
});
