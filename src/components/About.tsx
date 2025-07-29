
"use client";
import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { Michroma , Parisienne , Poiret_One,Goldman} from "next/font/google";
import { ImagesSlider } from "@/components/ui/images-slider";
import Typewriter from "typewriter-effect";
import { motion } from "motion/react";
import ScrollRevealStack from "@/components/ScrollRevealStack"; 

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400", // Michroma only supports 400
});

const poiret_one = Poiret_One({
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

const images = [
    "/hero2.jpeg",
    "/hero3.jpeg",
    "/hero4.jpeg",
    "/hero5.jpeg",
  ];

const About = ()=> {
  return (
         <div className="w-full text-white pt-8 h-auto bg-black overflow-hidden" id="About">
          <ScrollRevealStack>
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={30}
        baseHue={180}
        className="flex items-center flex-col justify-center px-2 md:px-10  w-full h-[58rem] md:h-auto"
      >
        
           <div>
         <div className={`${michroma.className} text-3xl md:text-6xl font-bold `}>About <span className={`${poiret_one.className} text-blue-500`}><b><i>Me</i></b></span></div>
         <div className="line w-[100%] mt-2 md:mt-5 shadow-xl/30inset-x-0 mx-auto -bottom-px bg-gradient-to-r from-transparent via-amber-500 to-transparent h-[6px]"></div>
      </div>
      <div className={`${goldman.className} w-full md:flex block h-auto justify-center items-center mx-auto mb-10 mt-0 md:mt-5 text-center`}>
        <div className="w-full md:w-[100rem] h-[33rem] md:h-auto p-5 md:p-0 md:mx-5">
              <p className="text-sm md:text-xl leading-8">
                Hello! I&rsquo;m <span className={`${parisienne.className} font-bold text-2xl md:text-3xl text-cyan-600`}> Priyansh Dubey </span>, a passionate and self-driven
                <span className="font-medium"> Computer Science undergraduate</span> with a strong foundation in
                <span className="font-medium"> full-stack web development</span> and problem-solving. I love building responsive,
                intuitive web applications that blend performance and design.
              </p>

              <p className="text-sm md:text-xl mt-6 leading-8">
                I’ve developed several projects using technologies like
                <span className="font-medium"> React, Node.js, Express, MongoDB, and SQL</span>, and I’m always eager to learn new tools and frameworks.
                Currently pursuing my B.Tech at Dr. Shakuntala Misra National Rehabilitation University, I’ve consistently ranked among the top in my class.
              </p>

              <p className="text-sm md:text-xl mt-6 invisible md:visible leading-8">
                Beyond coding, I enjoy exploring UI/UX trends, optimizing user experiences, and collaborating on impactful projects.
                I&rsquo;m now seeking opportunities to grow as a developer and contribute to meaningful products—whether through internships or freelance work.
              </p>

        </div>
        <div className=" w-full h-full md:my-5 flex justify-center items-center md:ml-10 md:mx-5">
          <div className="m-5 h-full"> <ImagesSlider className="md:h-[30rem] h-[20rem] w-[20rem] md:w-full rounded-2xl" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <Typewriter
        options={{
          strings: [
            "Fueling creativity through code and curiosity.",
            "Code with purpose. Design with passion.",
            "Turning ideas into interactive experiences.",
            "Crafting clean code and thoughtful designs.",
          ],
          autoStart: true,
          loop: true,
          delay: 20,
          deleteSpeed: 20,
        }}
      />
        </motion.p>
      </motion.div>
    </ImagesSlider>
    </div>
        </div>
      </div>

     
      </Vortex>
              </ScrollRevealStack>
    </div>
  );
}

export default About

