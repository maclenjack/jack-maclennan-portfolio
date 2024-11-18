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
 * @includeExample tests/fixtures/NavBar.ts:132-137
 * @source
 */
export default class NavBar implements Component {
  /** @public Component wrapper. */
  private readonly navBar: Locator;
  /** @public Logo link element. */
  private readonly logoLink: Locator;
  /** @public Wrapper for elements only visible on desktop screen sizes. */
  private readonly desktopComponents: Locator;
  /** @public Wrapper for elements only visible on mobile screen sizes. */
  private readonly mobileComponents: Locator;
  /** @public Child {@link SiteLinks}. */
  private readonly siteLinks: SiteLinks;
  /** @public Child {@link SocialIcons}. */
  private readonly socialIcons: SocialIcons;
  /** @public Child {@link ThemeSelect}s. */
  private readonly themeSelects: { mobileThemeSelect: ThemeSelect; desktopThemeSelect: ThemeSelect };
  /** @public Child {@link HamburgerMenu} */
  private readonly hamburgerMenu: HamburgerMenu;

  /**
   * Fixture constructor - initialise variables.
   * @param page - Playwright page object.
   */
  public constructor(private readonly page: Page) {
    this.navBar = this.page.getByTestId('nav-bar');
    this.logoLink = this.navBar.getByTestId('logo-link');
    this.desktopComponents = this.navBar.getByTestId('desktop-components');
    this.mobileComponents = this.navBar.getByTestId('mobile-components');
    this.siteLinks = new SiteLinks(this.navBar.getByTestId('desktop-components'));
    this.socialIcons = new SocialIcons(this.navBar.getByTestId('desktop-components'));
    this.themeSelects = {
      mobileThemeSelect: new ThemeSelect(page, this.navBar.getByTestId('mobile-components')),
      desktopThemeSelect: new ThemeSelect(page, this.navBar.getByTestId('desktop-components'))
    };
    this.hamburgerMenu = new HamburgerMenu(this.page);
  }

  /** Getter method. @returns {@link navBar}. */
  public getWrapper(): Locator {
    return this.navBar;
  }

  /** Testing helper method. */
  public async rendersCorrectly(): Promise<void> {
    const isMobile: boolean = await this.getMobileComponents().isVisible();

    await expect(this.getLogo(), 'logo is visible').toBeVisible();
    if (isMobile) {
      await expect(this.getSiteLinks().getWrapper(), 'site links hidden on mobile').toBeHidden();
      await expect(this.getDesktopThemeSelect().getWrapper(), 'desktop theme select hidden on mobile').toBeHidden();
      await expect(this.getSocialIcons().getWrapper(), 'social icons hidden on mobile').toBeHidden();
      await expect(this.getDesktopComponents(), 'desktop components hidden on mobile').toBeHidden();
      await expect(this.getMobileComponents(), 'mobile components visible on mobile').toBeVisible();
      await this.getMobileThemeSelect().rendersCorrectly();
      await this.getHamburgerMenu().rendersCorrectly();
    } else {
      await expect(this.getMobileThemeSelect().getWrapper(), 'mobile theme select hidden on desktop').toBeHidden();
      await expect(this.getHamburgerMenu().getWrapper(), 'hamburger menu hidden on desktop').toBeHidden();
      await expect(this.getMobileComponents(), 'mobile components hidden on desktop').toBeHidden();
      await expect(this.getDesktopComponents(), 'desktop components visible on desktop').toBeVisible();
      await this.getSiteLinks().rendersCorrectly();
      await this.getSiteLinks().navigatesCorrectly(this.page);
      await this.getDesktopThemeSelect().rendersCorrectly();
      await this.getSocialIcons().rendersCorrectly();
    }
  }

  /** Getter method. @returns {@link logoLink}. */
  getLogo(): Locator {
    return this.logoLink;
  }

  /** Getter method. @returns {@link mobileComponents}. */
  getMobileComponents(): Locator {
    return this.mobileComponents;
  }

  /** Getter method. @returns {@link themeSelects | mobileThemeSelect}. */
  getMobileThemeSelect(): ThemeSelect {
    return this.themeSelects.mobileThemeSelect;
  }

  /** Getter method. @returns {@link desktopComponents}. */
  getDesktopComponents(): Locator {
    return this.desktopComponents;
  }

  /** Getter method @returns {@link themeSelects} based on which one is visible. */
  public async getVisibleThemeSelect(): Promise<ThemeSelect> {
    if (await this.getMobileThemeSelect().getWrapper().isVisible()) return this.getMobileThemeSelect();
    else return this.getDesktopThemeSelect();
  }

  /** Getter method. @returns {@link siteLinks}. */
  getSiteLinks(): SiteLinks {
    return this.siteLinks;
  }

  /** Getter method. @returns {@link themeSelects | desktopThemeSelect}. */
  getDesktopThemeSelect(): ThemeSelect {
    return this.themeSelects.desktopThemeSelect;
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

/** @hidden */
export const navBarTest = test.extend<{ navBar: NavBar }>({
  navBar: async ({ page }, use) => {
    const navBar = new NavBar(page);
    await use(navBar);
  }
});
