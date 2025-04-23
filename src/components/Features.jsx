import { motion } from "framer-motion";
import React from "react";

const Features = () => {
  return (
    <div className="w-full py-20 px-20">
      <div className="cards w-full flex gap-10 mt-10">
        
        {/* First Image Card */}
        <div className="cardcontainer relative w-1/2 h-[75vh]">
          <motion.div 
            className="card w-full h-full rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 0.95 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png"
              alt="Fyde Project"
            />
          </motion.div>
        </div>

        {/* Second Image Card */}
        <div className="cardcontainer relative w-1/2 h-[75vh]">
          <motion.div 
            className="card w-full h-full rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 0.95 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png"
              alt="Vise Project"
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Features;
