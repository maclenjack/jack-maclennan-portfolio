'use client';

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import AriaModal from 'react-aria-modal';
import classNames from 'classnames';
import Link from 'next/link';
import { useToggle, useWindowSize } from 'usehooks-ts';
import SocialIcons from '@/components/page/nav-bar/SocialIcons';

export default function HamburgerMenu() {
  const [isActive, toggleActive, setIsActive] = useToggle();
  const [startTransition, setStartTransition] = useState<boolean>(false);
  const { width } = useWindowSize();

  const handleTransition = () => {
    if (!startTransition) toggleActive();
  };

  useEffect(() => {
    if (width > 768) {
      setIsActive(false);
      setStartTransition(false);
    }
  }, [setIsActive, setStartTransition, width]);

  return (
    <>
      <button className="flex justify-center items-center h-4 w-5" type="button" aria-label="open hamburger menu" onClick={toggleActive}>
        <FontAwesomeIcon className="text-slate-300 text-xl h-4 w-5" icon={faBars} />
      </button>
      <AriaModal
        mounted={isActive}
        dialogClass="w-full h-screen !flex justify-end"
        titleText="hamburger menu"
        onEnter={() => setStartTransition(true)}
        onExit={() => setStartTransition(false)}
      >
        <div
          className={
            classNames(
              'h-full transition-all ease-in rounded-l-lg overflow-x-hidden',
              { 'w-2/3': startTransition, 'w-0': !startTransition }
            )
          }
        >
          <div className="w-screen h-full bg-gradient-to-r from-emerald-700 to-emerald-900 flex justify-end">
            <div
              className={classNames(
                'flex flex-col h-full px-12 py-8 text-slate-700 dark:text-slate-300 transition-all',
                { 'w-2/3': startTransition, 'w-0': !startTransition }
              )}
              onTransitionEnd={handleTransition}
            >
              <div className="flex justify-center items-start flex-wrap h-[6rem]">
                <span className="w-full flex justify-end text-slate-600 text-xl md:text-2xl">
                  <button type="button" aria-label="exit" onClick={() => setStartTransition(false)}>
                    <FontAwesomeIcon className="text-slate-300 text-xl" icon={faX} />
                  </button>
                </span>
                <SocialIcons />
              </div>
              <div className="flex flex-col justify-around items-center gap-10 h-full">
                <Link className="text-slate-300 font-bold" href="/projects">Projects</Link>
                <Link className="text-slate-300 font-bold" href="/experience">Experience</Link>
                <Link className="text-slate-300 font-bold" href="/about-me">About Me</Link>
              </div>
            </div>
          </div>
        </div>
      </AriaModal>
    </>
  );
}
