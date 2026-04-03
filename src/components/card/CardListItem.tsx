import Image from 'next/image';
import Link from 'next/link';

export type CardListItemData = {
  id: string;
  href: string;
  imageSrc: string;
  title: string;
  subtitle: string;
  description?: string;
};

interface CardListItemProps {
  item: CardListItemData;
}

export default function CardListItem({ item }: CardListItemProps) {
  return (
    <li className="rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <Link
        href={item.href}
        className="block overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <div className="relative h-44 w-full bg-slate-100">
          <Image src={item.imageSrc} alt={item.title} fill className="object-contain" />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{item.title}</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.subtitle}</p>
        </div>
      </Link>
    </li>
  );
}
