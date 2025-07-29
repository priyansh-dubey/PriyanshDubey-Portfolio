"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  easeInOut,
} from "motion/react";
import { cn } from "@/lib/utils";
import {Goldman} from "next/font/google";
const goldman = Goldman({
  subsets: ["latin"],
  weight: "400", // Michroma only supports 400
});

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.01) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(true);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4 ",
          className
        )}
      >
        {navItems.map((navItem: { name: string; link: string; icon?: JSX.Element }, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-white py-2 hover:text-blue-500 md:hover:scale-[1.1]"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className={`hidden sm:block text-[1rem] font-bold rounded-full px-2 pb-1 mx-1 ${goldman.className}`}>{navItem.name}</span>
            
          </a>
        ))}
        
        <motion.span className="absolute invisible md:visible inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[4px] " animate={{x: [-100 , 0 ,100 ,0 ,-100],
        }} transition={{duration:5 , repeat:Infinity ,ease:easeInOut,}}  />
      </motion.div>
    </AnimatePresence>
  );
};
