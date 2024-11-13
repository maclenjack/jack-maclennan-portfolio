import { expect, Locator, Page, test } from '@playwright/test';
import SiteLinks from './SiteLinks';
import SocialIcons from './SocialIcons';
import Component from './interfaces/Component';

/**
 * Fixture for Modal within {@link HamburgerMenu}.
 * @remarks
 * Provides method helpers for locating child elements and interactivity.
 *
 * @includeExample tests/fixtures/HamburgerMenu.ts:106
 * @source
 */
export class HamburgerModal implements Component {
  /** @public Component wrapper. */
  private readonly hamburgerModal: Locator;
  /** @public Child {@link SocialIcons}. */
  private readonly socialIcons: SocialIcons;
  /** @public Child {@link SiteLinks}. */
  private readonly siteLinks: SiteLinks;
  /** @public Child close-icon. */
  private readonly closeIcon: Locator;

  /**
   * @constructor
   * @param page - Playwright page object.
   */
  public constructor(private readonly page: Page) {
    this.hamburgerModal = page.getByTestId('hamburger-modal');
    this.socialIcons = new SocialIcons(this.hamburgerModal);
    this.siteLinks = new SiteLinks(this.hamburgerModal);
    this.closeIcon = this.hamburgerModal.getByTestId('hamburger-close');
  }

  /** Getter method. @returns {@link hamburgerModal}. */
  public getWrapper(): Locator {
    return this.hamburgerModal;
  }

  /** Testing helper method. */
  public async rendersCorrectly(): Promise<void> {
    if (await this.getWrapper().isHidden()) {
      await expect(this.getSocialIcons().getWrapper(), 'site links hidden when modal closed').toBeHidden();
      await expect(this.getSiteLinks().getWrapper(), 'site links hidden when modal closed').toBeHidden();
      await expect(this.getCloseIcon(), 'close icon hidden when modal closed').toBeHidden();
      await expect(this.getWrapper()).toBeHidden();
    } else {
      await this.getSocialIcons().rendersCorrectly();
      await this.getSiteLinks().rendersCorrectly();
      await expect(this.getCloseIcon(), 'close icon should be visible when modal open').toBeVisible();
    }
  }

  /** Getter method. @returns {@link socialIcons}. */
  getSocialIcons(): SocialIcons {
    return this.socialIcons;
  }

  /** Getter method. @returns {@link siteLinks}. */
  getSiteLinks(): SiteLinks {
    return this.siteLinks;
  }

  /** Getter method. @returns {@link closeIcon}. */
  getCloseIcon(): Locator {
    return this.closeIcon;
  }

  /** Closes modal by interacting with {@link closeIcon}. */
  async closeModal(): Promise<void> {
    await expect(this.hamburgerModal, 'modal should be visible').toBeVisible();
    await this.getCloseIcon().click();
    await expect(this.hamburgerModal, 'modal should be hidden').toBeHidden();
  }

  /** Cleans up tests by closing {@link hamburgerModal} if left open. */
  async cleanup(): Promise<void> {
    if (await this.getWrapper().isVisible()) await this.closeModal();
  }
}

/**
 * Fixture for HamburgerMenu component.
 * @remarks
 * Provides method helpers for locating child elements and interactivity.
 *
 * Used in example to be accessed in testing environment.
 * @includeExample tests/fixtures/HamburgerMenu.ts:145-151
 * @source
 */
export default class HamburgerMenu implements Component {
  /** @public Component wrapper. */
  private readonly hamburgerMenu: Locator;
  /** @public Modal wrapper. */
  private readonly hamburgerModal: HamburgerModal;
  /** @public Icon used to open {@link hamburgerModal} on interact */
  private readonly icon: Locator;

  /**
   * Fixture constructor - initialise variables.
   * @param page - Playwright page object.
   */
  public constructor(private readonly page: Page) {
    this.hamburgerMenu = this.page.getByTestId('hamburger-menu');
    this.icon = this.hamburgerMenu.getByTestId('hamburger-icon');
    this.hamburgerModal = new HamburgerModal(page);
  }

  /** Getter method. @returns {@link hamburgerMenu}. */
  public getWrapper(): Locator {
    return this.hamburgerMenu;
  }

  /** Testing helper method. */
  public async rendersCorrectly(): Promise<void> {
    await expect(this.getIcon(), 'hamburger icon visible when closed').toBeVisible();
    await this.getModal().rendersCorrectly();
  }

  /** Getter method. @returns {@icon}. */
  getIcon(): Locator {
    return this.icon;
  }

  /** Getter method. @returns {@link hamburgerModal}. */
  getModal(): HamburgerModal {
    return this.hamburgerModal;
  }

  /** Opens {@link hamburgerModal} by interacting with {@link icon}. */
  async openModal(): Promise<HamburgerModal> {
    await expect(this.getModal().getWrapper(), 'modal should be hidden').toBeHidden();
    await this.getIcon().click();
    await expect(this.getModal().getWrapper(), 'modal should be visible').toBeVisible();
    return this.getModal();
  }

  /** Cleans up tests by closing {@link hamburgerModal} if left open. */
  public async cleanup() {
    await this.hamburgerModal.cleanup();
  }
}

/** @hidden */
export const hamburgerMenuTest = test.extend<{ hamburgerMenu: HamburgerMenu }>({
  hamburgerMenu: async ({ page }, use) => {
    const hamburgerMenu = new HamburgerMenu(page);
    await use(hamburgerMenu);
    await hamburgerMenu.cleanup();
  }
});
