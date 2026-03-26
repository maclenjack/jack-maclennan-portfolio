import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Discover my projects as a web developer, showcasing my skills. Explore the various applications and websites I have in the works, demonstrating my passion for programming and my ability to create innovative solutions.'
};

/** Projects page located [here](https://jack-maclennan-portfolio.vercel.app/projects). @source */
export default function Projects() {
  return (
    <div className="flex items-start justify-center">
      <div className="my-4 flex flex-row items-center justify-center gap-2">
        <h1 className="text-slate-800 dark:text-slate-300">Page is currently in development, please check in later.</h1>
      </div>
    </div>
  );
}
