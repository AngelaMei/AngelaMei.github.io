import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import MagicLink from '@/components/MagicLink';

export type ProjectCardProps = {
  pageUrl: string;
  coverImage: StaticImageData;
  type: string;
  name: string;
  role: string;
  description: string;
  imageOnLeft: boolean;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className={`relative flex flex-col ${props.imageOnLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-end justify-start justify-items-start gap-10 w-full`}>
      <MagicLink className="relative self-center sm:justify-self-center" href={props.pageUrl}>
        <Image
          className="w-full h-auto object-contain sm:h-110 sm:w-auto rounded-[2rem] border-none"
          aria-hidden
          src={props.coverImage}
          alt="thumbnail"
        />
      </MagicLink>
      <div className={`basis-xs flex flex-col gap-y-4 px-3 items-start ${props.imageOnLeft ? 'sm:items-start sm:text-left' : 'sm:items-end sm:text-right'} text-white font-sans`}>
        <span className="rounded-3xl bg-[#DFAC2B] text-sm text-black px-5 py-1">
          {props.type}
        </span>
        <MagicLink className="text-3xl sm:text-5xl font-semibold" href={props.pageUrl}>
          {props.name}
        </MagicLink>
        <span className="text-xl font-medium">
          {props.role}
        </span>
        <span className="text-base pb-10">
          {props.description}
        </span>
      </div>
    </div>
  );
}

