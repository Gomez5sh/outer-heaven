"use client";

import Section from "@/components/layouts/section";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";
import NextLink from "next/link";

const Page = () => {
  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <Alert className="w-full p-2 mb-6 dark:bg-[#313134] dark:border-[#313134] border-[#F5F0E8] bg-[#F5F0E8]">
        <AlertDescription className="w-full p-2">
          <div className="flex items-center justify-center text-center w-full dark:text-white text-sm sm:text-base">
            Hello, I&apos;m Emmanuel a app developer and code lover 😊
          </div>
        </AlertDescription>
      </Alert>

      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
        <div className="flex-grow text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="scroll-m-20 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0">
            Emmanuel Gomez
          </h2>
          <p className="leading-6 [&:not(:first-child)]:mt-1 text-sm sm:text-base">
            Developer | Full Stack Developer | Open Source | Linux Enthusiast
          </p>
        </div>
        <div className="flex-shrink-0 sm:ml-6">
          <Image
            src="/profile.svg"
            alt="Emmanuel Gomez profile photo"
            width={100}
            height={100}
            className="rounded-full border-white border-2 w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-cover inline-block border-solid"
          />
        </div>
      </div>
      <Section>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight border-b-4 border-zinc-900 dark:border-zinc-400 pb-4 w-fit">
          About
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Emmanuel is a frontend developer based in Bogotá, passionate about
          building web applications that blend functional design with practical
          solutions to real-world challenges. His approach goes beyond code: he
          enjoys conceptualizing unique ideas and transforming them into digital
          experiences that positively impact users. Outside of work, he spends
          time exploring new technologies and delving into topics like web
          usability and accessibility. Currently, he is focused on improving and
          learning all aspects of frontend development while deepening his
          understanding of artificial intelligence.
        </p>
      </Section>
      <Section>
        <h3 className="scroll-m-20 text-2xl mb-6 font-semibold tracking-tight border-b-4 border-zinc-900 dark:border-zinc-400 pb-4 w-fit">
          Bio
        </h3>
        <div className="flex flex-row gap-4 w-full space-between mb-2">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            1987
          </h4>
          <p className="leading-6 [&:not(:first-child)]:mt-1">
            Born in Oiba, Colombia.
          </p>
        </div>
        <div className="flex flex-row gap-4 w-full space-between mb-2">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            2019
          </h4>
          <p className="leading-6 [&:not(:first-child)]:mt-1">
            Complete the Fullstack Software Engineer, computer programming in
            Holberton Colombia.specializing in frontend development and software
            design.
          </p>
        </div>
        <div className="flex flex-row gap-4 w-full space-between mb-2">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            2020 - Present
          </h4>
          <p className="leading-6 [&:not(:first-child)]:mt-1">
            Currently working as a Frontend Developer at{" "}
            <NextLink
              href={"https://vertebra.tech/"}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors dark:text-zinc-400 text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100 relative group"
            >
              Vertebra
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 group-hover:w-full"></span>
            </NextLink>
          </p>
        </div>
      </Section>
      <Section>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          &quot;Failure is the foundation of success; and perseverance is the
          key to achieving it.&quot;
        </blockquote>
      </Section>
    </div>
  );
};

export default Page;
