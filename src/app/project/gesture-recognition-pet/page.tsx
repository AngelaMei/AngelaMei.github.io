import Image from 'next/image';

import ProjectHeroSection from '@/components/ProjectHeroSection';
import { IconBullet, ImageWrapper, PaddedFlexBox, PageContentContainer, SectionTitle, TwoColumn, ThreeColumn, Heading1, Heading2, Heading3, BaseText } from '@/components/utilities';
import projects from '@/data/projects';

import userFeedbackImage from '@/public/media/project/gesture-recognition-pet/UserFeedback.png';
import moodboardImage from '@/public/media/project/gesture-recognition-pet/Moodboard.png';
import deer3Image from '@/public/media/project/gesture-recognition-pet/Deer3.png';
import deer2Image from '@/public/media/project/gesture-recognition-pet/Deer2.png';
import deer1Image from '@/public/media/project/gesture-recognition-pet/Deer1.png';
import userStoryImage from '@/public/media/project/gesture-recognition-pet/UserStory.gif';
import userJourneyImage from '@/public/media/project/gesture-recognition-pet/UserJourney.png';
import userPersonaImage from '@/public/media/project/gesture-recognition-pet/UserPersona.png';
import iPhoneFrameImage from '@/public/media/project/coin-toss/iPhoneFrame.png';

const projectName = 'gesture-recognition-pet';

const projectMetadata = projects.find(project => project.id === projectName)!;

export default function Page() {
  return (
    <div className="flex flex-col items-center pt-24 font-sans">
      <ProjectHeroSection
        { ...projectMetadata }
        heroCover={(
          <ImageWrapper className="relative">
            <Image
              className="relative w-auto h-full z-30"
              aria-hidden
              src={iPhoneFrameImage}
              alt="Wireframe"
            />
            <video
              autoPlay muted loop playsInline
              className="absolute left-[19px] h-101 top-[18px] rounded-2xl z-0"
            >
              <source src="/media/project/gesture-recognition-pet/10secVideo.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </ImageWrapper>
        )}
      />

      <PageContentContainer>
        <TwoColumn>
          <PaddedFlexBox>
            <Heading1>Project Overview</Heading1>
            <BaseText>
              Pets offer companionship and emotional support, but owning a real pet isn't always feasible. So we decided to make an Augmented Reality (AR) pet app that can interact with the user, and user can train and have fun with their AR pet. Users can interact with the pets through intuitive gestures or a user-friendly interface, such as training and nurturing their virtual pets.
              <br/>
              <br/>
              While our initial focus is on interactive and engaging AR pets, we acknowledge the potential of emotional recognition technology to further personalize the user experience.
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox className="sm:justify-self-end">
            <IconBullet iconUrl="/icons/LegoSmiley.svg">
              <Heading2>Role</Heading2>
              <BaseText>UIUX Designer & Developer</BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/Wrench.svg">
              <Heading2>Tool</Heading2>
              <BaseText>Figma, Unity, C#, Blender</BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/Eyes.svg">
              <Heading2>Project Size</Heading2>
              <BaseText>2 People AR Class Project</BaseText>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="01" title="Why, Who, What?"/>
        <ThreeColumn>
          <PaddedFlexBox>
            <Heading2>Why</Heading2>
            <Heading3>Emotional Support</Heading3>
            <BaseText>
              Many people, like us, love animals and value the emotional support and companionship they provide but are unable to own a real pet due to restrictions or circumstances.
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Heading2>Who</Heading2>
            <Heading3>Pet Lover but...</Heading3>
            <BaseText>
              Our target users are individuals who face challenges in owning a real pet due to various restrictions, including pet-restricted housing or financial constraints that make pet ownership impractical.
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Heading2>What</Heading2>
            <Heading3>Emotional Support</Heading3>
            <BaseText>
              An AR-based platform that provides users with an interactive virtual pet. It helps users combat loneliness, offers fun and engaging activities, and creates the joy of keeping a pet.
            </BaseText>
          </PaddedFlexBox>
        </ThreeColumn>
        <PaddedFlexBox>
          <Heading2>User Persona</Heading2>
          <div className="relative min-h-20 w-full">
            <Image
              className="w-full h-auto"
              aria-hidden
              src={userPersonaImage}
              alt="User Persona Image"
            />
          </div>
        </PaddedFlexBox>
        <PaddedFlexBox>
          <Heading2>User Journey</Heading2>
          <div className="relative min-h-20 w-full">
            <Image
              className="w-full h-auto"
              aria-hidden
              src={userJourneyImage}
              alt="User Journey Image"
            />
          </div>
        </PaddedFlexBox>
        <TwoColumn>
          <PaddedFlexBox>
            <Heading2>User Story</Heading2>
            <BaseText>
              The user downloads the app, completes a simple onboarding process, and select a pet in app, the user sees the chosen virtual pet appear in their space through their phone.<br/><br/>
              The pet responds to real-world objects, like playing fetch with a tennis ball, and interacts with gestures, such as shaking hands virtually.<br/><br/>
              The user talks to the pet, which responds with supportive emotions and expressions, enhancing the sense of companionship.<br/><br/>
              The user walks the virtual pet in the real world, creating an immersive, engaging experience.
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox className="items-center justify-center">
            <Image
              className="w-4/5 h-auto"
              aria-hidden
              src={userStoryImage}
              alt="User Story image"
            />
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="02" title="Core Functionalities"/>
        <ThreeColumn>
          <PaddedFlexBox className="items-center">
            <Image
              className="w-25 h-auto"
              aria-hidden
              src={deer1Image}
              alt="pet image"
            />
            <Heading2>Virtual Doll</Heading2>
            <BaseText>
              We aim to let users scan their own doll, and bring their emotion support object come to live.  Users would have more attachments to their familiar object.
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox className="items-center">
            <Image
              className="w-25 h-auto"
              aria-hidden
              src={deer2Image}
              alt="pet image"
            />
            <Heading2>Mood Tracking</Heading2>
            <BaseText>
              We worked on features such as recognition of users’ facial expressions and identify emotions such as happiness, sadness, anger, and stress.<br/><br/>
              Then, the AR pet can give some feedback and use generative AI to communicate with users.
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox className="items-center">
            <Image
              className="w-25 h-auto"
              aria-hidden
              src={deer3Image}
              alt="pet image"
            />
            <Heading2>Gesture Recognition</Heading2>
            <BaseText>
              Users could engage with their AR doll in activities and create more intimacy with it.<br/><br/>
              Now we have gesture teaching and mood sharing. We would like to have more features like feeding and walking.
            </BaseText>
          </PaddedFlexBox>
        </ThreeColumn>
        <SectionTitle id="03" title="Challenges, Breakthrough, & Detour"/>
        <TwoColumn>
          <PaddedFlexBox>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Unable to Use Unity Cloud</Heading3>
              <BaseText>Due to obstacles encountered while collaborating on Unity Cloud, we transitioned our project code to GitHub. </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Hand Collision Detection</Heading3>
              <BaseText>Achieving accurate and robust collision detection between hands and objects in interactive environments can be complex.</BaseText>
            </IconBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Length of Fingers Varies</Heading3>
              <BaseText>The length of a user's fingers may have an impact on the effectiveness and accuracy of finger detection technologies.</BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Plugin Confliction</Heading3>
              <BaseText>The Emotion Recognition Plugin is causing conflicts with certain settings within our Unity project, resulting in unexpected behavior or errors.</BaseText>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="04" title="Design Strategy"/>
        <TwoColumn>
          <PaddedFlexBox>
            <Heading2>MDA Framework</Heading2>
            <BaseText>
              Guided by the principles of the MDA framework (Mechanics-Dynamics-Aesthetics), our app was designed to cultivate deep emotional connections.<br/><br/>
              Interactive elements go beyond passive engagement, fostering intimacy and trust between users and their virtual companions.<br/><br/>
              These dynamic interactions encourage users to express their emotions freely within a safe and supportive space, ultimately providing a valuable outlet for stress relief and emotional well-being.
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox className="items-center justify-center">
            <Image
              className="w-full h-auto"
              aria-hidden
              src={moodboardImage}
              alt="Moodboard Image"
            />
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="05" title="User Feedback & Improving"/>
        <Image
          className="w-4/5 h-auto self-center"
          aria-hidden
          src={userFeedbackImage}
          alt="User Feedback Image"
        />
        <TwoColumn>
          <PaddedFlexBox>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Onboarding Process</Heading3>
              <BaseText>
                Recognizing the unique challenges of navigating AR experiences, we incorporated Coach Marks into our onboarding process. These interactive tutorials address user confusion identified during testing, providing clear and concise instructions for interacting with AR elements.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Gesture Instruction guide</Heading3>
              <BaseText>
                To empower users to fully interact with their virtual pets, we implemented an in-app Gesture Instruction guide, which can clearly demonstrate the available gestures and provide exciting incentives for users to deepen their bond with their pet, unlocking new and engaging interaction possibilities.
              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Add Progress Bar</Heading3>
              <BaseText>
                A visually engaging Progress Bar has been implemented to incentivize consistent interaction with the virtual pet. This dynamic indicator visually represents the growing bond between the user and their pet, providing clear and motivating feedback.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Emotion Diary</Heading3>
              <BaseText>
                To enhance self-reflection and emotional awareness, we've integrated an Emotion Diary feature. Users can record their daily emotions, and the app will provide personalized suggestions based on their entries.
              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="06" title="Prototype" subtitle="The prototype after user testing."/>
      </PageContentContainer>
      <PaddedFlexBox className="relative h-165">
        <div className="self-center relative h-151">
          <Image
            className="relative w-full h-full z-30"
            aria-hidden
            src={iPhoneFrameImage}
            alt="Wireframe"
          />
          <video
            autoPlay muted loop playsInline
            className="absolute left-[25px] h-139 top-[24px] rounded-3xl z-0"
          >
            <source src="/media/project/gesture-recognition-pet/Video1.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
      </PaddedFlexBox>
    </div>
  );
}

