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

  describe('Home page content', () => {
    test('renders hero section correctly', async ({ page }) => {
      // Check main heading
      await expect(
        page.getByRole('heading', { name: 'Jack Maclennan' }),
        'main heading should be visible'
      ).toBeVisible();
      // Check subtitle
      await expect(
        page.getByText('Building modern web experiences with React & TypeScript'),
        'subtitle should be visible'
      ).toBeVisible();
      // Check Web Developer badge
      await expect(page.getByText('Web Developer'), 'Web Developer badge should be visible').toBeVisible();
      // Check buttons
      await expect(
        page.getByRole('link', { name: 'Explore My Work' }),
        'Explore My Work button should be visible'
      ).toBeVisible();
      await expect(
        page.getByRole('link', { name: 'Learn About Me' }),
        'Learn About Me button should be visible'
      ).toBeVisible();
      // Check portrait image (there are two images with same alt text)
      await expect(
        page.getByAltText('Portrait of Jack Maclennan - Web Developer').first(),
        'portrait image should be present'
      ).toBeVisible();
    });

    test('renders metrics section correctly', async ({ page }) => {
      // Check section heading
      await expect(
        page.getByRole('heading', { name: 'Quick Stats' }),
        'Quick Stats heading should be visible'
      ).toBeVisible();
      // Check metric labels
      const metrics = ['Years of Experience', 'Featured Project', 'Technologies Mastered', 'Computer Science'];
      for (const metric of metrics) {
        await expect(page.getByText(metric).first(), `metric "${metric}" should be visible`).toBeVisible();
      }
      // Check metric values (dynamic years of experience)
      const plusValues = page.getByText(/\+$/);
      await expect(plusValues, 'should have at least two "+" values').toHaveCount(2);
    });

    test('renders featured project section correctly', async ({ page }) => {
      // Check section heading
      await expect(
        page.getByRole('heading', { name: 'Featured Project' }),
        'Featured Project heading should be visible'
      ).toBeVisible();
      // Check project title (using the first project from constants)
      await expect(
        page.getByRole('heading', { name: 'Jack Maclennan Portfolio' }),
        'project title should be visible'
      ).toBeVisible();
      // Check project subtitle
      await expect(page.getByText('Personal Website & Portfolio'), 'project subtitle should be visible').toBeVisible();
      // Check project description (partial match)
      await expect(
        page.getByText('A modern, responsive portfolio website'),
        'project description should be visible'
      ).toBeVisible();
      // Check technologies (some may be duplicated in skills section)
      const technologies = ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'];
      for (const tech of technologies) {
        await expect(page.getByText(tech).first(), `technology "${tech}" should be visible`).toBeVisible();
      }
      // Check links
      await expect(
        page.getByRole('link', { name: 'View Details' }),
        'View Details link should be visible'
      ).toBeVisible();
      await expect(
        page.getByRole('link', { name: 'All Projects' }),
        'All Projects link should be visible'
      ).toBeVisible();
      // Check project image (second image with same alt text)
      const images = page.getByAltText('Portrait of Jack Maclennan - Web Developer');
      await expect(images, 'should have at least two images').toHaveCount(2);
    });

    test('renders skills section correctly', async ({ page }) => {
      // Check section heading
      await expect(
        page.getByRole('heading', { name: 'Skills & Expertise' }),
        'Skills & Expertise heading should be visible'
      ).toBeVisible();
      // Check technical skills heading
      await expect(
        page.getByRole('heading', { name: 'Technical Skills' }),
        'Technical Skills heading should be visible'
      ).toBeVisible();
      // Check technical skills badges
      const technicalSkills = ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Ruby on Rails'];
      for (const skill of technicalSkills) {
        await expect(page.getByText(skill).first(), `technical skill "${skill}" should be visible`).toBeVisible();
      }
      // Check soft skills heading
      await expect(
        page.getByRole('heading', { name: 'Soft Skills' }),
        'Soft Skills heading should be visible'
      ).toBeVisible();
      // Check soft skills badges
      const softSkills = ['Teamwork', 'Collaboration', 'Problem-solving', 'Communication'];
      for (const skill of softSkills) {
        await expect(page.getByText(skill).first(), `soft skill "${skill}" should be visible`).toBeVisible();
      }
    });

    test('renders navigation prompts section correctly', async ({ page }) => {
      // Check section heading
      await expect(
        page.getByRole('heading', { name: 'Explore Further' }),
        'Explore Further heading should be visible'
      ).toBeVisible();
      // Check navigation cards titles
      const cardTitles = ['About Me', 'Experience', 'Projects', 'Connect'];
      for (const title of cardTitles) {
        await expect(
          page.getByRole('heading', { name: title }),
          `card title "${title}" should be visible`
        ).toBeVisible();
      }
      // Check card descriptions
      const cardDescriptions = [
        'Learn more about my background, interests, and passion for programming',
        "Discover my professional journey and roles I've contributed to",
        'See my work and how I bring ideas to life through code',
        'Reach out or follow my work'
      ];
      for (const description of cardDescriptions) {
        await expect(page.getByText(description), `card description "${description}" should be visible`).toBeVisible();
      }
      // Check GitHub and LinkedIn links
      await expect(page.getByText('GitHub'), 'GitHub link should be visible').toBeVisible();
      await expect(page.getByText('LinkedIn'), 'LinkedIn link should be visible').toBeVisible();
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
