import Image from "next/image";
import ProjectHeroSection, { ProjectHeroSectionProps } from "@/components/ProjectHeroSection";

const projectMetadata: ProjectHeroSectionProps = {
  imageUrl: '/mock_main.png',
  type: 'Capstone',
  name: 'Guide App',
  description: `Mark, Snip, and Succeed
    Make training and learning like TikTok`,
  themeColor: '#0C1743',
  iconUrl: '/cover/Logo_Guide.png',
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

