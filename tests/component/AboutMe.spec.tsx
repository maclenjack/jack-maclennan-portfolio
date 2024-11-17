import AboutMe from '@pages/about-me/page';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('<AboutMe />', () => {
  beforeEach(() => {
    render(<AboutMe />);
  });
  it('should render image', ({ expect }) => {
    const image = screen.getByTestId('image');
    expect(image).toBeInTheDocument();
    expect(image).toBeVisible();
  });
  it('should render header', ({ expect }) => {
    const header = screen.getByRole('heading', { level: 2 });
    expect(header).toBeInTheDocument();
    expect(header).toBeVisible();
    expect(header).toHaveTextContent('About Me');
  });
  it('should render name', ({ expect }) => {
    const name = screen.getByRole('heading', { level: 1 });
    expect(name).toBeInTheDocument();
    expect(name).toBeVisible();
    expect(name).toHaveTextContent('Jack Maclennan');
  });
  it('should render description', ({ expect }) => {
    const description = screen.getByTestId('description');
    expect(description).toBeInTheDocument();
    expect(description).toBeVisible();
  });
});
