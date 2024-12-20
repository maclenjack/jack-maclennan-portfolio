import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

/**
 * Icon links for navigating to social profiles.
 * @returns The rendered SocialIcons component.
 * @includeExample src/components/page/nav-bar/NavBar.tsx:24-28
 * @source
 */
export default function SocialIcons() {
  return (
    <div className="flex flex-row items-center justify-center gap-8" data-testid="social-icons">
      <Link href="mailto:jackwmaclennan@gmail.com" aria-label="email me" data-testid="email-link">
        <FontAwesomeIcon className="h-4 w-5 text-xl text-slate-300" icon={faEnvelope} />
      </Link>
      <Link
        href="https://github.com/maclenjack/"
        target="_blank"
        rel="noreferrer"
        aria-label="github"
        data-testid="github-link"
      >
        <FontAwesomeIcon className="h-4 w-5 text-xl text-slate-300" icon={faGithub} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/jack-maclennan/"
        target="_blank"
        rel="noreferrer"
        aria-label="linkedin"
        data-testid="linkedin-link"
      >
        <FontAwesomeIcon className="h-4 w-5 text-xl text-slate-300" icon={faLinkedin} />
      </Link>
    </div>
  );
}
