import { Locator } from '@playwright/test';
import ListComponent from './interfaces/ListComponent';

export default class SiteLinks implements ListComponent {
  private readonly siteLinks: Locator;

  constructor(readonly parent: Locator) {
    this.siteLinks = this.parent.getByTestId('site-links');
  }

  getWrapper() {
    return this.siteLinks;
  }

  getEmailLink() {
    return this.siteLinks.getByTestId('email-link');
  }

  getGithubLink() {
    return this.siteLinks.getByTestId('github-link');
  }

  getLinkedInLink() {
    return this.siteLinks.getByTestId('linkedin-link');
  }

  public getListItems() {
    return this.siteLinks.getByRole('link');
  }

  public getListLength() {
    return this.getListItems().count();
  }

  public getListItemByIndex(index: number) {
    return this.getListItems().nth(index);
  }
}
