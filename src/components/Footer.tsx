'use client'

import Link from 'next/link';
import { useContext } from 'react';

import projects from '@/data/projects';
import { DarkModeContext } from '@/context';

export default function Footer() {
  const darkMode = useContext(DarkModeContext);

  return (
    <footer className={`border-t-[1px] border-solid border-slate-300 flex flex-wrap gap-x-64 gap-y-16 items-center justify-center font-serif py-24 ${darkMode ? 'text-white bg-dark-bg' : 'text-black bg-white'}`}>
      <span className="text-[2.5rem] select-none font-picasso">ang</span>
      <div className="grid grid-flow-row sm:grid-rows-[repeat(4,_auto)] sm:grid-flow-col gap-y-3 gap-x-20 auto-cols-max text-md sm:text-xl">
        <span className="text-xl sm:text-3xl font-medium py-2">
          site map.
        </span>
        <Link
          className="hover:underline hover:underline-offset-4"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:underline hover:underline-offset-4"
          href="/about"
        >
          About
        </Link>
        <Link
          className="hover:underline hover:underline-offset-4"
          href="/works"
        >
          All Works
        </Link>
        <span className="sm:row-start-1 sm:col-span-2 text-xl sm:text-3xl font-medium py-2">
          selected works.
        </span>
        {
          projects.map(project => (
            <Link
              key={project.id}
              className="hover:underline hover:underline-offset-4"
              href={project.pageUrl}
            >
              {project.name}
            </Link>
          ))
        }
      </div>
    </footer>
  );
}

