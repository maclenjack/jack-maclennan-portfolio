import ThemeSelect from '@components/theme-select/ThemeSelect';
import { render, renderHook, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { act } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { beforeEach, describe, it } from 'vitest';

describe('<ThemeSelect />', () => {
  beforeEach(() => {
    render(<ThemeSelect />);
  });
  it('should render custom <Select />', ({ expect }) => {
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
      const { result } = renderHook(() =>
        useLocalStorage('theme', 'system', {
          deserializer: (value) => value,
          initializeWithValue: false,
          serializer: (value) => value
        })
      );
      act(() => {
        const [_localTheme, setLocalTheme] = result.current;
        setLocalTheme('system');
      });
    });
    it("should have default value of 'system'", ({ expect }) => {
      const { result } = renderHook(() =>
        useLocalStorage('theme', 'system', {
          deserializer: (value) => value,
          initializeWithValue: false,
          serializer: (value) => value
        })
      );
      expect(result.current[0]).toEqual('system');
    });
    it(`should update to '${theme}' on change`, async ({ expect }) => {
      const { result } = renderHook(() =>
        useLocalStorage('theme', 'system', {
          deserializer: (value) => value,
          initializeWithValue: false,
          serializer: (value) => value
        })
      );
      expect(screen.getByTestId(`system-default-selected`)).toBeInTheDocument();
      expect(screen.queryByTestId('custom-select-menu')).not.toBeInTheDocument();

      await user.click(screen.getByTestId('custom-select-button'));
      expect(screen.getByTestId('custom-select-menu')).toBeInTheDocument();
      expect(screen.getByTestId('custom-select-menu')).toBeVisible();

      await user.click(screen.getByTestId(`${themeName}-option`));
      expect(result.current[0]).toEqual(theme);
      expect(screen.getByTestId(`${themeName}-selected`)).toBeInTheDocument();
      expect(screen.queryByTestId('custom-select-menu')).not.toBeInTheDocument();
    });
  });
});
