import { expect, mergeTests } from '@playwright/test';
import hamburgerMenuTest from '../fixtures/HamburgerMenu';
import homeTest from '../fixtures/Home';
import navBarTest from '../fixtures/NavBar';
import pageTest from '../fixtures/util';

const test = mergeTests(pageTest, homeTest, navBarTest, hamburgerMenuTest);

const { describe } = test;

describe('all devices', () => {
  test('has heading', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Home Page');
  });
  describe('<NavBar />', () => {
    test('renders nav bar', async ({ navBar }) => {
      await expect(navBar.getWrapper()).toBeVisible();
    });
    test('renders logo link', async ({ navBar }) => {
      await expect(navBar.getLogo()).toBeVisible();
    });
    test('logo link navigates to /', async ({ page, navBar }) => {
      await page.goto(`/projects`);
      await navBar.getLogo().click();
      await expect(page).toHaveURL('/');
    });
    test('at least 1 <ThemeSelect /> is visible', async ({ page }) => {
      await expect(page.getByTestId('theme-select')).toHaveCount(2);
      await expect(page.getByTestId('theme-select').locator('visible=true')).toBeVisible();
    });
    describe('<ThemeSelect />', () => {
      test('renders <Select />', async ({ page }) => {
        await expect(
          page.getByTestId('theme-select').locator('visible=true').getByTestId('custom-select')
        ).toBeVisible();
      });
      describe('<Select />', () => {
        test('<Menu /> is visible on <Button /> click', async ({ page }) => {
          const customSelect = page.getByTestId('custom-select').locator('visible=true');
          await expect(customSelect.getByTestId('custom-select-menu')).toBeHidden();
          await customSelect.getByTestId('custom-select-button').click();
          await expect(customSelect.getByTestId('custom-select-menu')).toBeVisible();
        });
      });
    });
  });
});

describe('mobile', () => {
  describe('<NavBar />', () => {
    test('desktop components are hidden', async ({ page }) => {
      await expect(page.getByTestId('desktop-components')).toBeHidden();
    });
    test('mobile components are visible', async ({ page }) => {
      await expect(page.getByTestId('mobile-components')).toBeVisible();
    });
    describe('<ThemeSelect />', () => {
      type TestOption = { theme: string; themeName: string };
      const testOptions: Array<TestOption> = [
        { theme: 'light', themeName: 'light-mode' },
        { theme: 'dark', themeName: 'dark-mode' },
        { theme: 'system', themeName: 'system-default' }
      ];
      testOptions.forEach(({ theme, themeName }: TestOption, i: number) => {
        test(`set theme to ${themeName}`, async ({ navBar }) => {
          const themeSelect = navBar.getMobileThemeSelect();
          await themeSelect.setTheme(testOptions[(i + 1) % 3].themeName);
          await themeSelect.setTheme(themeName);
          const resolvedTheme = await themeSelect.getTheme();
          expect(resolvedTheme).toEqual(theme);
        });
      });
    });
    describe('<HamburgerMenu />', () => {
      test('renders correctly', async ({ hamburgerMenu }) => {
        await expect(hamburgerMenu.getWrapper()).toBeVisible();
        await expect(hamburgerMenu.getIcon()).toBeVisible();
        await expect(hamburgerMenu.getModal()).toBeHidden();
      });
      test('renders modal on icon click', async ({ hamburgerMenu }) => {
        await expect(hamburgerMenu.getModal()).toBeHidden();
        await hamburgerMenu.openModal();
        await expect(hamburgerMenu.getModal()).toBeVisible();
      });
      test('renders modal correctly', async ({ hamburgerMenu }) => {
        await hamburgerMenu.openModal();
        await expect(hamburgerMenu.getModal()).toBeVisible();
        await expect(hamburgerMenu.getCloseIcon()).toBeVisible();
        await expect(hamburgerMenu.getSocialIcons().getWrapper()).toBeVisible();
        await expect(hamburgerMenu.getSiteLinks().getWrapper()).toBeVisible();
      });
      test('modal is hidden on close', async ({ hamburgerMenu }) => {
        await hamburgerMenu.openModal();
        await expect(hamburgerMenu.getModal()).toBeVisible();
        await hamburgerMenu.closeModal();
        await expect(hamburgerMenu.getModal()).toBeHidden();
      });
    });
  });
});

describe('desktop', () => {
  describe('<NavBar />', () => {
    test('mobile components are hidden', async ({ page }) => {
      await expect(page.getByTestId('mobile-components')).toBeHidden();
    });
    test('desktop components are visible', async ({ page }) => {
      await expect(page.getByTestId('desktop-components')).toBeVisible();
    });
    test('components are tabbable', async ({ page, navBar }) => {
      await page.keyboard.press('Tab');
      await expect(navBar.getLogo()).toBeFocused();

      for (let i = 0; i < (await navBar.getSiteLinks().getListLength()); i++) {
        await page.keyboard.press('Tab');
        await expect(navBar.getSiteLinks().getListItemByIndex(i)).toBeFocused();
      }

      await page.keyboard.press('Tab');
      await expect(navBar.getDesktopThemeSelect().getSelect().getButton()).toBeFocused();

      for (let i = 0; i < (await navBar.getSocialIcons().getListLength()); i++) {
        await page.keyboard.press('Tab');
        await expect(navBar.getSocialIcons().getListItemByIndex(i)).toBeFocused();
      }
    });
  });
});
