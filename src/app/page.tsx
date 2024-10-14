import Page from '@/components/page/Page';

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
