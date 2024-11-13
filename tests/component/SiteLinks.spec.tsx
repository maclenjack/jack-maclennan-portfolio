import SiteLinks from '@/components/page/nav-bar/SiteLinks';
import { render, screen, within } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('<SiteLinks />', () => {
  beforeEach(() => {
    render(<SiteLinks />);
  });
  it('renders wrapper <span />', ({ expect }) => {
    const wrapperSpan = screen.getByTestId('site-links');
    expect(wrapperSpan).toBeInTheDocument();
    expect(wrapperSpan).toBeVisible();
  });
  it('should render links', ({ expect }) => {
    const siteLinks = within(screen.getByTestId('site-links'));
    expect(siteLinks.getByText('Projects')).toBeDefined();
    expect(siteLinks.getByText('Experience')).toBeDefined();
    expect(siteLinks.getByText('About Me')).toBeDefined();
    expect(siteLinks.getByText('Docs')).toBeDefined();
  });
});
