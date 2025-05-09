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
  /** @public Link to docs GitHub Page. */
  private readonly docsLink: Locator;

  /**
   * Fixture constructor - initialise variables.
   * @param parent - Parent element.
   */
  public constructor(public readonly parent: Locator) {
    this.siteLinks = this.parent.getByTestId('site-links');
    this.projectsLink = this.siteLinks.getByTestId('projects');
    this.experienceLink = this.siteLinks.getByTestId('experience');
    this.aboutMeLink = this.siteLinks.getByTestId('about-me');
    this.docsLink = this.siteLinks.getByTestId('docs');
  }

  /** Getter method. @returns {@link siteLinks}. */
  public getWrapper(): Locator {
    return this.siteLinks;
  }

  /** Testing helper method. */
  public async rendersCorrectly(): Promise<boolean> {
    await expect(this.getWrapper(), 'wrapper is visible').toBeVisible();
    await expect(this.getProjectsLink(), 'projects link is visible').toBeVisible();
    await expect(this.getExperienceLink(), 'experience link is visible').toBeVisible();
    await expect(this.getAboutMeLink(), 'about me link is visible').toBeVisible();
    await expect(this.getDocsLink(), 'docs link is visible').toBeVisible();
    expect(await this.getListLength(), 'list length is 4').toBe(4);
    return true;
  }

  /** Testing helper method; ensures links function as intended. */
  public async navigatesCorrectly(page: Page, beforeEach?: () => Promise<void>): Promise<boolean> {
    if (beforeEach !== undefined) await beforeEach();
    await this.navigateToProjects(page);
    await expect(page, 'navigate to projects page').toHaveURL('/projects');
    if (beforeEach !== undefined) await beforeEach();
    await this.navigateToExperience(page);
    await expect(page, 'navigate to experience page').toHaveURL('/experience');
    if (beforeEach !== undefined) await beforeEach();
    await this.navigateToAboutMe(page);
    await expect(page, 'navigate to about me page').toHaveURL('/about-me');
    if (beforeEach !== undefined) await beforeEach();
    // TODO: Add test for docs link - currently stuck on how to test new tab links, behaviour is inconsistent across browsers.
    await page.goto('http://localhost:3000');
    return true;
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

  /** Getter method. @returns {@link docsLink}. */
  public getDocsLink(): Locator {
    return this.docsLink;
  }

  /** Interact with {@link projectsLink}. @param page - Playwright Page object */
  public async navigateToProjects(page: Page): Promise<void> {
    const projectsLink: Locator = this.getProjectsLink();
    expect(projectsLink, 'projects link is visible').toBeVisible();
    await projectsLink.click();
    await page.waitForURL('**/projects');
  }

  /** Interact with {@link experienceLink}. @param page - Playwright Page object */
  public async navigateToExperience(page: Page): Promise<void> {
    const experienceLink: Locator = this.getExperienceLink();
    expect(experienceLink, 'experience link is visible').toBeVisible();
    await experienceLink.click();
    await page.waitForURL('**/experience');
  }

  /** Interact with {@link aboutMeLink}. @param page - Playwright Page object */
  public async navigateToAboutMe(page: Page): Promise<void> {
    const aboutMeLink: Locator = this.getAboutMeLink();
    expect(aboutMeLink, 'about me link is visible').toBeVisible();
    await aboutMeLink.click();
    await page.waitForURL('**/about-me');
  }

  /** Interact with {@link docsLink}. @param page - Playwright Page object */
  /** Currently doesn't work */
  // public async navigateToDocs(page: Page): Promise<void> {
  //   const docsLink: Locator = this.getDocsLink();
  //   expect(docsLink, 'docs link is visible').toBeVisible();
  //   await docsLink.click();
  //   await page.waitForURL('https://maclenjack.github.io/jack-maclennan-portfolio/');
  // }

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
