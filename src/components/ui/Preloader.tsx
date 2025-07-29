'use client';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Adjust duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.5 } }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center text-white text-6xl font-bold"
        >
          {/* You can replace text with logo or animation */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: [1, 1.2, 1],  rotate: 360  ,transition: { repeat: 0, duration: 1.2, ease:easeInOut } }}
            exit={{scale:0}}
          >
           <Image src="/logo-white.png" alt='preloader' width={200} height={200} className='w-[6rem] md:w-[10rem] md:h-[10rem] h-[6rem]'></Image>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
