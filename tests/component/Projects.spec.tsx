import Projects from '@pages/projects/page';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('<Projects />', () => {
  beforeEach(() => {
    render(<Projects />);
  });
  it('should render a header', () => {
    const heading = screen.getByRole('heading', {
      name: 'Page is currently in development, please check in later.'
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });
});
