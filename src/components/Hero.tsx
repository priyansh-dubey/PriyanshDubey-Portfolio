"use client";

import React from "react";
import { Michroma , Parisienne ,Aladin, Goldman} from "next/font/google";
import ProfileCard from '@/components/ui/ProfileCard'
import CircularText from '@/components/ui/CircularText';
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { IconDownload } from "@tabler/icons-react";
import Image from 'next/image';
import {easeInOut, motion} from "motion/react"


const michroma = Michroma({
  subsets: ["latin"],
  weight: "400", // Michroma only supports 400
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400", 
});

const goldman = Goldman({
  subsets: ["latin"],
  weight: "400", 
});

const aladin = Aladin({
  subsets: ["latin"],
  weight: "400", 
});

export function Hero() {
    
    const words = ["Namaste", "Hello", "Hola", "Bonjour"];
    const Text = `A passionate Fullstack Developer with creative thinking. Loves creating sleek designs and best softwares out of the box, I always wanna make products the best and most efficient.`;
  return (
    <div id="Hero" className="relative flex md:h-[40rem] overflow-hidden h-screen w-full rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div 
         className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#ffffff"
      />
      <div className="block md:flex place-items-center w-full justify-center ">
        <div className="relative z-10 mx-auto w-full p-4 pt-20 mt-0 md:ml-10 md:mt-15 md:pt-0 ">
           <div className="mt-18 md:mt-0">
            <motion.h1 
            initial={{scale:0, opacity:0, x:-100,y:0}}
            animate={{scale:1, opacity:1 , x:3,y:-5}}
            transition={{delay:0.8, duration:1 , ease:easeInOut}}
            className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 w-[100%] bg-clip-text text-center text-4xl font-bold-300 text-transparent md:text-7xl">
            <FlipWords words={words} className={`${michroma.className} text-white`}/>World! <p className="mt-5 md:mt-0">I&rsquo;M <span className={`${parisienne.className} text-blue-500`}>Priyansh</span></p>
            </motion.h1>
            <motion.p
            initial={{scale:0, opacity:0, x:-100,y:0}}
            animate={{scale:1, opacity:1 , x:0,y:0}}
            transition={{delay:1.5, duration:1 , ease:easeInOut}} 
            className="mx-auto mt-auto md:mt-5 max-w-lg text-center text-base font-normal text-neutral-300">
              <TextGenerateEffect words={Text} className={`${goldman.className} h-[15rem] md:h-auto`}/>
            </motion.p>
          </div>
          <motion.div 
           initial={{scale:0, opacity:0, x:-100,y:0}}
           animate={{scale:1, opacity:1 , x:0,y:0}}
           transition={{delay:4.5, duration:1 , ease:easeInOut}}
           className="text-center mt-7 md:mt-7 flex justify-center gap-5 md:gap-6  items-center">
            <a href="/PriyanshResume.PDF" download>
              <div 
                className=" text-sm md:text-2xl flex p-2 px-3 rounded-2xl hover:bg-blue-500 hover:border-blue-500 hover:text-black justify-center items-center text-white border border-neutral-200"
            >
            Resume <IconDownload className="ml-1 w-[10] md:w-[30]"/> 
            </div>
            </a>
            <div
                  className=" text-white p-2.5 px-3 rounded-2xl hover:bg-blue-500 hover:border-blue-500 hover:text-black text-sm md:text-xl border border-neutral-200"
              >
              <a href="#Contact">Let&rsquo;s connect !</a>
            </div>
          </motion.div>
        </div>
        <motion.div 
        initial={{scale:0, opacity:0}}
        animate={{scale:1, opacity:1}}
        transition={{delay:2.5, duration:2 , ease:easeInOut}}
        className="grid grid-cols-1 md:visible invisible lg:grid-cols-3 max-w-7xl md:ml-5 mx-auto w-[55rem]">
          <ProfileCard
            name="Priyansh Dubey"
            title="Software Engineer"
            avatarUrl="/hero2.jpeg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            className="ml-10 invisible md:visible"
          /> 
        </motion.div>
        <CircularText
          text="OPEN*TO*WORK*"
          onHover="speedUp"
          spinDuration={20}
          className={`${goldman.className} custom-class z-100 invisible md:visible`}
        />
        <motion.div 
           initial={{scale:0, opacity:0, x:-100,y:0}}
           animate={{scale:1, opacity:1 , x:0,y:0}}
           transition={{delay:0.5, duration:0.8 , ease:easeInOut}}
           className="absolute top-2 md:top-5 left-3 md:left-5">
        <Image src="/logo-white.png" alt="logo" width={70} height={70} className=" w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]"></Image>
        </motion.div>
      </div>
    </div>
  );
}
