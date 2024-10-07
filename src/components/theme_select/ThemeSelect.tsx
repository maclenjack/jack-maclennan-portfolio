'use client';

import React, {
  ReactNode, useCallback, useEffect, useMemo, useState
} from 'react';
import Select from '@/components/select/Select';
import { SelectOption } from '@/components/select/types';
import {
  darkMode, darkModeSelected, lightMode, lightModeSelected, placeholder, systemDefault, systemDefaultSelected
} from '@/components/theme_select/constants';
import { useTheme } from 'next-themes';
import { useLocalStorage } from 'usehooks-ts';

export default function ThemeSelect(): ReactNode {
  const { setTheme } = useTheme();
  const [localTheme, setLocalTheme] = useLocalStorage('theme', 'system', {
    deserializer: (value) => value,
    initializeWithValue: false,
    serializer: (value) => value
  });

  const options: Array<SelectOption> = useMemo(() => ([
    { value: 'light', label: lightMode, selected: lightModeSelected },
    { value: 'dark', label: darkMode, selected: darkModeSelected },
    { value: 'system', label: systemDefault, selected: systemDefaultSelected }
  ]), []);

  const getInitialSelectedOption: () => SelectOption = useCallback(() => (
    options.find((option: SelectOption): boolean => option.value === localTheme)
  ) as SelectOption, [localTheme, options]);

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
    <Select
      className="border-none"
      selectedOption={selectedOption}
      placeholder={{ value: 'placeholder', label: placeholder }}
      options={options}
      onChange={onChange}
    />
  );
}
