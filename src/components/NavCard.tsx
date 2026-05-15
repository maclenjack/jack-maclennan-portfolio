import Link from 'next/link';

/**
 * Props for the {@link NavCard} component.
 *
 * @property href - The link target for the card.
 * @property title - The title displayed in the card.
 * @property description - A short description shown below the title.
 */
interface NavCardProps {
  href: string;
  title: string;
  description: string;
}

/**
 * A navigation card used throughout the portfolio to link to different
 * sections or external resources. It renders a styled link with a title and
 * description.
 *
 * @param href - The URL or route to navigate to.
 * @param title - The card title.
 * @param description - A brief description of the destination.
 * @returns The rendered NavCard component.
 * @includeExample src\app\page.tsx[140:144]
 * @source
 */
export default function NavCard({ href, title, description }: NavCardProps) {
  return (
    <Link
      href={href}
      className="rounded-xl bg-slate-100 p-6 transition-colors hover:bg-slate-200 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:outline-none dark:bg-slate-700 dark:hover:bg-slate-600"
    >
      <h4 className="mb-2 text-lg font-semibold text-slate-800 dark:text-slate-100">{title}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
    </Link>
  );
}
