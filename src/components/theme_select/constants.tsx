import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TailSpin } from 'react-loader-spinner';

const lightMode = (
  <div className="text-slate-300 dark:text-slate-800">
    Light <FontAwesomeIcon className="text-xl text-slate-300 dark:text-slate-800" icon={faSun} />
  </div>
);

const lightModeSelected = <FontAwesomeIcon className="h-4 w-5 text-xl text-slate-300" icon={faSun} />;

const darkMode = (
  <div className="text-slate-300 dark:text-slate-800">
    Dark <FontAwesomeIcon className="text-xl text-slate-300 dark:text-slate-800" icon={faMoon} />
  </div>
);

const darkModeSelected = <FontAwesomeIcon className="h-4 w-5 text-xl text-slate-300" icon={faMoon} />;

const systemDefault = (
  <div className="flex flex-row flex-nowrap items-center gap-2 text-slate-300 dark:text-slate-800">
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

const systemDefaultSelected = (
  <span className="relative size-5 self-stretch">
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

const placeholder = <TailSpin height={16} width={20} color="white" />;

export { darkMode, darkModeSelected, lightMode, lightModeSelected, placeholder, systemDefault, systemDefaultSelected };
