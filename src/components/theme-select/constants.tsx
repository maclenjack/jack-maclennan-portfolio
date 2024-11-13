import { SelectOption } from '@/components/select/types';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TailSpin } from 'react-loader-spinner';

/**
 * @notExported
 * {@label lightMode}
 * @source
 */
const lightMode = (
  <div className="text-slate-300 dark:text-slate-800" data-testid="light-mode-option">
    Light <FontAwesomeIcon className="text-xl text-slate-300 dark:text-slate-800" icon={faSun} />
  </div>
);

/**
 * @notExported
 * {@label lightModeSelected}
 * @source
 */
const lightModeSelected = (
  <FontAwesomeIcon className="h-4 w-5 text-xl text-slate-300" icon={faSun} data-testid="light-mode-selected" />
);

/**
 * @notExported
 * {@label darkMode}
 * @source
 */
const darkMode = (
  <div className="text-slate-300 dark:text-slate-800" data-testid="dark-mode-option">
    Dark <FontAwesomeIcon className="text-xl text-slate-300 dark:text-slate-800" icon={faMoon} />
  </div>
);

/**
 * @notExported
 * {@label darkModeSelected}
 * @source
 */
const darkModeSelected = (
  <FontAwesomeIcon className="h-4 w-5 text-xl text-slate-300" icon={faMoon} data-testid="dark-mode-selected" />
);

/**
 * @notExported
 * {@label systemDefault}
 * @source
 */
const systemDefault = (
  <div
    className="flex flex-row flex-nowrap items-center gap-2 text-slate-300 dark:text-slate-800"
    data-testid="system-default-option"
  >
    <span className="whitespace-nowrap">System Default</span>{' '}
    <span className="relative h-6 w-5 self-stretch">
      <FontAwesomeIcon
        className="absolute inset-y-0 right-0 m-auto text-xl text-slate-300 gradient-mask-t-[rgba(0,0,0,1.0)_40%,rgba(0,0,0,0.4),transparent_50%] dark:text-slate-800"
        icon={faMoon}
      />
      <FontAwesomeIcon
        className="absolute inset-0 m-auto text-xl text-slate-300 gradient-mask-b-[rgba(0,0,0,1.0)_40%,rgba(0,0,0,0.4),transparent_50%] dark:text-slate-800"
        icon={faSun}
      />
    </span>
  </div>
);

/**
 * @notExported
 * {@label systemDefaultSelected}
 * @source
 */
const systemDefaultSelected = (
  <span className="relative size-5 self-stretch" data-testid="system-default-selected">
    <FontAwesomeIcon
      className="absolute inset-y-0 right-0 m-auto text-xl text-slate-300 gradient-mask-t-[rgba(0,0,0,1.0)_40%,rgba(0,0,0,0.4),transparent_50%]"
      icon={faMoon}
    />
    <FontAwesomeIcon
      className="absolute inset-0 m-auto text-xl text-slate-300 gradient-mask-b-[rgba(0,0,0,1.0)_40%,rgba(0,0,0,0.4),transparent_50%]"
      icon={faSun}
    />
  </span>
);

/**
 * Loading spinner.
 * @includeExample src/components/theme-select/ThemeSelect.tsx:46
 * @source
 */
const placeholder = <TailSpin height={16} width={20} color="white" />;

/**
 * Options to be used for ThemeSelect.
 *
 * Labels: {@link lightMode}, {@link darkMode}, {@link systemDefault}
 *
 * Selected label: {@link lightModeSelected}, {@link darkModeSelected}, {@link systemDefaultSelected}
 * @includeExample src/components/theme-select/ThemeSelect.tsx:25-28
 * @source
 */
const options: Array<SelectOption> = [
  { value: 'light', label: lightMode, selected: lightModeSelected },
  { value: 'dark', label: darkMode, selected: darkModeSelected },
  {
    value: 'system',
    label: systemDefault,
    selected: systemDefaultSelected
  }
];

export { options, placeholder };
