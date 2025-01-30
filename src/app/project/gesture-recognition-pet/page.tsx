import Image from "next/image";

import ProjectHeroSection from "@/components/ProjectHeroSection";
import { IconBullet, ImageWrapper, PaddedFlexBox, PageContentContainer, SectionTitle, TwoColumn, ThreeColumn } from "@/components/utilities";
import projects from "@/data/projects";
import cover from "@/public/mock_main.png";

const projectName = 'gesture-recognition-pet';

const projectMetadata = projects.find(project => project.id === projectName)!;

export default function Page() {
  return (
    <div className="flex flex-col items-center pt-24 font-sans">
      <ProjectHeroSection
        { ...projectMetadata }
        heroCover={(
          <ImageWrapper src={cover} alt="Cover Image"/>
        )}
      />

      <PageContentContainer>
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
            <span className="text-xl">
              Many people, like us, love animals and value the emotional support and companionship they provide but are unable to own a real pet due to restrictions or circumstances.
            </span>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">Who</span>
            <span className="text-[28px] font-medium">Pet Lover but...</span>
            <span className="text-xl">
              Our target users are individuals who face challenges in owning a real pet due to various restrictions, including pet-restricted housing or financial constraints that make pet ownership impractical.
            </span>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">What</span>
            <span className="text-[28px] font-medium">Emotional Support</span>
            <span className="text-xl">
              An AR-based platform that provides users with an interactive virtual pet. It helps users combat loneliness, offers fun and engaging activities, and creates the joy of keeping a pet.
            </span>
          </PaddedFlexBox>
        </ThreeColumn>
        <PaddedFlexBox>
          <span className="text-[32px] font-medium">User Persona</span>
          <div className="relative min-h-20 w-full">
            <Image
              className="object-contain w-full h-auto"
              aria-hidden
              src="/media/project/gesture-recognition-pet/UserPersona.png"
              alt="User Persona Image"
              width={4256}
              height={2518}
            />
          </div>
        </PaddedFlexBox>
        <PaddedFlexBox>
          <span className="text-[32px] font-medium">User Journey</span>
          <div className="relative min-h-20 w-full">
            <Image
              className="object-contain w-full h-auto"
              aria-hidden
              src="/media/project/gesture-recognition-pet/UserJourney.png"
              alt="User Journey Image"
              width={4256}
              height={3365}
            />
          </div>
        </PaddedFlexBox>
        <TwoColumn>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">User Story</span>
            <span className="text-xl">
              The user downloads the app, completes a simple onboarding process, and select a pet in app, the user sees the chosen virtual pet appear in their space through their phone.<br/><br/>
              The pet responds to real-world objects, like playing fetch with a tennis ball, and interacts with gestures, such as shaking hands virtually.<br/><br/>
              The user talks to the pet, which responds with supportive emotions and expressions, enhancing the sense of companionship.<br/><br/>
              The user walks the virtual pet in the real world, creating an immersive, engaging experience.
            </span>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Image
              className="object-contain w-full h-auto grow"
              aria-hidden
              src="/media/project/gesture-recognition-pet/UserStory.gif"
              alt="User Story image"
              width={1069}
              height={1095}
            />
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="02" title="Core Functionalities"/>
        <ThreeColumn>
          <PaddedFlexBox className="items-center">
            <Image
              className="object-contain"
              aria-hidden
              src="/media/project/gesture-recognition-pet/Deer1.png"
              alt="pet image"
              width={100}
              height={103}
            />
            <span className="text-[32px] font-medium">Virtual Doll</span>
            <span className="text-xl">
              We aim to let users scan their own doll, and bring their emotion support object come to live.  Users would have more attachments to their familiar object.
            </span>
          </PaddedFlexBox>
          <PaddedFlexBox className="items-center">
            <Image
              className="object-contain"
              aria-hidden
              src="/media/project/gesture-recognition-pet/Deer2.png"
              alt="pet image"
              width={100}
              height={103}
            />
            <span className="text-[32px] font-medium">Mood Tracking</span>
            <span className="text-xl">
              We worked on features such as recognition of users’ facial expressions and identify emotions such as happiness, sadness, anger, and stress.<br/><br/>
              Then, the AR pet can give some feedback and use generative AI to communicate with users.
            </span>
          </PaddedFlexBox>
          <PaddedFlexBox className="items-center">
            <Image
              className="object-contain"
              aria-hidden
              src="/media/project/gesture-recognition-pet/Deer3.png"
              alt="pet image"
              width={100}
              height={103}
            />
            <span className="text-[32px] font-medium">Gesture Recognition</span>
            <span className="text-xl">
              Users could engage with their AR doll in activities and create more intimacy with it.<br/><br/>
              Now we have gesture teaching and mood sharing. We would like to have more features like feeding and walking.
            </span>
          </PaddedFlexBox>
        </ThreeColumn>
        <SectionTitle id="03" title="Challenges, Breakthrough, & Detour"/>
        <TwoColumn>
          <IconBullet iconUrl="/icons/ArrowRight.svg">
            <span className="text-[28px] font-medium">Unable to Use Unity Cloud</span>
            <span className="text-xl">Due to obstacles encountered while collaborating on Unity Cloud, we transitioned our project code to GitHub. </span>
          </IconBullet>
          <IconBullet iconUrl="/icons/ArrowRight.svg">
            <span className="text-[28px] font-medium">Hand Collision Detection</span>
            <span className="text-xl">Achieving accurate and robust collision detection between hands and objects in interactive environments can be complex.</span>
          </IconBullet>
          <IconBullet iconUrl="/icons/ArrowRight.svg">
            <span className="text-[28px] font-medium">Length of Fingers Varies</span>
            <span className="text-xl">The length of a user's fingers may have an impact on the effectiveness and accuracy of finger detection technologies.</span>
          </IconBullet>
          <IconBullet iconUrl="/icons/ArrowRight.svg">
            <span className="text-[28px] font-medium">Plugin Confliction</span>
            <span className="text-xl">The Emotion Recognition Plugin is causing conflicts with certain settings within our Unity project, resulting in unexpected behavior or errors.</span>
          </IconBullet>
        </TwoColumn>
        <SectionTitle id="04" title="Design Strategy"/>
        <TwoColumn>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">MDA Framework</span>
            <span className="text-xl">
              Guided by the principles of the MDA framework (Mechanics-Dynamics-Aesthetics), our app was designed to cultivate deep emotional connections.<br/><br/>
              Interactive elements go beyond passive engagement, fostering intimacy and trust between users and their virtual companions.<br/><br/>
              These dynamic interactions encourage users to express their emotions freely within a safe and supportive space, ultimately providing a valuable outlet for stress relief and emotional well-being.
            </span>
          </PaddedFlexBox>
          <PaddedFlexBox className="justify-items-end">
            <Image
              className="object-contain w-full h-auto grow"
              aria-hidden
              src="/media/project/gesture-recognition-pet/Moodboard.png"
              alt="Moodboard Image"
              width={2021}
              height={1317}
            />
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="05" title="User Feedback & Improving"/>
        <Image
          className="w-4/5 h-auto self-center"
          aria-hidden
          src="/media/project/gesture-recognition-pet/UserFeedback.png"
          alt="User Feedback Image"
          width={3885}
          height={1669}
        />
        <TwoColumn>
          <IconBullet iconUrl="/icons/ArrowRight.svg">
            <span className="text-[28px] font-medium">Onboarding Process</span>
            <span className="text-xl">
              Recognizing the unique challenges of navigating AR experiences, we incorporated Coach Marks into our onboarding process. These interactive tutorials address user confusion identified during testing, providing clear and concise instructions for interacting with AR elements.
            </span>
          </IconBullet>
          <IconBullet iconUrl="/icons/ArrowRight.svg">
            <span className="text-[28px] font-medium">Gesture Instruction guide</span>
            <span className="text-xl">
              To empower users to fully interact with their virtual pets, we implemented an in-app Gesture Instruction guide, which can clearly demonstrate the available gestures and provide exciting incentives for users to deepen their bond with their pet, unlocking new and engaging interaction possibilities.
            </span>
          </IconBullet>
          <IconBullet iconUrl="/icons/ArrowRight.svg">
            <span className="text-[28px] font-medium">Add Progress Bar</span>
            <span className="text-xl">
              A visually engaging Progress Bar has been implemented to incentivize consistent interaction with the virtual pet. This dynamic indicator visually represents the growing bond between the user and their pet, providing clear and motivating feedback.
            </span>
          </IconBullet>
          <IconBullet iconUrl="/icons/ArrowRight.svg">
            <span className="text-[28px] font-medium">Emotion Diary</span>
            <span className="text-xl">
              To enhance self-reflection and emotional awareness, we've integrated an Emotion Diary feature. Users can record their daily emotions, and the app will provide personalized suggestions based on their entries.
            </span>
          </IconBullet>
        </TwoColumn>
        <SectionTitle id="06" title="Prototype" subtitle="The prototype before user testing and after user testing."/>
      </PageContentContainer>
    </div>
  );
}

