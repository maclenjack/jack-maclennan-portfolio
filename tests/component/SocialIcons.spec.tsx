import SocialIcons from '@components/page/nav-bar/SocialIcons';
import { render, screen, within } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('<SocialIcons />', () => {
  beforeEach(() => {
    render(<SocialIcons />);
  });
  it('renders wrapper <div />', ({ expect }) => {
    const wrapperDiv = screen.getByTestId('social-icons');
    expect(wrapperDiv).toBeInTheDocument();
    expect(wrapperDiv).toBeVisible();
  });
  it('should render links', ({ expect }) => {
    const socialLinks = within(screen.getByTestId('social-icons'));
    expect(socialLinks.getByLabelText('email me')).toBeDefined();
    expect(socialLinks.getByLabelText('github')).toBeDefined();
    expect(socialLinks.getByLabelText('linkedin')).toBeDefined();
  });
});
