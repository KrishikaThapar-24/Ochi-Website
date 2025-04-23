import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Eyes = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[1, 2].map((_, i) => {
            const eyeRef = useRef(null);
            const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });

            useEffect(() => {
              const eye = eyeRef.current;
              if (!eye) return;

              const rect = eye.getBoundingClientRect();
              const eyeCenterX = rect.left + rect.width / 2;
              const eyeCenterY = rect.top + rect.height / 2;

              const dx = mousePos.x - eyeCenterX;
              const dy = mousePos.y - eyeCenterY;

              const angle = Math.atan2(dy, dx);
              const distance = Math.min(20, Math.hypot(dx, dy));

              const offsetX = Math.cos(angle) * distance;
              const offsetY = Math.sin(angle) * distance;

              setPupilOffset({ x: offsetX, y: offsetY });
            }, [mousePos]);

            return (
              <div
                key={i}
                ref={eyeRef}
                className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100"
              >
                <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-zinc-100 absolute"
                    animate={{
                      x: pupilOffset.x,
                      y: pupilOffset.y,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 10,
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                      translateX: "-50%",
                      translateY: "-50%",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Eyes;
