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
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8"
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
      className="grid grid-cols-1 sm:grid-cols-3"
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
      className="flex flex-col gap-y-5 items-start px-4 sm:px-0"
    >
      <span className="text-8xl font-medium">{id}</span>
      <span className="text-[36px] sm:text-[40px] font-medium">{title}</span>
      {
        subtitle ? (<span className="text-base sm:text-xl">{subtitle}</span>) : ''
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
      className="flex gap-x-5 py-3 items-start"
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

export function Heading1({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <h1 className={`text-[32px] sm:text-[40px] font-medium ${className ? className : ''}`}>
      {children}
    </h1>
  );
}

export function Heading2({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <h2 className={`text-[28px] sm:text-[32px] font-medium ${className ? className : ''}`}>
      {children}
    </h2>
  );
}

export function Heading3({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <h3 className={`text-[24px] sm:text-[28px] font-medium ${className ? className : ''}`}>
      {children}
    </h3>
  );
}

export function BaseText({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <p className={`text-base sm:text-xl ${className ? className : ''}`}>
      {children}
    </p>
  );
}

export function ListBullet({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <ul className={`text-base sm:text-xl list-disc list-outside pl-8 ${className ? className : ''}`}>
      {children}
    </ul>
  );
}