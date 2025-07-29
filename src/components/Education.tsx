import React from 'react'
import { Timeline } from "@/components/ui/timeline";
import { Meteors } from "@/components/ui/meteors";
import { Michroma , Poiret_One } from "next/font/google";
import ScrollRevealStack from "@/components/ScrollRevealStack";


const michroma = Michroma({
  subsets: ["latin"],
  weight: "400", // Michroma only supports 400
});

const poiret_one = Poiret_One({
  subsets: ["latin"],
  weight: "400", 
});

const Education = () => {
  const data = [
    {
      title: "B.Tech in Computer Science (2023 - 2027)",
      content: (
      <div className={`${poiret_one.className} relative w-full md:ml-15 max-w-xl text-white font-light`}>
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <p className='my-1'><strong className='text-cyan-400'>Institution:</strong> Dr. Shakuntala Misra National Rehabilitation University, Lucknow</p>
          <p className='my-1'><strong className='text-cyan-400'>Duration:</strong> 2023–2027 (Pursuing)</p><p className='my-1'><strong className='text-cyan-400'>CGPA (Till 4th Semester):</strong> 9.035</p>
          <p className='my-1'><strong className='text-cyan-400'>Achievements:</strong> Ranked 1st in CSE branch out of 130+ students in 1st and 3rd semesters</p>
          <p className='my-1'><strong className='text-cyan-400'>Semester 1:</strong> SGPA: 9.1</p><p><strong className='text-cyan-400'>Semester 2:</strong> SGPA: 8.77</p><p><strong className='text-cyan-400'>Semester 3:</strong> SGPA: 9.23</p><p><strong className='text-cyan-400'>Semester 4:</strong> SGPA: 9.0</p><p className='my-1'><strong className='text-cyan-400'>Focus Areas:</strong> Web Development, Full-Stack Projects, Data Structures, Core CS Subjects</p>
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    )
    },
    {
      title: "Senior Secondary (12th) - PCM | 2023",
      content: (
      <div className={`${poiret_one.className} relative w-full md:ml-15 max-w-xl text-white`}>
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <p><strong className='text-cyan-400'>Institution:</strong> Greater Valley School, Gorakhpur</p><p><strong className='text-cyan-400'>Year:</strong> 2023</p><p><strong className='text-cyan-400'>Stream:</strong> Physics, Chemistry, Mathematics (PCM)</p><p><strong className='text-cyan-400'>Percentage:</strong> 85%</p><p><strong className='text-cyan-400'>Achievement:</strong> Scored 95 in Chemistry</p>
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    )
    }
  ]; 

  return (
<div id="Education" className="w-full h-auto flex-col justify-center items-center bg-black overflow-hidden">
  <ScrollRevealStack>
    <div className='flex justify-center items-center flex-col pt-5 text-white'>
            <div className={`${michroma.className} text-3xl md:text-6xl font-bold `}>Education</div>
            <div className="line mt-5 shadow-xl/30inset-x-0 w-1/2 md:w-1/4 mx-auto -bottom-px bg-gradient-to-r from-transparent via-amber-500 to-transparent h-[6px]"></div>
          </div>
  <Timeline data={data} />
  </ScrollRevealStack>
   
</div>
  )
}

export default Education