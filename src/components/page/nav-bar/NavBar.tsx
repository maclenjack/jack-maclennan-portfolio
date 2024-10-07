import React from 'react';
import ThemeSelect from '@/components/theme_select/ThemeSelect';
import HamburgerMenu from '@/components/page/nav-bar/HamburgerMenu';
import Link from 'next/link';
import SocialIcons from '@/components/page/nav-bar/SocialIcons';

export default function NavBar() {
  return (
    <nav className="flex justify-center z-50 w-full h-[6rem] bg-gradient-to-r from-emerald-700 to-emerald-900 shadow-md shadow-slate-900">
      <div className="flex flex-row justify-between w-full max-w-screen-2xl px-12 py-8">
        <Link href="/">
          Logo/name
          {/* TODO: add logo */}
        </Link>
        <span className="max-md:hidden flex items-center gap-6 ">
          <Link className="text-slate-300 font-bold" href="/projects">Projects</Link>
          <Link className="text-slate-300 font-bold" href="/experience">Experience</Link>
          <Link className="text-slate-300 font-bold" href="/about-me">About Me</Link>
          <ThemeSelect />
          <SocialIcons />
        </span>
        <span className="md:hidden flex items-center gap-4">
          <ThemeSelect />
          <HamburgerMenu />
        </span>
      </div>
    </nav>
  );
}
