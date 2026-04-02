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
    <Wrapper
      className="relative"
      onMenuToggle={toggleIsOpen}
      onSelection={handleSelection}
      role="group"
      aria-label="selector"
    >
      <Button
        className={clsx(
          'flex min-h-11 w-fit cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-2 outline-hidden transition-all hover:border-slate-300 focus-visible:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-500/20 sm:min-h-6 sm:px-3 sm:py-1.5 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600 dark:focus-visible:border-emerald-400 dark:focus-visible:ring-emerald-400/20',
          className
        )}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="select option"
      >
        <span className="flex grow flex-wrap gap-2 text-slate-700 dark:text-slate-300">
          {selectedOption?.selected || selectedOption?.label || placeholder?.label}
        </span>
        <svg
          className={clsx('h-4 w-4 text-slate-400 transition-transform duration-200 dark:text-slate-500', {
            'rotate-180': isOpen
          })}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Button>
      <Menu
        className={clsx(
          'absolute top-full left-1/2 z-50 mt-2 max-h-60 w-fit translate-x-[-50%] list-none overflow-y-auto rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-900/20',
          { 'block opacity-100': isOpen, 'hidden opacity-0': !isOpen }
        )}
        role="listbox"
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            className="flex w-full cursor-pointer items-start px-4 py-3 text-slate-700 transition-colors hover:bg-slate-50 focus:bg-slate-50 sm:px-3 sm:py-2 dark:text-slate-300 dark:hover:bg-slate-700 dark:focus:bg-slate-700"
            value={option}
            role="option"
            aria-label={`select ${option.label}`}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  );
}
