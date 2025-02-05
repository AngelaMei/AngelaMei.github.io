'use client'

import { useContext } from 'react';

import projects from '@/data/projects';
import { DarkModeContext } from '@/context';
import MagicLink from '@/components/MagicLink';

export default function Footer() {
  const darkMode = useContext(DarkModeContext);

  return (
    <footer className={`border-t-[1px] border-solid border-slate-300 flex flex-wrap gap-x-64 gap-y-16 items-center justify-center font-serif py-24 ${darkMode ? 'text-white bg-dark-bg' : 'text-black bg-white'}`}>
      <span className="text-[2.5rem] select-none font-picasso">ang</span>
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

