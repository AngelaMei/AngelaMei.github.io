import Image from "next/image";
import ProjectHeroSection, { ProjectHeroSectionProps } from "@/components/ProjectHeroSection";

const projectMetadata: ProjectHeroSectionProps = {
  heroCoverUrl: '/mock_main.png',
  type: 'Google Hackathon',
  name: 'AI Travel Agent',
  bannerText: `Have you ever felt overwhelmed by travel planning?
    You're not alone. Flip a coin!`,
  themeColor: '#6750A4',
  iconUrl: '/icons/logo/Gemini.png',
};

export default function Page() {
  return (
    <div className="flex flex-col items-center py-24 gap-y-8 sm:gap-y-20 font-sans">
      <ProjectHeroSection { ...projectMetadata }/>
    </div>
  );
}

