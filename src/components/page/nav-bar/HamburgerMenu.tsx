'use client';

import SiteLinks from '@components/page/nav-bar/SiteLinks';
import SocialIcons from '@components/page/nav-bar/SocialIcons';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import AriaModal from 'react-aria-modal';
import { useToggle, useWindowSize } from 'usehooks-ts';

/**
 * Menu for mobile devices.
 * @param props - The component accepts className as props.
 * @param props.className - Optional prop for styling the wrapper.
 * @returns The rendered HamburgerMenu component.
 * @includeExample src/components/page/nav-bar/NavBar.tsx:29-32
 * @source
 */
export default function HamburgerMenu({ className = '' }: { className?: string }) {
  const [isActive, toggleActive, setIsActive] = useToggle();
  const [startTransition, setStartTransition] = useState<boolean>(false);
  const { width } = useWindowSize();

  const handleTransition = () => {
    if (!startTransition) toggleActive(); // close menu
  };

  useEffect(() => {
    if (width > 768) {
      // close if screen width increases e.g. rotate phone from vertical to landscape
      setIsActive(false);
      setStartTransition(false);
    }
  }, [setIsActive, setStartTransition, width]);

  return (
    <div className={clsx(className)} data-testid="hamburger-menu">
      <button
        className="flex h-4 w-5 items-center justify-center"
        type="button"
        aria-label="open hamburger menu"
        onClick={toggleActive}
        data-testid="hamburger-icon"
      >
        <FontAwesomeIcon className="h-4 w-5 text-xl text-slate-300" icon={faBars} />
      </button>
      <AriaModal
        mounted={isActive}
        dialogClass="w-full h-screen !flex justify-end"
        titleText="hamburger menu"
        onEnter={() => setStartTransition(true)}
        onExit={() => setStartTransition(false)}
        focusTrapOptions={{
          // needed for testing
          tabbableOptions: {
            displayCheck: process.env.NODE_ENV === 'test' ? 'none' : undefined
          }
        }}
        data-testid="hamburger-modal"
      >
        <div
          className={clsx('h-full overflow-x-hidden rounded-l-lg transition-all ease-in', {
            'w-2/3': startTransition,
            'w-0': !startTransition
          })}
        >
          <div className="flex h-full w-screen justify-end bg-gradient-to-r from-emerald-700 to-emerald-900">
            <div
              className={clsx('flex h-full flex-col px-12 py-8 text-slate-700 transition-all dark:text-slate-300', {
                'w-2/3': startTransition,
                'w-0': !startTransition
              })}
              onTransitionEnd={handleTransition}
            >
              <div className="flex h-24 flex-wrap items-start justify-center">
                <span className="flex w-full justify-end text-xl text-slate-600 md:text-2xl">
                  <button
                    type="button"
                    aria-label="exit"
                    onClick={() => setStartTransition(false)}
                    data-testid="hamburger-close"
                  >
                    <FontAwesomeIcon className="text-xl text-slate-300" icon={faX} />
                  </button>
                </span>
                <SocialIcons />
              </div>
              <SiteLinks
                className="flex h-full flex-col items-center justify-around gap-10"
                onClick={() => setStartTransition(false)}
              />
            </div>
          </div>
        </div>
      </AriaModal>
    </div>
  );
}
