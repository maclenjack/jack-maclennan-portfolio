import { Locator, Page, test } from '@playwright/test';
import SiteLinks from './SiteLinks';
import SocialIcons from './SocialIcons';
import Component from './interfaces/Component';

class HamburgerMenu implements Component {
  private readonly hamburgerMenu: Locator;
  private readonly hamburgerModal: Locator;
  private readonly socialIcons: SocialIcons;
  private readonly siteLinks: SiteLinks;

  constructor(public readonly page: Page) {
    this.hamburgerMenu = this.page.getByTestId('hamburger-menu');
    this.hamburgerModal = this.page.getByTestId('hamburger-modal');
    this.socialIcons = new SocialIcons(this.hamburgerModal);
    this.siteLinks = new SiteLinks(this.hamburgerModal);
  }

  getWrapper() {
    return this.hamburgerMenu;
  }

  getIcon() {
    return this.hamburgerMenu.getByTestId('hamburger-icon');
  }

  getModal() {
    return this.hamburgerModal;
  }

  getCloseIcon() {
    return this.hamburgerModal.getByTestId('hamburger-close');
  }

  getSocialIcons() {
    return this.socialIcons;
  }

  getSiteLinks() {
    return this.siteLinks;
  }

  async openModal() {
    await this.getIcon().click();
  }

  async closeModal() {
    await this.getCloseIcon().click();
  }

  async cleanup() {
    if (await this.hamburgerModal.isVisible()) {
      await this.closeModal();
    }
  }
}

const hamburgerMenuTest = test.extend<{ hamburgerMenu: HamburgerMenu }>({
  hamburgerMenu: async ({ page }, use) => {
    const hamburgerMenu = new HamburgerMenu(page);
    await use(hamburgerMenu);
    await hamburgerMenu.cleanup();
  }
});

export default hamburgerMenuTest;
