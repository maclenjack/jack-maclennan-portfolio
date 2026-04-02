import Select from '@components/select/Select';
import { cleanup, render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, it, vi } from 'vitest';

describe('<Select />', () => {
  const options = [
    {
      label: 'Option 1',
      value: 'option 1'
    },
    {
      label: 'Option 2',
      value: 'option 2'
    },
    {
      label: 'Option 3',
      value: 'option 3'
    }
  ];
  const props = {
    selectedOption: {
      label: 'Selected',
      value: 'selected'
    },
    placeholder: {
      label: 'Placeholder',
      value: 'placeholder'
    },
    onChange: () => {},
    options: options
  };
  beforeEach(() => {
    render(<Select selectedOption={props.selectedOption} onChange={props.onChange} options={props.options} />);
  });
  afterEach(() => {
    cleanup();
  });
  describe('default', () => {
    it('should render select button', () => {
      const button = screen.getByRole('button', { name: 'select theme' });
      expect(button).toBeInTheDocument();
      expect(button).toBeVisible();
    });
    it('should display placeholder label when placeholder prop passed and selectedOption is undefined', () => {
      cleanup();
      render(
        <Select
          options={props.options}
          selectedOption={undefined}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      );
      expect(screen.getByText(props.placeholder.label)).toBeInTheDocument();
    });
    it('should display selectedOption label when selectedOption is defined', () => {
      cleanup();
      render(
        <Select
          options={props.options}
          selectedOption={props.selectedOption}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      );
      expect(screen.getByText(props.selectedOption.label)).toBeInTheDocument();
      expect(screen.queryByText(props.placeholder.label)).not.toBeInTheDocument();
    });
  });
  describe('not active', () => {
    it("shouldn't render menu", () => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });
  describe('active', () => {
    const user = userEvent.setup();
    beforeEach(async () => {
      await user.click(screen.getByRole('button', { name: 'select theme' }));
    });
    it('should render menu', () => {
      const menu = screen.getByRole('listbox');
      expect(menu).toBeInTheDocument();
    });
    it('should render menu items', () => {
      const menuItems = screen.getAllByRole('option');
      expect(menuItems).toHaveLength(3);
      menuItems.forEach((menuItem, i) => {
        const { getByText } = within(menuItem);
        const { label } = options[i];
        expect(getByText(label)).toBeInTheDocument();
      });
    });
    describe.each(options)('update option to $label', (item) => {
      beforeEach(() => {
        cleanup();
      });
      it('should trigger onChange when different option selected', async () => {
        const onChangeSpy = vi.fn();
        render(
          <Select
            options={props.options}
            selectedOption={undefined}
            placeholder={props.placeholder}
            onChange={onChangeSpy}
          />
        );
        await user.click(screen.getByRole('button', { name: 'select theme' }));
        await user.click(screen.getAllByRole('option')[options.indexOf(item)]);
        expect(onChangeSpy).toHaveBeenCalledTimes(1);
      });
      it("shouldn't trigger onChange when same option selected", async () => {
        const onChangeSpy = vi.fn();
        render(
          <Select
            options={props.options}
            selectedOption={options[options.indexOf(item)]}
            placeholder={props.placeholder}
            onChange={onChangeSpy}
          />
        );
        await user.click(screen.getByRole('button', { name: 'select theme' }));
        await user.click(screen.getAllByRole('option')[options.indexOf(item)]);
        expect(onChangeSpy).not.toHaveBeenCalled();
      });
    });
  });
});
