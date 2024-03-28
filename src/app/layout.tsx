import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'João Vitor',
  description: 'TODO',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-zinc-50 text-slate-950 dark:bg-zinc-900"
        style={inter.style}
      >
        {children}
      </body>
    </html>
  );
}
