import Image from "next/image";

import ProjectHeroSection from "@/components/ProjectHeroSection";
import { IconBullet, PaddedFlexBox, PageContentContainer, SectionTitle, TwoColumn } from "@/components/utilities";
import projects from "@/data/projects";

const projectName = 'guide-app';

const projectMetadata = projects.find(project => project.id === projectName)!;

export default function Page() {
  return (
    <div className="flex flex-col items-center pt-24 font-sans">
      <ProjectHeroSection { ...projectMetadata }/>

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
        <TwoColumn>
          <PaddedFlexBox>
            <Image
              className="object-contain rounded-2xl"
              aria-hidden
              src="/media/project/guide-app/DesignSprint.jpg"
              alt="Design Sprint Image"
              width={1175}
              height={653}
            />
          </PaddedFlexBox>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">Project Size</span>
            <span className="text-xl">
              The Design Sprint methodology is at the core of our approach to developing the "Mark & Snip" functionality.<br/><br/>
              This proven framework allows us to quickly address user challenges, generate innovative solutions, and validate them through user-centric testing.
            </span>
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="01" title="Map: Aligning Goals and Problem Discovery"/>
        <TwoColumn>
          <PaddedFlexBox>
            <IconBullet iconUrl="/icons/NumberOne.svg">
              <span className="text-[28px] font-medium">Stakeholder Interviews</span>
              <span className="text-xl">
                Gathered insights from key stakeholders to understand business goals, platform limitations, and the vision for the "Mark & Snip" feature.
              </span>
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
            <span className="text-[32px] font-medium">Lean UX & Business Model Canvas</span>
            <span className="text-xl">
              The Mark & Snip feature for the Guide App addresses the need for an all-in-one learning management tool.<br/><br/>
              Current user challenges include reliance on multiple external tools for video editing. The hypothesis is that creators will prefer integrated tools over external ones, leading to improved productivity, while viewers will find chapter-wise snippets more engaging.
            </span>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Image
              className="object-contain w-full h-auto grow"
              aria-hidden
              src="/media/project/guide-app/Canvas.png"
              alt="Canvas Image"
              width={1717}
              height={1136}
            />
          </PaddedFlexBox>
        </TwoColumn>
        <PaddedFlexBox>
          <span className="text-[32px] font-medium">Key Insights from User Interviews</span>
          <div className="relative min-h-20 w-full">
            <Image
              className="object-contain w-full h-auto"
              aria-hidden
              src="/media/project/guide-app/KeyInsights.png"
              alt="Key Insights Image"
              width={4257}
              height={1940}
            />
          </div>
        </PaddedFlexBox>
        <PaddedFlexBox>
          <span className="text-[32px] font-medium">Competitive Analysis</span>
          <div className="relative min-h-20 w-full">
            <Image
              className="object-contain w-full h-auto"
              aria-hidden
              src="/media/project/guide-app/Competitive.png"
              alt="Competitive Analysis Image"
              width={4256}
              height={2625}
            />
          </div>
        </PaddedFlexBox>
        <SectionTitle id="02" title="Sketch: Ideation and Exploration">
          <ul className="list-inside list-disc pl-3 text-xl">
            <li className="">Collaborative ideation sessions to generate diverse design concepts, e.g. Crazy 8.</li>
            <li className="text-xl">Sketching exercises where team members individually create low-fidelity ideas.</li>
          </ul>
        </SectionTitle>
        <PaddedFlexBox>
          <span className="text-[32px] font-medium">Persona & User Journey</span>
          <span className="text-xl">
            Current user challenges include reliance on multiple external tools for video editing. The hypothesis is that creators will prefer integrated tools over external ones, leading to improved productivity, while viewers will find chapter-wise snippets more engaging.
          </span>
        </PaddedFlexBox>
        <TwoColumn>
          <PaddedFlexBox>
            <Image
              className="object-contain w-full h-auto grow"
              aria-hidden
              src="/media/project/guide-app/UserJourney.png"
              alt="User Journey Image"
              width={2016}
              height={2801}
            />
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Image
              className="object-contain w-full h-auto flex-none"
              aria-hidden
              src="/media/project/guide-app/Persona1.png"
              alt="Persona Image"
              width={1973}
              height={1136}
            />
            <Image
              className="object-contain w-full h-auto flex-none"
              aria-hidden
              src="/media/project/guide-app/Persona2.png"
              alt="Persona Image"
              width={1973}
              height={1136}
            />
          </PaddedFlexBox>
        </TwoColumn>
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
              src="/media/project/guide-app/Sketch.png"
              alt="Sketch Image"
              width={1968}
              height={2033}
            />
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="03" title="Decide: Prioritization and Storyboarding"/>
        <TwoColumn>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">Votes & Story Board</span>
            <span className="text-xl">
              With numerous ideas on the table, the team will evaluate, refine, and select the most promising solutions. Activities include:
            </span>
            <ul className="text-xl list-outside list-disc pl-4">
              <li>Voting on Ideas: Client and team members voted on sketches and designs that best meet user needs.</li>
              <li>Creating a Storyboard: Developing a step-by-step blueprint for the selected solution, outlining how the user will interact with the app.</li>
              <li>Risk Assessment: Identifying potential technical or usability challenges and creating mitigation strategies.</li>
            </ul>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Image
              className="object-contain w-full h-auto grow"
              aria-hidden
              src="/media/project/guide-app/Votes.png"
              alt="Votes Image"
              width={1993}
              height={1349}
            />
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="04" title="Prototype: Building a Realistic Model">
          <div className="text-xl">
            <span>In this phase, we developed a functional prototype that reflects the "Mark & Snip" tool’s key features, such as:</span>
            <br/><br/>
            <ul className="list-inside list-disc pl-8">
              <li>Collaborative ideation sessions to generate diverse design concepts, e.g. Crazy 8.</li>
              <li>Sketching exercises where team members individually create low-fidelity ideas.</li>
            </ul>
          </div>
        </SectionTitle>
        <TwoColumn>
          <PaddedFlexBox>
            <video autoPlay muted loop className="object-contain w-full h-auto grow rounded-xl">
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
          <div className="text-xl">
            <span>The final phase focuses on testing the prototype with a diverse group of users to gather insights on usability and functionality. Activities include:</span>
            <br/><br/>
            <ul className="list-inside list-disc pl-8">
              <li>Conducting user testing sessions to observe how users interact with the prototype.</li>
              <li>Collecting qualitative and quantitative feedback on ease of use, efficiency, and overall experience.</li>
              <li>Identifying areas for improvement or enhancement.</li>
              <li>Iterating on the prototype based on user input.</li>
            </ul>
          </div>
        </SectionTitle>
        <TwoColumn>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">6 Scenario Ease Score</span>
            <Image
              className="object-contain w-full h-auto grow-none"
              aria-hidden
              src="/media/project/guide-app/Chart.png"
              alt="Chart Image"
              width={2016}
              height={1385}
            />
          </PaddedFlexBox>
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
        </TwoColumn>
        <TwoColumn>
          <PaddedFlexBox>
            <Image
              className="object-contain w-full h-auto grow"
              aria-hidden
              src="/media/project/guide-app/heatmap.png"
              alt="Chart Image"
              width={2016}
              height={1429}
            />
          </PaddedFlexBox>
          <PaddedFlexBox>
            <span className="text-[32px] font-medium">Feedback</span>
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

