'use client';

import { useEffect, useState } from 'react';
import { MoonIcon } from './icons';

type Theme = 'light' | 'dark';

export default function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {}
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'
      }
      aria-pressed={theme === 'dark'}
      className={`flex size-6 items-center justify-center text-primary transition-opacity hover:opacity-60 ${className ?? ''}`}
    >
      <MoonIcon className="size-6" />
    </button>
  );
}
