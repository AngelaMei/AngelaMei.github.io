//import Image from 'next/image';

import ProjectHeroSection from '@/components/ProjectHeroSection';
import { ImageWrapper } from '@/components/utilities';
import projects from '@/data/projects';
import cover from '@/public/mock_main.png';

const projectName = 'dairy-subscription-service';

const projectMetadata = projects.find(project => project.id === projectName)!;

export default function Page() {
  return (
    <div className="flex flex-col items-center py-24 gap-y-8 sm:gap-y-20 font-sans">
      <ProjectHeroSection
        { ...projectMetadata }
        heroCover={(
          <ImageWrapper src={cover} alt="Cover Image"/>
        )}
      />
    </div>
  );
}

