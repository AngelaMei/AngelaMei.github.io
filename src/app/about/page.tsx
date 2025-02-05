'use client'

import type { FC } from 'react';
import Image from 'next/image';

import image1 from '@/public/media/about/IMG_1.png';
import image2 from '@/public/media/about/IMG_2.png';
import image3 from '@/public/media/about/IMG_3.JPG';
import image4 from '@/public/media/about/IMG_4.JPG';
import image5 from '@/public/media/about/IMG_5.JPG';
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
      <main className="relative flex flex-col items-center pt-50 pb-24 w-full px-4 sm:px-20 gap-y-8 sm:gap-y-20 font-sans text-white">
        <div className="">
          <div
            className="sticky top-50 flex flex-col items-center max-w-7xl font-picasso z-10"
          >
            <span className="text-center text-9xl">ANGELA MEI</span>
            <span className="text-center text-8xl">
              LOVES <span className="text-[#D5501C]">DESIGN</span>,<br/>
              Takes <span className="text-[#DFAC2B]">Photos</span>, Plays<br/>
              <span className="text-[#648A5D]">Volleyball</span> And <span className="text-[#5B9EDC]">Travels</span>.
            </span>
          </div>
          <div className="relative h-440 z-40">
            <Image src={image1} className="absolute top-30 left-1/20 w-50 h-auto" alt=""/>
            <Image src={image5} className="absolute top-80 left-5/7 w-80 h-auto" alt=""/>
            <Image src={image3} className="absolute top-150 left-1/5 w-80 h-auto" alt=""/>
            <Image src={image2} className="absolute top-250 left-5/7 w-60 h-auto" alt=""/>
            <Image src={image4} className="absolute top-350 left-1/6 w-60 h-auto" alt=""/>

          </div>
        </div>
        {/* About Me section*/}
        <div className="flex items-start w-full max-w-6xl pt-20">
          {/* Name banner */}
          <div
            className="basis-2/5 flex flex-col items-start font-picasso leading-none select-none pointer-events-none"
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
          <div className="basis-3/5 flex flex-col gap-y-8">
            <span className="text-2xl font-serif">about me.</span>
            <span className="text-xl font-sans">
              My name means "not expected" in Mandarin, but my passion for design certainly is.<br/><br/>
              With a background in Finance and Business Administration, I bring a unique analytical perspective to design challenges.<br/><br/>
              Currently pursuing my Master's in Human-Computer Interaction at the University of Maryland, I strive to create digital experiences that are both innovative and practical.
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
