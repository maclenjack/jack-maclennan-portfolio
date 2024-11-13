import clsx from 'clsx';
import Link from 'next/link';

/**
 * Links for site navigation.
 * @param props - The component accepts className as props.
 * @param props.className - Optional prop for styling the wrapper.
 * @returns The rendered SiteLinks component.
 * @includeExample src/components/page/nav-bar/NavBar.tsx:24-28
 * @source
 */
export default function SiteLinks({ className }: { className?: string }) {
  return (
    <span className={clsx(className)} data-testid="site-links">
      <Link className="font-bold text-slate-300" href="/projects" data-testid="projects">
        Projects
      </Link>
      <Link className="font-bold text-slate-300" href="/experience" data-testid="experience">
        Experience
      </Link>
      <Link className="font-bold text-slate-300" href="/about-me" data-testid="about-me">
        About Me
      </Link>
    </span>
  );
}
