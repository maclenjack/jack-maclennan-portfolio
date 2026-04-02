import { expect, Locator, Page, test } from '@playwright/test';
import Component from './interfaces/Component';
import Modal from './Modal';
import SiteLinks from './SiteLinks';
import SocialIcons from './SocialIcons';

/**
 * Fixture for Modal within {@link HamburgerMenu}.
 * @remarks
 * Provides method helpers for locating child elements and interactivity.
 * Extends the base Modal class with HamburgerMenu-specific functionality.
 *
 * @includeExample tests/fixtures/HamburgerMenu.ts[103:107]
 * @source
 */
export class HamburgerModal extends Modal {
  /** @public Child {@link SocialIcons}. */
  private readonly socialIcons: SocialIcons;
  /** @public Child {@link SiteLinks}. */
  private readonly siteLinks: SiteLinks;
  /** @public Child close-icon. */
  private readonly closeIcon: Locator;

  /**
   * @param page - Playwright page object.
   */
  public constructor(page: Page) {
    super(page);
    this.socialIcons = new SocialIcons(
      this.modal.getByRole('group', { name: 'Social links' }).filter({ visible: true })
    );
    this.siteLinks = new SiteLinks(
      this.modal.getByRole('navigation', { name: 'Site links' }).filter({ visible: true })
    );
    this.closeIcon = this.modal.getByRole('button', { name: 'exit hamburger menu' });
  }

  /** Testing helper method. */
  public async rendersCorrectly(): Promise<boolean> {
    if (await this.getWrapper().isHidden()) {
      await expect(this.getSocialIcons().getWrapper(), 'site links hidden when modal closed').toBeHidden();
      await expect(this.getSiteLinks().getWrapper(), 'site links hidden when modal closed').toBeHidden();
      await expect(this.getCloseIcon(), 'close icon hidden when modal closed').toBeHidden();
      await expect(this.getWrapper()).toBeHidden();
    } else {
      expect(await this.getSocialIcons().rendersCorrectly()).toBeTruthy();
      expect(await this.getSiteLinks().rendersCorrectly()).toBeTruthy();
      await expect(this.getCloseIcon(), 'close icon should be visible when modal open').toBeVisible();
    }
    return true;
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
  public async closeModal(): Promise<void> {
    await expect(this.modal, 'modal should be visible').toBeVisible();
    await this.getCloseIcon().click();
    await expect(this.modal, 'modal should be hidden').toBeHidden();
  }

  /**
   * Closes the modal when screen width exceeds the mobile breakpoint.
   * @param breakpointWidth - The width at which the modal should close (default: 768px).
   */
  public async closeOnScreenChange(breakpointWidth: number = 768): Promise<boolean> {
    return await super.closeOnScreenChange(breakpointWidth);
  }
}

/**
 * Fixture for HamburgerMenu component.
 * @remarks
 * Provides method helpers for locating child elements and interactivity.
 *
 * Used in example to be accessed in testing environment.
 * @includeExample tests/fixtures/HamburgerMenu.ts[154:161]
 * @source
 */
export default class HamburgerMenu implements Component {
  /** @public Component wrapper. */
  private readonly hamburgerMenu: Locator;
  /** @public Modal wrapper. */
  private readonly hamburgerModal: HamburgerModal;

  /**
   * Fixture constructor - initialise variables.
   * @param page - Playwright page object.
   */
  public constructor(private readonly page: Page) {
    this.hamburgerMenu = this.page.getByRole('button', { name: 'open hamburger menu' });
    this.hamburgerModal = new HamburgerModal(page);
  }

  /** Getter method. @returns {@link hamburgerMenu}. */
  public getWrapper(): Locator {
    return this.hamburgerMenu;
  }

  /** Testing helper method. */
  public async rendersCorrectly(): Promise<boolean> {
    await expect(this.hamburgerMenu, 'hamburger icon visible when closed').toBeVisible();
    expect(await this.getModal().rendersCorrectly()).toBeTruthy();
    return true;
  }

  /** Getter method. @returns {@link hamburgerModal}. */
  getModal(): HamburgerModal {
    return this.hamburgerModal;
  }

  /** Opens {@link hamburgerModal} by interacting with {@link icon}. */
  async openModal(): Promise<HamburgerModal> {
    await expect(this.getModal().getWrapper(), 'modal should be hidden').toBeHidden();
    await this.hamburgerMenu.click();
    await expect(this.getModal().getWrapper(), 'modal should be visible').toBeVisible();
    return this.getModal();
  }

  /** Cleans up tests by closing {@link hamburgerModal} if left open. */
  public async cleanup() {
    await this.hamburgerModal.cleanup();
  }
}

/**
 * Test environment for Hamburger Menu.
 * @remarks
 * Provides a HamburgerMenu to be used in tests.
 *
 * @includeExample tests/e2e/Home.spec.ts[7]
 * @source
 *
 */
export const hamburgerMenuTest = test.extend<{ hamburgerMenu: HamburgerMenu }>({
  hamburgerMenu: async ({ page }, use) => {
    const hamburgerMenu = new HamburgerMenu(page);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(hamburgerMenu);
    await hamburgerMenu.cleanup();
  }
});
