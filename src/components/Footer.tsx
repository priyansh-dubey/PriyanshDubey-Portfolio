import React from 'react'
import { FloatingDock } from "@/components/ui/floating-dock";
import { Aladin } from "next/font/google";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
} from "@tabler/icons-react";

const aladin = Aladin({
  subsets: ["latin"],
  weight: "400", // Michroma only supports 400
});



 const links = [
     {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-300" />
      ),
      href: "https://github.com/priyansh-dubey",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-blue-500" />
      ),
      href: "https://www.linkedin.com/in/priyanshdubey",
    },
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-blue-500" />
      ),
      href: "#",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-300" />
      ),
      href: "#",
    },
   
  ];


const footer = () => {
  return (
    <div className='w-full h-auto flex-col flex justify-center items-center pt-4 bg-black overflow-hidden'>
       <div>
        <div className={`w-full h-auto`}>
          <h1 className={`${aladin.className} w-full h-full text-white md:text-6xl text-3xl text-center`}><i>Get in Touch <span className='text-blue-500'> ↷</span></i></h1>
        </div>
        <div className='my-10'>
          <FloatingDock
        items={links}
      />
        </div>
      </div>
      <div className='w-full h-auto text-white flex flex-col bg-neutral-950 py-5 justify-center items-center'>
        <div className={`${aladin.className} text-xl md:text-2xl my-2`}>Made with <span className='text-red-600'> ❤ </span> by Priyansh</div>
        <div className={`md:text-xl text-[15px] text-neutral-700`}>Copyright © {new Date().getFullYear()} - All right reserved</div>
      </div>
   </div>
  )
}

export default footer