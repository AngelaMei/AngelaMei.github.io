import Image from "next/image";
import ProjectHeroSection, { ProjectHeroSectionProps } from "@/components/ProjectHeroSection";

const projectMetadata: ProjectHeroSectionProps = {
  imageUrl: '/mock_main.png',
  type: 'Augmented Reality',
  name: 'Gesture Recognition Pet',
  description: `Bring joy and connection to your world with an AR pet that learns, grows, and plays by your side!`,
  themeColor: '#3EA3F9',
  iconUrl: '/cover/Logo_Unity.png',
};

export default function Page() {
  return (
    <div className="relative flex flex-col mx-4 sm:mx-20">
      <div className="flex flex-col items-center py-24 gap-y-8 sm:gap-y-20 font-sans">
        <ProjectHeroSection { ...projectMetadata }/>
      </div>
    </div>
  );
}

