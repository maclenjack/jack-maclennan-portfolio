import { SelectOption, SelectProps } from '@components/select/types';
import clsx from 'clsx';
import { Button, Menu, MenuItem, Wrapper } from 'react-aria-menubutton';
import { useToggle } from 'usehooks-ts';

/**
 * Custom select component. Made to be slightly generic.
 * @param {SelectProps} props
 * @includeExample src/components/theme-select/ThemeSelect.tsx[43:50]
 * @source
 */
export default function Select({ className = '', selectedOption, placeholder, onChange, options }: SelectProps) {
  const [isOpen, toggleIsOpen] = useToggle(false);

  function handleSelection(option: SelectOption) {
    if (option !== selectedOption) onChange(option);
  }

  return (
    <Wrapper className="relative" onMenuToggle={toggleIsOpen} onSelection={handleSelection} data-testid="custom-select">
      <Button
        className={clsx(
          'flex min-h-6 w-fit cursor-pointer items-center gap-2 rounded-sm border border-solid border-transparent outline-hidden focus-visible:border-slate-800 dark:focus-visible:border-slate-300',
          className
        )}
        data-testid="custom-select-button"
      >
        <span className="flex grow flex-wrap gap-2 text-slate-700 dark:text-slate-300">
          {selectedOption?.selected || selectedOption?.label || placeholder?.label}
        </span>
        <div className="w-px self-stretch bg-slate-300" />
        <div className="translate-y-1/4 border-4 border-solid border-transparent border-t-slate-300" />
      </Button>
      <Menu
        className={clsx(
          'absolute top-full left-1/2 z-50 max-h-60 w-fit translate-x-[-50%] translate-y-1 list-none overflow-y-auto rounded-sm border border-solid border-slate-900 bg-slate-600 shadow-md shadow-slate-900 dark:bg-slate-400',
          { block: isOpen, hidden: !isOpen }
        )}
        data-testid="custom-select-menu"
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            className="flex w-full cursor-pointer items-start px-2 py-3 hover:bg-slate-700 focus:bg-slate-700 dark:hover:bg-slate-300 dark:focus:bg-slate-300"
            value={option}
            data-testid="custom-select-menu-item"
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  );
}
