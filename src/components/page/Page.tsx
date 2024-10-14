import NavBar from '@/components/page/nav-bar/NavBar';
import { ReactNode } from 'react';

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-300 dark:bg-slate-800">
      <NavBar />
      <main className="flex w-full justify-center">{children}</main>
    </div>
  );
}
