import Component from '@fixtures/interfaces/Component';
import { expect, Locator, Page, test } from '@playwright/test';
import ListComponent from './interfaces/ListComponent';

/**
 * Fixture for CardListItem component.
 * @remarks
 * Provides method helpers for locating child elements.
 *
 * @source
 */
export class CardListItem implements Component {
  /** @public Component wrapper. */
  private readonly cardItem: Locator;
  /** @public Card title element. */
  private readonly title: Locator;
  /** @public Card subtitle element. */
  private readonly subtitle: Locator;

  /**
   * @param parent - Parent element (card-list-item).
   */
  public constructor(
    public readonly parent: Locator,
    cardItem: Locator
  ) {
    this.cardItem = cardItem;
    this.title = this.cardItem.getByRole('heading');
    this.subtitle = this.cardItem.locator('p');
  }

  /** Getter method. @returns {@link cardItem}. */
  public getWrapper(): Locator {
    return this.cardItem;
  }

  /** Testing helper method. */
  public async rendersCorrectly(): Promise<boolean> {
    await expect(this.getTitle(), 'card title should be visible').toBeVisible();
    await expect(this.getSubtitle(), 'card subtitle should be visible').toBeVisible();
    return true;
  }

  /** Getter method. @returns {@link title}. */
  getTitle(): Locator {
    return this.title;
  }

  /** Getter method. @returns {@link subtitle}. */
  getSubtitle(): Locator {
    return this.subtitle;
  }

  /** Assert that the title has the expected text. */
  async expectTitleText(text: string): Promise<void> {
    await expect(this.getTitle()).toHaveText(text);
  }

  /** Assert that the subtitle has the expected text. */
  async expectSubtitleText(text: string): Promise<void> {
    await expect(this.getSubtitle()).toHaveText(text);
  }
}

/**
 * Fixture for CardList component.
 * @remarks
 * Provides method helpers for locating child CardListItem elements.
 *
 * @source
 */
export default class CardList implements ListComponent {
  /** @public Component wrapper. */
  private readonly cardList: Locator;

  /**
   * @param page - Playwright page object.
   */
  public constructor(private readonly page: Page) {
    this.cardList = page.getByRole('list', { name: 'card list' });
  }

  /** Getter method. @returns {@link cardList}. */
  public getWrapper(): Locator {
    return this.cardList;
  }

  /** Testing helper method. */
  public async rendersCorrectly(): Promise<boolean> {
    await expect(this.getWrapper(), 'card list should be visible').toBeVisible();
    return true;
  }

  /** Get all list item locators. */
  getListItems(): Locator {
    return this.cardList.getByRole('listitem');
  }

  /** Get a specific card list item by index. */
  getListItemByIndex(index: number): Locator {
    return this.getListItems().nth(index);
  }

  /** Get the number of card list items. */
  async getListLength(): Promise<number> {
    return await this.getListItems().count();
  }
}

/**
 * Test environment for CardList component.
 * @remarks
 * Provides a CardList to be used in tests.
 *
 * @source
 */
export const cardListTest = test.extend<{ cardList: CardList }>({
  cardList: async ({ page }, use) => {
    const cardList = new CardList(page);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(cardList);
  }
});
