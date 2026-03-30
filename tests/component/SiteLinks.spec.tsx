import SiteLinks from '@components/page/nav-bar/SiteLinks';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('<SiteLinks />', () => {
  beforeEach(() => {
    render(<SiteLinks />);
  });
  it('renders navigation', () => {
    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();
    expect(navigation).toBeVisible();
  });
  it('should render links', () => {
    expect(screen.getByRole('link', { name: 'projects' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'experience' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'about me' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'docs' })).toBeInTheDocument();
  });
});
