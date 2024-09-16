'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (resolvedTheme === 'dark') {
    return <FontAwesomeIcon className="text-slate-300" onClick={() => setTheme('light')} icon={faMoon} />;
  }
  if (resolvedTheme === 'light') {
    return <FontAwesomeIcon className="text-slate-800" onClick={() => setTheme('dark')} icon={faSun} />;
  }
}
