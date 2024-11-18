import Home from '@pages/page';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('<Home />', () => {
  beforeEach(() => {
    render(<Home />);
  });
  it('should render a header', ({ expect }) => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });
});
