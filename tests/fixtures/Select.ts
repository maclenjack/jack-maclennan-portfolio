import { expect, Locator } from '@playwright/test';
import Component from './interfaces/Component';

/**
 * Fixture for Select component
 * @remarks
 * Provides method helpers for locating child elements and interactivity.
 *
 * @includeExample tests/fixtures/ThemeSelect.ts:31
 * @source
 */
export default class Select implements Component {
  /** @public Component wrapper. */
  private readonly select: Locator;
  /** @public Button element used to open select {@link menu}. */
  private readonly button: Locator;
  /** @public Menu element containing options. */
  private readonly menu: Locator;

  /**
   * Fixture constructor - initialise variables.
   * @param parent - Parent element.
   */
  public constructor(public readonly parent: Locator) {
    this.select = this.parent.getByTestId('custom-select');
    this.button = this.select.getByTestId('custom-select-button');
    this.menu = this.select.getByTestId('custom-select-menu');
  }

  /** Getter method. @returns {@link select}. */
  public getWrapper(): Locator {
    return this.select;
  }

  /** Testing helper method. */
  public async rendersCorrectly(): Promise<void> {
    await expect(this.getButton(), 'select button should be visible').toBeVisible();
    await expect(this.getMenu(), 'select menu should be hidden').toBeHidden();
  }

  /** Getter method. @returns {@link button}. */
  public getButton(): Locator {
    return this.button;
  }

  /** Getter method. @returns {@link menu}. */
  public getMenu(): Locator {
    return this.menu;
  }

  /** Opens select menu by interacting with {@link button}. */
  public async openMenu(): Promise<void> {
    this.getButton().click();
  }

  /**
   * Selects option by interacting with {@link menu}.
   * @param identifier - Test ID of option element.
   */
  public async selectOption(identifier: string): Promise<void> {
    await this.openMenu();
    await expect(this.getMenu()).toBeVisible();
    await this.getMenu().getByTestId(identifier).click();
    await expect(this.getMenu()).toBeHidden();
  }
}
