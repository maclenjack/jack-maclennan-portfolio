import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn more about me, Jack Maclennan, a passionate web developer with experience in React and Ruby on Rails. Discover my background, interests, and what drives me in the world of programming.'
};

/** About me page located [here](https://jack-maclennan-portfolio.vercel.app/about-me). @source */
export default function AboutMe() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="h-1 w-16 rounded-full bg-linear-to-r from-emerald-500 to-emerald-600" />
              <h1 className="text-sm font-semibold tracking-wider text-emerald-800 uppercase dark:text-emerald-400">
                About Me
              </h1>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl dark:text-white">
                Jack Maclennan
              </h2>
            </div>
          </div>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Hello! My name is Jack Maclennan and I am a passionate web developer. I graduated from Victoria University
              of Wellington in 2021 with a Bachelors of Science majoring in Computer Science. Shortly after, I started
              my first job in the industry at cricHQ, where I discovered my love for React and Ruby on Rails.
              <br />
              Programming is my passion. I love tackling challenges and finding elegant solutions to complex problems.
              When I&apos;m not coding, you&apos;ll usually find me going for walks or curled up with a good book.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-linear-to-br from-emerald-500/20 to-emerald-600/20 p-2 backdrop-blur-sm">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-emerald-400/40 to-emerald-600/40 shadow-2xl shadow-emerald-500/20" />
            <Image
              src="/about-me/me.jpg"
              alt="Portrait of Jack Maclennan - Web Developer"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
