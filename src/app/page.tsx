import { PROJECT_ITEMS } from '@constants/projects';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to my portfolio website! I am a software engineer with experience mainly in web development. Please check back soon for updates on my projects and experience.'
};

/** Home page located [here](https://jack-maclennan-portfolio.vercel.app/). @source */
export default function Home() {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2021; // Graduated in 2021 TODO: change this

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="h-1 w-16 rounded-full bg-linear-to-r from-emerald-500 to-emerald-600" />
              <h1 className="text-sm font-semibold tracking-wider text-emerald-800 uppercase dark:text-emerald-400">
                Web Developer
              </h1>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl dark:text-white">
                Jack Maclennan
              </h2>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                Building modern web experiences with React & TypeScript
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:outline-none dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-600"
            >
              Explore My Work
            </Link>
            <Link
              href="/about-me"
              className="rounded-lg bg-slate-200 px-6 py-3 font-medium text-slate-800 transition-colors hover:bg-slate-300 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:outline-none dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
            >
              Learn About Me
            </Link>
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
      </section>

      {/* Metrics Section */}
      <section className="mb-16">
        <h3 className="mb-8 text-2xl font-bold text-slate-800 dark:text-slate-100">Quick Stats</h3>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-100 p-6 dark:bg-slate-700">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{yearsOfExperience}+</div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Years of Experience</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-100 p-6 dark:bg-slate-700">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">1</div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Featured Project</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-100 p-6 dark:bg-slate-700">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">4+</div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Technologies Mastered</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-100 p-6 dark:bg-slate-700">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">BSc</div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Computer Science</p>
          </div>
        </div>
      </section>

      {/* Featured Project Preview */}
      <section className="mb-16">
        <h3 className="mb-8 text-2xl font-bold text-slate-800 dark:text-slate-100">Featured Project</h3>
        <div className="rounded-xl bg-slate-100 p-6 dark:bg-slate-700">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="lg:w-2/3">
              <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{PROJECT_ITEMS[0].title}</h4>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{PROJECT_ITEMS[0].subtitle}</p>
              <p className="mt-4 text-slate-700 dark:text-slate-300">{PROJECT_ITEMS[0].description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {PROJECT_ITEMS[0].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                <Link
                  href={PROJECT_ITEMS[0].href}
                  className="rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:outline-none dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-600"
                >
                  View Details
                </Link>
                <Link
                  href="/projects"
                  className="rounded-lg bg-slate-200 px-6 py-3 font-medium text-slate-800 transition-colors hover:bg-slate-300 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:outline-none dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
                >
                  All Projects
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={PROJECT_ITEMS[0].imageSrc}
                    alt="Portrait of Jack Maclennan - Web Developer"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="mb-16">
        <h3 className="mb-8 text-2xl font-bold text-slate-800 dark:text-slate-100">Skills & Expertise</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-slate-100 p-6 dark:bg-slate-700">
            <h4 className="mb-4 text-lg font-semibold text-slate-800 dark:text-slate-100">Technical Skills</h4>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                React
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                TypeScript
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Next.js
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Tailwind CSS
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Ruby on Rails
              </span>
            </div>
          </div>
          <div className="rounded-xl bg-slate-100 p-6 dark:bg-slate-700">
            <h4 className="mb-4 text-lg font-semibold text-slate-800 dark:text-slate-100">Soft Skills</h4>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                Teamwork
              </span>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                Collaboration
              </span>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                Problem-solving
              </span>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                Communication
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Prompts */}
      <section className="mb-16">
        <h3 className="mb-8 text-2xl font-bold text-slate-800 dark:text-slate-100">Explore Further</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/about-me"
            className="rounded-xl bg-slate-100 p-6 transition-colors hover:bg-slate-200 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:outline-none dark:bg-slate-700 dark:hover:bg-slate-600"
          >
            <h4 className="mb-2 text-lg font-semibold text-slate-800 dark:text-slate-100">About Me</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Learn more about my background, interests, and passion for programming
            </p>
          </Link>
          <Link
            href="/experience"
            className="rounded-xl bg-slate-100 p-6 transition-colors hover:bg-slate-200 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:outline-none dark:bg-slate-700 dark:hover:bg-slate-600"
          >
            <h4 className="mb-2 text-lg font-semibold text-slate-800 dark:text-slate-100">Experience</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Discover my professional journey and roles I&apos;ve contributed to
            </p>
          </Link>
          <Link
            href="/projects"
            className="rounded-xl bg-slate-100 p-6 transition-colors hover:bg-slate-200 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:outline-none dark:bg-slate-700 dark:hover:bg-slate-600"
          >
            <h4 className="mb-2 text-lg font-semibold text-slate-800 dark:text-slate-100">Projects</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              See my work and how I bring ideas to life through code
            </p>
          </Link>
          <div className="rounded-xl bg-slate-100 p-6 dark:bg-slate-700">
            <h4 className="mb-2 text-lg font-semibold text-slate-800 dark:text-slate-100">Connect</h4>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">Reach out or follow my work</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/maclenjack"
                className="text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/jack-maclennan"
                className="text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
