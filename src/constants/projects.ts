/**
 * Represents a single project entry used throughout the portfolio.
 *
 * @property id - Unique identifier for the project.
 * @property title - Display title of the project.
 * @property subtitle - Short subtitle or tagline.
 * @property description - Full description shown on the project page.
 * @property imageSrc - Path to the project preview image.
 * @property imageFit - Optional Tailwind CSS object-fit value for the image.
 * @property href - Internal route to the project detail page.
 * @property technologies - List of main tech stack used.
 * @property githubUrl - Public GitHub repository URL.
 * @property demoUrl - Optional live demo URL.
 * @property date - Release or active period of the project.
 */
export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageFit?: string;
  href: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  date: string;
}

/**
 * Static list of all projects displayed in the portfolio.
 * The array is exported so it can be consumed by components that render
 * project cards or detail pages.
 */
export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: 'jack-maclennan-portfolio',
    title: 'Jack Maclennan Portfolio',
    subtitle: 'Personal Website & Portfolio',
    description:
      'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a dark mode toggle, smooth animations, and showcases my experience and projects as a web developer.',
    imageSrc: '/projects/portfolio.jpg',
    imageFit: 'cover',
    href: '/projects/jack-maclennan-portfolio',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    githubUrl: 'https://github.com/maclenjack/jack-maclennan-portfolio',
    date: '2024-Present'
  }
];

/**
 * Retrieve a {@link ProjectItem} by its {@link ProjectItem.id}.
 *
 * @param id - The unique identifier of the project.
 * @returns The matching project or `undefined` if not found.
 */
export function getProjectItemById(id: string): ProjectItem | undefined {
  return PROJECT_ITEMS.find((item) => item.id === id);
}
