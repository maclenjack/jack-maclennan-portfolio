'use client';

import Select from '@components/select/Select';
import { SelectOption } from '@components/select/types';
import { options, placeholder } from '@constants/theme-select';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

/**
 * A wrapper around {@link Select} that provides theme selection for the
 * application. It persists the chosen theme in local storage and updates the
 * Next.js theme context.
 *
 * @param className - Optional Tailwind classes for the outer wrapper.=
 * @returns The rendered ThemeSelect component.
 * @includeExample src\components\page\nav-bar\NavBar.tsx[37]
 * @source
 */
export default function ThemeSelect({ className }: { className?: string }): ReactNode {
  const { setTheme } = useTheme();
  const [localTheme, setLocalTheme] = useLocalStorage('theme', 'system', {
    deserializer: (value) => value,
    initializeWithValue: false,
    serializer: (value) => value
  });

  const getInitialSelectedOption: () => SelectOption = useCallback(
    () => options.find((option: SelectOption): boolean => option.value === localTheme) as SelectOption,
    [localTheme]
  );

  const [selectedOption, setSelectedOption] = useState<SelectOption>();

  useEffect(() => {
    setSelectedOption(getInitialSelectedOption());
  }, [getInitialSelectedOption]);

  const onChange = (value: SelectOption) => {
    setSelectedOption(value);
    setLocalTheme(value.value as string);
    setTheme(value.value as string);
  };

  return (
    <div className={clsx(className)} role="group" aria-label="theme selector">
      <Select
        selectedOption={selectedOption}
        placeholder={{ value: 'placeholder', label: placeholder }}
        options={options}
        onChange={onChange}
      />
    </div>
  );
}
