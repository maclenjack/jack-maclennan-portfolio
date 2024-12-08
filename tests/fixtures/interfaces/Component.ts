import { Locator } from '@playwright/test';

/**
 * Generic functions required for component fixture classes.
 * @source
 */
export default interface Component {
  /**
   * Getter method.
   * @returns Component wrapper.
   */
  getWrapper: () => Locator;
  /**
   * Test util.
   */
  rendersCorrectly: () => Promise<boolean>;
}
