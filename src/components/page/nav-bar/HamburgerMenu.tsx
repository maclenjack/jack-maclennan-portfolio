'use client';

import Modal from '@/components/page/modal/Modal';
import SiteLinks from '@components/page/nav-bar/SiteLinks';
import SocialIcons from '@components/page/nav-bar/SocialIcons';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useToggle, useWindowSize } from 'usehooks-ts';

/**
 * Menu for mobile devices.
 * @param props - The component accepts className as props.
 * @param props.className - Optional prop for styling the wrapper.
 * @returns The rendered HamburgerMenu component.
 * @includeExample src/components/page/nav-bar/NavBar.tsx[29:32]
 * @source
 */
export default function HamburgerMenu({ className = '' }: { className?: string }) {
  const [isActive, toggleActive, setIsActive] = useToggle();
  const { width } = useWindowSize();

  const handleClose = () => {
    toggleActive();
  };

  if (width > 768 && isActive) {
    // close if screen width increases e.g. rotate phone from vertical to landscape
    setIsActive(false);
  }

  return (
    <div className={clsx(className)}>
      <button
        className="group flex h-10 w-10 items-center justify-center rounded-lg transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
        type="button"
        aria-label="open hamburger menu"
        onClick={toggleActive}
      >
        <FontAwesomeIcon
          className="h-5 w-5 text-slate-600 transition-colors group-hover:text-emerald-600 dark:text-slate-400 dark:group-hover:text-emerald-400"
          icon={faBars}
        />
      </button>
      <Modal isOpen={isActive} onClose={handleClose} title="Mobile Menu">
        <div className="flex h-full flex-col px-6 py-6 text-slate-700 sm:px-8 sm:py-8 dark:text-slate-300">
          <div className="flex items-center justify-between border-b border-slate-200 pb-6 dark:border-slate-700">
            <span className="text-xl font-semibold text-slate-800 dark:text-slate-200">Menu</span>
            <button
              type="button"
              aria-label="exit hamburger menu"
              onClick={handleClose}
              className="group flex h-12 w-12 items-center justify-center rounded-xl transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <FontAwesomeIcon
                className="h-6 w-6 text-slate-600 transition-colors group-hover:text-emerald-600 dark:text-slate-400 dark:group-hover:text-emerald-400"
                icon={faX}
              />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto pt-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span className="px-3 text-xs font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">
                  Connect
                </span>
                <div className="flex justify-center">
                  <SocialIcons />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="px-3 text-xs font-semibold tracking-widest text-slate-400 uppercase dark:text-slate-500">
                  Explore
                </span>
                <SiteLinks className="flex flex-col" onClick={handleClose} />
              </div>
            </div>
          </nav>
        </div>
      </Modal>
    </div>
  );
}
