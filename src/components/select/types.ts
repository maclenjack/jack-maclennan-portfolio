import { ReactNode } from 'react';

/**
 * @property label the visible text or ReactNode in the Select menu
 * @property value the unique key stored by parent
 * @property selected optional value to display with selected option
 * @interface
 * @source
 */
export interface SelectOption {
  label: ReactNode;
  value: string | number;
  selected?: ReactNode;
}

/**
 * @property className optional value to customize wrapper style
 * @property options array of SelectOption to be used in Select
 * @property selectedOption currently selected option
 * @property placeholder optional value to be displayed if no option is currently selected
 * @property onChange function for parent to handle option change
 * @property loading optional value to display loading component if parent data is asynchronous
 * @interface
 * @source
 */
export interface SelectProps {
  className?: string;
  options: SelectOption[];
  selectedOption: SelectOption | undefined;
  placeholder?: SelectOption;
  onChange: (value: SelectOption) => void;
  loading?: boolean;
}
