import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Montserrat } from 'next/font/google'
import Head from 'next/head';
import NavBar from '@/components/NavBar';


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont",
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'David Cohen',
  description: 'Welcome to my Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={'${montserrat.variable} font-sans'}>
          <NavBar />
          {children}</main>
      </body>
    </html>
  );
}
