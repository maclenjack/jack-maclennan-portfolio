import SocialIcons from '@components/page/nav-bar/SocialIcons';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('<SocialIcons />', () => {
  beforeEach(() => {
    render(<SocialIcons />);
  });
  it('renders social links container', () => {
    const emailLink = screen.getByRole('link', { name: 'email' });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toBeVisible();
  });
  it('should render links', () => {
    expect(screen.getByRole('link', { name: 'email' })).toHaveAttribute('href', 'mailto:jackwmaclennan@gmail.com');
    expect(screen.getByRole('link', { name: 'github' })).toHaveAttribute('href', 'https://github.com/maclenjack/');
    expect(screen.getByRole('link', { name: 'linkedin' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/jack-maclennan/'
    );
  });
});
