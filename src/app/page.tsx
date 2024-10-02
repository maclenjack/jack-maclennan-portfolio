import React from 'react';
import Page from '@/components/page/Page';
import ThemeSelect from '@/components/theme_select/ThemeSelect';

export default function Home() {
  return (
    <Page>
      <div className="flex justify-center items-start">
        <div className="flex flex-row justify-center items-center gap-2 my-4">
          <h1 className="text-slate-800 dark:text-slate-300">Home Page</h1>
          <ThemeSelect />
        </div>
      </div>
    </Page>
  );
}
