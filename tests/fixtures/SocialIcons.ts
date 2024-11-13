import { expect, Locator } from '@playwright/test';
import ListComponent from './interfaces/ListComponent';

/**
 * Fixture for SocialIcons component
 * @remarks
 * Provides method helpers for locating children elements and interactivity.
 *
 * Used in example to be accessed in testing environment.
 *
 * @includeExample tests/fixtures/NavBar.ts:46
 * @source
 */
export default class SocialIcons implements ListComponent {
  /** @public Component wrapper. */
  private readonly socialIcons: Locator;
  /** @public Component wrapper. */
  private readonly emailLink: Locator;
  /** @public Component wrapper. */
  private readonly githubLink: Locator;
  /** @public Component wrapper. */
  private readonly linkedInLink: Locator;

  /**
   * Fixture constructor - initialise variables.
   * @param parent - Parent element.
   */
  public constructor(public readonly parent: Locator) {
    this.socialIcons = this.parent.getByTestId('social-icons');
    this.emailLink = this.socialIcons.getByTestId('email-link');
    this.githubLink = this.socialIcons.getByTestId('github-link');
    this.linkedInLink = this.socialIcons.getByTestId('linkedin-link');
  }

  /** Getter method. @returns {@link siteLinks}. */
  public getWrapper(): Locator {
    return this.socialIcons;
  }

  /** Testing helper method. */
  public async rendersCorrectly(): Promise<void> {
    await expect(this.getWrapper(), 'wrapper is visible').toBeVisible();
    await expect(this.getEmailLink(), 'email link is visible').toBeVisible();
    await expect(this.getGithubLink(), 'github link is visible').toBeVisible();
    await expect(this.getLinkedInLink(), 'linkedin link is visible').toBeVisible();
    expect(await this.getListLength(), 'has list length of 3').toBe(3);
  }

  /** Getter method. @returns {@link emailLink}. */
  public getEmailLink(): Locator {
    return this.emailLink;
  }

  /** Getter method. @returns {@link githubLink}. */
  public getGithubLink(): Locator {
    return this.githubLink;
  }

  /** Getter method. @returns {@link linkedInLink}. */
  public getLinkedInLink(): Locator {
    return this.linkedInLink;
  }

  /** Getter method. @returns Link element children. */
  public getListItems(): Locator {
    return this.socialIcons.getByRole('link');
  }

  /** Getter method. @inheritDoc */
  public async getListLength(): Promise<number> {
    return this.getListItems().count();
  }

  /** Getter method. @returns Link child at given index. */
  public getListItemByIndex(index: number): Locator {
    return this.getListItems().nth(index);
  }
}
