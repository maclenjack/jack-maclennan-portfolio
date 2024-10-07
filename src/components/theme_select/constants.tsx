import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const lightMode = (
  <div className="text-slate-300 dark:text-slate-800">
    Light
    {' '}
    <FontAwesomeIcon className="text-slate-300 dark:text-slate-800 text-xl" icon={faSun} />
  </div>
);

const lightModeSelected = <FontAwesomeIcon className="h-4 w-5 text-slate-300 text-xl" icon={faSun} />;

const darkMode = (
  <div className="text-slate-300 dark:text-slate-800">
    Dark
    {' '}
    <FontAwesomeIcon className="text-slate-300 dark:text-slate-800 text-xl" icon={faMoon} />
  </div>
);

const darkModeSelected = <FontAwesomeIcon className="h-4 w-5 text-slate-300 text-xl" icon={faMoon} />;

const systemDefault = (
  <div className="flex flex-row flex-nowrap items-center gap-2 text-slate-300 dark:text-slate-800">
    <span className="whitespace-nowrap">System Default</span>
    {' '}
    <span className="relative self-stretch h-6 w-5">
      <FontAwesomeIcon
        className="absolute right-0 top-0 bottom-0 m-auto text-slate-300 dark:text-slate-800 gradient-mask-t-[rgba(0,0,0,1.0)_40%,rgba(0,0,0,0.4),transparent_50%] text-xl"
        icon={faMoon}
      />
      <FontAwesomeIcon
        className="absolute left-0 right-0 top-0 bottom-0 m-auto text-slate-300 dark:text-slate-800 gradient-mask-b-[rgba(0,0,0,1.0)_40%,rgba(0,0,0,0.4),transparent_50%] text-xl"
        icon={faSun}
      />
    </span>
  </div>
);

const systemDefaultSelected = (
  <span className="relative self-stretch h-5 w-5">
    <FontAwesomeIcon
      className="absolute right-0 top-0 bottom-0 m-auto text-slate-300 gradient-mask-t-[rgba(0,0,0,1.0)_40%,rgba(0,0,0,0.4),transparent_50%] text-xl"
      icon={faMoon}
    />
    <FontAwesomeIcon
      className="absolute left-0 right-0 top-0 bottom-0 m-auto text-slate-300 gradient-mask-b-[rgba(0,0,0,1.0)_40%,rgba(0,0,0,0.4),transparent_50%] text-xl"
      icon={faSun}
    />
  </span>
);

const placeholder = <TailSpin height={16} width={20} color="white" />;

export {
  darkMode, darkModeSelected, lightMode, lightModeSelected, placeholder, systemDefault, systemDefaultSelected
};
