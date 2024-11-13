import Page from '@/components/page/Page';

/** About me page located [here](https://jack-maclennan-portfolio.vercel.app/about-me). @source */
export default function AboutMe() {
  return (
    <Page>
      <div className="flex items-start justify-center">
        <div className="my-4 flex flex-row items-center justify-center gap-2">
          <h1 className="text-slate-800 dark:text-slate-300">About Me Page</h1>
        </div>
      </div>
    </Page>
  );
}
