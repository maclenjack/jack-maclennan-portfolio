import React, { ReactNode } from 'react';

export default function Page({ children } : { children: ReactNode }) {
  return (
    <main className="flex justify-center min-h-screen bg-slate-300 dark:bg-slate-800">
      {children}
    </main>
  );
}
