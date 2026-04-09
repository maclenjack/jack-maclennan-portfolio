import { EXPERIENCE_ITEMS } from '@constants/experience';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ExperiencePageParams {
  id: string;
}

interface ExperiencePageProps {
  params: Promise<ExperiencePageParams> | ExperiencePageParams;
}

function getExperienceItem(id: string) {
  return EXPERIENCE_ITEMS.find((item) => item.id === id);
}

export async function generateStaticParams() {
  return EXPERIENCE_ITEMS.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const item = getExperienceItem(resolvedParams.id);

  if (!item) {
    return {
      title: 'Experience not found',
      description: 'No experience item could be found for this id.'
    };
  }

  return {
    title: `Experience - ${item.title}`,
    description: item.description
  };
}

export default async function ExperienceIdPage({ params }: ExperiencePageProps) {
  const resolvedParams = await params;
  const item = getExperienceItem(resolvedParams.id);
  if (!item) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="h-1 w-16 rounded-full bg-linear-to-r from-emerald-500 to-emerald-600" />
              <div className="text-sm font-semibold tracking-wider text-emerald-800 uppercase dark:text-emerald-400">
                Experience
              </div>
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
            aria-label="experience description"
          >
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">{item.description}</p>
          </div>

          {/* Skills Sections */}
          <div className="flex flex-col gap-6">
            {item.technicalSkills && item.technicalSkills.length > 0 && (
              <div className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Technical Skills</h2>
                <ul className="flex flex-wrap gap-2">
                  {item.technicalSkills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {item.softSkills && item.softSkills.length > 0 && (
              <div className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Soft Skills</h2>
                <ul className="flex flex-wrap gap-2">
                  {item.softSkills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 pt-4">
            <Link
              href="/experience"
              className="group inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-emerald-600 to-emerald-700 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-700 hover:to-emerald-800 hover:shadow-xl hover:shadow-emerald-500/30 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:outline-none"
              aria-label={`Back to experience list from ${item.title}`}
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
              Back to Experience
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
    </div>
  );
}
