'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

/**
 * Wraps the application in Next.js theme context, exposing the current
 * theme and allowing the user to switch between dark, light and system.
 *
 * @param children - The component tree to provide the theme to.
 * @includeExample src/app/layout.tsx[35:37]
 * @source
 */
export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemeProvider>
  );
}
