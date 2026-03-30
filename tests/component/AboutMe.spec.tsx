import AboutMe from '@pages/about-me/page';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('<AboutMe />', () => {
  beforeEach(() => {
    render(<AboutMe />);
  });
  it('should render header', () => {
    const header = screen.getByTestId('page-header');
    expect(header).toBeInTheDocument();
    expect(header).toBeVisible();
    expect(header).toHaveTextContent('About Me');
  });
  it('should render name', () => {
    const name = screen.getByTestId('name-header');
    expect(name).toBeInTheDocument();
    expect(name).toBeVisible();
    expect(name).toHaveTextContent('Jack Maclennan');
  });
  it('should render description', () => {
    const description = screen.getByTestId('description');
    expect(description).toBeInTheDocument();
    expect(description).toBeVisible();
  });
});
