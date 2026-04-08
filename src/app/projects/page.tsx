import CardList from '@components/card/CardList';
import { PROJECT_ITEMS } from '@constants/projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my projects as a web developer, showcasing my skills in React, TypeScript, and modern web technologies. Discover the applications and websites I have built, demonstrating my passion for programming and ability to create innovative solutions.'
};

/** Projects page located [here](https://jack-maclennan-portfolio.vercel.app/projects). @source */
export default function Projects() {
  return (
    <section className="mx-4 my-8 w-full max-w-6xl">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Projects</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300" role="article">
          Explore my work and see how I bring ideas to life through code.
        </p>
      </header>
      <CardList items={PROJECT_ITEMS} />
    </section>
  );
}
