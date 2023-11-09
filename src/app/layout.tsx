import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '../../components/Navbar';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Axit',
  description: 'Axit – PSD Landing page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} max-w-[1400px] mx-auto text-[14px] text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
