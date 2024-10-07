import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function SocialIcons() {
  return (
    <div className="flex flex-row justify-center items-center gap-8">
      <Link href="mailto:jackwmaclennan@gmail.com" aria-label="email me">
        <FontAwesomeIcon className="h-4 w-5 text-slate-300 text-xl" icon={faEnvelope} />
      </Link>
      <Link href="https://github.com/maclenjack/" target="_blank" rel="noreferrer" aria-label="github">
        <FontAwesomeIcon className="h-4 w-5 text-slate-300 text-xl" icon={faGithub} />
      </Link>
      <Link href="https://www.linkedin.com/in/jack-maclennan/" target="_blank" rel="noreferrer" aria-label="linkedin">
        <FontAwesomeIcon className="h-4 w-5 text-slate-300 text-xl" icon={faLinkedin} />
      </Link>
    </div>

  );
}
