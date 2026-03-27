import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to my portfolio website! I am a software engineer with experience mainly in web development. Please check back soon for updates on my projects and experience.'
};

/** Home page located [here](https://jack-maclennan-portfolio.vercel.app/). @source */
export default function Home() {
  return (
    <div className="flex items-start justify-center">
      <div className="my-4 flex flex-row items-center justify-center gap-2">
        <h1 className="text-slate-800 dark:text-slate-300">Page is currently in development, please check in later.</h1>
      </div>
    </div>
  );
}
