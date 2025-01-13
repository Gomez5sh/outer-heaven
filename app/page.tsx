"use client";
import Section from "@/components/section";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";
import { createClient } from "@/lib/utils/supabase/server";
import { useEffect, useState } from "react";
import Bio from "@/components/bio";

export interface BioData {
  [year: string]: string;
}

export interface Company {
  name: string;
  url: string;
}

interface About {
  id: number;
  created_at?: string;
  title: string;
  sub_title: string;
  description: string;
  bio: BioData;
  quote: string;
  work_companies: Company[];
}

const Page = () => {
  const [about, setAbout] = useState<About | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await createClient()
          .from("about") // Tipado explícito para Supabase
          .select("*")
          .range(0, 9);

        if (error) {
          console.error("Supabase error:", error);
          return;
        }

        if (data && data.length > 0) {
          console.log("Raw response:", data);
          setAbout(data[0]);
        } else {
          console.warn("No data found");
        }
      } catch (e) {
        console.error("Exception caught:", e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <Alert className="w-full p-2 mb-6 dark:bg-[#313134] dark:border-[#313134] border-[#F5F0E8] bg-[#F5F0E8]">
        <AlertDescription className="w-full p-2">
          <div className="flex items-center justify-center text-center w-full dark:text-white text-sm sm:text-base">
            Hello, I&apos;m Emmanuel, an app developer and code lover 😊
          </div>
        </AlertDescription>
      </Alert>

      {about && (
        <>
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
            <div className="flex-grow text-center sm:text-left mb-4 sm:mb-0">
              <h2 className="scroll-m-20 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0">
                {about.title}
              </h2>
              <p className="leading-6 [&:not(:first-child)]:mt-1 text-sm sm:text-base">
                {about.sub_title}
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
              {about.description}
            </p>
          </Section>
          <Section>
            <h3 className="scroll-m-20 text-2xl mb-6 font-semibold tracking-tight border-b-4 border-zinc-900 dark:border-zinc-400 pb-4 w-fit">
              Bio
            </h3>
            <Bio bio={about.bio} work_companies={about?.work_companies} />
          </Section>
          <Section>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              &quot;{about.quote}&quot;
            </blockquote>
          </Section>
        </>
      )}
    </div>
  );
};

export default Page;
