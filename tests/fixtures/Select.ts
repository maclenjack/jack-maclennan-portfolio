import { expect, Locator } from '@playwright/test';
import Component from './interfaces/Component';

/**
 * Base fixture class for customizable generic select components.
 * @remarks
 * Provides reusable methods for locating and interacting with select elements.
 * Designed to be extended by specific implementations (e.g., {@link ThemeSelect}).
 * Implements common select patterns: role-based locators, menu visibility, and option selection.
 *
 * @example
 * // Extend Select for a specific use case
 * class ThemeSelect extends Select {
 *   constructor(parent: Locator) {
 *     super(parent);
 *   }
 * }
 *
 * @source
 */
export default class Select implements Component {
  /** @public Component wrapper. */
  public readonly select: Locator;
  /** @public Button element used to open select {@link menu}. */
  public readonly button: Locator;
  /** @public Menu element containing options. */
  public readonly menu: Locator;

  /**
   * Fixture constructor - initializes select wrapper and child locators.
   * @param parent - Parent locator containing the select component.
   * @remarks
   * Subclasses should call `super(parent)` in their constructor
   * to properly initialize the base select fixture.
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
