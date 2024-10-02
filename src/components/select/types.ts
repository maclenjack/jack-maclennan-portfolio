import { ReactNode } from 'react';

export interface SelectOption {
  label: string | ReactNode;
  value: string | number;
  selected?: string | ReactNode;
}

export interface SelectProps {
  className?: string;
  options: SelectOption[];
  selectedOption: SelectOption;
  onChange: (value: SelectOption) => void;
  loading?: boolean;
}
