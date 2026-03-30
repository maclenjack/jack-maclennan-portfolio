import clsx from 'clsx';
import Link from 'next/link';

/**
 * Links for site navigation.
 * @param props - The component accepts className as props.
 * @param props.className - Optional prop for styling the wrapper.
 * @param props.onClick - Optional prop to handle click on links.
 * @returns The rendered SiteLinks component.
 * @includeExample src/components/page/nav-bar/NavBar.tsx[24:28]
 * @source
 */
export default function SiteLinks({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <nav className={clsx(className)} aria-label="Site links">
      <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
        <li>
          <Link
            className="group relative block rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-emerald-600 md:inline-block md:rounded-none md:px-0 md:py-0 md:text-sm md:hover:bg-transparent dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400 dark:md:hover:bg-transparent"
            href="/projects"
            onClick={onClick}
            tabIndex={0}
            role="link"
            aria-label="projects"
          >
            Projects
            <span className="absolute bottom-2 left-3 h-0.5 w-0 bg-linear-to-r from-emerald-500 to-emerald-600 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] md:bottom-0 md:left-0 md:group-hover:w-full" />
          </Link>
        </li>
        <li>
          <Link
            className="group relative block rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-emerald-600 md:inline-block md:rounded-none md:px-0 md:py-0 md:text-sm md:hover:bg-transparent dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400 dark:md:hover:bg-transparent"
            href="/experience"
            onClick={onClick}
            tabIndex={0}
            role="link"
            aria-label="experience"
          >
            Experience
            <span className="absolute bottom-2 left-3 h-0.5 w-0 bg-linear-to-r from-emerald-500 to-emerald-600 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] md:bottom-0 md:left-0 md:group-hover:w-full" />
          </Link>
        </li>
        <li>
          <Link
            className="group relative block rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-emerald-600 md:inline-block md:rounded-none md:px-0 md:py-0 md:text-sm md:hover:bg-transparent dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400 dark:md:hover:bg-transparent"
            href="/about-me"
            onClick={onClick}
            tabIndex={0}
            aria-label="about me"
          >
            About Me
            <span className="absolute bottom-2 left-3 h-0.5 w-0 bg-linear-to-r from-emerald-500 to-emerald-600 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] md:bottom-0 md:left-0 md:group-hover:w-full" />
          </Link>
        </li>
        <li>
          <Link
            className="group relative block rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-emerald-600 md:inline-block md:rounded-none md:px-0 md:py-0 md:text-sm md:hover:bg-transparent dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400 dark:md:hover:bg-transparent"
            href="https://maclenjack.github.io/jack-maclennan-portfolio-docs/"
            target="_blank"
            rel="noreferrer"
            tabIndex={0}
            role="link"
            aria-label="docs"
          >
            Docs
            <span className="absolute bottom-2 left-3 h-0.5 w-0 bg-linear-to-r from-emerald-500 to-emerald-600 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] md:bottom-0 md:left-0 md:group-hover:w-full" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
