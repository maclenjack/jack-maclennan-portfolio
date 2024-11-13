import { expect, Locator, mergeTests } from '@playwright/test';
import { hamburgerMenuTest } from '../fixtures/HamburgerMenu';
import { homeTest } from '../fixtures/Home';
import { navBarTest } from '../fixtures/NavBar';
import ThemeSelect from '../fixtures/ThemeSelect';
import { pageTest } from '../fixtures/util';

const test = mergeTests(pageTest, homeTest, navBarTest, hamburgerMenuTest);

const { describe } = test;

describe('all devices', () => {
  test('has heading', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Home Page');
  });
  describe('<NavBar />', () => {
    test('renders correctly', async ({ navBar }) => {
      await navBar.rendersCorrectly();
    });
    test('logo link navigates to /', async ({ page, navBar }) => {
      await page.goto(`/projects`);
      await navBar.getLogo().click();
      await expect(page, 'url is correct').toHaveURL('/');
    });
    describe('<ThemeSelect />', () => {
      test('renders <Select />', async ({ page, navBar }) => {
        await expect(
          (await navBar.getVisibleThemeSelect()).getSelect().getWrapper(),
          'custom select is visible'
        ).toBeVisible();
      });
      describe('<Select />', () => {
        test('<Menu /> is visible on <Button /> click', async ({ page }) => {
          const customSelect: Locator = page.getByTestId('custom-select').locator('visible=true');
          await expect(
            customSelect.getByTestId('custom-select-menu'),
            'custom select menu is hidden when closed'
          ).toBeHidden();
          await customSelect.getByTestId('custom-select-button').click();
          await expect(
            customSelect.getByTestId('custom-select-menu'),
            'custom select menu is visible when open'
          ).toBeVisible();
        });
      });
    });
  });
});

describe('mobile', () => {
  describe('<NavBar />', () => {
    describe('<ThemeSelect />', () => {
      type TestOption = { theme: string; themeName: string };
      const testOptions: Array<TestOption> = [
        { theme: 'light', themeName: 'light-mode' },
        { theme: 'dark', themeName: 'dark-mode' },
        { theme: 'system', themeName: 'system-default' }
      ];
      testOptions.forEach(({ theme, themeName }: TestOption, i: number) => {
        test(`set theme to ${themeName}`, async ({ navBar }) => {
          const themeSelect: ThemeSelect = navBar.getMobileThemeSelect();
          await themeSelect.setTheme(testOptions[(i + 1) % 3].themeName);
          await themeSelect.setTheme(themeName);
          const resolvedTheme = await themeSelect.getTheme();
          expect(resolvedTheme, 'stored theme value is correct').toEqual(theme);
        });
      });
    });
    describe('<HamburgerMenu />', () => {
      test('renders modal on icon click', async ({ hamburgerMenu }) => {
        await expect(hamburgerMenu.getModal().getWrapper(), 'modal is hidden when closed').toBeHidden();
        await hamburgerMenu.openModal();
        await expect(hamburgerMenu.getModal().getWrapper(), 'modal is visible when open').toBeVisible();
      });
      test('renders modal correctly', async ({ hamburgerMenu }) => {
        await hamburgerMenu.openModal();
        await hamburgerMenu.getModal().rendersCorrectly();
      });
      test('modal is hidden on close', async ({ hamburgerMenu }) => {
        await hamburgerMenu.openModal();
        await expect(hamburgerMenu.getModal().getWrapper(), 'modal is visible when open').toBeVisible();
        await hamburgerMenu.getModal().closeModal();
        await expect(hamburgerMenu.getModal().getWrapper(), 'modal is hidden when closed').toBeHidden();
      });
      describe('<SiteLinks />', () => {
        test('navigates correctly', async ({ page, hamburgerMenu }) => {
          await hamburgerMenu
            .getModal()
            .getSiteLinks()
            .navigatesCorrectly(page, async () => {
              await hamburgerMenu.openModal();
            });
        });
      });
    });
  });
});

describe('desktop', () => {
  describe('<NavBar />', () => {
    test('mobile components are hidden', async ({ page }) => {
      await expect(page.getByTestId('mobile-components'), 'mobile components hidden on desktop').toBeHidden();
    });
    test('desktop components are visible', async ({ page }) => {
      await expect(page.getByTestId('desktop-components'), 'desktop components visible on desktop').toBeVisible();
    });
    test('components are tabbable', async ({ page, navBar }) => {
      await page.keyboard.press('Tab');
      await expect(navBar.getLogo(), 'logo focused on tab').toBeFocused();

      for (let i: number = 0; i < (await navBar.getSiteLinks().getListLength()); i++) {
        await page.keyboard.press('Tab');
        await expect(
          navBar.getSiteLinks().getListItemByIndex(i),
          `site link at index ${i} focused on tab`
        ).toBeFocused();
      }

      await page.keyboard.press('Tab');
      await expect(navBar.getDesktopThemeSelect().getSelect().getButton(), 'theme select focused on tab').toBeFocused();

      for (let i: number = 0; i < (await navBar.getSocialIcons().getListLength()); i++) {
        await page.keyboard.press('Tab');
        await expect(
          navBar.getSocialIcons().getListItemByIndex(i),
          `social icon at index ${i} focused on tab`
        ).toBeFocused();
      }
    });
    describe('<SiteLinks />', () => {
      test('renders correctly', async ({ navBar }) => {
        await navBar.getSiteLinks().rendersCorrectly();
      });
      test('links navigate correctly', async ({ page, navBar }) => {
        await navBar.getSiteLinks().navigatesCorrectly(page);
      });
    });
    describe('<ThemeSelect />', () => {
      test('renders correctly', async ({ navBar }) => {
        const themeSelect: ThemeSelect = navBar.getDesktopThemeSelect();
        const mobileThemeSelect: ThemeSelect = navBar.getMobileThemeSelect();
        await expect(themeSelect.getWrapper(), 'desktop component is visible').toBeVisible();
        await expect(mobileThemeSelect.getWrapper(), 'mobile component is hidden').toBeHidden();
      });
    });
    describe('<SocialIcons />', () => {
      test('renders correctly', async ({ navBar }) => {
        await navBar.getSocialIcons().rendersCorrectly();
      });
    });
  });
});
