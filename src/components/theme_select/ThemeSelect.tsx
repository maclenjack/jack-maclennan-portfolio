'use client';

import React, {
  ReactNode,
  useCallback, useContext, useEffect, useMemo, useState
} from 'react';
import Select from '@/components/select/Select';
import { SelectOption } from '@/components/select/types';
import {
  darkMode,
  darkModeSelected,
  lightMode,
  lightModeSelected,
  systemDefault, systemDefaultSelected
} from '@/components/theme_select/constants';
import { useTheme } from 'next-themes';
import { LocalStorageContext, LocalStorageValue } from '@/providers/LocalStorageProvider';
import classNames from 'classnames';

export default function ThemeSelect(): ReactNode {
  const { setTheme } = useTheme();
  const { localStorageFail } = useContext<LocalStorageValue>(LocalStorageContext);
  const [mounted, setMounted] = useState<boolean>(false);

  const options: Array<SelectOption> = useMemo(() => ([
    { value: 'light', label: lightMode, selected: lightModeSelected },
    { value: 'dark', label: darkMode, selected: darkModeSelected },
    { value: 'system', label: systemDefault, selected: systemDefaultSelected }
  ]), []);

  const localStorageEmpty: boolean = localStorageFail ? true : localStorage?.getItem('theme') === undefined;
  const getInitialSelectedOption: () => SelectOption = useCallback((): SelectOption => {
    if (!localStorageEmpty) {
      return options.find((option: SelectOption): boolean => (
        option.value === localStorage.getItem('theme')
      )) as SelectOption;
    }
    if (localStorageEmpty && mounted) {
      localStorage.setItem('theme', 'system');
      return options[2];
    }
    return options[2];
  }, [localStorageEmpty, mounted, options]);

  const [selectedOption, setSelectedOption] = useState<SelectOption>(getInitialSelectedOption);

  useEffect(() => {
    if (!mounted) setMounted(true);
    else if (localStorageEmpty) setSelectedOption(getInitialSelectedOption);
  }, [getInitialSelectedOption, localStorageEmpty, mounted]);

  const onChange = (value: SelectOption) => {
    setSelectedOption(value);
    if (!localStorageFail) localStorage.setItem('theme', value.value as string);
    setTheme(value.value as string);
  };

  return (
    <Select
      className={classNames('border-none', { invisible: !mounted })}
      selectedOption={selectedOption}
      options={options}
      onChange={onChange}
      loading={!mounted}
    />
  );
}
