import { SelectOption } from '@components/select/types';
import { faCircleHalfStroke, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TailSpin } from 'react-loader-spinner';

/**
 * {@label lightMode}
 * @source
 */
const lightMode = (
  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
    Light <FontAwesomeIcon className="h-4 w-4 text-amber-500" icon={faSun} />
  </div>
);

/**
 * {@label lightModeSelected}
 * @source
 */
const lightModeSelected = <FontAwesomeIcon className="h-4 w-4 text-amber-500" icon={faSun} aria-label="Light mode" />;

/**
 * {@label darkMode}
 * @source
 */
const darkMode = (
  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
    Dark <FontAwesomeIcon className="h-4 w-4 text-indigo-400" icon={faMoon} />
  </div>
);

/**
 * {@label darkModeSelected}
 * @source
 */
const darkModeSelected = <FontAwesomeIcon className="h-4 w-4 text-indigo-400" icon={faMoon} aria-label="Dark mode" />;

/**
 * {@label systemDefault}
 * @source
 */
const systemDefault = (
  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
    System <FontAwesomeIcon className="h-4 w-4 text-slate-500" icon={faCircleHalfStroke} />
  </div>
);

/**
 * {@label systemDefaultSelected}
 * @source
 */
const systemDefaultSelected = (
  <FontAwesomeIcon className="h-4 w-4 text-slate-500" icon={faCircleHalfStroke} aria-label="System default" />
);

/**
 * Loading spinner.
 * @includeExample src/components/theme-select/ThemeSelect.tsx[44:49]
 * @source
 */
const placeholder = <TailSpin height={16} width={20} color="white" />;

/**
 * Options to be used for ThemeSelect.
 *
 * Labels: {@link lightMode}, {@link darkMode}, {@link systemDefault}
 *
 * Selected label: {@link lightModeSelected}, {@link darkModeSelected}, {@link systemDefaultSelected}
 * @includeExample src/components/theme-select/ThemeSelect.tsx[25:28]
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
