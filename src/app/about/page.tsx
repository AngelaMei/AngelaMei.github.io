'use client'

import type { FC } from 'react';
import Image from 'next/image';
import { BaseText } from '@/components/utilities';

import image1 from '@/public/media/about/img1.png';
import image2 from '@/public/media/about/img2.png';
import image3 from '@/public/media/about/img3.jpg';
import image4 from '@/public/media/about/img4.jpg';
import image5 from '@/public/media/about/img5.jpg';
import letterA from '@/public/media/homepage/angela/A.svg';
import letterN from '@/public/media/homepage/angela/n.svg';
import letterG from '@/public/media/homepage/angela/g.svg';
import letterE from '@/public/media/homepage/angela/e.svg';
import letterEWhite from '@/public/media/homepage/angela/we.svg';
import letterL from '@/public/media/homepage/angela/l.svg';
import letterM from '@/public/media/homepage/angela/M.svg';
import letterI from '@/public/media/homepage/angela/i.svg';
import letterDot from '@/public/media/homepage/angela/dot.svg';

const Page: FC = () => {
  return (
    <div className="relative flex w-full justify-center bg-dark-bg">
      <main className="relative flex flex-col items-center pt-30 sm:pt-50 pb-24 w-full px-4 sm:px-20 gap-y-8 sm:gap-y-20 font-sans text-white">
        <div className="">
          <div
            className="sticky top-30 sm:top-50 flex flex-col items-center max-w-7xl font-picasso z-10"
          >
            <span className="text-center text-7xl sm:text-9xl">ANGELA MEI</span>
            <span className="text-center text-6xl sm:text-8xl sm:pt-10">
              LOVES <span className="text-[#D5501C]">DESIGN</span>,<br/>
              Takes <span className="text-[#DFAC2B]">Photos</span>, Plays<br/>
              <span className="text-[#648A5D]">Volleyball</span> And <span className="text-[#5B9EDC]">Travels</span>.
            </span>
          </div>
          <div className="relative h-440 z-40">
            <Image src={image1} className="absolute top-0 left-1/20 w-30 sm:top-30 sm:left-1/20 sm:w-50 h-auto" alt=""/>
            <Image src={image5} className="absolute top-70 left-2/7 w-60 sm:top-80 sm:left-5/7 sm:w-80 h-auto" alt=""/>
            <Image src={image3} className="absolute top-150 left-0 w-60 sm:top-150 sm:left-1/5 sm:w-80 h-auto" alt=""/>
            <Image src={image2} className="absolute top-240 left-4/7 w-40 sm:top-250 sm:left-5/7 sm:w-60 h-auto" alt=""/>
            <Image src={image4} className="absolute top-300 left-1 w-30 sm:top-350 sm:left-1/6 sm:w-60 h-auto" alt=""/>

          </div>
        </div>
        {/* About Me section*/}
        <div className="flex items-start w-full max-w-6xl pt-8 sm:pt-20">
          {/* Name banner */}
          <div
            className="hidden sm:flex basis-2/5 flex-col items-start font-picasso leading-none select-none pointer-events-none"
          >
            <div className="flex pb-7 justify-center">
              <Image className="h-13 w-auto pr-2" src={letterA} alt=""/>
              <Image className="h-13 w-auto pr-2" src={letterN} alt=""/>
              <Image className="h-13 w-auto pr-2" src={letterG} alt=""/>
              <Image className="h-13 w-auto pr-2" src={letterE} alt=""/>
              <Image className="h-13 w-auto pr-2" src={letterL} alt=""/>
              <Image className="h-13 w-auto" src={letterA} alt=""/>
            </div>
            <div className="flex justify-center items-end">
              <Image className="h-13 w-auto pr-2" src={letterM} alt=""/>
              <Image className="h-13 w-auto pr-2" src={letterEWhite} alt=""/>
              <Image className="h-13 w-auto pr-2" src={letterI} alt=""/>
              <Image className="h-3 w-auto" src={letterDot} alt=""/>
            </div>
          </div>
          <div className="basis-full sm:basis-3/5 flex flex-col gap-y-8">
            <span className="text-2xl font-serif">about me.</span>
            <BaseText>
              Given my name's Mandarin meaning is "unexpected", I always try my best to deliver work that is better than expected.
              <br/><br/>
              With a background in Finance and HCI, I bring a unique analytical perspective to design challenges.<br/><br/>
              Currently pursuing my Master's in Human-Computer Interaction at the University of Maryland, I strive to create digital experiences that are both innovative and practical.
            </BaseText>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
