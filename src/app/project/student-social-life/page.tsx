import Image from "next/image";
import ProjectHeroSection, { ProjectHeroSectionProps } from "@/components/ProjectHeroSection";

const projectMetadata: ProjectHeroSectionProps = {
  imageUrl: '/mock_main.png',
  type: 'User Research',
  name: 'Student Social Life',
  description: 'What encourages/stops students from joining these events and organizations?',
  themeColor: '#820202',
  iconUrl: '/cover/Logo_UMD.png',
};

export default function Page() {
  return (
    <div className="flex flex-col items-center py-24 gap-y-8 sm:gap-y-20 font-sans">
      <ProjectHeroSection { ...projectMetadata }/>
    </div>
  );
}

