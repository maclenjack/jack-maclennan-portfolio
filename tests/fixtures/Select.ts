import { expect, Locator } from '@playwright/test';
import Component from './interfaces/Component';

export default class Select implements Component {
  private readonly select: Locator;

  constructor(readonly parent: Locator) {
    this.select = this.parent.getByTestId('custom-select');
  }

  getWrapper() {
    return this.select;
  }

  getButton() {
    return this.select.getByTestId('custom-select-button');
  }

  getMenu() {
    return this.select.getByTestId('custom-select-menu');
  }

  async openMenu() {
    this.getButton().click();
  }

  async selectOption(identifier: string) {
    await this.openMenu();
    await expect(this.getMenu()).toBeVisible();
    await this.getMenu().getByTestId(identifier).click();
    await expect(this.getMenu()).toBeHidden();
  }
}
