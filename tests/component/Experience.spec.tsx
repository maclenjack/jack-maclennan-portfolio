import Experience from '@pages/experience/page';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('<Experience />', () => {
  beforeEach(() => {
    render(<Experience />);
  });
  it('should render a header', ({ expect }) => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });
});
