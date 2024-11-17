import NavBar from '@components/page/nav-bar/NavBar';
import { ReactNode } from 'react';

/**
 * Wrapper for pages.
 * @param props - The component accepts children as props.
 * @param props.children - Page content to be rendered.
 * @returns The rendered Page component and it's children.
 * @includeExample src/app/page.tsx:6-12
 * @source
 */
export default function Page({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-300 dark:bg-slate-800" data-testid="page">
      <NavBar />
      <main className="flex w-full justify-center">{children}</main>
    </div>
  );
}
