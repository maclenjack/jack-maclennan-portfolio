import { Locator, Page, expect } from '@playwright/test';
import Select from './Select';

/**
 * Fixture for ThemeSelect component
 * @remarks
 * Provides method helpers for locating children elements and interactivity.
 *
 * Used in example to be accessed in testing environment.
 *
 * @includeExample tests\e2e\Home.spec.ts[192:200]
 * @source
 */
export default class ThemeSelect extends Select {
  /**
   * Fixture constructor - initialise variables.
   * @param page - Playwright Page object.
   * @param themeSelect - ThemeSelect locator.
   */
  public constructor(
    private readonly page: Page,
    public readonly themeSelect: Locator
  ) {
    super(themeSelect);
  }

  /** Getter method. @returns {@link themeSelect}. */
  public getWrapper(): Locator {
    return this.themeSelect;
  }

  /** Testing helper method. */
  public async rendersCorrectly(): Promise<boolean> {
    await expect(this.getWrapper(), 'theme select should be visible').toBeVisible();
    await super.rendersCorrectly();
    return true;
  }

  /** Getter method. @returns {@link select}. */
  public getSelect(): Locator {
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
    await super.selectOption(themeLabels[theme] || theme);
  }
}
