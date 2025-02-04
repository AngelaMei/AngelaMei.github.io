'use client'

import { createContext } from 'react';

export const DarkModeContext = createContext<boolean>(false);
export function DarkModeContextProvider({
  children,
  value,
}: Readonly<{
  children: React.ReactNode;
  value: boolean;
}>) {
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}
