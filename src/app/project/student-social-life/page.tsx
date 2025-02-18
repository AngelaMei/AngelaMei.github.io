import Image from 'next/image';

import ProjectHeroSection from '@/components/ProjectHeroSection';
import { IconBullet, ImageWrapper, PaddedFlexBox, PageContentContainer, SectionTitle, TwoColumn, ThreeColumn, Heading1, Heading2, Heading3, BaseText } from '@/components/utilities';
import projects from '@/data/projects';

import macbookSVG from '@/public/media/mockup/Macbook.svg';
import timelineImage from '@/public/media/project/student-social-life/timeline.png';
import affinityDiagramImage from '@/public/media/project/student-social-life/affinity.png';
import decisionModelImage1 from '@/public/media/project/student-social-life/Descion_1.png';
import decisionModelImage2 from '@/public/media/project/student-social-life/Descion_2.png';
import personaImage1 from '@/public/media/project/student-social-life/Persona_1.png';
import personaImage2 from '@/public/media/project/student-social-life/Persona_2.png';
import wallwalkImage from '@/public/media/project/student-social-life/Wallwalk.png';
import hotIdeaImage from '@/public/media/project/student-social-life/HotIdeas.png';
import envisioningImage from '@/public/media/project/student-social-life/Envisioning.png';
import lowFiImage1 from '@/public/media/project/student-social-life/low-fi_1.gif';
import lowFiImage2 from '@/public/media/project/student-social-life/low-fi_2.gif';


const projectName = 'student-social-life';

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
              src={macbookSVG}
              alt="Wireframe"
            />
            <video
              autoPlay muted loop playsInline
              className="absolute w-[80.5%] bottom-[67px] top-[10px] left-[40px] md:bottom-[14px] md:left-[73px] md:w-[80.5%] z-0"
            >
              <source src="/media/project/student-social-life/Video.mov" type="video/mp4"/>
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
              This project, conducted as part of a User Research course, investigated the social lives of undergraduate Information Science students at the University of Maryland. 
              <br/>
              <br/>
              Through surveys, interviews, and a comprehensive analysis of student experiences, the research aimed to understand the factors influencing student participation in university events and clubs. These insights were then used to develop a conceptual design for a new events platform that better addresses student needs and fosters a stronger sense of community.
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox className="sm:justify-self-end">
            <IconBullet iconUrl="/icons/LegoSmiley.svg">
              <Heading2>Role</Heading2>
              <BaseText>Interviewer, Moderator, Designer</BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/Wrench.svg">
              <Heading2>Tool</Heading2>
              <BaseText>Figma, Miro, Adobe Illustrator,<br/>
              Contextual Inquiry, Interview and Surveys</BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/Eyes.svg">
              <Heading2>Project Size</Heading2>
              <BaseText>Group assignment with 6 team members</BaseText>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="01" title="Research Goals & Questions" subtitle="Our research aimed to gain valuable insights from undergraduate Information Science students residing both on and off campus. Specifically, we sought to gain a deeper understanding of the emotions and experiences of students regarding participation in events and clubs."/>
        <PaddedFlexBox className="items-center justify-center">
          <Image 
            src="/icons/Quotes.svg" 
            alt="quote Icon" 
            width={50} 
            height={50} 
          />
          <Heading2 className='text-center'>
            What <span className='text-lime-300'>encourages/stops</span>
            <br/>
            students to join events and organizations? 
          </Heading2>
          <Heading2 className='text-center'>
            How do they usually <span className='text-lime-300'>decide</span> to <br/>participate in the event?
          </Heading2>
        </PaddedFlexBox>
        <SectionTitle id="02" title="Timeline"/>
        <PaddedFlexBox>
          <Image
            className="w-full h-auto"
            aria-hidden
            src={timelineImage}
            alt="Timeline Image"
          />
        </PaddedFlexBox>
        <SectionTitle id="03" title="Outcomes and Core Findings" subtitle='Throughout the affinity diagram, decision point model, and persona and journey map stages, we uncovered several core findings that we used to shape our conceptual design.'/>
        <TwoColumn>
          <PaddedFlexBox>
            <IconBullet iconUrl="/icons/SmileyNervous.svg">
              <Heading3>Limited Awareness</Heading3>
              <BaseText>
              Students often don't know about the many events and clubs happening on campus.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/SmileySad.svg">
              <Heading3>Lack Relevant Information</Heading3>
              <BaseText>
              It's hard for students to easily find information about events, like when they are, where they are, and what they're about.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/SmileyXEyes.svg">
              <Heading3>Desire for Career-Oriented</Heading3>
              <BaseText>
              Students want more events that can help them with their future careers, like networking events or workshops.
              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <IconBullet iconUrl="/icons/SmileyNervous.svg">
              <Heading3>Lack of Interests</Heading3>
              <BaseText>
              Students often don't know about the many events and clubs happening on campus.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/SmileySad.svg">
              <Heading3>Not Engaging Enough</Heading3>
              <BaseText>
              Students prefer events that are fun and involve active participation, rather than just passive listening.              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/SmileyXEyes.svg">
              <Heading3>Lack of Time and Energy</Heading3>
              <BaseText>
              Students are busy with classes, work, and other commitments, making it hard to find time for events.              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <PaddedFlexBox>
          <Heading2>Affinity Diagram</Heading2>
          <BaseText>
          The Affinity Diagram is the simplest way to organize field data. It arranges the notes from Interpretation Sessions into a hierarchy that reveals common issues and themes across all users.
          <br/><br/>
          The Affinity shows the scope of the problem: it reveals in one place all the issues, worries, and key elements of the users’ lives relevant to the team’s focus.
          </BaseText>
          <Image
            className="w-full h-auto rounded-sm"
            aria-hidden
            src={affinityDiagramImage}
            alt="Affinity Diagram Image"
          />
        </PaddedFlexBox>
        <PaddedFlexBox>
          <Heading2>Decision Point Model</Heading2>
          <BaseText>
          We concluded on six main factors- timing, location, relations, takeaways, interest, and communications.
          </BaseText>
        </PaddedFlexBox>
        <TwoColumn>
          <PaddedFlexBox>
          <Image
            className="w-full h-auto rounded-sm"
            aria-hidden
            src={decisionModelImage1}
            alt="Affinity Diagram Image"
          />
          </PaddedFlexBox>
          <PaddedFlexBox>
          <Image
            className="w-full h-auto rounded-sm"
            aria-hidden
            src={decisionModelImage2}
            alt="Affinity Diagram Image"
          />
          </PaddedFlexBox>
        </TwoColumn>
        <PaddedFlexBox>
          <Heading2>Persona and Journey Map</Heading2>
          <BaseText>
          Based on the insights from our interviews and affinity map, we developed 2 personas that are representative of the goals and pain points of our target users. 
          <br/><br/>
          Personas are a great tool for easily communicating who the target users are (Holtzblatt & Beyer, 2017, Chapter 8.) Developing these personas was instrumental in gaining a deeper understanding of our users, and helped our client connect with our research findings.
          </BaseText>
        </PaddedFlexBox>
        <TwoColumn>
          <PaddedFlexBox>
          <Image
            className="w-full h-auto rounded-sm"
            aria-hidden
            src={personaImage1}
            alt="Affinity Diagram Image"
          />
          </PaddedFlexBox>
          <PaddedFlexBox>
          <Image
            className="w-full h-auto rounded-sm"
            aria-hidden
            src={personaImage2}
            alt="Affinity Diagram Image"
          />
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="04" title="Wall Walk & Visioning"/>
        <TwoColumn>
          <PaddedFlexBox>
            <Heading2>Wall Walk</Heading2>
            <BaseText>
              Wall walk involves displaying ideas, sketches, or research findings on a wall or large surface. Team members then physically move around, observing, discussing, and annotating the presented information. 
              <br/><br/>
              This collaborative and visual approach fosters critical thinking, encourages diverse perspectives, and sparks unexpected connections. Wall walks are particularly valuable for brainstorming, identifying patterns, and refining design concepts.
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Image
              className="w-full h-auto rounded-sm"
              aria-hidden
              src={wallwalkImage}
              alt="wall walk Image"
            />
          </PaddedFlexBox>
        </TwoColumn>
        <TwoColumn>
          <PaddedFlexBox>
            <Image
              className="w-full h-auto rounded-sm"
              aria-hidden
              src={hotIdeaImage}
              alt="Hot Ideas Image"
            />
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Heading2>Hot Ideas</Heading2>
            <BaseText>
            We collected hot ideas from wall walk, including tiered events for different skill levels, a customizable app for event discovery and friend tracking, and a streamlined social platform for easy registration. 
            <br/><br/>
            To accommodate busy schedules, larger events could be offered in two sessions. Additionally, initiatives like iSchool-hosted fairs and showcasing student projects could foster professional connections and enhance the overall student experience.
            </BaseText>
          </PaddedFlexBox>
        </TwoColumn>
        <PaddedFlexBox>
          <Heading2>Envisioning & Design Ideas</Heading2>
            <Image
              className="w-full h-auto rounded-sm"
              aria-hidden
              src={envisioningImage}
              alt="envisioning Image"
            />
        </PaddedFlexBox>
        <SectionTitle id="05" title="Product Concept & Lo-fi Prototype"/>
        <TwoColumn>
          <PaddedFlexBox>
            <Image
              className="w-full h-auto rounded-sm"
              aria-hidden
              src={lowFiImage1}
              alt="wall walk Image"
            />
          </PaddedFlexBox>
          <PaddedFlexBox>
            <IconBullet iconUrl="/icons/Intersect.svg">
              <Heading3>Integration with ELMS</Heading3>
              <BaseText>
              Seamlessly integrate the events platform with the university's learning management system (ELMS) to increase awareness and drive student engagement.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/Ranking.svg">
              <Heading3>Level Assessment</Heading3>
              <BaseText>
              Address student anxiety regarding skill level in coding events by incorporating a clear and accessible level assessment system.
              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <TwoColumn>
          <PaddedFlexBox>
            <IconBullet iconUrl="/icons/CalendarCheck.svg">
              <Heading3>Schedule Planning Tool</Heading3>
              <BaseText>
              Assist students in navigating scheduling conflicts and time constraints, particularly relevant for commuting students, by providing a user-friendly schedule planning tool.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/ChatCircleDots.svg">
              <Heading3>Post-Event Feedback Collection</Heading3>
              <BaseText>
              Implement a streamlined and efficient system for collecting post-event feedback to continuously improve the quality and relevance of future events.
              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Image
              className="w-full h-auto rounded-sm"
              aria-hidden
              src={lowFiImage2}
              alt="wall walk Image"
            />
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="06" title="Vlog"/>
        <PaddedFlexBox>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nV2b-Zpt7uo?si=ayiz1I_gWfxsttrX" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>        </PaddedFlexBox>
      </PageContentContainer>
    </div>
  );
}



