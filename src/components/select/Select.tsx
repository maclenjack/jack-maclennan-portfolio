import { SelectOption, SelectProps } from '@/components/select/types';
import clsx from 'clsx';
import { Button, Menu, MenuItem, Wrapper } from 'react-aria-menubutton';
import { useToggle } from 'usehooks-ts';

export default function Select({ className = '', selectedOption, placeholder, onChange, options }: SelectProps) {
  const [isOpen, toggleIsOpen] = useToggle(false);

  function handleSelection(option: SelectOption) {
    if (option !== selectedOption) onChange(option);
  }

  return (
    <Wrapper className="relative" onMenuToggle={toggleIsOpen} onSelection={handleSelection} data-testid="custom-select">
      <Button
        className={clsx(
          'flex min-h-6 w-fit cursor-pointer items-center gap-2 rounded border border-solid border-transparent outline-none focus-visible:border-slate-800 focus-visible:dark:border-slate-300',
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
          'absolute left-1/2 top-full z-50 max-h-60 w-fit translate-x-[-50%] translate-y-1 list-none overflow-y-auto rounded border border-solid border-slate-900 bg-slate-600 shadow-md shadow-slate-900 dark:bg-slate-400',
          { block: isOpen, hidden: !isOpen }
        )}
        data-testid="custom-select-menu"
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            className="flex w-full cursor-pointer items-start px-1 py-2 hover:bg-slate-700 focus:bg-slate-700 hover:dark:bg-slate-300 focus:dark:bg-slate-300"
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
