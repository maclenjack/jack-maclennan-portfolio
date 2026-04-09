import CardList from '@components/card/CardList';
import { CardListItemData } from '@components/card/CardListItem';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

const items: CardListItemData[] = [
  {
    id: 'test-id',
    title: 'Test Card',
    subtitle: 'Testing subtitle',
    description: 'This is a test description for the card item.',
    imageSrc: '/test.png',
    href: '/experience/test-id'
  }
];

describe('<CardList />', () => {
  it('renders with provided cards', () => {
    render(<CardList items={items} />);

    const list = screen.getByRole('list', { name: 'card list' });
    expect(list).toBeInTheDocument();

    const cardTitle = screen.getByText('Test Card');
    const cardSubtitle = screen.getByText('Testing subtitle');
    const cardLink = screen.getByRole('link', { name: /Test Card/i });

    expect(cardTitle).toBeVisible();
    expect(cardSubtitle).toBeVisible();
    expect(cardLink).toHaveAttribute('href', '/experience/test-id');
  });

  it('renders fallback text when no cards are passed', () => {
    render(<CardList items={[]} />);

    expect(screen.getByText('No cards available.')).toBeVisible();
  });
});
