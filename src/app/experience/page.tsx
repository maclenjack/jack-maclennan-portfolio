import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Explore my professional experience as a web developer, including my work at cricHQ and the skills I have gained in React and Ruby on Rails. Discover how my passion for programming has driven my career growth and the projects I have contributed to.'
};

/** Experience page located [here](https://jack-maclennan-portfolio.vercel.app/experience). @source */
export default function Experience() {
  return (
    <div className="flex items-start justify-center">
      <div className="my-4 flex flex-row items-center justify-center gap-2">
        <h1 className="text-slate-800 dark:text-slate-300">Page is currently in development, please check in later.</h1>
      </div>
    </div>
  );
}
