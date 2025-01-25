import Image from "next/image";

import ProjectHeroSection, { ProjectHeroSectionProps } from "@/components/ProjectHeroSection";
import { IconBullet, PaddedFlexBox, SectionTitle, TwoColumn, ThreeColumn } from "@/components/utilities";

const projectMetadata: ProjectHeroSectionProps = {
  imageUrl: '/mock_main.png',
  type: 'Augmented Reality',
  name: 'Gesture Recognition Pet',
  description: 'Bring joy and connection to your world with an AR pet that learns, grows, and plays by your side!',
  themeColor: '#3EA3F9',
  iconUrl: '/cover/Logo_Unity.png',
};

export default function Page() {
  return (
    <div className="flex flex-col items-center pt-24 font-sans">
      <ProjectHeroSection { ...projectMetadata }/>

      <div className="flex bg-black w-full text-white justify-center">
        <div
          className="flex grow flex-col max-w-6xl gap-y-8 sm:gap-y-20 py-20 sm:p-20"
        >
          <TwoColumn>
            <PaddedFlexBox>
              <span className="text-[40px] font-medium">Project Overview</span>
              <span className="text-xl">
                Pets offer companionship and emotional support, but owning a real pet isn't always feasible. So we decided to make an Augmented Reality (AR) pet app that can interact with the user, and user can train and have fun with their AR pet. Users can interact with the pets through intuitive gestures or a user-friendly interface, such as training and nurturing their virtual pets.
                <br/>
                <br/>
                While our initial focus is on interactive and engaging AR pets, we acknowledge the potential of emotional recognition technology to further personalize the user experience.
              </span>
            </PaddedFlexBox>
            <PaddedFlexBox className="justify-self-end">
              <IconBullet iconUrl="/icons/LegoSmiley.svg">
                <span className="text-[32px] font-medium">Role</span>
                <span className="text-xl">UIUX Designer & Developer</span>
              </IconBullet>
              <IconBullet iconUrl="/icons/Wrench.svg">
                <span className="text-[32px] font-medium">Tool</span>
                <span className="text-xl">Figma, Unity, C#, Blender</span>
              </IconBullet>
              <IconBullet iconUrl="/icons/Eyes.svg">
                <span className="text-[32px] font-medium">Project Size</span>
                <span className="text-xl">2 People AR Class Project</span>
              </IconBullet>
            </PaddedFlexBox>
          </TwoColumn>
          <SectionTitle id="01" title="Why, Who, What?"/>
          <ThreeColumn>
            <PaddedFlexBox>
              <span className="text-[32px] font-medium">Why</span>
              <span className="text-[28px] font-medium">Emotional Support</span>
              <span className="text-xl font-medium">
                Many people, like us, love animals and value the emotional support and companionship they provide but are unable to own a real pet due to restrictions or circumstances.
              </span>
            </PaddedFlexBox>
            <PaddedFlexBox>
              <span className="text-[32px] font-medium">Who</span>
              <span className="text-[28px] font-medium">Pet Lover but...</span>
              <span className="text-xl font-medium">
                Our target users are individuals who face challenges in owning a real pet due to various restrictions, including pet-restricted housing or financial constraints that make pet ownership impractical.
              </span>
            </PaddedFlexBox>
            <PaddedFlexBox>
              <span className="text-[32px] font-medium">What</span>
              <span className="text-[28px] font-medium">Emotional Support</span>
              <span className="text-xl font-medium">
                An AR-based platform that provides users with an interactive virtual pet. It helps users combat loneliness, offers fun and engaging activities, and creates the joy of keeping a pet.
              </span>
            </PaddedFlexBox>
          </ThreeColumn>
          <SectionTitle id="02" title="Core Functionalities"/>
          <SectionTitle id="03" title="Challenges, Breakthrough, & Detour"/>
          <SectionTitle id="04" title="Design Strategy"/>
          <SectionTitle id="05" title="User Feedback & Improving"/>
          <SectionTitle id="06" title="Prototype" subtitle="The prototype before user testing and after user testing."/>
        </div>
      </div>
    </div>
  );
}

