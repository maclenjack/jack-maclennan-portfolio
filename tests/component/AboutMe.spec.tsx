import AboutMe from '@/app/about-me/page';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('<AboutMe />', () => {
  beforeEach(() => {
    render(<AboutMe />);
  });
  it('should render <Page />', ({ expect }) => {
    const pageWrapper = screen.getByTestId('page');
    expect(pageWrapper).toBeInTheDocument();
    expect(pageWrapper).toBeVisible();
  });
  it('should render a heading correctly', ({ expect }) => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent('About Me Page');
  });
});
