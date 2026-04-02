import { Locator, Page, expect } from '@playwright/test';
import Select from './Select';
import Component from './interfaces/Component';

/**
 * Fixture for ThemeSelect component
 * @remarks
 * Provides method helpers for locating children elements and interactivity.
 *
 * Used in example to be accessed in testing environment.
 *
 * @includeExample tests/fixtures/NavBar.ts[40:52]
 * @source
 */
export default class ThemeSelect implements Component {
  /** Child {@link select}. */
  private readonly select: Select;

  /**
   * Fixture constructor - initialise variables.
   * @param page - Playwright Page object.
   * @param themeSelect - ThemeSelect locator.
   */
  public constructor(
    private readonly page: Page,
    private readonly themeSelect: Locator
  ) {
    this.select = new Select(this.themeSelect);
  }

  /** Getter method. @returns {@link themeSelect}. */
  public getWrapper(): Locator {
    return this.themeSelect;
  }

  /** Testing helper method. */
  public async rendersCorrectly(): Promise<boolean> {
    await expect(this.getWrapper(), 'theme select should be visible').toBeVisible();
    expect(await this.getSelect().rendersCorrectly()).toBeTruthy();
    return true;
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
    const themeLabels: Record<string, string> = {
      'light-mode': 'Light',
      'dark-mode': 'Dark',
      'system-default': 'System'
    };
    await this.select.selectOption(themeLabels[theme] || theme);
  }
}
