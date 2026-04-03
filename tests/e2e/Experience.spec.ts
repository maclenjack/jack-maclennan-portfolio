import { EXPERIENCE_ITEMS } from '@/constants/experience';
import { AxeBuilder } from '@axe-core/playwright';
import { cardListTest } from '@fixtures/CardList';
import { experienceTest } from '@fixtures/Experience';
import { navBarTest } from '@fixtures/NavBar';
import { expect, mergeTests } from '@playwright/test';
import { CardListItem } from '../fixtures/CardList';

const test = mergeTests(experienceTest, navBarTest, cardListTest);

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

  test('renders experience page header and description', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Experience' }), 'page title should be visible').toBeVisible();
    await expect(page.getByRole('article'), 'page description should be visible').toBeVisible();
  });

  test('renders experience card data', async ({ cardList }) => {
    await expect(cardList.getListItems(), 'correct number of card items').toHaveCount(EXPERIENCE_ITEMS.length);

    for (const [index, item] of EXPERIENCE_ITEMS.entries()) {
      const cardItem = new CardListItem(cardList.getWrapper(), cardList.getListItemByIndex(index));
      await cardItem.expectTitleText(item.title);
      await cardItem.expectSubtitleText(item.subtitle);
    }
  });
});
