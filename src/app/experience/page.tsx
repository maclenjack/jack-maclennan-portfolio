import CardList from '@/components/card-list/CardList';
import SectionHeader from '@/components/SectionHeader';
import { EXPERIENCE_ITEMS } from '@constants/experience';
import { Metadata } from 'next';

/**
 * Metadata for the Experience page.
 * @type {Metadata}
 * @source
 */
export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Explore my professional experience as a web developer, including my work at cricHQ and the skills I have gained in React and Ruby on Rails. Discover how my passion for programming has driven my career growth and the projects I have contributed to.'
};

/**
 * The Experience page component.
 *
 * @returns The rendered page.
 * @source
 */
export default function Experience() {
  return (
    <SectionHeader
      title="Experience"
      description="Dive into roles and projects with rich context and links to dedicated details."
    >
      <CardList items={EXPERIENCE_ITEMS} />
    </SectionHeader>
  );
}
