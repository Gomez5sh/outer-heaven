import React from "react";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./ThemeProvider";
import Navbar from "./navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <div
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          min-h-screen 
          bg-background 
          text-foreground 
          dark:bg-[#202023] 
          dark:text-[#F0E7DB] 
          bg-[#F0E7DB] 
          text-[#1E1E1E]
        `}
      >
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Emmanuel Gomez - Homepage</title>
        </Head>

        <Navbar />

        <div className="max-w-4xl w-full mx-auto pt-14">
          <main>{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
