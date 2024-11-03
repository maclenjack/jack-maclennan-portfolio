import { Locator, Page, test } from '@playwright/test';
import SiteLinks from './SiteLinks';
import SocialIcons from './SocialIcons';
import ThemeSelect from './ThemeSelect';
import Component from './interfaces/Component';

class NavBar implements Component {
  private readonly navBar: Locator;
  private readonly siteLinks: SiteLinks;
  private readonly socialIcons: SocialIcons;
  private readonly themeSelects: { mobileThemeSelect: ThemeSelect; desktopThemeSelect: ThemeSelect };

  constructor(public readonly page: Page) {
    this.navBar = this.page.getByTestId('nav-bar');
    this.siteLinks = new SiteLinks(this.navBar);
    this.socialIcons = new SocialIcons(this.navBar.getByTestId('desktop-components'));
    this.themeSelects = {
      mobileThemeSelect: new ThemeSelect(page, this.navBar.getByTestId('mobile-components')),
      desktopThemeSelect: new ThemeSelect(page, this.navBar.getByTestId('desktop-components'))
    };
  }

  getWrapper() {
    return this.navBar;
  }

  getLogo() {
    return this.navBar.getByTestId('logo-link');
  }

  getMobileComponents() {
    return this.navBar.getByTestId('mobile-components');
  }

  getMobileThemeSelect() {
    return this.themeSelects.mobileThemeSelect;
  }

  getDesktopComponents() {
    return this.navBar.getByTestId('desktop-components');
  }

  getSiteLinks() {
    return this.siteLinks;
  }

  getDesktopThemeSelect() {
    return this.themeSelects.desktopThemeSelect;
  }

  getSocialIcons() {
    return this.socialIcons;
  }
}

const navBarTest = test.extend<{ navBar: NavBar }>({
  navBar: async ({ page }, use) => {
    const navBar = new NavBar(page);
    await use(navBar);
  }
});

export default navBarTest;
