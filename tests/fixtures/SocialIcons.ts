import { Locator } from '@playwright/test';
import ListComponent from './interfaces/ListComponent';

export default class SocialIcons implements ListComponent {
  private readonly socialIcons: Locator;

  constructor(readonly parent: Locator) {
    this.socialIcons = this.parent.getByTestId('social-icons');
  }

  public getWrapper() {
    return this.socialIcons;
  }

  public getEmailLink() {
    return this.socialIcons.getByTestId('email-link');
  }

  public getGithubLink() {
    return this.socialIcons.getByTestId('github-link');
  }

  public getLinkedInLink() {
    return this.socialIcons.getByTestId('linkedin-link');
  }

  public getListItems() {
    return this.socialIcons.getByRole('link');
  }

  public getListLength() {
    return this.getListItems().count();
  }

  public getListItemByIndex(index: number) {
    return this.getListItems().nth(index);
  }
}
