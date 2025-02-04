'use client'

import Image from 'next/image';

import { ImageClassNameContext } from '@/components/utilities';

export type ProjectHeroSectionProps = {
  heroCover: React.ReactNode;
  type: string;
  name: string;
  bannerText: string;
  themeColor: string;
  iconUrl: string;
};

export default function ProjectHeroSection(props: ProjectHeroSectionProps) {
  return (
    <main className="relative flex flex-col w-full min-h-[70vh] items-center justify-center">
      <div className="pt-7 pb-7">
        <Image
          src={props.iconUrl}
          alt="logo"
          width={30}
          height={30}
          priority
        />
      </div>
      <span className="pb-4 text-xl font-medium">
        {props.type}
      </span>
      <span className="pb-7 text-5xl font-semibold">
        {props.name}
      </span>
      <div className="relative flex flex-col items-center h-[440px] w-full">
        <ImageClassNameContext.Provider value="h-full w-auto">
          {props.heroCover}
        </ImageClassNameContext.Provider>
      </div>
      <div
        className="flex w-full p-20 min-h-[450px] -mt-20 items-center justify-center"
        style={{backgroundColor: props.themeColor}}
      >
        <span className="text-white text-center text-[40px] leading-normal tracking-[.01em] whitespace-pre-line max-w-5xl font-medium">
          {props.bannerText}
        </span>
      </div>
    </main>
  );
}


