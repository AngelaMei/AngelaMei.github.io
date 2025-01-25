import Image from "next/image";

export function TwoColumn({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="grid grid-cols-2"
    >
      {children}
    </div>
  );
}

export function ThreeColumn({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="grid grid-cols-3"
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  id,
  title,
  subtitle,
}: Readonly<{
  id: string;
  title: string;
  subtitle?: string;
}>) {
  return (
    <div
      className="flex flex-col gap-y-5 items-start"
    >
      <span className="text-8xl font-medium">{id}</span>
      <span className="text-[40px] font-medium">{title}</span>
      {
        subtitle ? (<span className="text-xl">{subtitle}</span>) : ''
      }
    </div>
  );
}

export function IconBullet({
  children,
  iconUrl,
}: Readonly<{
  children: React.ReactNode;
  iconUrl: string;
}>) {
  return (
    <div
      className="flex gap-x-7 py-3 items-start"
    >
      <div className="self-start">
        <Image
          aria-hidden
          src={iconUrl}
          alt="icon"
          height={48}
          width={48}
        />
      </div>
      <div className="grow flex flex-col gap-y-2">
        {children}
      </div>
    </div>
  );
}

export function PaddedFlexBox({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={`flex flex-col p-7 gap-y-3 ${className}`}>
      {children}
    </div>
  );
}
