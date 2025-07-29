import React from 'react'
import { Michroma , Parisienne , Poiret_One, Goldman, Aladin} from "next/font/google";
import GlassIcons from '@/components/ui/GlassIcons'
import Image from 'next/image';
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

const aladin = Aladin({
  subsets: ["latin"],
  weight: "400", 
})

const goldman = Goldman({
  subsets: ["latin"],
  weight: "400", 
});


const Language = [
  { icon: <Image src={"/skills/C.svg"} alt='c' width={40} height={40}></Image> , color : "#021336" , label: "c"},
  { icon: <Image src={"/skills/JavaScript.svg"} alt='JavaScript' width={40} height={40}></Image> , color : "#021336" , label: "JavaScript"},
  { icon: <Image src={"/skills/TypeScript.svg"} alt='TypeScript' width={40} height={40}></Image> , color :"#021336" , label: "TypeScript"},
  { icon: <Image src={"/skills/Python.svg"} alt='Python' width={40} height={40}></Image> , color : "#021336" , label: "Python"},
  { icon: <Image src={"/skills/Java.svg"} alt='Java' width={40} height={40}></Image> , color : "#021336" , label: "Java"},
  { icon: <Image src={"/skills/HTML5.svg"} alt='HTML5' width={40} height={40}></Image> , color : "#021336", label: "HTML5"},
  { icon: <Image src={"/skills/CSS3.svg"} alt='CSS3' width={40} height={40}></Image> , color : "#021336", label: "CSS3"},
  { icon: <Image src={"/skills/MySQL.svg"} alt='MySQL' width={40} height={40}></Image> , color : "#021336" , label: "MySQL"},
  { icon: <Image src={"/skills/MongoDB.svg"} alt='MongoDB' width={40} height={40}></Image> , color : "#021336", label: "MongoDB"},
]

const Technologies = [
 { icon: <Image src={"/skills/React.svg"} alt='React' width={40} height={40}></Image> , color : "#021336" , label: "React"},
 { icon: <Image src={"/skills/Tailwind CSS.svg"} alt='Tailwind' width={40} height={40}></Image> , color : "#021336" , label: "Tailwind"},
 { icon: <Image src={"/skills/Bootstrap.svg"} alt='Bootstrap' width={40} height={40}></Image> , color : "#021336" , label: "Bootstrap"},
 { icon: <Image src={"/skills/Next.js.svg"} alt='Next.js' width={40} height={40}></Image> , color : "#021336" , label: "Next.js"},
 { icon: <Image src={"/skills/Node.js.svg"} alt='Node.js' width={40} height={40}></Image> , color : "#021336" , label: "Node.js"},
 { icon: <Image src={"/skills/Express.svg"} alt='Express' width={40} height={40}></Image> , color : "#021336" , label: "Express"},
 { icon: <Image src={"/skills/Git.svg"} alt='Git' width={40} height={40}></Image> , color : "#021336" , label: "Git"},
 { icon: <Image src={"/skills/GitHub.svg"} alt='GitHub' width={40} height={40}></Image> , color : "#021336" , label: "GitHub"},
 { icon: <Image src={"/skills/Postman.svg"} alt='Postman' width={40} height={40}></Image> , color : "#021336" , label: "Postman"}, 
]


const Skills = () => {
  return (
    <div id="Skills" className="w-[100%]  h-[100rem] md:h-auto md:pb-20 bg-black overflow-hidden">
      <ScrollRevealStack>
        <div className="mb-7 mt-10 text-center">
          <div className={`${michroma.className} text-3xl md:text-6xl font-bold text-white `}>Skill<span className={`${parisienne.className} text-blue-500`}><b><i>Verse</i></b></span></div>
          <div className="pne w-1/3 mt-5 shadow-xl/30inset-x-0 mx-auto -bottom-px bg-gradient-to-r from-transparent via-amber-500 to-transparent h-[6px]"></div>
       </div>
       <div style={{ position: 'relative' }}>
        <div className='flex justify-start w-[35rem] mt-10 md:mt-22 mb-15 mx-10 md:mx-15 items-center'>
          <h1 className={`${aladin.className} text-white text-xl md:text-3xl`}>&quot;Dive into the universe of my technical abilities —<br/>from front-end finesse to back-end power.&quot;</h1>
        </div>
        <div className=" flex flex-col md:flex-row justify-center items-center md:mx-15 md:gap-10">
          <div className='md:border rounded-2xl border-amber-50 md:w-[25rem] mb-5 md:mb-0 md:h-auto'>
            <h1 className={`${goldman.className} text-white text-center text-2xl mt-5`}>Languages & DB</h1>
            <GlassIcons items={Language} className="custom-class"/>
          </div>
          <div className='border rounded-2xl border-neutral-700 md:border-amber-50 h-[27.5rem] w-[24.3rem] mb-5 md:mb-0 md:w-[25rem]'>
            <div className='mt-20'>
              <div className='flex justify-center h-[16.5rem] items-center flex-col gap-2.5 mt-3'>
              <div className='text-white  w-[20rem] hover:scale-[1.03] rounded-2xl mb-2'>
                <h1 className={`${goldman.className} text-[20px] mb-1 ml-3`}>Development Skills</h1>
                <div className={`${poiret_one.className} border border-neutral-500 rounded-2xl py-1 pl-3 box`}>
                  <p>◇ REST API Design</p>
                  <p>◇ State Management (Redux, Context API)</p>
                  <p>◇ Responsive UI Development</p>
                </div>
              </div>
              <div className='text-white  w-[20rem] hover:scale-[1.03] rounded-2xl mb-2'>
                <h1 className={`${goldman.className} text-[20px] mb-1 ml-3`}> Soft Skills</h1>
                <div className={`${poiret_one.className} border border-neutral-500 rounded-2xl py-1 px-2 box flex justify-center items-center gap-2`}>
                  <div>
                    <p>◇ Communication</p>
                    <p>◇ Adaptability</p>
                    <p>◇ Team Collaboration</p>
                  </div>
                  <div>
                    <p>◇ Problem Solving</p>
                    <p>◇ Critical Thinking</p>
                    <p>◇ Attention to Detail</p>
                  </div>
                </div>
              </div>
              <div className='text-white  w-[20rem] hover:scale-[1.03] rounded-2xl'>
                <h1 className={`${goldman.className} text-[20px] mb-1 ml-3`}> Workflow & Practices</h1>
                <div className={`${poiret_one.className} border border-neutral-500 rounded-2xl py-1 pl-3 box`}>
                  <p>◇ Agile / Scrum Methodology</p>
                  <p>◇ GitHub Workflow (Branches, PRs, Issues)</p>
                  <p>◇ Code Review Etiquette</p>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className='md:border rounded-2xl border-amber-50 md:h-auto md:w-[25rem]'>
            <h1 className={`${goldman.className} text-white text-center text-2xl mt-5`}>Tools & Technologies</h1>
            <GlassIcons items={Technologies} className="custom-class"/>
          </div>
        </div>
       </div>
      </ScrollRevealStack>
       
    </div>
  )
}

export default Skills