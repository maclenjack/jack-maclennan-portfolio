import React, { ReactNode } from 'react';

export default function Page({ children } : { children: ReactNode }) {
  return (
    <main className="flex justify-center min-h-screen">
      {children}
    </main>
  );
}
