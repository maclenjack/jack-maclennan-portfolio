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
    demoUrl: 'https://jack-maclennan-portfolio.vercel.app',
    date: '2024-Present'
  }
];

export function getProjectItemById(id: string): ProjectItem | undefined {
  return PROJECT_ITEMS.find((item) => item.id === id);
}
