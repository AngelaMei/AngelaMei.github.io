import Image from "next/image";

import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export default function Home() {
  return (
    <div className="relative flex flex-col mx-4 sm:mx-20">
      <div className="flex flex-col items-center py-24 gap-y-8 sm:gap-y-20 font-sans">
        <main className="relative flex flex-col min-h-[70vh] items-center justify-center">
          <Image
            src="/eyes.gif"
            alt="Portfolio logo"
            width={320}
            height={38}
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
