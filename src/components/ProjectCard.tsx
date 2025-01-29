import Image from "next/image";

export type ProjectCardProps = {
  pageUrl: string;
  imageUrl: string;
  type: string;
  name: string;
  description: string;
  iconUrl: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="relative rounded-[2rem] border-none grid grid-cols-1 sm:grid-cols-2 items-center sm:gap-7 w-[stretch] mx-6 min-h-[500px] sm:min-h-[670px] bg-[#F5F5F7] font-sans">
      <div className="relative self-center sm:justify-self-center min-h-60 sm:w-full sm:h-full">
        <Image
          className="object-contain"
          aria-hidden
          src={props.imageUrl}
          alt="thumbnail"
          fill={true}
        />
      </div>
      <div className="flex flex-col items-start px-8 sm:pl-0 sm:pr-20">
        <span
          className="text-md sm:text-xl font-medium pb-4"
        >
          {props.type}
        </span>
        <a
          className="text-3xl sm:text-5xl font-semibold pb-10"
          href={props.pageUrl}
        >
          {props.name}
        </a>
        <span
          className="text-md sm:text-xl pb-10"
        >
          {props.description}
        </span>
      </div>
      <div className="absolute hidden sm:block sm:top-12 sm:right-12">
        <Image
          aria-hidden
          src={props.iconUrl}
          alt="thumbnail"
          height={50}
          width={50}
        />
      </div>
    </div>
  );
}

