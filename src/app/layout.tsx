import type { Metadata } from 'next';
import { Albert_Sans, Alegreya, Barriecito } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'

import '@/app/globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { DarkModeContextProvider } from '@/context';
import SmoothScroll from '@/components/SmoothScroll';

const albertSans = Albert_Sans({
  variable: "--font-albertsans",
  subsets: ["latin"],
});

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
});

const barriecito = Barriecito({
  weight: "400",
  variable: "--font-barriecito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mei Yu Chi | UI/UX Designer",
  description: "I am a UI / UX designer. Studying Human-Computer Interaction at UMD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.variable} ${alegreya.variable} ${barriecito.variable} antialiased relative`}
      >
        <SmoothScroll>
          <DarkModeContextProvider value={true}>
            <Header />
            {children}

            <Footer />
          </DarkModeContextProvider>
        </SmoothScroll>
      </body>
      <GoogleAnalytics gaId="G-7GRVFVX2JL"/>
    </html>
  );
}
