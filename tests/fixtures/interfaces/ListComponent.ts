import { Locator } from '@playwright/test';
import Component from './Component';

export default interface ListComponent extends Component {
  getListItems: () => Locator;
  getListLength: () => Promise<number>;
  getListItemByIndex: (index: number) => Locator;
}
