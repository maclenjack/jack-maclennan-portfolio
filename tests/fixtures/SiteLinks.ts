import { expect, Locator, Page } from '@playwright/test';
import ListComponent from './interfaces/ListComponent';

/**
 * Fixture for SiteLinks component
 * @remarks
 * Provides method helpers for locating children elements and interactivity.
 *
 * Used in example to be accessed in testing environment.
 *
 * @includeExample tests/fixtures/NavBar.ts:45
 * @source
 */
export default class SiteLinks implements ListComponent {
  /** @public Component wrapper. */
  private readonly siteLinks: Locator;
  /** @public Projects link element. */
  private readonly projectsLink: Locator;
  /** @public Experience link element. */
  private readonly experienceLink: Locator;
  /** @public About me link element. */
  private readonly aboutMeLink: Locator;

  /**
   * Fixture constructor - initialise variables.
   * @param parent - Parent element.
   */
  public constructor(public readonly parent: Locator) {
    this.siteLinks = this.parent.getByTestId('site-links');
    this.projectsLink = this.siteLinks.getByTestId('project');
    this.experienceLink = this.siteLinks.getByTestId('experience');
    this.aboutMeLink = this.siteLinks.getByTestId('about-me');
  }

  /** Getter method. @returns {@link siteLinks}. */
  public getWrapper(): Locator {
    return this.siteLinks;
  }

  /** Testing helper method. */
  public async rendersCorrectly(): Promise<void> {
    await expect(this.getWrapper(), 'wrapper is visible').toBeVisible();
    await expect(this.getProjectsLink(), 'projects link is visible').toBeVisible();
    await expect(this.getExperienceLink(), 'experience link is visible').toBeVisible();
    await expect(this.getAboutMeLink(), 'about me link is visible').toBeVisible();
    expect(await this.getListLength(), 'list length is 3').toBe(3);
  }

  /** Testing helper method; ensures links function as intended. */
  public async navigatesCorrectly(page: Page, beforeEach?: () => Promise<void>): Promise<void> {
    if (beforeEach !== undefined) await beforeEach();
    await this.navigateToProjects();
    await expect(page, 'navigate to projects page').toHaveURL('/projects');
    if (beforeEach !== undefined) await beforeEach();
    await this.navigateToExperience();
    await expect(page, 'navigate to experience page').toHaveURL('/experience');
    if (beforeEach !== undefined) await beforeEach();
    await this.navigateToAboutMe();
    await expect(page, 'navigate to about me page').toHaveURL('/about-me');
  }

  /** Getter method. @returns {@link projectsLink}. */
  public getProjectsLink(): Locator {
    return this.projectsLink;
  }

  /** Getter method. @returns {@link experienceLink}. */
  public getExperienceLink(): Locator {
    return this.experienceLink;
  }

  /** Getter method. @returns {@link aboutMeLink}. */
  public getAboutMeLink(): Locator {
    return this.aboutMeLink;
  }

  /** Interact with {@link projectsLink}. */
  public async navigateToProjects(): Promise<void> {
    const projectsLink: Locator = this.getProjectsLink();
    expect(projectsLink).toBeVisible();
    await projectsLink.click();
  }

  /** Interact with {@link experienceLink}. */
  public async navigateToExperience(): Promise<void> {
    const experienceLink: Locator = this.getExperienceLink();
    expect(experienceLink).toBeVisible();
    await experienceLink.click();
  }

  /** Interact with {@link aboutMeLink}. */
  public async navigateToAboutMe(): Promise<void> {
    const aboutMeLink: Locator = this.getAboutMeLink();
    expect(aboutMeLink).toBeVisible();
    await aboutMeLink.click();
  }

  /** Getter method. @returns Link element children. */
  public getListItems(): Locator {
    return this.siteLinks.getByRole('link');
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
