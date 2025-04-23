import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2"className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">

      {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
  return (
    <div className="masker" key={index}>
      <div className="w-fit flex items-end overflow-hidden">
        {index === 1 && (
          <motion.div 
           initial={{width:0}} 
           animate={{width:"9vw"}}
           transition={{ease:[0.76,0,0.24,1],duration:1}}
           className="mr-[1vw] w-[8vw] h-[5.7vw] rounded-md bg-green-500"></motion.div>
        )}
        <h1 className="uppercase text-[7vw] leading-[5.5vw] tracking-tighter">
          {item}
        </h1>
      </div>
    </div>
  );
})}


        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
          {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
            <p key={index} className="text-md font-light tracking-tight leading-none text-white">
              {item}
            </p>
          ))}
          <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] border-zinc-500 font-light text-sm capitalize rounded-full'>
              start the project
            </div>
            <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-400 rounded-full'>
              <span className='rotate-[45deg]'>
                <FaArrowUp />
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LandingPage;
