'use client'

import Link from 'next/link';
import type { FC, PropsWithChildren, MouseEvent } from 'react';
import { useRef } from 'react';
import { useLenis } from 'lenis/react';

type MagicLinkProps = {
  className?: string;
  href: string;
};

const MagicLink: FC<PropsWithChildren<MagicLinkProps>> = ({ children, ...rest }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const lenis = useLenis();

  const onClick = (e: MouseEvent) => {
    if (lenis?.isScrolling) {
      // Prevent the event from causing page transition immediately
      e.preventDefault();
      e.stopPropagation();

      // Stop Lenis
      lenis.stop();
      linkRef.current?.click();
      // Resume Lenis
      lenis.start();
    }
  };

  return (
    <Link { ...rest } ref={linkRef} prefetch={true}>
      {/* Use a child div to register the handler so that the handler is not called recursively. */}
      <div onClick={onClick}>
        {children}
      </div>
    </Link>
  );
};

export default MagicLink;
