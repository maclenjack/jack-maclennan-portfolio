import { Locator, Page } from '@playwright/test';
import Select from './Select';
import Component from './interfaces/Component';

/**
 * Fixture for ThemeSelect component
 * @remarks
 * Provides method helpers for locating children elements and interactivity.
 *
 * Used in example to be accessed in testing environment.
 *
 * @includeExample tests/fixtures/NavBar.ts:47-50
 * @source
 */
export default class ThemeSelect implements Component {
  /** Component wrapper. */
  private readonly themeSelect: Locator;
  /** Child {@link Select}. */
  private readonly select: Select;

  /**
   * Fixture constructor - initialise variables.
   * @param page - Playwright Page object.
   * @param parent - Parent element.
   */
  public constructor(
    private readonly page: Page,
    private readonly parent: Locator
  ) {
    this.themeSelect = this.parent.getByTestId('theme-select');
    this.select = new Select(this.themeSelect);
  }

  /** Getter method. @returns {@link themeSelect}. */
  public getWrapper(): Locator {
    return this.themeSelect;
  }

  /** Testing helper method. */
  public async rendersCorrectly(): Promise<void> {
    await this.getSelect().rendersCorrectly();
  }

  /** Getter method. @returns {@link select}. */
  public getSelect(): Select {
    return this.select;
  }

  /** Getter method. @returns Theme value stored in local storage. */
  public async getTheme(): Promise<string | null> {
    return this.page.evaluate((): string | null => window.localStorage.getItem('theme'));
  }

  /** Setter method; sets theme value stored in local storage. */
  public async setTheme(theme: string): Promise<void> {
    await this.select.selectOption(`${theme}-option`);
  }
}
