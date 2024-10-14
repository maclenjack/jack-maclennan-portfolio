import HamburgerMenu from '@/components/page/nav-bar/HamburgerMenu';
import SocialIcons from '@/components/page/nav-bar/SocialIcons';
import ThemeSelect from '@/components/theme_select/ThemeSelect';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="z-50 flex h-24 w-full justify-center bg-gradient-to-r from-emerald-700 to-emerald-900 shadow-md shadow-slate-900">
      <div className="flex w-full max-w-screen-2xl flex-row justify-between px-12 py-8">
        <Link href="/">
          Logo/name
          {/* TODO: add logo */}
        </Link>
        <span className="flex items-center gap-6 max-md:hidden">
          <Link className="font-bold text-slate-300" href="/projects">
            Projects
          </Link>
          <Link className="font-bold text-slate-300" href="/experience">
            Experience
          </Link>
          <Link className="font-bold text-slate-300" href="/about-me">
            About Me
          </Link>
          <ThemeSelect />
          <SocialIcons />
        </span>
        <span className="flex items-center gap-4 md:hidden">
          <ThemeSelect />
          <HamburgerMenu />
        </span>
      </div>
    </nav>
  );
}
