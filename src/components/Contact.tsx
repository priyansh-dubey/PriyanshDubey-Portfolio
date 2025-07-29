import React from 'react'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Michroma , Poiret_One , Aladin, Goldman} from "next/font/google";
import { useForm, ValidationError } from '@formspree/react';
import ScrollRevealStack from "@/components/ScrollRevealStack";
import Link from 'next/link';
import dynamic from "next/dynamic";
import Image from 'next/image';


const michroma = Michroma({
  subsets: ["latin"],
  weight: "400", // Michroma only supports 400
});

const aladin = Aladin({
  subsets: ["latin"],
  weight: "400", // Michroma only supports 400
});

const poiret_one = Poiret_One({
  subsets: ["latin"],
  weight: "400", 
});

const goldman = Goldman({
  subsets: ["latin"],
  weight: "400", 
});
 
const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});
 
const globeConfig = {
    pointSize: 4,
    globeColor: "#03192e",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];
 

 
const Contact = () => {

   const [state, handleSubmit] = useForm("xkgzolak");
  if (state.succeeded) {
      return <div id="Contact" className="w-full h-auto flex-col flex justify-center items-center pb-20 bg-black overflow-hidden">
        <div className='flex justify-center items-center mb-20 w-full flex-col'>
            <div className={`${michroma.className} text-3xl md:text-6xl text-white font-bold `}>Contact <span className={`${poiret_one.className} text-blue-500`}><b><i>Me</i></b></span></div>
            <div className="line mt-5 shadow-xl/30inset-x-0 w-1/3 mx-auto -bottom-px bg-gradient-to-r from-transparent via-amber-500 to-transparent h-[6px]"></div>
        </div>
      <BackgroundGradient>
        <div className='contact w-[21rem] md:w-[60rem] h-auto md:h-[30rem] flex justify-center items-center bg-black rounded-2xl'>
        
          <BackgroundBeamsWithCollision className='text-white h-auto md:h-[30rem]'>
           <div className='md:flex block justify-center items-center w-full h-full'>
              <div className=' w-full h-full rounded-2xl flex justify-center items-center  flex-col'>
                <h1 className={`${goldman.className} text-3xl md:text-4xl my-3 mt-10 md:ml-10 mr-0 md:mr-10`}>Thank You! </h1>
                <Image src="/smile-svgrepo-com.svg" alt='smile-logo' width={70} height={70}></Image>
                 <p className={`${poiret_one.className} text-xl md:text-2xl my-3 text-center md:ml-5 md:mr-10`}>
                  Your message has been sent successfully. I&rsquo;ll get back to you soon!
                </p>
                <Link href="/" className="text-white mb-10">
                  <div className={`${aladin.className} text-2xl mt-5 hover:font-extrabold text-white border border-amber-50 hover:bg-blue-400 hover:border-blue-500 hover:text-black  px-4 p-1 rounded-2xl`}>Home</div>
                </Link>
              </div>
              <div className='rounded-2xl w-full h-[20rem] md:h-full p-5'>
                <World data={sampleArcs} globeConfig={globeConfig}/>
              </div>
            </div>
          </BackgroundBeamsWithCollision>   
        </div>
      </BackgroundGradient>
    </div>;
  }
  return (
    <div id="Contact" className="w-full h-auto flex-col pt-5 md:pt-0 flex justify-center items-center pb-12 bg-black overflow-hidden">
      <ScrollRevealStack>
          <div className='flex justify-center items-center mb-10 md:mb-20 w-full flex-col'>
            <div className={`${michroma.className} text-3xl md:text-6xl text-white font-bold `}>Contact <span className={`${poiret_one.className} text-blue-500`}><b><i>Me</i></b></span></div>
            <div className="line mt-5 shadow-xl/30inset-x-0 w-1/2 md:w-1/3 mx-auto -bottom-px bg-gradient-to-r from-transparent via-amber-500 to-transparent h-[6px]"></div>
        </div>
      <BackgroundGradient>
        <div className='contact w-[21rem] md:w-[60rem] h-auto md:h-[30rem] flex justify-center items-center bg-black rounded-2xl'>
        
          <BackgroundBeamsWithCollision className='text-white Z-100 h-auto md:h-[30rem]'>
            <div className='md:flex block justify-center items-center w-full h-full'>
              <div className=' w-full h-full rounded-2xl flex justify-center items-center  flex-col'>
                <h1 className={`${poiret_one.className} text-xl md:text-2xl my-6 mr-0 md:mr-10`}>Let’s build something <span className={`${aladin.className} text-blue-500`}><i>Amazing</i></span> together <p className={`${goldman.className} text-2xl md:text-3xl mt-2 ml-6 md:ml-8 hover:text-white text-neutral-400 font-bold`}>drop me a message !</p></h1>
                 <form onSubmit={handleSubmit} className='md:ml-10'>
                  <label htmlFor="name" className={`${aladin.className} text-xl mx-15 md:mx-10 mb-1 block`}>
                    Name :
                  </label>
                  <input
                    id="name"
                    type="text" 
                    name="name"
                    required
                    className={`${goldman.className} bg-neutral-500 text-neutral-200 block text-[18px] p-1 md:p-2 mb-2 mx-15 md:mx-10 md:ml-10 w-[17rem] md:w-[20rem] pl-2 rounded-2xl`}
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                  />
                  <label htmlFor="email" className={`${aladin.className} text-xl mb-1 mt-3 mx-15 md:mx-10 block`}>
                    Email :
                  </label>
                  <input
                    id="email"
                    type="email" 
                    name="email"
                    required
                    className={`${goldman.className} bg-neutral-500 text-neutral-200 block text-[18px] p-1 md:p-2 mb-2 mx-15 md:mx-10 md:ml-10 w-[17rem] md:w-[25rem] pl-2 rounded-2xl`}
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                  <label htmlFor="message" className={`${aladin.className} text-xl mx-15 md:mx-10 mb-1 mt-3 block`}>
                    Message :
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className={`${goldman.className} bg-neutral-500 text-neutral-200 block text-[18px] p-1 md:p-2 mb-2 mx-15 md:mx-10 md:ml-10 w-[17rem] md:w-[25rem] pl-2 rounded-[10px]`}
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
                  <button type="submit" className={`${aladin.className} text-xl md:text-2xl mx-10 mt-6 ml-12 mb-5 p-2 md:px-3 py-1 hover:text-white rounded-2xl hover:bg-blue-500 hover:scale-[1.1] hover:px-4 block text-black bg-neutral-200`} disabled={state.submitting}>
                    Submit
                  </button>
                </form>
              </div>
              <div className='rounded-2xl w-full h-[20rem] md:h-full p-5'>
                <World data={sampleArcs} globeConfig={globeConfig} />
              </div>
            </div>
          </BackgroundBeamsWithCollision>   
        </div>
      </BackgroundGradient>
      </ScrollRevealStack>
    </div>
  )
}

export default Contact;
