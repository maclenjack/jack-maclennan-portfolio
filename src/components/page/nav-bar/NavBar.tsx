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
      className="z-50 flex h-24 w-full justify-center bg-linear-to-r from-emerald-700 to-emerald-900 shadow-md shadow-slate-900"
      data-testid="nav-bar"
    >
      <div className="flex w-full max-w-(--breakpoint-2xl) flex-row justify-between px-12 py-8">
        <Link href="/" tabIndex={0} role="link" aria-label="home" data-testid="logo-link">
          <h1 className="text-2xl font-bold text-slate-300">Jack Maclennan</h1>
        </Link>
        <span className="flex items-center gap-6 max-md:hidden" data-testid="desktop-components">
          <SiteLinks className="flex items-center gap-6" />
          <ThemeSelect />
          <SocialIcons />
        </span>
        <span className="flex items-center gap-4 md:hidden" data-testid="mobile-components">
          <ThemeSelect />
          <HamburgerMenu />
        </span>
      </div>
    </nav>
  );
}
