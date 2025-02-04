'use client'

import type { FC, PropsWithChildren } from 'react';
import { useEffect, useRef } from 'react';
import { frame, cancelFrame } from 'motion/react';
import { ReactLenis, type LenisRef } from 'lenis/react';

const SmoothScroll: FC<PropsWithChildren> = ({ children }) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const update = (data: { timestamp: number }) => {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    };

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
