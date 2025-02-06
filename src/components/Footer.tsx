'use client'

import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import projects from '@/data/projects';
import { DarkModeContext } from '@/context';
import MagicLink from '@/components/MagicLink';

export default function Footer() {
  const darkMode = useContext(DarkModeContext);

  return (
    <footer className={`border-t-[1px] border-solid border-zinc-500 flex flex-wrap gap-x-64 gap-y-16 items-center justify-center font-serif py-24 ${darkMode ? 'text-white bg-dark-bg' : 'text-black bg-white'}`}>
      <div>
        <MagicLink href="/">
          <span className="text-[2.5rem] select-none font-picasso">ang</span>
        </MagicLink>
        <div className="flex gap-x-4 pt-6 items-center">
          <MagicLink href="mailto:angela101475@gmail.com">
            <Image 
              src="/icons/Envelope.svg" 
              alt="Goal Icon" 
              width={28} 
              height={28} 
            />
          </MagicLink>
          <Link href="https://github.com/AngelaMei" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/icons/GithubLogo.svg" 
              alt="Goal Icon" 
              width={28} 
              height={28} 
            />
          </Link>
          <Link href="https://www.linkedin.com/in/angela-mei" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/icons/LinkedinLogo.svg" 
              alt="Goal Icon" 
              width={28} 
              height={28} 
            />
          </Link>
        </div>
      </div>
      <div className="grid grid-flow-row sm:grid-rows-[repeat(4,_auto)] sm:grid-flow-col gap-y-3 gap-x-20 auto-cols-max text-md sm:text-xl">
        <span className="text-xl sm:text-3xl font-medium py-2">
          site map.
        </span>
        <MagicLink
          className="hover:underline hover:underline-offset-4"
          href="/"
        >
          home.
        </MagicLink>
        <MagicLink
          className="hover:underline hover:underline-offset-4"
          href="/about"
        >
          about me.
        </MagicLink>
        <Link href="https://drive.google.com/file/d/17-CJW2dArsCYxxthyIYxR-XOy4KzTuFk/view" target="_blank" rel="noopener noreferrer">
          <span className="hover:underline hover:underline-offset-4 font-serif">
            résumé.
          </span>
        </Link>
        {/*
        <MagicLink
          className="hover:underline hover:underline-offset-4"
          href="/works"
        >
          All Works
        </MagicLink>
        */}
        <span className="sm:row-start-1 sm:col-span-2 text-xl sm:text-3xl font-medium py-2">
          selected works.
        </span>
        {
          projects.map(project => (
            <MagicLink
              key={project.id}
              className="hover:underline hover:underline-offset-4"
              href={project.pageUrl}
            >
              {project.name}
            </MagicLink>
          ))
        }
      </div>
    </footer>
  );
}

