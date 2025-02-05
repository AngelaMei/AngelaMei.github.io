'use client'

import { createContext, useContext } from 'react';
import clsx from 'clsx';

import Image, { StaticImageData } from 'next/image';

export function PageContentContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full text-white justify-center">
      <div
        className="flex grow flex-col max-w-7xl gap-y-8 sm:gap-y-20 py-20 sm:p-20"
      >

      {children}

      </div>
    </div>
  );
};

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
  children,
  id,
  title,
  subtitle,
}: Readonly<{
  children?: React.ReactNode;
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
      {children}
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
      className="flex gap-x-6 py-3 items-start"
    >
      <div className="self-start">
        <Image
          className="min-w-12"
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
    <div className={`flex flex-col p-7 gap-y-3 ${className ? className : ''}`}>
      {children}
    </div>
  );
}


export const ImageClassNameContext = createContext<string>('');

export function ImageWrapper({
  className = '',
  src,
  alt = 'image',
  children,
}: Readonly<{
  className?: string;
  src?: StaticImageData;
  alt?: string;
  children?: React.ReactNode;
}>) {
  const contextClassName = useContext(ImageClassNameContext);

  return src ? (
    <Image className={clsx(className, contextClassName)} src={src} alt={alt} priority />
  ) : (
    <div className={clsx(className, contextClassName)}>
      {children}
    </div>
  );
}
