import { PROJECT_ITEMS } from '@constants/projects';
import ProjectIdPage from '@pages/projects/[id]/page';
import { render, screen } from '@testing-library/react';
import { notFound } from 'next/navigation';
import { describe, expect, it, vi } from 'vitest';

// Mock Next.js navigation
vi.mock('next/navigation', () => ({
  notFound: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND');
  })
}));

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: vi.fn(({ alt, src }) => <img alt={alt} src={src} data-testid="next-image" />)
}));

// Mock Next.js Link component
vi.mock('next/link', () => ({
  default: vi.fn(({ children, href }) => (
    <a href={href} data-testid="next-link">
      {children}
    </a>
  ))
}));

const mockProject = PROJECT_ITEMS[0];

describe('<ProjectIdPage />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render project details correctly for valid project id', async () => {
    const ResolvedComponent = await ProjectIdPage({
      params: Promise.resolve({ id: mockProject.id })
    });

    render(ResolvedComponent);

    // Check page renders project title
    const title = screen.getByRole('heading', {
      name: mockProject.title
    });
    expect(title).toBeInTheDocument();
    expect(title).toBeVisible();

    // Check subtitle is rendered
    expect(screen.getByText(mockProject.subtitle)).toBeInTheDocument();

    // Check description is rendered
    const description = screen.getByRole('article', {
      name: 'project description'
    });
    expect(description).toHaveTextContent(mockProject.description);

    // Check technologies are rendered
    mockProject.technologies.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });

    // Check date is rendered
    expect(screen.getByText(mockProject.date)).toBeInTheDocument();

    // Check GitHub link is present
    const githubLinks = screen.getAllByText('GitHub');
    expect(githubLinks.length).toBeGreaterThan(0);

    // Check back to projects link is present
    const backLinks = screen.getAllByText('Back to Projects');
    expect(backLinks.length).toBeGreaterThan(0);

    // Check project image is rendered
    const image = screen.getByTestId('next-image');
    expect(image).toBeInTheDocument();
  });

  it('should call notFound() for invalid project id', async () => {
    expect.assertions(1);

    try {
      await ProjectIdPage({
        params: Promise.resolve({ id: 'invalid-project-id' })
      });
    } catch (_error) {
      expect(notFound).toHaveBeenCalled();
    }
  });
});
