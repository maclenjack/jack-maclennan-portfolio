import { AxeBuilder } from '@axe-core/playwright';
import { hamburgerMenuTest } from '@fixtures/HamburgerMenu';
import { homeTest } from '@fixtures/Home';
import { navBarTest } from '@fixtures/NavBar';
import Select from '@fixtures/Select';
import ThemeSelect from '@fixtures/ThemeSelect';
import { expect, mergeTests } from '@playwright/test';

const test = mergeTests(homeTest, navBarTest, hamburgerMenuTest);

const { describe } = test;

describe('all devices', () => {
  describe('AxeBuilder.analyze', () => {
    test('has no accessibility violations', async ({ page }) => {
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations, 'no accessibility violations').toEqual([]);
    });
  });

  describe('<NavBar />', () => {
    test('renders correctly', async ({ navBar }) => {
      expect(await navBar.rendersCorrectly()).toBeTruthy();
    });

    test('logo link navigates to /', async ({ page, navBar }) => {
      await page.goto(`/projects`);
      await navBar.getLogo().click();
      await expect(page, 'url is correct').toHaveURL('/');
    });

    describe('<ThemeSelect />', () => {
      describe('<Select />', () => {
        test('<Menu /> is visible on <Button /> click', async ({ navBar }) => {
          const select: Select = navBar.getThemeSelect().getSelect();
          await expect(select.getMenu(), 'custom select menu is hidden when closed').toBeHidden();
          await select.getButton().click();
          await expect(select.getMenu(), 'custom select menu is visible when open').toBeVisible();
        });
      });

      type TestOption = { theme: string; themeName: string };
      const testOptions: Array<TestOption> = [
        { theme: 'light', themeName: 'light-mode' },
        { theme: 'dark', themeName: 'dark-mode' },
        { theme: 'system', themeName: 'system-default' }
      ];
      testOptions.forEach(({ theme, themeName }: TestOption, i: number) => {
        test(`set theme to ${themeName}`, async ({ navBar }) => {
          const themeSelect: ThemeSelect = navBar.getThemeSelect();
          await themeSelect.setTheme(testOptions[(i + 1) % 3].themeName);
          await themeSelect.setTheme(themeName);
          const resolvedTheme = await themeSelect.getTheme();
          expect(resolvedTheme, 'stored theme value is correct').toEqual(theme);
        });
      });
    });
  });
});

describe('mobile', () => {
  describe('<NavBar />', () => {
    describe('<HamburgerMenu />', () => {
      test('renders modal on icon click', async ({ hamburgerMenu }) => {
        await expect(hamburgerMenu.getModal().getWrapper(), 'modal is hidden when closed').toBeHidden();
        await hamburgerMenu.openModal();
        await expect(hamburgerMenu.getModal().getWrapper(), 'modal is visible when open').toBeVisible();
      });

      test('renders modal correctly', async ({ hamburgerMenu }) => {
        await hamburgerMenu.openModal();
        expect(await hamburgerMenu.getModal().rendersCorrectly()).toBeTruthy();
      });

      test('modal is hidden on close', async ({ hamburgerMenu }) => {
        await hamburgerMenu.openModal();
        await expect(hamburgerMenu.getModal().getWrapper(), 'modal is visible when open').toBeVisible();
        await hamburgerMenu.getModal().closeModal();
        await expect(hamburgerMenu.getModal().getWrapper(), 'modal is hidden when closed').toBeHidden();
      });

      describe('<SiteLinks />', () => {
        test('navigates correctly', async ({ page, hamburgerMenu }) => {
          expect(
            await hamburgerMenu
              .getModal()
              .getSiteLinks()
              .navigatesCorrectly(page, async () => {
                await hamburgerMenu.openModal();
              })
          ).toBeTruthy();
        });
      });
    });
  });
});

describe('desktop', () => {
  describe('<NavBar />', () => {
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

      for (let i: number = 0; i < (await navBar.getSocialIcons().getListLength()); i++) {
        await page.keyboard.press('Tab');
        await expect(
          navBar.getSocialIcons().getListItemByIndex(i),
          `social icon at index ${i} focused on tab`
        ).toBeFocused();
      }

      await page.keyboard.press('Tab');
      await expect(navBar.getThemeSelect().getSelect().getButton(), 'theme select focused on tab').toBeFocused();
    });

    describe('<SiteLinks />', () => {
      test('renders correctly', async ({ navBar }) => {
        expect(await navBar.getSiteLinks().rendersCorrectly()).toBeTruthy();
      });

      test('links navigate correctly', async ({ page, navBar }) => {
        expect(await navBar.getSiteLinks().navigatesCorrectly(page)).toBeTruthy();
      });
    });

    describe('<SocialIcons />', () => {
      test('renders correctly', async ({ navBar }) => {
        expect(await navBar.getSocialIcons().rendersCorrectly()).toBeTruthy();
      });
    });
  });
});
