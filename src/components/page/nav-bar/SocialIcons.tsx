import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

/**
 * Icon links for navigating to social profiles.
 * @returns The rendered SocialIcons component.
 * @includeExample src/components/page/nav-bar/NavBar.tsx[24:28]
 * @source
 */
export default function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-4 md:flex-row md:gap-6" role="group" aria-label="Social links">
      <Link
        href="mailto:jackwmaclennan@gmail.com"
        role="link"
        aria-label="email"
        tabIndex={0}
        className="group flex h-14 w-14 items-center justify-center rounded-xl transition-all hover:bg-slate-100 md:h-auto md:w-auto md:rounded-lg md:p-2 dark:hover:bg-slate-800"
      >
        <FontAwesomeIcon
          className="text-xl text-slate-600 transition-colors group-hover:text-emerald-600 md:text-base dark:text-slate-400 dark:group-hover:text-emerald-400"
          icon={faEnvelope}
        />
      </Link>
      <Link
        href="https://github.com/maclenjack/"
        target="_blank"
        rel="noreferrer"
        role="link"
        aria-label="github"
        tabIndex={0}
        className="group flex h-14 w-14 items-center justify-center rounded-xl transition-all hover:bg-slate-100 md:h-auto md:w-auto md:rounded-lg md:p-2 dark:hover:bg-slate-800"
      >
        <FontAwesomeIcon
          className="text-xl text-slate-600 transition-colors group-hover:text-emerald-600 md:text-base dark:text-slate-400 dark:group-hover:text-emerald-400"
          icon={faGithub}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/jack-maclennan/"
        target="_blank"
        rel="noreferrer"
        role="link"
        aria-label="linkedin"
        tabIndex={0}
        className="group flex h-14 w-14 items-center justify-center rounded-xl transition-all hover:bg-slate-100 md:h-auto md:w-auto md:rounded-lg md:p-2 dark:hover:bg-slate-800"
      >
        <FontAwesomeIcon
          className="text-xl text-slate-600 transition-colors group-hover:text-emerald-600 md:text-base dark:text-slate-400 dark:group-hover:text-emerald-400"
          icon={faLinkedin}
        />
      </Link>
    </div>
  );
}
