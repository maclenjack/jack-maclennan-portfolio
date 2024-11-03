import Select from '@/components/select/Select';
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
    it('should render <Wrapper />', ({ expect }) => {
      const wrapper = screen.getByTestId('custom-select');
      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toBeVisible();
    });
    it('should render <Button />', ({ expect }) => {
      const button = screen.getByTestId('custom-select-button');
      expect(button).toBeInTheDocument();
      expect(button).toBeVisible();
    });
    it('should display placeholder label when placeholder prop passed and selectedOption is undefined', ({
      expect
    }) => {
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
    it('should display selectedOption label when selectedOption is defined', ({ expect }) => {
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
    it("shouldn't render <Menu />", ({ expect }) => {
      const menu = screen.queryByTestId('custom-select-menu');
      expect(menu).not.toBeInTheDocument();
    });
  });
  describe('active', () => {
    const user = userEvent.setup();
    beforeEach(async () => {
      await user.click(screen.getByTestId('custom-select-button'));
    });
    it('should render <Menu />', ({ expect }) => {
      const menu = screen.getByTestId('custom-select-menu');
      expect(menu).toBeInTheDocument();
    });
    it('should render <MenuItem />s', ({ expect }) => {
      const menuItems = screen.getAllByTestId('custom-select-menu-item');
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
      it('should trigger onChange when different option selected', async ({ expect }) => {
        const onChangeSpy = vi.fn();
        render(
          <Select
            options={props.options}
            selectedOption={undefined}
            placeholder={props.placeholder}
            onChange={onChangeSpy}
          />
        );
        await user.click(screen.getByTestId('custom-select-button'));
        await user.click(screen.getAllByTestId('custom-select-menu-item')[options.indexOf(item)]);
        expect(onChangeSpy).toHaveBeenCalledOnce();
      });
      it("shouldn't trigger onChange when same option selected", async ({ expect }) => {
        const onChangeSpy = vi.fn();
        render(
          <Select
            options={props.options}
            selectedOption={options[options.indexOf(item)]}
            placeholder={props.placeholder}
            onChange={onChangeSpy}
          />
        );
        await user.click(screen.getByTestId('custom-select-button'));
        await user.click(screen.getAllByTestId('custom-select-menu-item')[options.indexOf(item)]);
        expect(onChangeSpy).not.toHaveBeenCalled();
      });
    });
  });
});
