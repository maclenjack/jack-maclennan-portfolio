import { Locator } from '@playwright/test';

export default interface Component {
  getWrapper: () => Locator;
}
