import Image from "next/image";

import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

import eyesAnimation from "@/public/eyes.gif";

export default function Home() {
  return (
    <div className="relative flex w-full justify-center">
      <div className="flex flex-col items-center max-w-7xl py-24 px-4 sm:px-20 gap-y-8 sm:gap-y-20 font-sans">
        <main className="relative flex flex-col min-h-[70vh] items-center justify-center">
          <Image
            className="w-80 h-auto"
            src={eyesAnimation}
            alt="Portfolio logo"
            priority
          />
          <div
            className="flex items-center justify-center text-lg sm:text-3xl h-10 sm:h-12 sm:min-w-44"
          >
              🚧 Portfolio Under Construction 🚧
          </div>
        </main>

        {
          projects.map(project => (
            <ProjectCard
              { ...project }
              key={project.name}
            />
          ))
        }
      </div>
    </div>
  );
}
