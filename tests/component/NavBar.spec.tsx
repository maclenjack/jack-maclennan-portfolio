import NavBar from '@components/page/nav-bar/NavBar';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('<NavBar />', () => {
  beforeEach(() => {
    render(<NavBar />);
  });
  it('should render logo <Link />', ({ expect }) => {
    const logoLink = screen.getByTestId('logo-link');
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toBeVisible();
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
