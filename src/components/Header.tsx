'use client'

import { useContext } from 'react';
import Link from 'next/link';

import MagicLink from '@/components/MagicLink';
import { DarkModeContext } from '@/context';

export default function Header() {
  const darkMode = useContext(DarkModeContext);

  return (
    <header
      className={`fixed l-0 t-0 w-full flex justify-center z-50 ${darkMode ? 'text-white' : 'text-black'} backdrop-blur-md`}
      style={{ maskImage: "linear-gradient(to bottom, rgb(0 0 0 / 100%), rgb(0 0 0 / 100%) 80%, transparent)", }}
    >
      <div className="flex px-4 sm:max-[1450px]:px-20 min-[1450px]:px-0 w-full min-[1450px]:w-7xl items-center text-sm sm:text-xl gap-4 sm:gap-7 h-24 my-0.5">
        <MagicLink href="/">
          <span className="text-[2.5rem] select-none font-picasso">ang</span>
        </MagicLink>
        <div className="grow">
        </div>
        <MagicLink href="/about">
          <span className="hover:underline hover:underline-offset-4 font-serif">
            about me.
          </span>
        </MagicLink>
        <MagicLink href="/works">
          <span className="hover:underline hover:underline-offset-4 font-serif">
            all works.
          </span>
        </MagicLink>       
        <Link href="https://drive.google.com/file/d/17-CJW2dArsCYxxthyIYxR-XOy4KzTuFk/view" target="_blank" rel="noopener noreferrer">
          <span className="hover:underline hover:underline-offset-4 font-serif">
            résumé.
          </span>
        </Link>
      </div>
    </header>
  );
}

