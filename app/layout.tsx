import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Felix Rhodes - Senior Frontend Developer',
  description: 'Senior Frontend Developer specializing in SolidJS and Svelte. Expert in React, Vue, Next.js, and modern web technologies.',
  keywords: 'frontend developer, react, svelte, solidjs, vue, nextjs, typescript, web development',
  authors: [{ name: 'Felix Rhodes' }],
  openGraph: {
    title: 'Felix Rhodes - Senior Frontend Developer',
    description: 'Senior Frontend Developer specializing in SolidJS and Svelte',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}