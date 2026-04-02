import Page from '@components/page/Page';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('<Page />', () => {
  beforeEach(() => {
    render(
      <Page>
        <h1>child</h1>
      </Page>
    );
  });
  it('should render <NavBar />', () => {
    const navBar = screen.getByRole('navigation', { name: 'Main navigation' });
    expect(navBar).toBeInTheDocument();
    expect(navBar).toBeVisible();
  });
  it('should render children', () => {
    const children = screen.getByRole('heading', { name: 'child' });
    expect(children).toBeInTheDocument();
    expect(children).toBeVisible();
    expect(children).toHaveTextContent('child');
  });
});
