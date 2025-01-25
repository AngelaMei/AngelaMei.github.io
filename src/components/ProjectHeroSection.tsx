import Image from "next/image";

export type ProjectHeroSectionProps = {
  imageUrl: string;
  type: string;
  name: string;
  description: string;
  themeColor: string;
  iconUrl?: string;
};

export default function ProjectHeroSection(props: ProjectHeroSectionProps) {
  return (
    <main className="relative flex flex-col min-h-[70vh] items-center justify-center">
      <div className="pt-7 pb-7">
        <Image
          src={props.iconUrl}
          alt="logo"
          width={50}
          height={50}
          priority
        />
      </div>
      <span className="pb-4 text-xl font-medium">
        {props.type}
      </span>
      <span className="pb-7 text-5xl font-semibold">
        {props.name}
      </span>
      <div className="relative h-[440px] w-full">
        <Image
          className="object-contain"
          src={props.imageUrl}
          alt="photo"
          fill={true}
          priority
        />
      </div>
      <div
        className="flex w-screen p-20 min-h-[450px] -mt-20 items-center justify-center"
        style={{backgroundColor: props.themeColor}}
      >
        <span className="text-white text-center text-[40px] leading-normal tracking-[.01em] whitespace-pre-line max-w-5xl font-medium">
          {props.description}
        </span>
      </div>
    </main>
  );
}


