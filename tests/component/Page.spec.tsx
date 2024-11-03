import Page from '@/components/page/Page';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('<Page />', () => {
  beforeEach(() => {
    render(
      <Page>
        <h1 data-testid="children">child</h1>
      </Page>
    );
  });
  it('should render <NavBar />', ({ expect }) => {
    const navBar = screen.getByTestId('nav-bar');
    expect(navBar).toBeInTheDocument();
    expect(navBar).toBeVisible();
  });
  it('should render children', ({ expect }) => {
    const children = screen.getByTestId('children');
    expect(children).toBeInTheDocument();
    expect(children).toBeVisible();
    expect(children).toHaveTextContent('child');
  });
});
