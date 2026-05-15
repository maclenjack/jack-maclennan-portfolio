import CardListItem, { CardListItemData } from './CardListItem';

/**
 * Props for the {@link CardList} component.
 *
 * @property items - An array of {@link CardListItemData} objects to render.
 */
interface CardListProps {
  items: CardListItemData[];
}

/**
 * Renders a responsive grid of {@link CardListItem} components.
 *
 * @param items - The data for each card.
 * @returns The rendered CardList component.
 * @includeExample src\app\experience\page.tsx[29]
 * @source
 */
export default function CardList({ items }: CardListProps) {
  if (items.length === 0) {
    return <p className="text-slate-500 dark:text-slate-400">No cards available.</p>;
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" aria-label="card list">
      {items.map((item) => (
        <CardListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
