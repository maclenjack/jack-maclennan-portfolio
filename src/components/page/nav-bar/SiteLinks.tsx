import clsx from 'clsx';
import Link from 'next/link';

export default function SiteLinks({ className }: { className?: string }) {
  return (
    <span className={clsx(className)} data-testid="site-links">
      <Link className="font-bold text-slate-300" href="/projects">
        Projects
      </Link>
      <Link className="font-bold text-slate-300" href="/experience">
        Experience
      </Link>
      <Link className="font-bold text-slate-300" href="/about-me">
        About Me
      </Link>
    </span>
  );
}
