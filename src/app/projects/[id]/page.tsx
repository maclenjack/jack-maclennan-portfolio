import { PROJECT_ITEMS } from '@constants/projects';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ProjectPageParams {
  id: string;
}

interface ProjectPageProps {
  params: Promise<ProjectPageParams> | ProjectPageParams;
}

function getProjectItem(id: string) {
  return PROJECT_ITEMS.find((item) => item.id === id);
}

export async function generateStaticParams() {
  return PROJECT_ITEMS.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const item = getProjectItem(resolvedParams.id);

  if (!item) {
    return {
      title: 'Project not found',
      description: 'No project could be found for this id.'
    };
  }

  return {
    title: `Projects - ${item.title}`,
    description: item.description
  };
}

export default async function ProjectIdPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const item = getProjectItem(resolvedParams.id);
  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="h-1 w-16 rounded-full bg-linear-to-r from-emerald-500 to-emerald-600" />
              <h2 className="text-sm font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                Project
              </h2>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl dark:text-white">
                {item.title}
              </h1>
              <p className="text-xl font-medium text-slate-600 dark:text-slate-300">{item.subtitle}</p>
            </div>
          </div>
          <div
            className="prose prose-slate dark:prose-invert max-w-none"
            role="article"
            aria-label="project description"
          >
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">{item.description}</p>
          </div>

          {/* Technologies */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{item.date}</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href={item.githubUrl}
              className="group inline-flex items-center gap-2 rounded-lg bg-slate-800 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-slate-900 hover:shadow-xl focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:outline-none dark:bg-slate-700 dark:hover:bg-slate-600"
              aria-label={`View ${item.title} on GitHub`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </Link>
            {item.demoUrl && (
              <Link
                href={item.demoUrl}
                className="group inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-500/30 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:outline-none"
                aria-label={`View live demo of ${item.title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </Link>
            )}
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-slate-200 px-6 py-3 text-sm font-medium text-slate-800 transition-all hover:bg-slate-300 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:outline-none dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
              aria-label={`Back to projects list from ${item.title}`}
            >
              <svg
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-linear-to-br from-emerald-500/20 to-emerald-600/20 p-2 backdrop-blur-sm">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-emerald-400/40 to-emerald-600/40 shadow-2xl shadow-emerald-500/20" />
            <Image
              src={item.imageSrc}
              alt={`${item.title} - ${item.subtitle}`}
              fill
              className="object-contain p-4 transition-transform duration-500 hover:scale-105"
              style={{ objectFit: 'contain' }}
            />
            <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </main>
  );
}
