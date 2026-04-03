import CardListItem, { CardListItemData } from './CardListItem';

interface CardListProps {
  items: CardListItemData[];
}

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
