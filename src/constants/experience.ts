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

export function getExperienceItemById(id: string): ExperienceItem | undefined {
  return EXPERIENCE_ITEMS.find((item) => item.id === id);
}
