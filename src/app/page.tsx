import Image from "next/image";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";

const projects: ProjectCardProps[] = [
  {
    pageUrl: '/project/coin-toss',
    imageUrl: '/cover/Cover_Gemini.gif',
    type: 'Google Hackathon',
    name: 'Coin Toss',
    description: 'A Line Bot to reduce business human resources and narrow the gap between customer and business.',
    iconUrl: '/cover/Logo_Gemini.png',
  },
  {
    pageUrl: '/project/guide-app',
    imageUrl: '/cover/Cover_Guide.gif',
    type: 'Capstone',
    name: 'Guide App',
    description: 'A Line Bot to reduce business human resources and narrow the gap between customer and business.',
    iconUrl: '/cover/Logo_Guide.png',
  },
  {
    pageUrl: '/project/gesture-recognition-pet',
    imageUrl: '/cover/Cover_Patpet_4x.png',
    type: 'AR',
    name: 'Gesture Recognition Pet',
    description: 'A Line Bot to reduce business human resources and narrow the gap between customer and business.',
    iconUrl: '/cover/Logo_Unity.png',
  },
  {
    pageUrl: '/project/student-social-life',
    imageUrl: '/cover/Cover_UserResearch_4x.png',
    type: 'User Research',
    name: 'Student Social Life',
    description: 'Our research goal is to conduct a thorough investigation of the factors that impact student participation and engagement.',
    iconUrl: '/cover/Logo_UMD.png',
  },
  {
    pageUrl: '/project/dairy-subscription-service',
    imageUrl: '/cover/Cover_Milky_4x.png',
    type: 'UX Project',
    name: 'Dairy Subscription Service',
    description: 'A Line Bot to reduce business human resources and narrow the gap between customer and business.',
    iconUrl: '/cover/Logo_Milky.png',
  },
  {
    pageUrl: '/',
    imageUrl: '/cover/Cover_AT_4x.png',
    type: 'UX Project',
    name: 'Future Trading App',
    description: 'This Trading Application is built for retail investors to approach trading futures contracts easily',
    iconUrl: '/cover/Logo_AT.png',
  },
];

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
