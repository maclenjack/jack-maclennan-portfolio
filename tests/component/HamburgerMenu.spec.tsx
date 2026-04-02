import HamburgerMenu from '@components/page/nav-bar/HamburgerMenu';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, vi } from 'vitest';

const setWindowSize = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width
  });
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height
  });
  window.dispatchEvent(new Event('resize'));
};

describe('<HamburgerMenu />', () => {
  describe('inactive', () => {
    beforeEach(async () => {
      setWindowSize(375, 667);
      render(<HamburgerMenu />);
    });
    afterEach(() => {
      cleanup();
    });
    it('should render hamburger icon', () => {
      const hamburgerButton = screen.getByRole('button', { name: 'open hamburger menu' });
      expect(hamburgerButton).toBeInTheDocument();
      expect(hamburgerButton).toBeVisible();
    });
    it("shouldn't render modal content", () => {
      expect(screen.queryByText('Menu')).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'exit hamburger menu' })).not.toBeInTheDocument();
      expect(screen.queryByText('Connect')).not.toBeInTheDocument();
      expect(screen.queryByRole('group', { name: 'Social links' })).not.toBeInTheDocument();
      expect(screen.queryByText('Explore')).not.toBeInTheDocument();
      expect(screen.queryByRole('navigation', { name: 'Site links' })).not.toBeInTheDocument();
    });
  });
  describe('active', () => {
    const user = userEvent.setup();
    beforeEach(async () => {
      render(<HamburgerMenu />);
      await user.click(screen.getByRole('button', { name: 'open hamburger menu' }));
    });
    afterEach(() => {
      cleanup();
      vi.resetAllMocks();
    });
    afterAll(() => {
      vi.clearAllMocks();
    });
    it('should render hamburger icon', () => {
      const hamburgerButton = screen.getByRole('button', { name: 'open hamburger menu' });
      expect(hamburgerButton).toBeInTheDocument();
      expect(hamburgerButton).toBeVisible();
    });
    it('should render modal with menu title', () => {
      expect(screen.getByText('Menu')).toBeInTheDocument();
    });
    it('should render close button', () => {
      const closeButton = screen.getByRole('button', { name: 'exit hamburger menu' });
      expect(closeButton).toBeInTheDocument();
      expect(closeButton).toBeVisible();
    });
    it('should render social icons section', () => {
      expect(screen.getByText('Connect')).toBeInTheDocument();
      expect(screen.getByRole('group', { name: 'Social links' })).toBeInTheDocument();
    });
    it('should render site links section', () => {
      expect(screen.getByText('Explore')).toBeInTheDocument();
      expect(screen.getByRole('navigation', { name: 'Site links' })).toBeInTheDocument();
    });
    it('should close modal when close button is clicked', async () => {
      await user.click(screen.getByRole('button', { name: 'exit hamburger menu' }));
      expect(screen.queryByText('Menu')).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'exit hamburger menu' })).not.toBeInTheDocument();
    });
    it('should close modal when backdrop is clicked', async () => {
      const backdrop = document.querySelector('.fixed.inset-0.bg-black\\/50');
      if (backdrop) {
        await user.click(backdrop);
      }
      expect(screen.queryByText('Menu')).not.toBeInTheDocument();
    });
    it('should close modal when escape key is pressed', async () => {
      await user.keyboard('{Escape}');
      expect(screen.queryByText('Menu')).not.toBeInTheDocument();
    });
    it('should close modal when screen size increases past 768', async () => {
      expect(screen.getByText('Menu')).toBeInTheDocument();
      setWindowSize(1024, 768);
      await waitFor(() => {
        expect(screen.queryByText('Menu')).not.toBeInTheDocument();
      });
    });
  });
});
