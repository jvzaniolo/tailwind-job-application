import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'João Vitor',
  description:
    'My name is João Vitor and I’m a 25 years old software engineer based in Brazil (UTC-3).',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-zinc-50 text-slate-950 dark:bg-zinc-900 dark:text-white"
        style={inter.style}
      >
        {children}
      </body>
    </html>
  );
}
