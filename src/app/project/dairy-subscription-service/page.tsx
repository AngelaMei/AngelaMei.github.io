import Image from 'next/image';

import ProjectHeroSection from '@/components/ProjectHeroSection';
import { IconBullet, ImageWrapper, PaddedFlexBox, PageContentContainer, SectionTitle, TwoColumn, ThreeColumn, Heading1, Heading2, Heading3, BaseText } from '@/components/utilities';
import projects from '@/data/projects';

import chart1 from '@/public/media/project/dairy-subscription-service/Chart1.png';
import chart2 from '@/public/media/project/dairy-subscription-service/Chart2.png';
import chart3 from '@/public/media/project/dairy-subscription-service/Chart3.png';
import timelineImage from '@/public/media/project/dairy-subscription-service/Timeline.png';
import prototype1Image from '@/public/media/project/dairy-subscription-service/Prototype1.png';
import prototype2Image from '@/public/media/project/dairy-subscription-service/Prototype2.png';
import backstageImage from '@/public/media/project/dairy-subscription-service/Backstage.png';
import illustrationImage from '@/public/media/project/dairy-subscription-service/Illustration.png';
import statisticsImage from '@/public/media/project/dairy-subscription-service/Statistic.png';
import iPhoneFrameImage from '@/public/media/project/coin-toss/iPhoneFrame.png';

const projectName = 'dairy-subscription-service';

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
              <source src="/media/project/dairy-subscription-service/Video1.mp4" type="video/mp4"/>
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
              This project addresses the challenges faced by a local dairy agency, primarily a severe lack of workforce in customer service.
              <br/>
              <br/>
              To alleviate this, a Line bot was developed to automate key customer interactions, streamline stock management, and improve delivery efficiency.            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox className="sm:justify-self-end">
            <IconBullet iconUrl="/icons/LegoSmiley.svg">
              <Heading2>Role</Heading2>
              <BaseText>Interviewer, Designer, Developer</BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/Wrench.svg">
              <Heading2>Tool</Heading2>
              <BaseText>Figma, Bing AI, Contextual Inquiry,<br/>
              Google App Script, Line Official Account</BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/Eyes.svg">
              <Heading2>Project Size</Heading2>
              <BaseText>Freelance Project, Team of 3 developers</BaseText>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="01" title="Timeline"/>
        <PaddedFlexBox>
          <Image
            className="w-full h-auto"
            aria-hidden
            src={timelineImage}
            alt="Timeline Image"
          />
        </PaddedFlexBox>
        <SectionTitle id="02" title="Company's Challenge"subtitle="The Company faced the challenge of promoting their service and dairy product into a competitive market. With limited marketing budget and a need to reach a specific target audience, traditional advertising methods were deemed ineffective."/>
        <ThreeColumn>
          <PaddedFlexBox className="items-center text-center">
            <Image
              className="w-20 h-auto"
              aria-hidden
              src="/icons/Barbell.svg"
              alt="icon"
              width={20}
              height={20}
            />
            <Heading3>Lack Work Force</Heading3>
            <BaseText>
              Since the business is a start-up, only 3 staff work on costumer service and had to deal with over 100 customers per day, which caused overworking.
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox className="items-center text-center">
            <Image
              className="w-20 h-auto"
              aria-hidden
              src="/icons/Cow.svg"
              alt="icon"
              width={20}
              height={20}
            />
            <Heading3>Stock Management</Heading3>
            <BaseText>
              Since the business is a start-up, only 3 staff work on costumer service and had to deal with over 100 customers per day, which caused overworking.
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox className="items-center text-center">
            <Image
              className="w-20 h-auto"
              aria-hidden
              src="/icons/Truck.svg"
              alt="icon"
              width={20}
              height={20}
            />
            <Heading3>Delivery Optimization</Heading3>
            <BaseText>
            In order to decrease the delivery cost, the agency have to optimize the best route of the 600 addresses per week.            </BaseText>
          </PaddedFlexBox>
        </ThreeColumn>
        <SectionTitle id="03" title="Core Findings" subtitle='I conducted a thorough analysis of data collected from the origin system, qualitative interviews, and surveys, and found the following.'/>
        <ThreeColumn>
          <PaddedFlexBox className="items-center text-center">
            <Image
              className="w-4/5 h-auto self-center"
              aria-hidden
              src={chart3}
              alt="chart shows 69%"
            />
            <Heading3>Customer Frustrates</Heading3>
            <BaseText>
              Changing weekly delivery amounts is a source of frustration for 78% of customers, who often encounter long wait times for customer service.          
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox className="items-center text-center">
            <Image
              className="w-4/5 h-auto self-center"
              aria-hidden
              src={chart1}
              alt="chart shows 78%"
            />
            <Heading3>Time Waste</Heading3>
            <BaseText>
              Due to the delivery amount flexibility the agency offer to their customers, the customer service used 69% of their time adjust the delivery amount
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox className="items-center text-center">
            <Image
              className="w-4/5 h-auto self-center"
              aria-hidden
              src={chart2}
              alt="chart shows 20%"
            />
            <Heading3>Stock Waste</Heading3>
            <BaseText>
              We observed that 20% of stocks in average were wasted per week, due to not timely adjustment of customers’ delivery order
            </BaseText>
          </PaddedFlexBox>
        </ThreeColumn>
        <SectionTitle id="04" title="Prototype 1 and User Testing"/>
        <PaddedFlexBox>
          <Heading2>Prototype 1</Heading2>
          <BaseText>
            After discussing with the CEO and conducting basic user research, we decided to build up a website for customer to check their left stocks and adjust their delivery order first.
          </BaseText>
          <Image
            className="w-full h-auto rounded-sm"
            aria-hidden
            src={prototype1Image}
            alt="Prototype1 Image"
          />
        </PaddedFlexBox>
        <TwoColumn>
          <PaddedFlexBox>
            <Heading2>User Testing</Heading2>
            <BaseText>
              However, when we finished the first prototype, we invited some customers to try the new applications, but their reactances did not seem so well. 
              <br/><br/>According to the interviews, they pointed out that it is inconvenient to download a new APP and learn to use the new APP and interface, decreasing the accessibility and the willingness to purchase.
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <IconBullet iconUrl="/icons/SmileyNervous.svg">
              <Heading3>Preference for Existing Platforms</Heading3>
              <BaseText>
                Customers expressed a strong preference for utilizing existing platforms, Line, which is the most widely used messaging app in Taiwan.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/SmileySad.svg">
              <Heading3>Limited Tech Savviness</Heading3>
              <BaseText>
              50% of the target customer base consists of individuals aged 50 and above with limited technological proficiency.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/SmileyXEyes.svg">
              <Heading3>Lack of Interaction</Heading3>
              <BaseText>
              Customers felt a lack of human interaction, potentially reducing their trust and comfort level, leading to decreased purchase intent.
              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="05" title="Improvement & Prototype 2 "/>
        <TwoColumn>
          <PaddedFlexBox>
            <Heading2>Redesign</Heading2>
            <BaseText>
              Therefore, we found that we missed an important factor most of our customers originally used Line, the most widely use communication application in Taiwan, and 92% of our customers mainly use Line as the customer service tool and 8% of them use Meta and phone calls.
              <br/><br/>
              As a result, we changed our decision of making a new website into extending the original functions on the Line Official Account and building up an automatic response robot.
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Image
              className="w-full h-auto rounded-sm"
              aria-hidden
              src={prototype2Image}
              alt="Prototype2 Image"
            />
          </PaddedFlexBox>
        </TwoColumn>
        <TwoColumn>
          <PaddedFlexBox>
            <Heading2>Client-Side Solutions</Heading2>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Focus on the Line Platform</Heading3>
              <BaseText>
                Design the entire user interface and interaction flow within the Line environment. Avoid forcing users to leave the app.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Customer Self-service</Heading3>
              <BaseText>
                To solve the lack of workforce, we decided to let customers modify their delivery amount before the company starts the delivery process.
                <br/><br/>
                Therefore, staff would not have to spend a lot of time dealing with those order changes and customers still have flexibility on their delivery amount.
              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
          <PaddedFlexBox className="relative h-165">
            <div className="self-center relative h-151">
              <Image
                className="relative w-auto h-full z-30"
                aria-hidden
                src={iPhoneFrameImage}
                alt="Wireframe"
              />
              <video
                autoPlay muted loop playsInline
                className="absolute left-[25px] h-139 top-[24px] rounded-3xl z-0"
              >
                <source src="/media/project/dairy-subscription-service/Video1.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          </PaddedFlexBox>
        </TwoColumn>
        <TwoColumn>
          <PaddedFlexBox>
            <Image
              className="w-full h-auto rounded-sm"
              aria-hidden
              src={backstageImage}
              alt="Backstage Image"
            />
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Heading2>Client-Side Solutions</Heading2>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Efficient Data Management</Heading3>
              <BaseText>
              Develop a robust and scalable database to store and manage customer data, order information, stock levels, and delivery schedules.
              </BaseText>
            </IconBullet>
            <IconBullet iconUrl="/icons/ArrowRight.svg">
              <Heading3>Automated Order Processing</Heading3>
              <BaseText>
                Automate order processing, including order confirmation, stock adjustments, and delivery scheduling, to minimize manual intervention.
              </BaseText>
            </IconBullet>
          </PaddedFlexBox>
        </TwoColumn>
        <SectionTitle id="06" title="AI-Generated Illustrations"/>
        <PaddedFlexBox>
          <Heading2>Bing AI</Heading2>
          <BaseText>
            Given the company's distinctive logo featuring a border collie, I sought to seamlessly integrate this visual element throughout the Line bot interface. To achieve this, I utilized Bing AI to generate a series of charming and unique border collie illustrations.
            <br/><br/>
            These AI-generated illustrations not only added a playful and consistent visual identity, reinforcing the company's brand, but also improved user experience in several ways. They served as visual cues, guiding users through the various functionalities of the Line bot. For example, an illustration of a happy border collie accompanied the "Order Confirmation" message.
            <br/><br/>
          </BaseText> 
          <Image
            className="w-full h-auto rounded-sm"
            aria-hidden
            src={illustrationImage}
            alt="Illustration Image"
          />
        </PaddedFlexBox>
        <SectionTitle id="07" title="Project Status"/>
        <TwoColumn>
          <PaddedFlexBox>
            <Heading2>Current Status</Heading2>
            <BaseText>
              According to the backstage statistics, it helps reduce 50% of manual messages per month.The solution is not only simpler and cheaper than building a website but also more effective and solves the problems.
            </BaseText>
            <BaseText>
              <a href="https://lin.ee/Fmte8N8" className="underline underline-offset-8 hover:text-sky-300" target="_blank" rel="noreferrer">Live Product</a>
            </BaseText>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Image
              className="w-full h-auto rounded-sm"
              aria-hidden
              src={statisticsImage}
              alt="statistics Image"
            />  
          </PaddedFlexBox>
        </TwoColumn>
      </PageContentContainer>
    </div>
  );
}



