import React, { useState } from 'react';
import { SelectOption, SelectProps } from '@/components/select/types';
import classNames from 'classnames';
import { TailSpin } from 'react-loader-spinner';

export default function Select({
  className = '', selectedOption, onChange, options, loading = false
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  function selectOption(option: SelectOption) {
    if (option !== selectedOption) onChange(option);
  }

  if (loading) {
    return <TailSpin wrapperClass={className} height={30} width={30} />;
  }

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className={classNames('relative w-fit min-h-6 border border-solid border-slate-800 dark:border-slate-300 flex items-center gap-2 p-2 rounded outline-none cursor-pointer', className)}
    >
      <span className="flex-grow flex gap-2 flex-wrap text-slate-700 dark:text-slate-300">
        {selectedOption?.selected || selectedOption?.label}
      </span>
      <div className="bg-slate-700 dark:bg-slate-300 self-stretch w-px" />
      <div className="translate-y-1/4 border-[0.25em] border-solid border-transparent border-t-slate-800 dark:border-t-slate-300" />
      <ul className={classNames('absolute left-1/2 translate-x-[-50%] list-none max-h-60 overflow-y-auto border border-solid border-slate-800 dark:border-slate-300 rounded w-fit top-full translate-y-1 bg-slate-600 dark:bg-slate-400 z-50 shadow-md shadow-slate-800 dark:shadow-slate-200', { block: isOpen, hidden: !isOpen })}>
        {
          options.map((option) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              key={option.value}
              className="px-1 py-2 hover:bg-slate-700 hover:dark:bg-slate-300"
            >
              {option.label}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
