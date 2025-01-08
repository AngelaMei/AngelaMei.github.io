import Image from "next/image";
import Header from "@/components/Header";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";

const projects: ProjectCardProps[] = [
  {
    imageUrl: '/mockImage.png',
    type: 'Google Hackathon',
    name: 'Coin Toss',
    description: 'A Line Bot to reduce business human resources and narrow the gap between customer and business.',
    iconUrl: '/eyes.svg',
  },
  {
    imageUrl: 'mockImage.png',
    type: 'Capstone',
    name: 'Guide App',
    description: 'A Line Bot to reduce business human resources and narrow the gap between customer and business.',
    iconUrl: '/eyes.svg',
  },
  {
    imageUrl: 'mockImage.png',
    type: 'AR',
    name: 'Gesture Recognition Pet',
    description: 'A Line Bot to reduce business human resources and narrow the gap between customer and business.',
    iconUrl: '/eyes.svg',
  },
  {
    imageUrl: 'mockImage.png',
    type: 'User Research',
    name: 'Student Social Life',
    description: 'Our research goal is to conduct a thorough investigation of the factors that impact student participation and engagement.',
    iconUrl: '/eyes.svg',
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-col mx-4 sm:mx-20">
      <Header />
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

        <footer className="flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://meiyuchi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/eyes.svg"
              alt="Eyes icon"
              width={20}
              height={20}
            />
            Go to meiyuchi.com →
          </a>
        </footer>
      </div>
    </div>
  );
}
