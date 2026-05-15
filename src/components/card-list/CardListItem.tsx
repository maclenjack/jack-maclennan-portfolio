import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Data shape for a single card in the list.
 *
 * @property id - Unique identifier for the card.
 * @property href - Link target for the card.
 * @property imageSrc - Source URL for the card image.
 * @property imageFit - Optional image fit style (`cover` or `contain`).
 * @property title - Card title.
 * @property subtitle - Card subtitle.
 * @property description - Optional card description.
 */
export type CardListItemData = {
  id: string;
  href: string;
  imageSrc: string;
  imageFit?: string;
  title: string;
  subtitle: string;
  description?: string;
};

/**
 * Props for the {@link CardListItem} component.
 *
 * @property item - The data for this card.
 */
interface CardListItemProps {
  item: CardListItemData;
}

/**
 * Renders a single card with image, title, and subtitle.
 *
 * @param item - The card data.
 * @returns The rendered CardListItem component.
 * @includeExample src/components/card-list/CardList.tsx[27:29]
 * @source
 */
export default function CardListItem({ item }: CardListItemProps) {
  return (
    <li className="rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <Link
        href={item.href}
        className="block overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <div className="relative h-44 w-full bg-slate-100">
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            className={clsx({
              'object-contain': item.imageFit === undefined,
              'object-cover': item.imageFit === 'cover'
            })}
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{item.title}</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.subtitle}</p>
        </div>
      </Link>
    </li>
  );
}
