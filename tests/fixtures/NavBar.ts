import { expect, Locator, Page, test } from '@playwright/test';
import HamburgerMenu from './HamburgerMenu';
import SiteLinks from './SiteLinks';
import SocialIcons from './SocialIcons';
import ThemeSelect from './ThemeSelect';
import Component from './interfaces/Component';

/**
 * Fixture for NavBar component
 * @remarks
 * Provides method helpers for locating child elements.
 *
 * Used in example to be accessed in testing environment.
 *
 * @includeExample tests/fixtures/NavBar.ts[141:147]
 * @source
 */
export default class NavBar implements Component {
  /** @public Component wrapper. */
  private readonly navBar: Locator;
  /** @public Logo link element. */
  private readonly logoLink: Locator;
  /** @public Child {@link SiteLinks}. */
  private readonly siteLinks: SiteLinks;
  /** @public Child {@link SocialIcons}. */
  private readonly socialIcons: SocialIcons;
  /** @public Child {@link ThemeSelect}s. */
  private readonly themeSelect: ThemeSelect;
  /** @public Child {@link HamburgerMenu} */
  private readonly hamburgerMenu: HamburgerMenu;

  /**
   * Fixture constructor - initialise variables.
   * @param page - Playwright page object.
   */
  public constructor(private readonly page: Page) {
    this.navBar = this.page.getByRole('navigation', { name: 'Main navigation' });
    this.logoLink = this.navBar.getByRole('link', { name: 'home' });
    this.siteLinks = new SiteLinks(
      this.navBar.getByRole('navigation', { name: 'Site links' }).filter({ visible: true })
    );
    this.socialIcons = new SocialIcons(
      this.navBar.getByRole('group', { name: 'Social links' }).filter({ visible: true })
    );
    this.themeSelect = new ThemeSelect(
      this.page,
      this.navBar.getByRole('group', { name: 'theme selector' }).filter({ visible: true })
    );
    this.hamburgerMenu = new HamburgerMenu(this.page);
  }

  /** Getter method. @returns {@link navBar}. */
  public getWrapper(): Locator {
    return this.navBar;
  }

  /** Testing helper method. */
  public async rendersCorrectly(): Promise<boolean> {
    const viewportSize = this.page.viewportSize();
    const isMobile = viewportSize !== null && viewportSize.width < 768;

    await expect(this.getWrapper(), 'navbar is visible').toBeVisible();
    await expect(this.getLogo(), 'logo is visible').toBeVisible();
    expect(this.getThemeSelect().rendersCorrectly()).toBeTruthy();
    if (isMobile) {
      await expect(this.getSiteLinks().getWrapper(), 'site links hidden on mobile').toBeHidden();
      await expect(this.getSocialIcons().getWrapper(), 'social icons hidden on mobile').toBeHidden();
      expect(await this.getHamburgerMenu().rendersCorrectly()).toBeTruthy();
    } else {
      await expect(this.getHamburgerMenu().getWrapper(), 'hamburger menu hidden on desktop').toBeHidden();
      expect(await this.getSiteLinks().rendersCorrectly()).toBeTruthy();
      expect(await this.getSiteLinks().navigatesCorrectly(this.page)).toBeTruthy();
      expect(await this.getSocialIcons().rendersCorrectly()).toBeTruthy();
    }
    return true;
  }

  /** Getter method. @returns {@link logoLink}. */
  getLogo(): Locator {
    return this.logoLink;
  }

  /** Getter method @returns visible theme select using Playwright's visibility filtering. */
  public getThemeSelect(): ThemeSelect {
    return this.themeSelect;
  }

  /** Getter method. @returns {@link siteLinks}. */
  getSiteLinks(): SiteLinks {
    return this.siteLinks;
  }

  /** Getter method. @returns {@link socialIcons}. */
  getSocialIcons(): SocialIcons {
    return this.socialIcons;
  }

  /** Getter method. @returns {@link hamburgerMenu}. */
  public getHamburgerMenu(): HamburgerMenu {
    return this.hamburgerMenu;
  }
}

/**
 * Test environment for Navigation Bar.
 * @remarks
 * Provides a NavBar to be used in tests.
 *
 * @includeExample tests/e2e/AboutMe.spec.ts[5]
 * @source
 *
 */
export const navBarTest = test.extend<{ navBar: NavBar }>({
  navBar: async ({ page }, use) => {
    const navBar = new NavBar(page);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(navBar);
  }
});
