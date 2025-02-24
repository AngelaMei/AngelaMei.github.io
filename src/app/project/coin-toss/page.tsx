import Image from 'next/image';

import ProjectHeroSection from '@/components/ProjectHeroSection';
import { IconBullet, ImageWrapper, PaddedFlexBox, PageContentContainer, SectionTitle, TwoColumn, ThreeColumn, Heading1, Heading2, Heading3, BaseText, ListBullet } from '@/components/utilities';
import projects from '@/data/projects';

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
              <source src="/media/project/coin-toss/Video.mp4" type="video/mp4"/>
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
              Coin Toss is an innovative mobile application designed to alleviate the stress and overwhelm often associated with travel planning.  Many travelers struggle with decision fatigue, information overload, and the complexities of creating personalized itineraries.
              <br/><br/>Coin Toss addresses these challenges by leveraging Generative AI to provide users with customized travel itineraries based on their stated preferences and travel style. A key feature, the "Coin Toss," helps users navigate choices and finalize their plans in a fun and engaging way.
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox className="sm:justify-self-end">
            <IconBullet iconUrl="/icons/LegoSmiley.svg">
              <Heading2>Role</Heading2>
              <BaseText>UX Researcher & Interface Designer</BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/Wrench.svg">
              <Heading2>Tool</Heading2>
              <BaseText>Figma, Adobe Illustrator, Gemini, Pen</BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/UsersThree.svg">
              <Heading2>Team Size & Timeline</Heading2>
              <BaseText>10 Days with 6 team members</BaseText>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <ThreeColumn>
          <PaddedFlexBox>
            <Heading2>01 Planning</Heading2>
            <ListBullet>
              <li>Brainstorming</li>
              <li>Project Timeline Setting</li>
              <li>Job Allocation</li>
            </ListBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Heading2>02 Research</Heading2>
            <ListBullet>
              <li>Structured Interview</li>
              <li>Competitor Analysis</li>
            </ListBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Heading2>03 Mapping</Heading2>
            <ListBullet>
              <li>User Story</li>
              <li>Sketch</li>
              <li>Wireframing</li>
              <li>Prompt Research</li>
            </ListBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Heading2>04 Prototyping</Heading2>
            <ListBullet>
              <li>Backend Development</li>
              <li>Design System</li>
              <li>Mid to High-Fi Prototype</li>
            </ListBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Heading2>05 Testing</Heading2>
            <ListBullet>
              <li>Usability Test</li>
              <li>Prompt Testing</li>
            </ListBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Heading2>06 Presenting</Heading2>
            <ListBullet>
              <li>Prepare Presentation</li>
              <li>Video Recording</li>
            </ListBullet>
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
            <Heading2>Pain Points</Heading2>
            <IconBullet iconUrl="/icons/SmileyNervous.svg">
              <Heading3>Indecisiveness</Heading3>
              <BaseText>
                Friend groups or individuals often struggle to reach a consensus on where to travel, what to do
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/SmileySad.svg">
              <Heading3>Lack of Personalization</Heading3>
              <BaseText>
                Generic travel recommendations may not align with individual preferences, resulting in suboptimal experiences
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/SmileyXEyes.svg">
              <Heading3>Indecisiveness</Heading3>
              <BaseText>
                Friend groups or individuals often struggle to reach a consensus on the travel itinerary
              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Heading2>Potential Solutions</Heading2>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Limit the Choices</Heading3>
              <BaseText>
                Two itineraries were provided from AI based on their preference for users to do simple decision
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Input Travel Style</Heading3>
              <BaseText>
                Input preferred travel styles to generate a customized travel itinerary
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Coin Toss</Heading3>
              <BaseText>
                If users have trouble choosing between the two options, our unique "coin toss" feature is there to settle the debate
              </BaseText>
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
                  className="flex gap-x-5 px-3 sm:px-7 sm:py-6 items-start"
                >
                  <div className="self-start">
                    <Image
                      className="max-w-24 sm:max-w-31"
                      aria-hidden
                      src={image}
                      alt="icon"
                    />
                  </div>
                  <BaseText className="grow self-center">
                    {content}
                  </BaseText>
                </div>
              </PaddedFlexBox>
            ))
          }
        </TwoColumn>
        <SectionTitle id="03" title="Design Process & Development"/>
        <TwoColumn>
          <PaddedFlexBox>
            <Heading2>Sketch</Heading2>
            <BaseText>
              During the design phase, our team actively sketched and brainstormed concepts to identify innovative ideas and potential solutions.<br/><br/>
              These sessions played a pivotal role in exploring unique features, such as the "Coin Toss" decision tool, that address user pain points effectively.<br/><br/>
              Sketching allowed for quick visualization and iteration, ultimately leading to the refined, user-friendly design of the app.
            </BaseText>
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
            <Heading2>Design System</Heading2>
            <BaseText>
              We utilize the Existing Design System, Material 3 Design, which is a comprehensive and widely adopted framework created by Google.<br/><br/>
              It serves as the foundational design language, ensuring consistency and a cohesive user experience. Due to working on Google hackathon project, it offers general guidelines for visual, and interaction design.<br/><br/>
              In addition to the Material 3 guidelines, we have also developed a custom font guideline specifically for our app. This ensures that the typography aligns with our app's unique brand identity and enhances overall readability and accessibility for users.
            </BaseText>
          </PaddedFlexBox>
        </TwoColumn>
        <PaddedFlexBox>
          <Heading2>Wireframes in Progress</Heading2>
          <Image
            className="w-full h-auto"
            aria-hidden
            src={wireframesImage}
            alt="Wireframe"
          />
        </PaddedFlexBox>
        <PaddedFlexBox>
          <Heading2>Prompt Refine</Heading2>
          <video
            autoPlay muted loop playsInline
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
                autoPlay muted loop playsInline
                className="absolute left-[26px] h-139 top-[24px] rounded-2xl z-0"
              >
                <source src="/media/project/coin-toss/Video.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          </PaddedFlexBox>
          <PaddedFlexBox className="self-center">
            <IconBullet iconUrl="/icons/PenNib.svg">
              <Heading2>Personalized Prompt</Heading2>
              <BaseText>Input preferred travel styles, budget, travel companions, and preference, to generate a customized travel itinerary</BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/AirplaneTilt.svg">
              <Heading2>Generate 2 Itineraries</Heading2>
              <BaseText>Two itineraries were provided from AI for users to do the further decision.</BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/CoinVertical.svg">
              <Heading2>Flip a Coin to Decide</Heading2>
              <BaseText>Whenever there are difficulties in making choices, toss a coin!</BaseText>
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
                autoPlay muted loop playsInline
                className="absolute left-[25px] h-139 top-[24px] rounded-3xl z-0"
              >
                <source src="/media/project/coin-toss/Video3.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          </PaddedFlexBox>
          <PaddedFlexBox className="self-center">
            <IconBullet iconUrl="/icons/Headphones.svg">
              <Heading2>Audio Guide</Heading2>
              <BaseText>Explore destinations with insightful narration tailored to the specific locations  you visit.</BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/Compass.svg">
              <Heading2>Social Norm & Local Price</Heading2>
              <BaseText>AI-powered Social Norms feature leverages Gemini to  inform users about local customs and etiquette.</BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/Lifebuoy.svg">
              <Heading2>City Safety & Check Feature</Heading2>
              <BaseText>The app provide crime rate of the city, and provide solo travel traveler a safety checking during travel.</BaseText>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="05" title="Refelction"/>
        <PaddedFlexBox>
          <BaseText>
          This hackathon project provided a valuable opportunity to rapidly develop a user-centered mobile application.  Working within a 10-day timeframe required efficient collaboration and focused execution.  The use of Generative AI (Gemini) was a key differentiator for Coin Toss, enabling us to provide highly personalized travel itineraries.
          <br/><br/>If I were to revisit this project, I would focus on:
          <br/><br/><li><strong>More Rigorous Prompt Engineering</strong>:  Refining the prompts for Gemini to further improve the quality and relevance of the generated itineraries.</li>
          <br/><li><strong>User Testing with a Larger Sample Size</strong>:  Conducting more extensive user testing to gather feedback on usability and identify areas for improvement.</li>
          <br/><li><strong>Integration with Other Travel Services</strong>:  Exploring integrations with booking platforms, transportation providers, and other travel-related services to create a more seamless user experience.</li>
          <br/><br/>This project solidified my understanding of the importance of user research and iterative design, even within a short timeframe. It also demonstrated the potential of AI to enhance user experiences and solve real-world problems.  I learned how to effectively collaborate within a team to deliver a functional prototype under pressure.  This experience has further fueled my passion for UX design and my interest in exploring the intersection of AI and user-centered design.
          </BaseText>
        </PaddedFlexBox>
      </PageContentContainer>
      <Image
        className="self-center p-10 sm:p-40 max-w-sm sm:max-w-4xl h-auto"
        aria-hidden
        src={coinTossImage}
        alt="Wireframe"
      />
    </div>
  );
}

