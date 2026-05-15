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
    id: 'crichq',
    title: 'cricHQ',
    subtitle: 'Software Developer',
    description:
      'Worked across the full stack on data-driven web apps with real-time updates, payments, and team management workflows.',
    imageSrc: '/experience/crichq.png',
    href: '/experience/crichq',
    technicalSkills: ['React', 'TypeScript', 'Next.js', 'Ruby on Rails', 'PostgreSQL', 'AWS'],
    softSkills: ['Teamwork', 'Problem-solving', 'Communication', 'Agile Development']
  },
  {
    id: 'subway',
    title: 'Subway',
    subtitle: 'Sandwich Artist',
    description:
      'Worked as a Sandwich Artist shaping customer meals, handling food preparation, point-of-sale interactions, and delivering excellent service in a fast-paced environment.',
    imageSrc: '/experience/subway.png',
    href: '/experience/subway',
    softSkills: ['Customer Service', 'Teamwork', 'Time Management', 'Attention to Detail', 'Food Safety']
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
