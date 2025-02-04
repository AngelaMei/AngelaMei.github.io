import Header from '@/components/Header';
import { DarkModeContextProvider } from '@/context';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DarkModeContextProvider value={false}>
      <Header/>

      {children}
    </DarkModeContextProvider>
  );
}

