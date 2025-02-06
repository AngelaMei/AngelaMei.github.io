'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import clsx from 'clsx';

import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects';

import letterA from '@/public/media/homepage/angela/A.svg';
import letterN from '@/public/media/homepage/angela/n.svg';
import letterG from '@/public/media/homepage/angela/g.svg';
import letterE from '@/public/media/homepage/angela/e.svg';
import letterEWhite from '@/public/media/homepage/angela/we.svg';
import letterL from '@/public/media/homepage/angela/l.svg';
import letterM from '@/public/media/homepage/angela/M.svg';
import letterI from '@/public/media/homepage/angela/i.svg';
import letterDot from '@/public/media/homepage/angela/dot.svg';

function RotatingText({
  className,
  texts,
  colors,
}: Readonly<{
  className: string;
  texts: string[];
  colors: string[];
}>) {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i: number) => (i + 1) % texts.length);
    }, 3500);

    return () => clearInterval(interval);
  });

  return (
    <div className={clsx('relative', className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -7 }}
          transition={{ duration: 0.5 }}
          className="absolute text-center min-w-max text-nowrap left-0 transform -translate-x-1/2"
          style={{ color: colors[index] }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative flex w-full justify-center bg-dark-bg text-white">
      <main className="flex flex-col items-center max-w-7xl pt-35 pb-24 px-5 sm:px-20 gap-y-8 sm:gap-y-20 font-sans">
        {/* Name banner */}
        <div
          className="flex flex-col items-center font-picasso leading-none select-none pointer-events-none"
        >
          <div className="flex pt-18 pb-10 sm:pt-12 sm:pb-16 justify-center">
            <Image className="h-17 sm:h-30 lg:h-51 w-auto pr-2 sm:pr-3 lg:pr-5" src={letterA} alt=""/>
            <Image className="h-17 sm:h-30 lg:h-51 w-auto pr-2 sm:pr-5 lg:pr-7" src={letterN} alt=""/>
            <Image className="h-17 sm:h-30 lg:h-51 w-auto pr-2 sm:pr-3 lg:pr-5" src={letterG} alt=""/>
            <Image className="h-17 sm:h-30 lg:h-51 w-auto pr-2 sm:pr-4 lg:pr-6" src={letterE} alt=""/>
            <Image className="h-17 sm:h-30 lg:h-51 w-auto pr-2 lg:pr-2" src={letterL} alt=""/>
            <Image className="h-17 sm:h-30 lg:h-51 w-auto" src={letterA} alt=""/>
          </div>
          <div className="flex pt-3 pb-10 sm:pt-11 sm:pb-4 justify-center items-end">
            <Image className="h-17 sm:h-30 lg:h-51 w-auto pr-2 sm:pr-4 lg:pr-7" src={letterM} alt=""/>
            <Image className="h-17 sm:h-30 lg:h-51 w-auto pr-2 sm:pr-3 lg:pr-5" src={letterEWhite} alt=""/>
            <Image className="h-17 sm:h-30 lg:h-51 w-auto pr-2 sm:pr-3 lg:pr-5" src={letterI} alt=""/>
            <Image className="h-3 sm:h-6 lg:h-11 w-auto" src={letterDot} alt=""/>
          </div>
        </div>

        {/* Self introduction section */}
        <div className="flex flex-col items-center font-serif text-white leading-none max-w-2xl">
          <span className="text-lg sm:text-2xl">I am a</span>
          <RotatingText
            className="flex items-center text-4xl sm:text-5xl font-picasso h-13 sm:h-15"
            texts={['Frontend Wizard', 'UX Designer', 'Graphic Designer', 'Travel Lover']}
            colors={['#DFAC2B', '#9BB985', '#ED683F', '#E09F67']}
          />
          <span className="text-lg sm:text-2xl text-center">
            with a background in Human-Computer Interaction, I blend design and technology to create seamless user journeys.
          </span>
        </div>

        <div className="flex flex-col gap-y-8 sm:gap-y-40">
          {
            projects.map((project, id) => (
              <ProjectCard
                { ...project }
                imageOnLeft={(id % 2) ? false : true}
                key={project.name}
              />
            ))
          }
        </div>
      </main>
    </div>
  );
}
