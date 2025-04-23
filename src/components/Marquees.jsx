import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Marquees() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Wait a moment after load to let fonts render
    const timeout = setTimeout(() => {
      setShouldAnimate(true);
    }, 500); // adjust as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div  data-scroll data-scroll-speed=".2" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] overflow-hidden'>
      <div className='border-t-2 border-b-2 border-zinc-300 whitespace-nowrap flex'>
        {shouldAnimate && (
          <motion.div
            className='flex'
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 25,
            }}
          >
            <h1 className='text-[15vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase font-semibold'>
              we are ochi &nbsp; we are ochi &nbsp; we are ochi &nbsp; we are ochi &nbsp; we are ochi &nbsp; we are ochi
            </h1>
            
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Marquees;
