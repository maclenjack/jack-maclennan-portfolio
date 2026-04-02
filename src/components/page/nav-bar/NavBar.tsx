import HamburgerMenu from '@components/page/nav-bar/HamburgerMenu';
import SiteLinks from '@components/page/nav-bar/SiteLinks';
import SocialIcons from '@components/page/nav-bar/SocialIcons';
import ThemeSelect from '@components/theme-select/ThemeSelect';
import Link from 'next/link';

/**
 * Navigation bar to be visible on all devices.
 * @returns The rendered NavBar component.
 * @includeExample src/components/page/Page.tsx[14:17]
 * @source
 */
export default function NavBar() {
  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-slate-200/20 bg-white/80 backdrop-blur-md dark:border-slate-700/40 dark:bg-slate-900/80"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          tabIndex={0}
          role="link"
          aria-label="home"
          className="group flex items-center gap-3 transition-all hover:gap-4"
        >
          <div className="h-10 w-10 rounded-xl bg-linear-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/20 transition-transform group-hover:scale-110" />
          <h1 className="bg-linear-to-r from-slate-900 to-slate-600 bg-clip-text text-xl font-bold text-transparent dark:from-slate-100 dark:to-slate-400">
            Jack Maclennan
          </h1>
        </Link>

        <div className="flex items-center gap-8 max-md:hidden">
          <SiteLinks className="flex items-center gap-8" />
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />
          <SocialIcons />
          <ThemeSelect />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeSelect />
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}
