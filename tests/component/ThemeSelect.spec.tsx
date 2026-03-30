import ThemeSelect from '@components/theme-select/ThemeSelect';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, it } from 'vitest';

describe('<ThemeSelect />', () => {
  beforeEach(() => {
    render(<ThemeSelect />);
  });
  it('should render custom <Select />', () => {
    const select = screen.getByTestId('custom-select');
    expect(select).toBeInTheDocument();
    expect(select).toBeVisible();
  });
  describe.each([
    { theme: 'light', themeName: 'light-mode' },
    { theme: 'dark', themeName: 'dark-mode' },
    { theme: 'system', themeName: 'system-default' }
  ])('update theme to $themeName', ({ theme, themeName }) => {
    const user = userEvent.setup();
    beforeEach(() => {
      localStorage.setItem('theme', 'system');
    });
    it("should have default value of 'system'", () => {
      expect(localStorage.getItem('theme')).toEqual('system');
    });
    it(`should update to '${theme}' on change`, async () => {
      expect(screen.getByTestId(`system-default-selected`)).toBeInTheDocument();
      expect(screen.queryByTestId('custom-select-menu')).not.toBeInTheDocument();

      await user.click(screen.getByTestId('custom-select-button'));
      expect(screen.getByTestId('custom-select-menu')).toBeInTheDocument();
      expect(screen.getByTestId('custom-select-menu')).toBeVisible();

      await user.click(screen.getByTestId(`${themeName}-option`));
      expect(localStorage.getItem('theme')).toEqual(theme);
      expect(screen.getByTestId(`${themeName}-selected`)).toBeInTheDocument();
      expect(screen.queryByTestId('custom-select-menu')).not.toBeInTheDocument();
    });
  });
});
