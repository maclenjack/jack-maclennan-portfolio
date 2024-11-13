import Page from '@/components/page/Page';

/** Home page located [here](https://jack-maclennan-portfolio.vercel.app/). @source */
export default function Home() {
  return (
    <Page>
      <div className="flex items-start justify-center">
        <div className="my-4 flex flex-row items-center justify-center gap-2">
          <h1 className="text-slate-800 dark:text-slate-300">Home Page</h1>
        </div>
      </div>
    </Page>
  );
}
