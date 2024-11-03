'use client';

import Select from '@/components/select/Select';
import { SelectOption } from '@/components/select/types';
import { options, placeholder } from '@/components/theme_select/constants';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

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
    <div className={clsx(className)} data-testid="theme-select">
      <Select
        selectedOption={selectedOption}
        placeholder={{ value: 'placeholder', label: placeholder }}
        options={options}
        onChange={onChange}
      />
    </div>
  );
}
