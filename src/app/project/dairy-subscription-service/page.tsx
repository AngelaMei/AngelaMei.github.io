import Image from "next/image";
import ProjectHeroSection, { ProjectHeroSectionProps } from "@/components/ProjectHeroSection";

const projectMetadata: ProjectHeroSectionProps = {
  imageUrl: '/mock_main.png',
  type: 'UX Project',
  name: 'Dairy Subscription Service',
  description: 'Improving Efficiency and Customer Satisfaction with a Line Bot Solution',
  themeColor: '#005DCA',
  iconUrl: '/cover/Logo_Milky.png',
};

export default function Page() {
  return (
    <div className="flex flex-col items-center py-24 gap-y-8 sm:gap-y-20 font-sans">
      <ProjectHeroSection { ...projectMetadata }/>
    </div>
  );
}

