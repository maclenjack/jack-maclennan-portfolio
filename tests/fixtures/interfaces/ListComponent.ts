import { Locator } from '@playwright/test';
import Component from './Component';

/**
 * Generic functions needed for list component classes
 * @source
 */
export default interface ListComponent extends Component {
  /**
   * Getter method.
   * @returns List elements.
   */
  getListItems: () => Locator;
  /**
   * Getter method.
   * @returns Length of list.
   */
  getListLength: () => Promise<number>;
  /**
   * Getter method.
   * @param index - Index of element in list.
   * @returns Element at given index.
   */
  getListItemByIndex: (index: number) => Locator;
}
