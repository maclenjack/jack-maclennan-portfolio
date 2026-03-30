import { expect, Locator, Page } from '@playwright/test';
import Component from './interfaces/Component';

/**
 * Base fixture for Modal components.
 * @remarks
 * Provides common methods for locating modal elements and handling modal interactions.
 * Can be extended for specific modal implementations.
 *
 * @source
 */
export default class Modal implements Component {
  /** @protected Modal wrapper element. */
  protected readonly modal: Locator;
  /** @protected Playwright page object. */
  protected readonly page: Page;

  /**
   * @param page - Playwright page object.
   * @param modalLocator - Optional custom locator for the modal. Defaults to getByRole('dialog').
   */
  public constructor(page: Page, modalLocator?: Locator) {
    this.page = page;
    this.modal = modalLocator || page.getByRole('dialog');
  }

  /** Getter method. @returns {@link modal}. */
  public getWrapper(): Locator {
    return this.modal;
  }

  /** Testing helper method. */
  public async rendersCorrectly(): Promise<boolean> {
    await expect(this.getWrapper(), 'modal should be visible').toBeVisible();
    return true;
  }

  /**
   * Checks if the modal is currently visible.
   * @returns True if modal is visible, false otherwise.
   */
  public async isModalVisible(): Promise<boolean> {
    return await this.getWrapper().isVisible();
  }

  /**
   * Closes the modal by clicking the close button or pressing Escape.
   * @param closeLocator - Optional locator for the close button. If not provided, will try to find a close button.
   */
  public async closeModal(closeLocator?: Locator): Promise<void> {
    await expect(this.modal, 'modal should be visible').toBeVisible();

    if (closeLocator) {
      await closeLocator.click();
    } else {
      // Try to find a close button by common patterns
      const closeButton = this.modal.getByRole('button', { name: /close|exit|dismiss/i }).first();
      if (await closeButton.isVisible()) {
        await closeButton.click();
      } else {
        // Fallback to pressing Escape key
        await this.page.keyboard.press('Escape');
      }
    }

    await expect(this.modal, 'modal should be hidden').toBeHidden();
  }

  /**
   * Closes the modal by pressing the Escape key.
   */
  public async closeModalWithEscape(): Promise<void> {
    await expect(this.modal, 'modal should be visible').toBeVisible();
    await this.page.keyboard.press('Escape');
    await expect(this.modal, 'modal should be hidden').toBeHidden();
  }

  /**
   * Closes the modal by clicking the backdrop (if applicable).
   */
  public async closeModalWithBackdrop(): Promise<void> {
    await expect(this.modal, 'modal should be visible').toBeVisible();
    const backdrop = this.page.getByTestId('custom-modal-backdrop');
    if (await backdrop.isVisible()) {
      await backdrop.click();
      await expect(this.modal, 'modal should be hidden').toBeHidden();
    }
  }

  /**
   * Waits for screen size change and handles modal state accordingly.
   * @param width - Target width to resize to.
   * @param height - Target height to resize to.
   */
  public async handleScreenChange(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
    // Wait for any transitions or re-renders
    await this.page.waitForTimeout(300);
  }

  /**
   * Checks if modal should be closed on screen size change.
   * @param breakpointWidth - The width breakpoint at which modal should close.
   * @returns True if modal was closed, false if it remains open.
   */
  public async closeOnScreenChange(breakpointWidth: number): Promise<boolean> {
    const wasVisible = await this.isModalVisible();
    if (wasVisible) {
      await this.handleScreenChange(breakpointWidth, 800);
      return !(await this.isModalVisible());
    }
    return false;
  }

  /** Cleans up tests by closing modal if left open. */
  public async cleanup(): Promise<void> {
    if (await this.getWrapper().isVisible()) {
      await this.closeModal();
    }
  }
}
