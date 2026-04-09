import { PROJECT_ITEMS } from '@/constants/projects';
import { AxeBuilder } from '@axe-core/playwright';
import { cardListTest } from '@fixtures/CardList';
import { navBarTest } from '@fixtures/NavBar';
import { projectsTest } from '@fixtures/Projects';
import { expect, mergeTests } from '@playwright/test';
import { CardListItem } from '../fixtures/CardList';

const test = mergeTests(projectsTest, navBarTest, cardListTest);

const { describe } = test;

describe('all devices', () => {
  describe('AxeBuilder.analyze', () => {
    test('has no accessibility violations', async ({ page }) => {
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations, 'no accessibility violations').toEqual([]);
    });
  });

  test('<NavBar /> renders correctly', async ({ navBar }) => {
    expect(await navBar.rendersCorrectly()).toBeTruthy();
  });

  test('renders projects page header and description', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Projects' }), 'page title should be visible').toBeVisible();
    await expect(page.getByRole('article'), 'page description should be visible').toBeVisible();
  });

  test('renders project card data', async ({ cardList }) => {
    await expect(cardList.getListItems(), 'correct number of card items').toHaveCount(PROJECT_ITEMS.length);

    for (const [index, item] of PROJECT_ITEMS.entries()) {
      const cardItem = new CardListItem(cardList.getWrapper(), cardList.getListItemByIndex(index));
      await cardItem.expectTitleText(item.title);
      await cardItem.expectSubtitleText(item.subtitle);
    }
  });
});
