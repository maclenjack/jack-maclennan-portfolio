/**
 * Represents a single work experience entry.
 *
 * @property id - Unique identifier for the experience.
 * @property title - Company or role title.
 * @property subtitle - Position or role subtitle.
 * @property description - Summary of responsibilities and achievements.
 * @property imageSrc - Path to an image or logo for the experience.
 * @property href - Internal route to the experience detail page.
 * @property technicalSkills - Technical skills used in this role.
 * @property softSkills - Soft skills demonstrated.
 */
export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  href: string;
  technicalSkills?: string[];
  softSkills?: string[];
}
/**
 * Static list of all experiences displayed in the portfolio.
 * Exported so components can render experience cards or detail pages.
 */
export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'electoral-commission',
    title: 'Electoral Commission',
    subtitle: 'Casual Processing Officer - Overseas Operations',
    description:
      'Processed overseas voting applications in a high-accountability environment, following strict procedures to ensure accuracy and compliance. Collaborated with a diverse team to meet tight deadlines, resolved discrepancies, and handled confidential records responsibly.',
    imageSrc: '/experience/electoral-commission.jpg',
    href: '/experience/electoral-commission',
    technicalSkills: ['Standard Operating Procedures', 'Data Processing', 'Quality Assurance'],
    softSkills: ['Teamwork', 'Problem-solving', 'Communication', 'Attention to Detail', 'Adaptability', 'Time Management', 'Public Sector Experience', 'Confidentiality']
  },
  {
    id: 'crichq',
    title: 'cricHQ',
    subtitle: 'Full Time Software Developer',
    description:
      'Full-stack developer on a sports management platform. Built React components, refactored legacy code, developed Rails APIs, and collaborated in an Agile team to deliver scalable web applications.',
    imageSrc: '/experience/crichq.png',
    href: '/experience/crichq',
    technicalSkills: ['React', 'TypeScript', 'Ruby on Rails', 'PostgreSQL', 'AWS', 'Agile'],
    softSkills: ['Teamwork', 'Problem-solving', 'Communication', 'Agile Development', 'Collaboration']
  },
  {
    id: 'subway',
    title: 'Subway',
    subtitle: 'Part Time Sandwich Artist',
    description:
      'Delivered customer service in a fast-paced environment, resolving issues, following procedures, and managing multiple tasks during high-pressure shifts.',
    imageSrc: '/experience/subway.png',
    href: '/experience/subway',
    softSkills: ['Customer Service', 'Teamwork', 'Time Management', 'Attention to Detail', 'Food Safety', 'De-escalation', 'Procedure Compliance']
  }
];

/**
 * Retrieve an {@link ExperienceItem} by its {@link ExperienceItem.id}.
 *
 * @param id - The unique identifier of the experience.
 * @returns The matching experience or `undefined` if not found.
 */
export function getExperienceItemById(id: string): ExperienceItem | undefined {
  return EXPERIENCE_ITEMS.find((item) => item.id === id);
}
