import AboutMe from '@pages/about-me/page';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('<AboutMe />', () => {
  beforeEach(() => {
    render(<AboutMe />);
  });
  it('should render header', () => {
    const header = screen.getByRole('heading', { name: 'About Me' });
    expect(header).toBeInTheDocument();
    expect(header).toBeVisible();
  });
  it('should render name', () => {
    const name = screen.getByRole('heading', { name: 'Jack Maclennan' });
    expect(name).toBeInTheDocument();
    expect(name).toBeVisible();
  });
  it('should render description', () => {
    const description = screen.getByText(/Hello! My name is Jack Maclennan/);
    expect(description).toBeInTheDocument();
    expect(description).toBeVisible();
  });
});
