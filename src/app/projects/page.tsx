import CardList from '@/components/card-list/CardList';
import SectionHeader from '@/components/SectionHeader';
import { PROJECT_ITEMS } from '@constants/projects';
import { Metadata } from 'next';

/**
 * Metadata for the Projects page.
 * @type {Metadata}
 * @source
 */
export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my projects as a web developer, showcasing my skills in React, TypeScript, and modern web technologies. Discover the applications and websites I have built, demonstrating my passion for programming and ability to create innovative solutions.'
};

/**
 * The Projects page component.
 *
 * @returns The rendered page.
 * @source
 */
export default function Projects() {
  return (
    <SectionHeader title="Projects" description="Explore my work and see how I bring ideas to life through code.">
      <CardList items={PROJECT_ITEMS} />
    </SectionHeader>
  );
}
