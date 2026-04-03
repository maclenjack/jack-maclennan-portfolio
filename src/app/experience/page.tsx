import CardList from '@components/card/CardList';
import { EXPERIENCE_ITEMS } from '@constants/experience';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Explore my professional experience as a web developer, including my work at cricHQ and the skills I have gained in React and Ruby on Rails. Discover how my passion for programming has driven my career growth and the projects I have contributed to.'
};

/** Experience page located [here](https://jack-maclennan-portfolio.vercel.app/experience). @source */
export default function Experience() {
  return (
    <section className="mx-4 my-8 w-full max-w-6xl">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Experience</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300" role="article">
          Dive into roles and projects with rich context and links to dedicated details.
        </p>
      </header>
      <CardList items={EXPERIENCE_ITEMS} />
    </section>
  );
}
