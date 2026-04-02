import { expect, Locator } from '@playwright/test';
import Component from './interfaces/Component';

/**
 * Fixture for Select component
 * @remarks
 * Provides method helpers for locating child elements and interactivity.
 *
 * @includeExample tests/fixtures/ThemeSelect.ts[26:32]
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
    this.select = this.parent.getByRole('group', { name: 'selector', exact: true });
    this.button = this.parent.getByRole('button');
    this.menu = this.select.getByRole('listbox');
  }

  /** Getter method. @returns {@link select}. */
  public getWrapper(): Locator {
    return this.select;
  }

  /** Testing helper method. */
  public async rendersCorrectly(): Promise<boolean> {
    await expect(this.getWrapper(), 'select should be visible').toBeVisible();
    await expect(this.getButton(), 'select button should be visible').toBeVisible();
    await expect(this.getMenu(), 'select menu should be hidden').toBeHidden();
    return true;
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
  public async selectOption(optionText: string): Promise<void> {
    await this.openMenu();
    await expect(this.getMenu()).toBeVisible();
    await this.getMenu().getByText(optionText).click();
    await expect(this.getMenu()).toBeHidden();
  }
}
