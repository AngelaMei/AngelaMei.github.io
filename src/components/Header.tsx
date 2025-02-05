'use client'

import { useContext } from 'react';
import Link from 'next/link';

import { DarkModeContext } from '@/context';

export default function Header() {
  const darkMode = useContext(DarkModeContext);

  return (
    <header className={`fixed l-0 t-0 w-full flex justify-center z-50 ${darkMode ? 'text-white' : 'text-black'}`}>
      <div className="flex px-4 sm:max-[1450px]:px-20 min-[1450px]:px-0 w-full min-[1450px]:w-7xl items-center text-sm sm:text-xl gap-4 sm:gap-7 h-24 my-0.5">
        <Link href="/">
          <span className="text-[2.5rem] select-none font-picasso">ang</span>
        </Link>
        <div className="grow">
        </div>
        <Link href="/about">
          <span className="hover:underline hover:underline-offset-4 font-serif">
            about me.
          </span>
        </Link>
        {/* TODO: re-enable this after the page is implemented
        <Link href="/works">
          <span className="hover:underline hover:underline-offset-4 font-serif">
            all works.
          </span>
        </Link>
        */}
        <Link href="https://drive.google.com/file/d/17-CJW2dArsCYxxthyIYxR-XOy4KzTuFk/view" target="_blank" rel="noopener noreferrer">
          <span className="hover:underline hover:underline-offset-4 font-serif">
            résumé.
          </span>
        </Link>
      </div>
    </header>
  );
}

