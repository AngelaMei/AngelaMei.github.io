import Image from 'next/image';

import ProjectHeroSection from '@/components/ProjectHeroSection';
import { IconBullet, ImageWrapper, PaddedFlexBox, PageContentContainer, SectionTitle, TwoColumn, ThreeColumn, Heading1, Heading2, Heading3, BaseText, ListBullet } from '@/components/utilities';
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
import competitive2Image from '@/public/media/project/guide-app/Competitive2.png';
import keyInsightsImage from '@/public/media/project/guide-app/KeyInsights.png';
import canvasImage from '@/public/media/project/guide-app/Canvas.png';
import designSprintImage from '@/public/media/project/guide-app/DesignSprint.jpg';
import chart95 from '@/public/media/project/guide-app/chart-95.png';
import chart80 from '@/public/media/project/guide-app/chart-80.png';
import chart70 from '@/public/media/project/guide-app/chart-70.png';
import thematicImage from '@/public/media/project/guide-app/Thematic.png';
import secondaryImage from '@/public/media/project/guide-app/SecondaryResearch.png';
import cardSortingImage from '@/public/media/project/guide-app/CardSorting.png';
import cardSorting2Image from '@/public/media/project/guide-app/CardSorting2.png';
import desktopInterationImage from '@/public/media/project/guide-app/DesktopIteration.png';
import mobileInterationImage from '@/public/media/project/guide-app/MobileIteration.png';

const projectName = 'guide-app';

const projectMetadata = projects.find(project => project.id === projectName)!;

export default function Page() {
  return (
    <div className="flex flex-col items-center pt-24 font-sans">
      <ProjectHeroSection
        { ...projectMetadata }
        heroCover={(
          <ImageWrapper className="relative flex items-end">
            <Image
              className="relative self-end w-100 h-auto pb-15 md:pb-0 md:h-full md:w-auto z-30"
              aria-hidden
              src={macbookSVG}
              alt=""
            />
            <video
              autoPlay muted loop playsInline
              className="absolute w-[80.5%] bottom-[67px] left-[40px] md:bottom-[14px] md:left-[73px] md:w-[80.5%] z-0"
            >
              <source src="/media/project/guide-app/10secVideo.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </ImageWrapper>
        )}
      />
      
      <PageContentContainer>
        <PaddedFlexBox>
          <Heading1>Project Overview</Heading1>
          <BaseText>
            The Guide App is a Learning Management platform designed to redefine employee training through byte-sized stories. With features that increase engagement, reduce onboarding time, and scale training efforts, Guide has become a go-to solution for businesses aiming to enhance their training processes.
          </BaseText>
        </PaddedFlexBox>
        <TwoColumn>
          <PaddedFlexBox>
            <Heading2>Challenge</Heading2>
            <BaseText>
              Guide faces challenges in supporting users who need to efficiently manage and interact with long-form content. Addressing this gap is vital to improving the user experience and boosting productivity. 
            </BaseText>
            <Heading2>Opportunity</Heading2>
            <BaseText>
              The core opportunity lies in significantly improving the user experience for both content creators and learners within the Guide App.
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox className="sm:justify-self-end">
            <IconBullet iconUrl="/icons/LegoSmiley.svg">
              <Heading2>Role</Heading2>
              <BaseText>UIUX Designer & Developer</BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/Wrench.svg">
              <Heading2>Tool</Heading2>
              <BaseText>Figma, Adobe Illustrator, Figjam</BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/UsersThree.svg">
              <Heading2>Team Size</Heading2>
              <BaseText>6 People Capstone Project</BaseText>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <PaddedFlexBox className="items-center justify-center">
          <Image 
            src="/icons/Flag.svg" 
            alt="Goal Icon" 
            width={50} 
            height={50} 
          />
          <Heading1>Goal</Heading1>
          <Heading2 className='text-lime-300 text-center'>
            Reducing course creation time by 30%
            <br/>without external tools.
          </Heading2>
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
            <Heading2>Process</Heading2>
            <BaseText>
              The Design Sprint methodology guided our development of the functionality.
              <br/><br/>This proven framework enabled us to rapidly address user challenges, generate innovative solutions, and validate them through rigorous user-centric testing.
            </BaseText>
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="01" title="Map: Aligning Goals and Problem Discovery"/>
        <PaddedFlexBox>
          <Heading2>Identifying Problems</Heading2>
            <BaseText>
              Through the following research, we found that a significant factor contributing to long editing times is the lack of integrated video editing tools within the Guide App. Due to the platform's video length restrictions, users often need to utilize external editing software to adjust their videos before uploading, adding an extra step to the content creation process.
            </BaseText>
        </PaddedFlexBox>
        {/* <TwoColumn>
          <PaddedFlexBox>
            <IconBullet iconUrl="/icons/NumberOne.svg">
              <Heading2>Stakeholder Interviews</Heading2>
              <BaseText>
                We conducted interviews with key stakeholders to understand their business goals, and identify platform limitations.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/NumberTwo.svg">
              <Heading2>Potential User Interviews</Heading2>
              <BaseText>
                Conducted interviews with content creators, HR trainers, and trainees to gather a comprehensive understanding of user pain points and needs.
              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <IconBullet iconUrl="/icons/NumberThree.svg">
              <Heading2>Lean UX & BMC</Heading2>
              <BaseText>
                Developed frameworks to align user problems with business objectives, focusing on key activities, resources, and value propositions.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/NumberFour.svg">
            <Heading2>Competitive Analysis</Heading2>
              <BaseText>
                Analyzed competitors and existing solutions to identify best practices, feature gaps, and areas for differentiation.
              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn> */}
        <TwoColumn>
          <PaddedFlexBox>
            <Heading2>Lean UX & BMC</Heading2>
            <BaseText>
            We employed the Lean UX and Business Model Canvas methodologies to ensure our research findings and design solutions aligned with the business goals.
                <br/><br/>These frameworks helped us continuously validate that our proposed solutions not only addressed the identified user needs but also contributed to the overall business objectives. We can also explore potential revenue streams, identify key partnerships, and assess the overall viability of the feature.
            </BaseText>
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
          <Heading2>Key Insights from User Interviews</Heading2>
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
            <BaseText>Interviewees expressed strong interest in and positive feedback towards micro-learning formats</BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Image
              className="w-50 h-auto mx-auto"
              aria-hidden
              src={chart80}
              alt="piechart"
            />
            <BaseText>Interviewees find finding right videos for editing is the most time-consuming part</BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Image
              className="w-50 h-auto mx-auto"
              aria-hidden
              src={chart70}
              alt="piechart"
            />
            <BaseText>Interviewees desire to track the training performance more easily and have timely feedback</BaseText>
          </PaddedFlexBox>
        </ThreeColumn>
        <PaddedFlexBox>
          <Heading2>Competitive Analysis</Heading2>
          <BaseText>
            Competitive analysis revealed key trends in modern Learning Management Systems, a strong emphasis on mobile-first design, the rise of short-form video content, seamless integrations with workplace tools.
            <br/><br/>Furthermore, advanced video editing capabilities, including AI-powered enhancements, and flexible sharing options, are increasingly crucial for engaging learners and streamlining the content creation process.
          </BaseText>
          <Image
            className="w-full h-auto"
            aria-hidden
            src={competitiveImage}
            alt="Competitive Analysis Image"
          />
        </PaddedFlexBox>
        <SectionTitle id="02" title="Sketch: Ideation and Exploration">
          <BaseText>Through collaborative ideation sessions, including 'Crazy 8' and 'How Might We' exercises, I contributed to the generation of a diverse range of design concepts. </BaseText>
        </SectionTitle>
        <PaddedFlexBox>
          <Heading2>Persona & User Journey</Heading2>
          <BaseText>
          By creating user personas and mapping user journeys, we gained valuable insights into how users interact with the product and identified key pain points and opportunities for improvement.          </BaseText>
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
            <Heading2>Rapid Sketch</Heading2>
            <BaseText>
              During the ideation phase, we engaged in a dynamic process of sketching and brainstorming to explore a wide range of innovative design concepts and potential solutions.
              <br/><br/>We actively participated in collaborative sketching sessions where we explored a variety of ideas to generate a diverse pool of potential solutions.
              <br/><br/>Each team member also conducted independent sketching exercises to further refine their individual ideas and explore unique perspectives.
            </BaseText>
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
            <Heading2>Votes & Story Board</Heading2>
            <BaseText>
              To ensure we selected the most promising solution, we conducted a rigorous evaluation and refinement process.
            </BaseText>
            <ListBullet>
              <li>Voting on Ideas: Client and team members voted on sketches and designs that best meet user needs.</li>
              <li>Creating a Storyboard: Developing a step-by-step blueprint for the selected solution, outlining how the user will interact with the app.</li>
              <li>Risk Assessment: Identifying potential technical or usability challenges and creating mitigation strategies.</li>
            </ListBullet>
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
          <BaseText>
            As the UI Designer, I led the development of a functional prototype that incorporated the key features of the 'Mark & Snip' tool.
            <br/><br/>This prototype enabled users to easily mark and tag key sections within long-form content, effortlessly create and save contextually-rich snippets from the marked sections, and interact with the tool through intuitive and user-friendly controls and visual markers, all designed to enhance the overall usability and accessibility.
          </BaseText>
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
            <Heading2>Challenges</Heading2>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Software Limits</Heading3>
              <BaseText>
                Difficulty in prototyping complex interactions, such as drag and drop, and resizing function
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Before and After Editing</Heading3>
              <BaseText>
                Different view of same screen before and after editing stage is hard to be consistent through out the prototype
              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="05" title="Validate: User Testing and Feedback">
          <BaseText>
            The final phase involved rigorous user testing to gather insights into usability and functionality. We utilized Useberry platform, I conducted usability tests with a diverse group of participants.
            <br/><br/>We designed 6 scenarios to evaluate user interactions, carefully timing their performance and conducting follow-up interviews to understand their thoughts and feelings throughout each task. Based on the valuable feedback gathered during these tests, we then iterated on the prototype design, refining the interface and functionality to address any usability issues and ensure the final product effectively met the needs and expectations of our target users.
          </BaseText>
        </SectionTitle>
        <TwoColumn>
          <PaddedFlexBox className="items-center justify-start">
            <Heading2>6 Scenario Ease Score</Heading2>
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
            <Heading2>Feedback</Heading2>
            <IconBullet iconUrl="/icons/SmileyNervous.svg">
              <Heading3>Order of the Side Menu</Heading3>
              <BaseText>
                Users expect the editing features to be placed at the top of the side menu and the settings features at the bottom, as editing is used more frequently.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/SmileySad.svg">
              <Heading3>Confusion on Effect Menu</Heading3>
              <BaseText>
                The fade in animation is expected to be located under the 'Effect' icon but the button is unclickable.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/SmileyXEyes.svg">
              <Heading3>Naming Confusion</Heading3>
              <BaseText>
                It is confusing to relate the “markers” to “chapters” (Editor-facing vs. Viewer-facing)
              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Heading2>Iteration</Heading2>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Change the Order of the Side Menu</Heading3>
              <BaseText>
                Keep current navigation design, but change the sequence of the features. We plan to do further testing on users.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Add Tooltips or Coach Marks</Heading3>
              <BaseText>
                Add some explanation or examples about “Mark” to explain what is this feature and how it works. For example, adding Coach Marks when user first logs in, explaining what each feature means.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Add Visual Cues</Heading3>
              <BaseText>
                Add visual cues, such as labels, to indicate that uploaded videos appear in the timeline.
              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="06" title="Halfway Reflection"/>
        <PaddedFlexBox>
          <BaseText>
            This is an ongoing project, we are still working on improvement and further research and usability test. 
            <br/><br/>
            This project provided invaluable experience in the full UX design process, from user research to prototyping and testing.  The Design Sprint methodology proved to be an effective way to rapidly develop and validate our design solutions.  Developing the "Mark & Snip" tool was particularly rewarding, as it directly addressed a significant user pain point. One of the key challenges was balancing the desire for advanced features with the need for a simple and intuitive user interface.
            <br/><br/>
            In future steps, I would dedicate more time to user testing, allowing for more iterative improvements based on user feedback. I would also explore more robust prototyping tools to better simulate complex interactions.  
            <br/><br/>
            This project highlighted the value of collaboration and communication within a design team and also with the client.  I learned how to effectively translate user needs into tangible design solutions and how to advocate for the user throughout the development process.
          </BaseText>
        </PaddedFlexBox>
      </PageContentContainer>
      <PaddedFlexBox className="items-center justify-center  w-full bg-[#48399A] pt-20 pb-20">
          <Heading1 className='text-lime-300'>Client Changed the Direction</Heading1>
          <Heading3 className='text-center'>
            The Guide app changed their business proposition from a <br />
            Learning Management System (LMS) → Post Therapy Mental Healthcare App <br />
            aim to find a niche market.
          </Heading3>
      </PaddedFlexBox>
      <PageContentContainer>
        <SectionTitle id="07" title="The Detour: Adapting to New Direction">
        </SectionTitle>
        <TwoColumn>
          <PaddedFlexBox>
            <Heading2>Challenges</Heading2>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Research Misalignment</Heading3>
              <BaseText>
              Adapting to the change in focus was initially difficult. We need further research to understand the new target audience and ensure our work aligns with their needs.              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Niche Market Identification</Heading3>
              <BaseText>
              To validate the niche market potential and differentiate Guide, we conducted a comprehensive market analysis of existing mental healthcare applications.              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Heading2>Restart the Research</Heading2>
            <IconBullet iconUrl="/icons/NumberOne.svg">
              <Heading3>Competitive analysis</Heading3>
              <BaseText>
              Conducted Competitive analysis of different apps and websites in the market with the similar purpose, including features and business model analysis.              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/NumberTwo.svg">
              <Heading3>Thematic Analysis</Heading3>
              <BaseText>
              Conducted a thematic analysis of forum discussions to identify the patterns in therapists' experiences on Post Session.              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/NumberThree.svg">
              <Heading3>Secondary Research</Heading3>
              <BaseText>
              We want to analyze video-editor embed platform's investment in in-app editing to understand why platforms build native tools despite existing alternatives.</BaseText>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>  
        <PaddedFlexBox>
          <Heading2>Competitive Analysis</Heading2>
          <BaseText>
          I spearheaded the competitive analysis of mental health applications, identifying two distinct categories: therapist-facing and patient/user-facing. My analysis included a comprehensive review of the therapist-side application workflows, examining each feature in detail.
          <br /><br /> We found a distinct niche emerges in therapist-focused platforms by expanding multimedia capabilities. While patient-focused apps often leverage videos, articles, and guided meditations, therapist-centric tools typically lack this engaging content. Integrating diverse multimedia within therapist-focused platforms could significantly improve patient engagement and adherence, creating a competitive advantage.
          <br /><br />
          </BaseText>
          <Image
            className="w-full h-auto"
            aria-hidden
            src={competitive2Image}
            alt="Competitive Analysis Image"
          />
        </PaddedFlexBox>
        <TwoColumn>
          <PaddedFlexBox>
            <Heading2>Thematic Analysis</Heading2>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Post-Session Enhances Progress, but Flexibility is Key</Heading3>
              <BaseText>
                Some therapists use structured platforms like Blueprint for progress tracking, while others focus on collaborative problem-solving and adapting to the client's pace.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Visual Progress and Practical Tools Increase Motivation</Heading3>
              <BaseText>
              For sustained motivation, patients require platforms that offer visual progress tracking to increase the motivation and some tools or tips can also help them keep on track.
              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Image
              className="w-full h-auto"
              aria-hidden
              src={thematicImage}
              alt="Thematic Image"
            />
          </PaddedFlexBox>
        </TwoColumn>
        <TwoColumn>
          <PaddedFlexBox>
            <Heading2>Secondary Research</Heading2>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3> Why do video editing functions matter?</Heading3>
              <BaseText>
                We analyzed Instagram’s investment in in-app editing to understand why platforms build native tools despite existing alternatives. We found that seamless workflows, faster publishing, collaboration ease, and content polish were core benefits—validating our decision to build a lightweight editor within Guide.
              <br /><br />
              <li>Livemint. (2025, February 5). Instagram launched new video editing app: Know how Edits app will benefit users.</li>
              <li>Upgrow. (2025, February 9). Meta’s Instagram Edits explained: A beginner’s guide to the new video app.</li>
              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Image
              className="w-full h-auto"
              aria-hidden
              src={secondaryImage}
              alt="secondary research Image"
            />
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="08" title="Card Sorting: Redesigning the Navigation">
          <BaseText>
            After the first usability test, we found that many people have concern and differnt thought on the navigation categories, so we decided to conduct a further research on the navigation. We used card sorting to let people categorize the features.
          </BaseText>
        </SectionTitle>
        <TwoColumn>
          <PaddedFlexBox>
            <Heading2>Key Insights</Heading2>
            <IconBullet iconUrl="/icons/Folders.svg">
              <Heading3>Remove 2 Categories</Heading3>
              <BaseText>
              Following the card sorting test results, we decided to remove the "Settings" and "Brand Assets" categories. Because the features within these categories could be integrated into existing ones, reducing cognitive load for users.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/Question.svg">
              <Heading3>Change Categories Name</Heading3>
              <BaseText>
              We also refined the category names for clarity. For instance, we renamed "Caption" to the more direct "Text."
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/MapPinSimple.svg">
              <Heading3>Confusing about Chapter</Heading3>
              <BaseText>
              Users found the "Label Chapter" feature difficult to categorize. During our testing, 20% placed it under "Editing," 30% expressed confusion, and 50% categorized it within "Markers."              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
          <PaddedFlexBox className="items-center justify-center">
          <Image
              className="w-full h-auto"
              aria-hidden
              src={cardSortingImage}
              alt="Card Sorting Image"
            />
            <Image
              className="w-full h-auto"
              aria-hidden
              src={cardSorting2Image}
              alt="Card Sorting Image"
            />
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="09" title="Iteration & Cross-Platform Design">
          <BaseText>
            Based on the insights gained from the card sorting activity, we refined our navigation structure. Subsequently, we began developing the mobile low-fi Wireframing and iterated on our desktop high-fidelity design.
          </BaseText>
        </SectionTitle>
          <Heading2>Desktop UI Iteration</Heading2>
          <PaddedFlexBox className="items-center justify-center">
          <Image
              className="w-full h-auto"
              aria-hidden
              src={desktopInterationImage}
              alt="Desktop Interation Image"
            />
          </PaddedFlexBox>
          <Heading2>Mobile UI Iteration</Heading2>
          <PaddedFlexBox className="items-center justify-center">
          <Image
              className="w-full h-auto"
              aria-hidden
              src={mobileInterationImage}
              alt="Mobile Interation Image"
            />
          </PaddedFlexBox>
          <SectionTitle id="10" title="Usability Testing">
          <BaseText>
            Based on the insights gained from the card sorting activity, we refined our navigation structure. Subsequently, we began developing the mobile low-fi Wireframing and iterated on our desktop high-fidelity design.
          </BaseText>
        </SectionTitle>
      </PageContentContainer>
    </div>
  );
}

