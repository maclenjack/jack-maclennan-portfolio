import { PROJECT_ITEMS } from '@/constants/projects';
import Projects from '@pages/projects/page';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('<Projects />', () => {
  beforeEach(() => {
    render(<Projects />);
  });

  it('should render the page header correctly', () => {
    const heading = screen.getByRole('heading', {
      name: 'Projects'
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('should render the page description', () => {
    const description = screen.getByRole('article');
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent('Explore my work and see how I bring ideas to life through code.');
  });

  it('should render the CardList component with correct number of project items', () => {
    const cardList = screen.getByRole('list', { name: 'card list' });
    expect(cardList).toBeInTheDocument();

    const cardItems = screen.getAllByRole('listitem');
    expect(cardItems).toHaveLength(PROJECT_ITEMS.length);
  });

  it('should render all project titles correctly', () => {
    PROJECT_ITEMS.forEach((item) => {
      const title = screen.getByRole('heading', { name: item.title });
      expect(title).toBeInTheDocument();
      expect(title).toBeVisible();
    });
  });

  it('should render all project subtitles correctly', () => {
    PROJECT_ITEMS.forEach((item) => {
      const subtitle = screen.getByText(item.subtitle);
      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toBeVisible();
    });
  });
});
