import Home from '@pages/page';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('<Home />', () => {
  beforeEach(() => {
    render(<Home />);
  });
  it('should render a header', () => {
    const heading = screen.getByRole('heading', {
      name: 'Page is currently in development, please check in later.'
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });
});
