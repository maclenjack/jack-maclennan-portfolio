import { Locator, Page } from '@playwright/test';
import Select from './Select';
import Component from './interfaces/Component';

export default class ThemeSelect implements Component {
  private readonly themeSelect: Locator;
  private readonly select: Select;

  constructor(
    public readonly page: Page,
    public readonly parent: Locator
  ) {
    this.themeSelect = this.parent.getByTestId('theme-select');
    this.select = new Select(this.themeSelect);
  }

  getWrapper() {
    return this.themeSelect;
  }

  getSelect() {
    return this.select;
  }

  async getTheme() {
    return this.page.evaluate(() => window.localStorage.getItem('theme'));
  }

  async setTheme(theme: string) {
    await this.select.selectOption(`${theme}-option`);
  }
}
