import { PROJECT_ITEMS } from '@constants/projects';
import Home from '@pages/page';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

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

describe('<Home />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<Home />);
  });

  it('should render the hero section correctly', () => {
    const heading = screen.getByRole('heading', {
      name: 'Jack Maclennan'
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();

    // Check subtitle
    const subtitle = screen.getByText('Building modern web experiences with React & TypeScript');
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toBeVisible();

    // Check Web Developer badge
    const webDeveloperBadge = screen.getByText('Web Developer');
    expect(webDeveloperBadge).toBeInTheDocument();
    expect(webDeveloperBadge).toBeVisible();

    // Check buttons
    const exploreWorkButton = screen.getByRole('link', { name: 'Explore My Work' });
    expect(exploreWorkButton).toBeInTheDocument();
    expect(exploreWorkButton).toBeVisible();

    const learnAboutMeButton = screen.getByRole('link', { name: 'Learn About Me' });
    expect(learnAboutMeButton).toBeInTheDocument();
    expect(learnAboutMeButton).toBeVisible();

    // Check portrait image
    const images = screen.getAllByAltText('Portrait of Jack Maclennan - Web Developer');
    expect(images.length).toBeGreaterThan(0);
  });

  it('should render the metrics section correctly', () => {
    // Check section heading
    const sectionHeading = screen.getByRole('heading', { name: 'Quick Stats' });
    expect(sectionHeading).toBeInTheDocument();
    expect(sectionHeading).toBeVisible();

    // Check all four metric boxes
    const metrics = ['Years of Experience', 'Featured Project', 'Technologies Mastered', 'Computer Science'];

    metrics.forEach((metric) => {
      const metricElements = screen.getAllByText(metric);
      expect(metricElements.length).toBeGreaterThan(0);
      expect(metricElements[0]).toBeVisible();
    });

    // Check metric values (dynamic years of experience)
    // There are two "+" values: "5+" and "4+", we can check both exist
    const plusValues = screen.getAllByText(/\+$/);
    expect(plusValues.length).toBe(2);
  });

  it('should render the featured project section correctly', () => {
    // Check section heading
    const sectionHeading = screen.getByRole('heading', { name: 'Featured Project' });
    expect(sectionHeading).toBeInTheDocument();
    expect(sectionHeading).toBeVisible();

    // Check project title
    const projectTitle = screen.getByRole('heading', { name: PROJECT_ITEMS[0].title });
    expect(projectTitle).toBeInTheDocument();
    expect(projectTitle).toBeVisible();

    // Check project subtitle
    const projectSubtitle = screen.getByText(PROJECT_ITEMS[0].subtitle);
    expect(projectSubtitle).toBeInTheDocument();
    expect(projectSubtitle).toBeVisible();

    // Check project description
    const projectDescription = screen.getByText(PROJECT_ITEMS[0].description);
    expect(projectDescription).toBeInTheDocument();
    expect(projectDescription).toBeVisible();

    // Check technologies - there may be duplicates in skills section
    PROJECT_ITEMS[0].technologies.forEach((tech) => {
      const techElements = screen.getAllByText(tech);
      expect(techElements.length).toBeGreaterThan(0);
      expect(techElements[0]).toBeVisible();
    });

    // Check links
    const viewDetailsLink = screen.getByRole('link', { name: 'View Details' });
    expect(viewDetailsLink).toBeInTheDocument();
    expect(viewDetailsLink).toBeVisible();

    const allProjectsLink = screen.getByRole('link', { name: 'All Projects' });
    expect(allProjectsLink).toBeInTheDocument();
    expect(allProjectsLink).toBeVisible();

    // Check project image (there are two images with same alt text)
    const projectImages = screen.getAllByAltText('Portrait of Jack Maclennan - Web Developer');
    expect(projectImages.length).toBeGreaterThan(0);
  });

  it('should render the skills section correctly', () => {
    // Check section heading
    const sectionHeading = screen.getByRole('heading', { name: 'Skills & Expertise' });
    expect(sectionHeading).toBeInTheDocument();
    expect(sectionHeading).toBeVisible();

    // Check technical skills heading
    const technicalHeading = screen.getByRole('heading', { name: 'Technical Skills' });
    expect(technicalHeading).toBeInTheDocument();
    expect(technicalHeading).toBeVisible();

    // Check technical skills badges - there may be duplicates in other sections
    const technicalSkills = ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Ruby on Rails'];
    technicalSkills.forEach((skill) => {
      const skillElements = screen.getAllByText(skill);
      expect(skillElements.length).toBeGreaterThan(0);
      expect(skillElements[0]).toBeVisible();
    });

    // Check soft skills heading
    const softSkillsHeading = screen.getByRole('heading', { name: 'Soft Skills' });
    expect(softSkillsHeading).toBeInTheDocument();
    expect(softSkillsHeading).toBeVisible();

    // Check soft skills badges
    const softSkills = ['Teamwork', 'Collaboration', 'Problem-solving', 'Communication'];
    softSkills.forEach((skill) => {
      const skillElements = screen.getAllByText(skill);
      expect(skillElements.length).toBeGreaterThan(0);
      expect(skillElements[0]).toBeVisible();
    });
  });

  it('should render the navigation prompts section correctly', () => {
    // Check section heading
    const sectionHeading = screen.getByRole('heading', { name: 'Explore Further' });
    expect(sectionHeading).toBeInTheDocument();
    expect(sectionHeading).toBeVisible();

    // Check navigation cards
    const cardTitles = ['About Me', 'Experience', 'Projects', 'Connect'];
    cardTitles.forEach((title) => {
      const cardTitle = screen.getByRole('heading', { name: title });
      expect(cardTitle).toBeInTheDocument();
      expect(cardTitle).toBeVisible();
    });

    // Check card descriptions
    const cardDescriptions = [
      'Learn more about my background, interests, and passion for programming',
      "Discover my professional journey and roles I've contributed to",
      'See my work and how I bring ideas to life through code',
      'Reach out or follow my work'
    ];

    cardDescriptions.forEach((description) => {
      const descElement = screen.getByText(description);
      expect(descElement).toBeInTheDocument();
      expect(descElement).toBeVisible();
    });

    // Check GitHub and LinkedIn links
    const githubLink = screen.getByText('GitHub');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toBeVisible();

    const linkedinLink = screen.getByText('LinkedIn');
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toBeVisible();
  });
});
