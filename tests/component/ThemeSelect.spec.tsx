import ThemeSelect from '@components/theme-select/ThemeSelect';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, it } from 'vitest';

describe('<ThemeSelect />', () => {
  beforeEach(() => {
    render(<ThemeSelect />);
  });
  it('should render select button', () => {
    const button = screen.getByRole('button', { name: 'select theme' });
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });
  describe.each([
    { theme: 'light', themeName: 'Light mode' },
    { theme: 'dark', themeName: 'Dark mode' },
    { theme: 'system', themeName: 'System default' }
  ])('update theme to $themeName', ({ theme, themeName }) => {
    const user = userEvent.setup();
    beforeEach(() => {
      localStorage.setItem('theme', 'system');
    });
    it("should have default value of 'system'", () => {
      expect(localStorage.getItem('theme')).toEqual('system');
    });
    it(`should update to '${theme}' on change`, async () => {
      expect(screen.getByRole('img', { name: 'System default' })).toBeInTheDocument();
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

      await user.click(screen.getByRole('button', { name: 'select theme' }));
      expect(screen.getByRole('listbox')).toBeInTheDocument();

      const options = screen.getAllByRole('option');
      const themeOption = options.find((opt) => opt.textContent?.toLowerCase().includes(theme));
      if (themeOption) {
        await user.click(themeOption);
      }
      expect(localStorage.getItem('theme')).toEqual(theme);
      expect(screen.getByRole('img', { name: themeName })).toBeInTheDocument();
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });
});
