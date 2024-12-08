import { aboutMeTest } from '@fixtures/AboutMe';
import { navBarTest } from '@fixtures/NavBar';
import { expect, mergeTests } from '@playwright/test';

const test = mergeTests(aboutMeTest, navBarTest);

const { describe } = test;

describe('all devices', () => {
  test('<NavBar /> renders correctly', async ({ navBar }) => {
    expect(await navBar.rendersCorrectly()).toBeTruthy();
  });
  test('renders headers', async ({ page }) => {
    await expect(page.getByTestId('page-header'), 'page header should be visible').toBeVisible();
    await expect(page.getByTestId('name-header'), 'name header should be visible').toBeVisible();
  });
});

describe('mobile', () => {
  test('renders image correctly', async ({ page }) => {
    await expect(page.getByTestId('mobile-image'), 'mobile image should be visible').toBeVisible();
    await expect(page.getByTestId('desktop-image'), 'desktop image should be hidden').toBeHidden();
  });
});

describe('desktop', () => {
  test('renders image correctly', async ({ page }) => {
    await expect(page.getByTestId('desktop-image'), 'desktop image should be visible').toBeVisible();
    await expect(page.getByTestId('mobile-image'), 'mobile image should be hidden').toBeHidden();
  });
});
