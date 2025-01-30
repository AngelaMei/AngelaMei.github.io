import Image from "next/image";

import ProjectHeroSection from "@/components/ProjectHeroSection";
import { IconBullet, ImageWrapper, PaddedFlexBox, PageContentContainer, SectionTitle, TwoColumn, ThreeColumn } from "@/components/utilities";
import projects from "@/data/projects";
import cover from "@/public/mock_main.png";

const projectName = 'coin-toss';

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
              The Guide App is a Learning Management platform designed to redefine employee training through byte-sized stories. With features that increase engagement, reduce onboarding time, and scale training efforts, Guide has become a go-to solution for businesses aiming to enhance their talent experience and training processes.<br/><br/>
              Guide faces challenges in supporting users who need to efficiently manage and interact with long-form content. Extracting key information without losing context is a common difficulty for users. Addressing this gap is vital to improving the user experience and boosting productivity.
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
            className="object-contain w-full h-auto"
            aria-hidden
            src="/media/project/coin-toss/UserPain.png"
            alt="User Pain Image"
            width={3968}
            height={1584}
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
                imageUrl: '/media/project/coin-toss/Competitive2.png',
                content: 'It features an AI chatbot, but users must manually transfer the information into the app.',
              },
              {
                imageUrl: '/media/project/coin-toss/Competitive3.png',
                content: 'It simplifies trip planning with its collaborative features, but its lack of real-time updates and limited customization options.',
              },
              {
                imageUrl: '/media/project/coin-toss/Competitive4.png',
                content: 'It personalized travel recommendations, but offers occasional inaccuracies in local information can be frustrating.',
              },
              {
                imageUrl: '/media/project/coin-toss/Competitive1.png',
                content: 'It provides personalized itineraries and real-time insights, but the itineraries can sometimes feel overly packed.',
              },
            ].map(({ imageUrl, content }) => (
              <PaddedFlexBox key={imageUrl}>
                <div
                  className="flex gap-x-5 px-7 py-6 items-start"
                >
                  <div className="self-start">
                    <Image
                      className="max-w-31"
                      aria-hidden
                      src={imageUrl}
                      alt="icon"
                      height={496}
                      width={600}
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
          <PaddedFlexBox>
            <Image
              className="object-contain w-full h-auto grow"
              aria-hidden
              src="/media/project/coin-toss/Sketch.png"
              alt="Sketch image"
              width={2016}
              height={1564}
            />
          </PaddedFlexBox>
        </TwoColumn>
        <TwoColumn>
          <PaddedFlexBox>
            <Image
              className="object-contain w-full h-auto grow"
              aria-hidden
              src="/media/project/coin-toss/Typography.png"
              alt="Sketch image"
              width={2016}
              height={1964}
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
            src="/media/project/coin-toss/Wireframes.png"
            alt="Wireframe"
            width={4256}
            height={3104}
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
                className="relative w-full h-full z-50"
                aria-hidden
                src="/media/project/coin-toss/iPhoneFrame.png"
                alt="Wireframe"
                width={1419}
                height={2796}
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
                className="relative w-full h-full z-50"
                aria-hidden
                src="/media/project/coin-toss/iPhoneFrame.png"
                alt="Wireframe"
                width={1419}
                height={2796}
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
            src="/media/project/coin-toss/CoinToss.png"
            alt="Wireframe"
            width={2423}
            height={419}
          />
    </div>
  );
}

