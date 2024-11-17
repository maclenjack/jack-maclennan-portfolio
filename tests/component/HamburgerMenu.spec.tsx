import HamburgerMenu from '@components/page/nav-bar/HamburgerMenu';
import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, vi } from 'vitest';

describe('<HamburgerMenu />', () => {
  describe('inactive', () => {
    beforeEach(() => {
      render(<HamburgerMenu />);
    });
    afterEach(() => {
      cleanup();
    });
    it('should render hamburger icon', ({ expect }) => {
      expect(screen.getByTestId('hamburger-icon')).toBeInTheDocument();
      expect(screen.getByTestId('hamburger-icon')).toBeVisible();
    });
    it("shouldn't mount modal", ({ expect }) => {
      expect(screen.queryByTestId('hamburger-modal')).not.toBeInTheDocument();
    });
  });
  describe('active', () => {
    const user = userEvent.setup();
    beforeEach(async () => {
      window.scroll = vi.fn(); // needed for modal
      render(<HamburgerMenu />);
      await user.click(screen.getByTestId('hamburger-icon'));
    });
    afterEach(() => {
      cleanup();
      vi.resetAllMocks();
    });
    afterAll(() => {
      vi.clearAllMocks();
    });
    it('should render hamburger icon', ({ expect }) => {
      expect(screen.getByTestId('hamburger-icon')).toBeInTheDocument();
      expect(screen.getByTestId('hamburger-icon')).toBeVisible();
    });
    it('should mount modal', ({ expect }) => {
      expect(screen.getByTestId('hamburger-modal')).toBeInTheDocument();
      expect(screen.getByTestId('hamburger-modal')).toBeVisible();
    });
    it('should render close <button />', ({ expect }) => {
      expect(screen.getByTestId('hamburger-close')).toBeInTheDocument();
      expect(screen.getByTestId('hamburger-close')).toBeVisible();
    });
    it('should render <SocialIcons />', ({ expect }) => {
      expect(screen.getByTestId('social-icons')).toBeInTheDocument();
      expect(screen.getByTestId('social-icons')).toBeVisible();
    });
    it('should render <SiteLinks />', ({ expect }) => {
      expect(screen.getByTestId('site-links')).toBeInTheDocument();
      expect(screen.getByTestId('site-links')).toBeVisible();
    });
  });
});
