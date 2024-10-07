import React, { ReactNode } from 'react';
import NavBar from '@/components/page/nav-bar/NavBar';

export default function Page({ children } : { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-300 dark:bg-slate-800">
      <NavBar />
      <main className="flex justify-center w-full">
        {children}
      </main>
    </div>
  );
}
