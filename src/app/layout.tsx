import type { Metadata } from 'next';
import { Inter, Libre_Caslon_Display } from 'next/font/google';
import Header from '@/features/layout/components/header';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

const libre = Libre_Caslon_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-libre',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NEO-THREADS — A considered wardrobe',
  description: 'Less, but better. A considered collection for the everyday.',
};

const themeScript = `
(function () {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libre.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
