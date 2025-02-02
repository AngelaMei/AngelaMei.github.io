'use client'

import { createContext } from 'react';

export const DarkModeContext = createContext<boolean>(false);
export function DarkModeContextProvider({
  children,
  value,
}: Readonly<{
  children: React.ReactNode;
  value: any;
}>) {
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}
