import clsx from 'clsx';
import Link from 'next/link';

/**
 * Links for site navigation.
 * @param props - The component accepts className as props.
 * @param props.className - Optional prop for styling the wrapper.
 * @param props.onClick - Optional prop to handle click on links.
 * @returns The rendered SiteLinks component.
 * @includeExample src/components/page/nav-bar/NavBar.tsx:24-28
 * @source
 */
export default function SiteLinks({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <span className={clsx(className)} data-testid="site-links">
      <Link className="font-bold text-slate-300" href="/projects" onClick={onClick} data-testid="projects">
        Projects
      </Link>
      <Link className="font-bold text-slate-300" href="/experience" onClick={onClick} data-testid="experience">
        Experience
      </Link>
      <Link className="font-bold text-slate-300" href="/about-me" onClick={onClick} data-testid="about-me">
        About Me
      </Link>
      <Link
        className="font-bold text-slate-300"
        href="https://maclenjack.github.io/jack-maclennan-portfolio/"
        target="_blank"
        rel="noreferrer"
        data-testid="docs"
      >
        Docs
      </Link>
    </span>
  );
}
