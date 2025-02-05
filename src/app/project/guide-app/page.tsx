import Image from 'next/image';

import ProjectHeroSection from '@/components/ProjectHeroSection';
import { IconBullet, ImageWrapper, PaddedFlexBox, PageContentContainer, SectionTitle, TwoColumn, ThreeColumn } from '@/components/utilities';
import projects from '@/data/projects';

import macbookSVG from '@/public/media/mockup/Macbook.svg';
import HeatmapImage from '@/public/media/project/guide-app/heatmap.png';
import chartImage from '@/public/media/project/guide-app/Chart.png';
import votesImage from '@/public/media/project/guide-app/Votes.png';
import sketchImage from '@/public/media/project/guide-app/Sketch.png';
import persona2Image from '@/public/media/project/guide-app/Persona2.png';
import persona1Image from '@/public/media/project/guide-app/Persona1.png';
import userJourneyImage from '@/public/media/project/guide-app/UserJourney.png';
import competitiveImage from '@/public/media/project/guide-app/Competitive.png';
import keyInsightsImage from '@/public/media/project/guide-app/KeyInsights.png';
import canvasImage from '@/public/media/project/guide-app/Canvas.png';
import designSprintImage from '@/public/media/project/guide-app/DesignSprint.jpg';
import chart95 from '@/public/media/project/guide-app/chart-95.png';
import chart80 from '@/public/media/project/guide-app/chart-80.png';
import chart70 from '@/public/media/project/guide-app/chart-70.png';

const projectName = 'guide-app';

const projectMetadata = projects.find(project => project.id === projectName)!;

export default function Page() {
  return (
    <div className="flex flex-col items-center pt-24 font-sans">
      <ProjectHeroSection
        { ...projectMetadata }
        heroCover={(
          <ImageWrapper className="relative">
            <Image
              className="relative h-full w-auto z-30"
              aria-hidden
              src={macbookSVG}
              alt=""
            />
            <video
              autoPlay muted loop playsInline
              className="absolute top-[12px] left-[73px] h-[94%] z-0"
            >
              <source src="/media/project/guide-app/10secVideo.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </ImageWrapper>
        )}
      />

      <PageContentContainer>
        <PaddedFlexBox>
          <span className="text-[40px] font-medium">Project Overview</span>
          <span className="text-xl">
          The Guide App is a Learning Management platform designed to redefine employee training through byte-sized stories. With features that increase engagement, reduce onboarding time, and scale training efforts, Guide has become a go-to solution for businesses aiming to enhance their training processes.
          </span>
        </PaddedFlexBox>
        <TwoColumn>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">Challenge</span>
            <span className="text-xl">
            Guide faces challenges in supporting users who need to efficiently manage and interact with long-form content. Addressing this gap is vital to improving the user experience and boosting productivity.
            </span>
            <span className="text-[32px] font-medium">Opportunity</span>
            <span className="text-xl">
            The core opportunity lies in significantly improving the user experience for both content creators and learners within the Guide App.
            </span>
          </PaddedFlexBox>
          <PaddedFlexBox className="justify-self-end">
            <IconBullet iconUrl="/icons/LegoSmiley.svg">
              <span className="text-[32px] font-medium">Role</span>
              <span className="text-xl">UIUX Designer & Developer</span>
            </IconBullet>
            <IconBullet iconUrl="/icons/Wrench.svg">
              <span className="text-[32px] font-medium">Tool</span>
              <span className="text-xl">Figma, Adobe Illustrator, Figjam</span>
            </IconBullet>
            <IconBullet iconUrl="/icons/Eyes.svg">
              <span className="text-[32px] font-medium">Project Size</span>
              <span className="text-xl">6 People Capstone Project</span>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <PaddedFlexBox className="items-center justify-center">
          <Image 
            src="/icons/flag.svg" 
            alt="Goal Icon" 
            width={50} 
            height={50} 
          />
          <span className="text-[40px] font-medium">Goal</span>
          <span className="text-[28px] font-medium text-lime-300 text-center">
            Reducing course creation time by 30% <br/>without external tools.
          </span>
        </PaddedFlexBox>
        <TwoColumn>
          <PaddedFlexBox className="items-center justify-center">
            <Image
              className="rounded-2xl"
              aria-hidden
              src={designSprintImage}
              alt="Design Sprint Image"
            />
          </PaddedFlexBox>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">Process</span>
            <span className="text-xl">
              The Design Sprint methodology guided our development of the functionality.
              <br/><br/>This proven framework enabled us to rapidly address user challenges, generate innovative solutions, and validate them through rigorous user-centric testing.
            </span>
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="01" title="Map: Aligning Goals and Problem Discovery"/>
        <PaddedFlexBox>
          <span className="text-[32px] font-medium">Identifying Problems</span>
          <span className="text-xl">
          Through the following research, we found that a significant factor contributing to long editing times is the lack of integrated video editing tools within the Guide App. Due to the platform's video length restrictions, users often need to utilize external editing software to adjust their videos before uploading, adding an extra step to the content creation process.          </span>
        </PaddedFlexBox>
        <TwoColumn>
          <PaddedFlexBox>
            <IconBullet iconUrl="/icons/NumberOne.svg">
              <span className="text-[28px] font-medium">Stakeholder Interviews</span>
              <span className="text-xl">
              We conducted interviews with key stakeholders to understand their business goals, and identify platform limitations.              </span>
            </IconBullet>
            <IconBullet iconUrl="/icons/NumberTwo.svg">
              <span className="text-[28px] font-medium">Potential User Interviews</span>
              <span className="text-xl">
                Conducted interviews with content creators, HR trainers, and trainees to gather a comprehensive understanding of user pain points and needs.
              </span>
            </IconBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <IconBullet iconUrl="/icons/NumberThree.svg">
              <span className="text-[28px] font-medium">Lean UX & BMC</span>
              <span className="text-xl">
              Developed frameworks to align user problems with business objectives, focusing on key activities, resources, and value propositions.
              </span>
            </IconBullet>
            <IconBullet iconUrl="/icons/NumberFour.svg">
              <span className="text-[28px] font-medium">Competitive Analysis</span>
              <span className="text-xl">
                Analyzed competitors and existing solutions to identify best practices, feature gaps, and areas for differentiation.
              </span>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <TwoColumn>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">Lean UX & BMC</span>
            <span className="text-xl">
              We employed the Lean UX and Business Model Canvas methodologies to ensure our research findings and design solutions aligned with the business goals.
              <br/><br/>These frameworks helped us continuously validate that our proposed solutions not only addressed the identified user needs but also contributed to the overall business objectives. We can also explore potential revenue streams, identify key partnerships, and assess the overall viability of the feature.
            </span>
          </PaddedFlexBox>
          <PaddedFlexBox className="items-center justify-center">
            <Image
              className="w-full h-auto"
              aria-hidden
              src={canvasImage}
              alt="Canvas Image"
            />
          </PaddedFlexBox>
        </TwoColumn>
        <PaddedFlexBox>
          <span className="text-[32px] font-medium">Key Insights from User Interviews</span>
          <Image
            className="w-full h-auto"
            aria-hidden
            src={keyInsightsImage}
            alt="Key Insights Image"
          />
        </PaddedFlexBox>
        <ThreeColumn>
          <PaddedFlexBox>
            <Image
              className="w-50 h-auto mx-auto"
              aria-hidden
              src={chart95}
              alt="piechart"
            />
            <span className="text-xl">Interviewees expressed strong interest in and positive feedback towards micro-learning formats</span>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Image
              className="w-50 h-auto mx-auto"
              aria-hidden
              src={chart80}
              alt="piechart"
            />
            <span className="text-xl">Interviewees find finding right videos for editing is the most time-consuming part</span>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Image
              className="w-50 h-auto mx-auto"
              aria-hidden
              src={chart70}
              alt="piechart"
            />
            <span className="text-xl">Interviewees desire to track the training performance more easily and have timely feedback</span>
          </PaddedFlexBox>
        </ThreeColumn>
        <PaddedFlexBox>
          <span className="text-[32px] font-medium">Competitive Analysis</span>
          <span className="text-xl">
            Competitive analysis revealed key trends in modern Learning Management Systems, a strong emphasis on mobile-first design, the rise of short-form video content, seamless integrations with workplace tools.
            <br/><br/>Furthermore, advanced video editing capabilities, including AI-powered enhancements, and flexible sharing options, are increasingly crucial for engaging learners and streamlining the content creation process.
          </span>
          <Image
            className="w-full h-auto"
            aria-hidden
            src={competitiveImage}
            alt="Competitive Analysis Image"
          />
        </PaddedFlexBox>
        <SectionTitle id="02" title="Sketch: Ideation and Exploration">
          <span className="text-xl">Through collaborative ideation sessions, including 'Crazy 8' and 'How Might We' exercises, I contributed to the generation of a diverse range of design concepts. </span>
        </SectionTitle>
        <PaddedFlexBox>
          <span className="text-[32px] font-medium">Persona & User Journey</span>
          <span className="text-xl">
          By creating user personas and mapping user journeys, we gained valuable insights into how users interact with the product and identified key pain points and opportunities for improvement.          </span>
        </PaddedFlexBox>
        <TwoColumn>
          <PaddedFlexBox>
            <Image
              className="w-full h-auto"
              aria-hidden
              src={userJourneyImage}
              alt="User Journey Image"
            />
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Image
              className="w-full h-auto flex-none"
              aria-hidden
              src={persona1Image}
              alt="Persona Image"
            />
            <Image
              className="w-full h-auto flex-none"
              aria-hidden
              src={persona2Image}
              alt="Persona Image"
            />
          </PaddedFlexBox>
        </TwoColumn>
        <TwoColumn>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">Rapid Sketch</span>
            <span className="text-xl">
              During the ideation phase, we engaged in a dynamic process of sketching and brainstorming to explore a wide range of innovative design concepts and potential solutions.
              <br/><br/>We actively participated in collaborative sketching sessions where we explored a variety of ideas to generate a diverse pool of potential solutions.
              <br/><br/>Each team member also conducted independent sketching exercises to further refine their individual ideas and explore unique perspectives.
            </span>
          </PaddedFlexBox>
          <PaddedFlexBox className="items-center justify-center">
            <Image
              className="w-full h-auto"
              aria-hidden
              src={sketchImage}
              alt="Sketch Image"
            />
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="03" title="Decide: Prioritization and Storyboarding"/>
        <TwoColumn>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">Votes & Story Board</span>
            <span className="text-xl">
              To ensure we selected the most promising solution, we conducted a rigorous evaluation and refinement process.
            </span>
            <ul className="text-xl list-outside list-disc pl-4">
              <li>Voting on Ideas: Client and team members voted on sketches and designs that best meet user needs.</li>
              <li>Creating a Storyboard: Developing a step-by-step blueprint for the selected solution, outlining how the user will interact with the app.</li>
              <li>Risk Assessment: Identifying potential technical or usability challenges and creating mitigation strategies.</li>
            </ul>
          </PaddedFlexBox>
          <PaddedFlexBox className="items-center justify-center">
            <Image
              className="w-full h-auto"
              aria-hidden
              src={votesImage}
              alt="Votes Image"
            />
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="04" title="Prototype: Building a Realistic Model">
          <div className="text-xl">
            <span>
              As the UI Designer, I led the development of a functional prototype that incorporated the key features of the 'Mark & Snip' tool. This prototype enabled users to easily mark and tag key sections within long-form content, effortlessly create and save contextually-rich snippets from the marked sections, and interact with the tool through intuitive and user-friendly controls and visual markers, all designed to enhance the overall usability and accessibility.
            </span>
          </div>
        </SectionTitle>
        <TwoColumn>
          <PaddedFlexBox className="items-center justify-center">
            <video
              autoPlay muted loop playsInline
              className="w-full h-auto rounded-xl"
            >
              <source src="/media/project/guide-app/Video.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">Challenges</span>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <span className="text-[28px] font-medium">Software Limits</span>
              <span className="text-xl">
                Difficulty in prototyping complex interactions, such as drag and drop, and resizing function
              </span>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <span className="text-[28px] font-medium">Before and After Editing</span>
              <span className="text-xl">
                Different view of same screen before and after editing stage is hard to be consistent through out the prototype
              </span>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="05" title="Validate: User Testing and Feedback">
          <span className="text-xl">
            The final phase involved rigorous user testing to gather insights into usability and functionality. We utilized Useberry platform, I conducted usability tests with a diverse group of participants.
            <br/><br/>We designed 6 scenarios to evaluate user interactions, carefully timing their performance and conducting follow-up interviews to understand their thoughts and feelings throughout each task. Based on the valuable feedback gathered during these tests, we then iterated on the prototype design, refining the interface and functionality to address any usability issues and ensure the final product effectively met the needs and expectations of our target users.
          </span>
        </SectionTitle>
        <TwoColumn>
          <PaddedFlexBox className="items-center justify-start">
            <span className="text-[32px] font-medium">6 Scenario Ease Score</span>
            <Image
              className="w-full h-auto"
              aria-hidden
              src={chartImage}
              alt="Chart Image"
            />
          </PaddedFlexBox>
          <PaddedFlexBox className="items-center justify-center">
            <Image
              className="w-full h-auto"
              aria-hidden
              src={HeatmapImage}
              alt="Chart Image"
            />
          </PaddedFlexBox>
        </TwoColumn>
        <TwoColumn>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">Feedback</span>
            <IconBullet iconUrl="/icons/SmileyNervous.svg">
              <span className="text-[28px] font-medium">Order of the Side Menu</span>
              <span className="text-xl">
                Users expect the editing features to be placed at the top of the side menu and the settings features at the bottom, as editing is used more frequently.
              </span>
            </IconBullet>
            <IconBullet iconUrl="/icons/SmileySad.svg">
              <span className="text-[28px] font-medium">Confusion on Effect Menu</span>
              <span className="text-xl">
                The fade in animation is expected to be located under the 'Effect' icon but the button is unclickable.
              </span>
            </IconBullet>
            <IconBullet iconUrl="/icons/SmileyXEyes.svg">
              <span className="text-[28px] font-medium">Naming Confusion</span>
              <span className="text-xl">
                It is confusing to relate the “markers” to “chapters” (Editor-facing vs. Viewer-facing)
              </span>
            </IconBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">Iteration</span>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <span className="text-[28px] font-medium">Change the Order of the Side Menu</span>
              <span className="text-xl">
                Keep current navigation design, but change the sequence of the features. We plan to do further testing on users.
              </span>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <span className="text-[28px] font-medium">Add Tooltips or Coach Marks</span>
              <span className="text-xl">
                Add some explanation or examples about “Mark” to explain what is this feature and how it works. For example, adding Coach Marks when user first logs in, explaining what each feature means.
              </span>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <span className="text-[28px] font-medium">Add Visual Cues</span>
              <span className="text-xl">
                Add visual cues, such as labels, to indicate that uploaded videos appear in the timeline.
              </span>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
      </PageContentContainer>
    </div>
  );
}

