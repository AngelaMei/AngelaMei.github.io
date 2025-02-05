import Image from 'next/image';

import ProjectHeroSection from '@/components/ProjectHeroSection';
import { IconBullet, ImageWrapper, PaddedFlexBox, PageContentContainer, SectionTitle, TwoColumn, ThreeColumn } from '@/components/utilities';
import projects from '@/data/projects';

import cover from '@/public/mock_main.png';
import coinTossImage from '@/public/media/project/coin-toss/CoinToss.png';
import iPhoneFrameImage from '@/public/media/project/coin-toss/iPhoneFrame.png';
import wireframesImage from '@/public/media/project/coin-toss/Wireframes.png';
import typographyImage from '@/public/media/project/coin-toss/Typography.png';
import sketchImage from '@/public/media/project/coin-toss/Sketch.png';
import userPainImage from '@/public/media/project/coin-toss/UserPain.png';
import competitive1Logo from '@/public/media/project/coin-toss/Competitive1.png';
import competitive2Logo from '@/public/media/project/coin-toss/Competitive2.png';
import competitive3Logo from '@/public/media/project/coin-toss/Competitive3.png';
import competitive4Logo from '@/public/media/project/coin-toss/Competitive4.png';

const projectName = 'coin-toss';

const projectMetadata = projects.find(project => project.id === projectName)!;

export default function Page() {
  return (
    <div className="flex flex-col items-center pt-24 font-sans">
      <ProjectHeroSection
        { ...projectMetadata }
        heroCover={(
          <div className="self-center relative h-131">
          <Image
            className="relative w-full h-full z-30"
            aria-hidden
            src={iPhoneFrameImage}
            alt="Wireframe"
          />
          <video
            autoPlay muted loop
            className="absolute left-[22px] h-120 top-[23px] rounded-2xl z-0"
          >
            <source src="/media/project/coin-toss/Video.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
        )}
      />

      <PageContentContainer>
        <TwoColumn>
          <PaddedFlexBox>
            <span className="text-[40px] font-medium">Project Overview</span>
            <span className="text-xl">
              Coin Toss is an innovative mobile application designed to alleviate the stress and overwhelm often associated with travel planning.  Many travelers struggle with decision fatigue, information overload, and the complexities of creating personalized itineraries.
              <br/><br/>Coin Toss addresses these challenges by leveraging Generative AI to provide users with customized travel itineraries based on their stated preferences and travel style. A key feature, the "Coin Toss," helps users navigate choices and finalize their plans in a fun and engaging way.
            </span>
          </PaddedFlexBox>
          <PaddedFlexBox className="justify-self-end">
            <IconBullet iconUrl="/icons/LegoSmiley.svg">
              <span className="text-[32px] font-medium">Role</span>
              <span className="text-xl">UX Researcher & Interface Designer</span>
            </IconBullet>
            <IconBullet iconUrl="/icons/Wrench.svg">
              <span className="text-[32px] font-medium">Tool</span>
              <span className="text-xl">Figma, Adobe Illustrator, Gemini</span>
            </IconBullet>
            <IconBullet iconUrl="/icons/Eyes.svg">
              <span className="text-[32px] font-medium">Project Size</span>
              <span className="text-xl">10 Days with 6 team members</span>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <ThreeColumn>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">01 Planning</span>
            <ul className="text-xl list-disc list-outside pl-8">
              <li>Brainstorming</li>
              <li>Project Timeline Setting</li>
              <li>Job Allocation</li>
            </ul>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">02 Research</span>
            <ul className="text-xl list-disc list-outside pl-8">
              <li>Structured Interview</li>
              <li>Competitor Analysis</li>
            </ul>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">03 Mapping</span>
            <ul className="text-xl list-disc list-outside pl-8">
              <li>User Story</li>
              <li>Sketch</li>
              <li>Wireframing</li>
              <li>Prompt Research</li>
            </ul>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">04 Prototyping</span>
            <ul className="text-xl list-disc list-outside pl-8">
              <li>Backend Development</li>
              <li>Design System</li>
              <li>Mid to High-Fi Prototype</li>
            </ul>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">05 Testing</span>
            <ul className="text-xl list-disc list-outside pl-8">
              <li>Usability Test</li>
              <li>Prompt Testing</li>
            </ul>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">06 Presenting</span>
            <ul className="text-xl list-disc list-outside pl-8">
              <li>Prepare Presentation</li>
              <li>Video Recording</li>
            </ul>
          </PaddedFlexBox>
        </ThreeColumn>
        <SectionTitle id="01" title="Understand User Pain"/>
        <PaddedFlexBox>
          <Image
            className="w-full h-auto"
            aria-hidden
            src={userPainImage}
            alt="User Pain Image"
          />
        </PaddedFlexBox>
        <TwoColumn>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">Pain Points</span>
            <IconBullet iconUrl="/icons/SmileyNervous.svg">
              <span className="text-[28px] font-medium">Indecisiveness</span>
              <span className="text-xl">
                Friend groups or individuals often struggle to reach a consensus on where to travel, what to do
              </span>
            </IconBullet>
            <IconBullet iconUrl="/icons/SmileySad.svg">
              <span className="text-[28px] font-medium">Lack of Personalization</span>
              <span className="text-xl">
                Generic travel recommendations may not align with individual preferences, resulting in suboptimal experiences
              </span>
            </IconBullet>
            <IconBullet iconUrl="/icons/SmileyXEyes.svg">
              <span className="text-[28px] font-medium">Indecisiveness</span>
              <span className="text-xl">
                Friend groups or individuals often struggle to reach a consensus on the travel itinerary
              </span>
            </IconBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">Potential Solutions</span>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <span className="text-[28px] font-medium">Limit the Choices</span>
              <span className="text-xl">
                Two itineraries were provided from AI based on their preference for users to do simple decision
              </span>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <span className="text-[28px] font-medium">Input Travel Style</span>
              <span className="text-xl">
                Input preferred travel styles to generate a customized travel itinerary
              </span>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <span className="text-[28px] font-medium">Coin Toss</span>
              <span className="text-xl">
                If users have trouble choosing between the two options, our unique "coin toss" feature is there to settle the debate
              </span>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="02" title="Competitive Analysis"/>
        <TwoColumn>
          {
            [
              {
                image: competitive2Logo,
                content: 'It features an AI chatbot, but users must manually transfer the information into the app.',
              },
              {
                image: competitive3Logo,
                content: 'It simplifies trip planning with its collaborative features, but its lack of real-time updates and limited customization options.',
              },
              {
                image: competitive4Logo,
                content: 'It personalized travel recommendations, but offers occasional inaccuracies in local information can be frustrating.',
              },
              {
                image: competitive1Logo,
                content: 'It provides personalized itineraries and real-time insights, but the itineraries can sometimes feel overly packed.',
              },
            ].map(({ image, content }) => (
              <PaddedFlexBox key={image.src}>
                <div
                  className="flex gap-x-5 px-7 py-6 items-start"
                >
                  <div className="self-start">
                    <Image
                      className="max-w-31"
                      aria-hidden
                      src={image}
                      alt="icon"
                    />
                  </div>
                  <span className="grow self-center text-xl">
                    {content}
                  </span>
                </div>
              </PaddedFlexBox>
            ))
          }
        </TwoColumn>
        <SectionTitle id="03" title="Design Process & Development"/>
        <TwoColumn>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">Sketch</span>
            <span className="text-xl">
              During the design phase, our team actively sketched and brainstormed concepts to identify innovative ideas and potential solutions.<br/><br/>
              These sessions played a pivotal role in exploring unique features, such as the "Coin Toss" decision tool, that address user pain points effectively.<br/><br/>
              Sketching allowed for quick visualization and iteration, ultimately leading to the refined, user-friendly design of the app.
            </span>
          </PaddedFlexBox>
          <PaddedFlexBox className="items-center justify-center">
            <Image
              className="w-full h-auto"
              aria-hidden
              src={sketchImage}
              alt="Sketch image"
            />
          </PaddedFlexBox>
        </TwoColumn>
        <TwoColumn>
          <PaddedFlexBox className="items-center justify-center">
            <Image
              className="w-full h-auto"
              aria-hidden
              src={typographyImage}
              alt="Sketch image"
            />
          </PaddedFlexBox>
          <PaddedFlexBox className="self-center">
            <span className="text-[32px] font-medium">Design System</span>
            <span className="text-xl">
              We utilize the Existing Design System, Material 3 Design, which is a comprehensive and widely adopted framework created by Google.<br/><br/>
              It serves as the foundational design language, ensuring consistency and a cohesive user experience. Due to working on Google hackathon project, it offers general guidelines for visual, and interaction design.<br/><br/>
              In addition to the Material 3 guidelines, we have also developed a custom font guideline specifically for our app. This ensures that the typography aligns with our app's unique brand identity and enhances overall readability and accessibility for users.
            </span>
          </PaddedFlexBox>
        </TwoColumn>
        <PaddedFlexBox>
          <span className="text-[32px] font-medium">Wireframes</span>
          <Image
            className="w-full h-auto"
            aria-hidden
            src={wireframesImage}
            alt="Wireframe"
          />
        </PaddedFlexBox>
        <PaddedFlexBox>
          <span className="text-[32px] font-medium">Prompt Refine</span>
          <video
            autoPlay muted loop
            className="object-contain w-full h-auto grow rounded-xl"
          >
            <source src="/media/project/coin-toss/Video2.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </PaddedFlexBox>
        <SectionTitle id="04" title="Our Features"/>
        <TwoColumn>
          <PaddedFlexBox>
            <div className="self-center relative h-151">
              <Image
                className="relative w-full h-full z-30"
                aria-hidden
                src={iPhoneFrameImage}
                alt="Wireframe"
              />
              <video
                autoPlay muted loop
                className="absolute left-[26px] h-139 top-[24px] rounded-2xl z-0"
              >
                <source src="/media/project/coin-toss/Video.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          </PaddedFlexBox>
          <PaddedFlexBox className="self-center">
            <IconBullet iconUrl="/icons/PenNib.svg">
              <span className="text-[32px] font-medium">Personalized Prompt</span>
              <span className="text-xl">Input preferred travel styles, budget, travel companions, and preference, to generate a customized travel itinerary</span>
            </IconBullet>
            <IconBullet iconUrl="/icons/AirplaneTilt.svg">
              <span className="text-[32px] font-medium">Generate 2 Itineraries</span>
              <span className="text-xl">Two itineraries were provided from AI for users to do the further decision.</span>
            </IconBullet>
            <IconBullet iconUrl="/icons/CoinVertical.svg">
              <span className="text-[32px] font-medium">Flip a Coin to Decide</span>
              <span className="text-xl">Whenever there are difficulties in making choices, toss a coin!</span>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <TwoColumn>
          <PaddedFlexBox className="relative h-165">
            <div className="self-center relative h-151">
              <Image
                className="relative w-full h-full z-30"
                aria-hidden
                src={iPhoneFrameImage}
                alt="Wireframe"
              />
              <video
                autoPlay muted loop
                className="absolute left-[25px] h-139 top-[24px] rounded-3xl z-0"
              >
                <source src="/media/project/coin-toss/Video3.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          </PaddedFlexBox>
          <PaddedFlexBox className="self-center">
            <IconBullet iconUrl="/icons/Headphones.svg">
              <span className="text-[32px] font-medium">Audio Guide</span>
              <span className="text-xl">Explore destinations with insightful narration tailored to the specific locations  you visit.</span>
            </IconBullet>
            <IconBullet iconUrl="/icons/Compass.svg">
              <span className="text-[32px] font-medium">Social Norm & Local Price</span>
              <span className="text-xl">AI-powered Social Norms feature leverages Gemini to  inform users about local customs and etiquette.</span>
            </IconBullet>
            <IconBullet iconUrl="/icons/Lifebuoy.svg">
              <span className="text-[32px] font-medium">City Safety & Check Feature</span>
              <span className="text-xl">The app provide crime rate of the city, and provide solo travel traveler a safety checking during travel.</span>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
      </PageContentContainer>
      <Image
        className="self-center p-40 max-w-4xl h-auto"
        aria-hidden
        src={coinTossImage}
        alt="Wireframe"
      />
    </div>
  );
}

