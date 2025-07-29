import React from 'react'
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Michroma , Goldman} from "next/font/google";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from 'next/image';
import ScrollRevealStack from "@/components/ScrollRevealStack";


const michroma = Michroma({
  subsets: ["latin"],
  weight: "400", // Michroma only supports 400
});

const goldman = Goldman({
  subsets: ["latin"],
  weight: "400", 
});



export const Project = () => {
 return (
  <div className='w-full h-auto bg-black text-white overflow-hidden pb-22 border border-black md:pb-25' id='Project'>
    <ScrollRevealStack>
            <div className='flex justify-center items-center pt-5 mt-0 flex-col pb-20'>
            <div className={`${michroma.className} text-3xl md:text-6xl font-bold `}>Project</div>
            <div className="line mt-5 shadow-xl/30inset-x-0 w-1/3 md:w-1/4 mx-auto -bottom-px bg-gradient-to-r from-transparent via-amber-500 to-transparent h-[6px]"></div>
            </div>
    <div className='flex flex-col md:flex-row w-[15rem] md:w-full justify-center items-center flex-wrap mt-2 md:mt-6 h-auto gap-40'>
      <div className='my-10 md:my-12 mr-13 md:mr-0 ml-0 md:ml-0'>
        <PinContainer
        title="AirBNB-Clone link"
        href="https://github.com/priyansh-dubey/Airbnb-clone"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] md:w-[30rem] h-[31rem] md:h-[30rem] ">
          <h3 className={`${michroma.className} max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100`}>
            Airbnb-Clone (FullStack)
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className={`${goldman.className} text-slate-500 `}>
              A full-stack clone of Airbnb featuring user authentication, listing creation, image upload using Cloudinary, and booking functionality. Follows MVC architecture with a dynamic frontend and backend communication.
            </span>
             <p className='mt-2 flex flex-wrap'>
              <span className="pro-btn">EJS-template</span>
              <span className="pro-btn">JavaScript</span>
              <span className="pro-btn">HTML</span>
              <span className="pro-btn">CSS</span>
              <span className="pro-btn">Node.js</span>
              <span className="pro-btn">Express</span>
              <span className="pro-btn">MongoDB</span>
              <span className="pro-btn">Cloudinary</span>
            </p>
          </div>
          <Image src="/Airbnb.jpeg" alt="AirBNB-Image" width={800} height={600} quality={100} className="flex flex-1 w-full h-[10rem] rounded-lg mt-4" ></Image>
        </div>
      </PinContainer>
      </div>
      <div className='my-10 md:my-12 mr-13 md:mr-0 md:ml-0'>
        <PinContainer
        title="Personal Portfolio Website"
        href="/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] md:w-[30rem] h-[31rem] md:h-[30rem]  ">
          <h3 className={`${michroma.className} max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100`}>
            Personal Portfolio Website
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
           <span className={`${goldman.className} text-slate-500 `}>
              A modern, responsive, and animated personal portfolio designed to showcase my skills, projects, and experience. Built using Next.js for blazing-fast performance, styled with Aceternity UI, and enhanced with Reactbit animations and components.
            </span>
             <p className='mt-2 flex flex-wrap'>
              <span className="pro-btn">HTML</span>
              <span className="pro-btn">CCS</span>
              <span className="pro-btn">Next.js</span>
              <span className="pro-btn">React</span>
              <span className="pro-btn">Aceternity UI</span>
              <span className="pro-btn">Reactbit</span>
              <span className="pro-btn">Tailwind CSS</span>
              <span className="pro-btn">Framer Motion</span>
            </p>
          </div>
          <Image src="/portfolio.png" alt="Portfolio-Image" width={800} height={600} quality={100} className="flex flex-1 w-full h-[10rem] rounded-lg mt-4" ></Image>
        </div>
      </PinContainer>
      </div>
      <div className='my-10 md:my-12 mr-13 md:mr-0 md:ml-0'>
        <PinContainer
        title="Text-Utility Link"
        href="https://priyansh-dubey.github.io/my-react-app/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] md:w-[30rem] h-[31rem] md:h-[30rem] ">
          <h3 className={`${michroma.className} max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100`}>
            Text Utility Web-App
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
           <span className={`${goldman.className} text-slate-500 `}>
             A React-based web app that provides multiple text transformation utilities like converting to uppercase/lowercase, removing extra spaces, counting words/characters, and copying text to the clipboard. It also features a dark/light theme toggle for better accessibility.
            </span>
            <p className='mt-2 flex flex-wrap'>
              <span className="pro-btn">React</span>
              <span className="pro-btn">JavaScript</span>
              <span className="pro-btn">HTML</span>
              <span className="pro-btn">CSS</span>
              <span className="pro-btn">Bootstrap</span>
            </p>
          </div>
          <Image src="/text-util.png" alt="Text-util-Image"width={800} height={600} quality={100} className="flex flex-1 w-full h-[10rem] rounded-lg mt-4" ></Image>
        </div>
      </PinContainer>
      </div>
      <div className='my-2 md:my-12 mr-13 md:mr-0 md:ml-0'>
        <PinContainer
        title="Password Generator"
        href="https://github.com/priyansh-dubey/Password-Generator"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] md:w-[30rem] h-[26rem] md:h-[30rem] ">
          <h3 className={`${michroma.className} max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100`}>
            Password Generator
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className={`${goldman.className} text-slate-500 `}>
             A lightweight tool that allows users to generate secure and customizable passwords. Users can choose length and include/exclude symbols, numbers, and uppercase/lowercase characters.
            </span>
            <p className='mt-1 flex flex-wrap'>
              <span className="pro-btn">React</span>
              <span className="pro-btn">JavaScript</span>
              <span className="pro-btn">HTML</span>
              <span className="pro-btn">CSS</span>
            </p>
          </div>
          <Image src="/Password-generator.jpeg" alt="PasswordGenerator-Image" width={800} height={600} quality={100} className="flex flex-1 w-full h-[10rem] rounded-lg pt-5 mt-4 scale-[1.3] pb-2" ></Image>
        </div>
      </PinContainer>
      </div>
      <div className='my-1 md:my-12 mr-13 md:mr-0 md:ml-0'>
        <PinContainer
        title=" Weather Web-App"
        href="https://github.com/priyansh-dubey/weather-WebApp"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] md:w-[30rem] h-[26rem] md:h-[30rem] ">
          <h3 className={`${michroma.className} max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100`}>
             Weather Web-App
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className={`${goldman.className} text-slate-500 `}>
             Fetches real-time weather data based on the users location or searched city using OpenWeatherMap API. Displays temperature, humidity, weather condition, and wind speed in a clean UI.
            </span>
            <p className='mt-2 flex flex-wrap'>
              <span className="pro-btn">JavaScript</span>
              <span className="pro-btn">HTML</span>
              <span className="pro-btn">CSS</span>
               <span className="pro-btn">OpenWeatherMap API</span>
            </p>
          </div>
          <Image src="/weather.jpeg" alt="Weather-Image" width={800} height={500} quality={100} className="flex flex-1 w-full h-[10rem] rounded-lg mt-4" ></Image>
        </div>
      </PinContainer>
      </div>
      <div className='my-1 md:my-12 mr-13 md:mr-0 md:ml-0'>
        <PinContainer
        title="Dictionary Web-App"
        href="https://github.com/priyansh-dubey/lexicon-io"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] md:w-[30rem] h-[26rem] md:h-[30rem] ">
          <h3 className={`${michroma.className} max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100`}>
             Dictionary Web-App
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className={`${goldman.className} text-slate-500 `}>
             A simple dictionary web app that fetches word definitions, phonetics, and examples using a free dictionary API. Helps users find meanings instantly.
            </span>
            <p className='mt-2 flex flex-wrap'>
              <span className="pro-btn">JavaScript</span>
              <span className="pro-btn">HTML</span>
              <span className="pro-btn">CSS</span>
               <span className="pro-btn">Dictionary API</span>
            </p>
          </div>
          <Image src="/lexicon.jpeg" alt="Dictionary-Image" width={800} height={600} quality={100}  className="flex flex-1 w-full h-[10rem] rounded-lg mt-4" ></Image>
        </div>
      </PinContainer>
      </div>
      <div className='my-0 md:my-12 mr-13 md:mr-0 md:ml-0'>
        <PinContainer
        title="BMI Calculator"
        href="https://github.com/priyansh-dubey/Bmi-Calculator"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] md:w-[30rem] h-[25rem] md:h-[30rem] ">
          <h3 className={`${michroma.className} max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100`}>
             BMI Calculator
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className={`${goldman.className} text-slate-500 `}>
             A Body Mass Index calculator that lets users enter height and weight to determine their BMI category (Underweight, Normal, Overweight, etc.).
            </span>
            <p className='mt-2 flex flex-wrap'>
              <span className="pro-btn">JavaScript</span>
              <span className="pro-btn">HTML</span>
              <span className="pro-btn">CSS</span>
            </p>
          </div>
          <Image src="/bmi.jpeg" alt="BMI-Calculator-Image" width={800} height={400} quality={100} className="flex flex-1 w-full h-[10rem] rounded-lg mt-4" ></Image>
        </div>
      </PinContainer>
      </div>
       <div className='my-0 md:my-12 mr-13 md:mr-0 md:ml-0'>
        <PinContainer
        title="To-Do List"
        href="https://github.com/priyansh-dubey/TO-DO-LIST"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] md:w-[30rem] h-[25rem] md:h-[30rem] ">
          <h3 className={`${michroma.className} max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100`}>
             To-Do List
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className={`${goldman.className} text-slate-500 `}>
            A minimal to-do list app to help users manage tasks efficiently. It&nbsp;supports task addition, completion toggle, and deletion with local storage support.
            </span>
            <p className='mt-2 flex flex-wrap'>
              <span className="pro-btn">JavaScript</span>
              <span className="pro-btn">HTML</span>
              <span className="pro-btn">CSS</span>
            </p>
          </div>
          <Image src="/todo.jpeg" alt="Todo-Image" width={800} height={600} quality={100}  className="flex flex-1 w-full h-[10rem] rounded-lg mt-4" ></Image>
        </div>
      </PinContainer>
      </div>
    </div>
    <BackgroundBeams />
    </ScrollRevealStack>
  </div>
  );
}
