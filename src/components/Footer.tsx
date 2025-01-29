import Image from "next/image";

import projects from "@/data/projects";

export default function Footer() {
  return (
    <footer className="border-t-[1px] border-solid border-slate-300 flex flex-wrap gap-x-64 gap-y-16 items-center justify-center font-sans py-24">
      <div className="flex items-center text-2xl gap-2">
        Yu-Chi 
        <Image
          aria-hidden
          src="/eyes.svg"
          alt="Eyes icon"
          width={55}
          height={44}
        />
        Mei
      </div>
      <div className="grid grid-flow-row sm:grid-rows-[repeat(4,_auto)] sm:grid-flow-col gap-y-4 gap-x-20 auto-cols-max text-md sm:text-xl">
        <span className="text-xl sm:text-3xl font-medium py-2">
          Site Map
        </span>
        <a
          className="hover:underline hover:underline-offset-4"
          href="/"
        >
          Home
        </a>
        <a
          className="hover:underline hover:underline-offset-4"
          href="/about"
        >
          About
        </a>
        <a
          className="hover:underline hover:underline-offset-4"
          href="/works"
        >
          All Works
        </a>
        <span className="sm:row-start-1 sm:col-span-2 text-xl sm:text-3xl font-medium py-2">
          Selected Projects
        </span>
        {
          projects.map(project => (
            <a
              key={project.id}
              className="hover:underline hover:underline-offset-4"
              href={project.pageUrl}
            >
              {project.name}
            </a>
          ))
        }
      </div>
    </footer>
  );
}

