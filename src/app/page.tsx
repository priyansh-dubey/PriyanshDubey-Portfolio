"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconGitMerge, IconHome, IconMessage, IconSchool, IconTool, IconUser } from "@tabler/icons-react";
import About from "@/components/About"
import { Hero } from "@/components/Hero";
import { Project } from "@/components/Project";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Home = () => {
  const navItems = [
    {
      name: "Home",
      link: "#Hero",
      icon: <IconHome className="h-4 w-4 text-white hover:scale-[1.2] hover:text-blue-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#About",
      icon: <IconUser className="h-4 w-4 text-white  hover:scale-[1.2] hover:text-blue-500 dark:text-white" />,
    },
    {
      name: "Project",
      link: "#Project",
      icon: <IconGitMerge className="h-4 w-4 text-white  hover:scale-[1.2] hover:text-blue-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#Skills",
      icon: <IconTool className="h-4 w-4 text-white  hover:scale-[1.2] hover:text-blue-500 dark:text-white" />,
    },
    {
      name: "Education",
      link: "#Education",
      icon: <IconSchool className="h-4 w-4 text-white  hover:scale-[1.2] hover:text-blue-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#Contact",
      icon: (
        <IconMessage className="h-4 w-4 text-white  hover:scale-[1.2] hover:text-blue-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
    <FloatingNav navItems={navItems} className="navbar" />
     <Hero/>
     <About/>
     <Project/>
     <Skills/>
     <Education/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default Home;
