import Image from "next/image";

import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

import letterA from "@/public/media/homepage/angela/A.svg";
import letterN from "@/public/media/homepage/angela/n.svg";
import letterG from "@/public/media/homepage/angela/g.svg";
import letterE from "@/public/media/homepage/angela/e.svg";
import letterEWhite from "@/public/media/homepage/angela/we.svg";
import letterL from "@/public/media/homepage/angela/l.svg";
import letterM from "@/public/media/homepage/angela/M.svg";
import letterI from "@/public/media/homepage/angela/i.svg";
import letterDot from "@/public/media/homepage/angela/dot.svg";

export default function Home() {
  return (
    <div className="relative flex w-full justify-center bg-[#161410]">
      <div className="flex flex-col items-center max-w-7xl pt-35 pb-24 px-4 sm:px-20 gap-y-8 sm:gap-y-20 font-sans">
        <main
          className="flex flex-col items-center text-lg font-picasso leading-none select-none pointer-events-none"
        >
          {/* Name banner */}
          <div className="flex pt-18 pb-10 sm:pt-12 sm:pb-16 justify-center">
            <Image className="h-17 sm:h-30 lg:h-51 w-auto pr-2 sm:pr-3 lg:pr-5" src={letterA} alt=""/>
            <Image className="h-17 sm:h-30 lg:h-51 w-auto pr-2 sm:pr-5 lg:pr-7" src={letterN} alt=""/>
            <Image className="h-17 sm:h-30 lg:h-51 w-auto pr-2 sm:pr-3 lg:pr-5" src={letterG} alt=""/>
            <Image className="h-17 sm:h-30 lg:h-51 w-auto pr-2 sm:pr-4 lg:pr-6" src={letterE} alt=""/>
            <Image className="h-17 sm:h-30 lg:h-51 w-auto pr-2 lg:pr-2" src={letterL} alt=""/>
            <Image className="h-17 sm:h-30 lg:h-51 w-auto" src={letterA} alt=""/>
          </div>
          <div className="flex pt-3 pb-20 sm:pt-11 sm:pb-17 justify-center items-end">
            <Image className="h-17 sm:h-30 lg:h-51 w-auto pr-2 sm:pr-4 lg:pr-7" src={letterM} alt=""/>
            <Image className="h-17 sm:h-30 lg:h-51 w-auto pr-2 sm:pr-3 lg:pr-5" src={letterEWhite} alt=""/>
            <Image className="h-17 sm:h-30 lg:h-51 w-auto pr-2 sm:pr-3 lg:pr-5" src={letterI} alt=""/>
            <Image className="h-3 sm:h-6 lg:h-11 w-auto" src={letterDot} alt=""/>
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
