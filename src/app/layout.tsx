import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const albertSans = Albert_Sans({
  variable: "--font-albertsans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mei Yu Chi | UI/UX Designer",
  description: "Mei!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.variable} antialiased`}
      >
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
