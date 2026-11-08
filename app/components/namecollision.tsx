// app/components/NameCollision.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// On garde ton nom (sans le .split pour le traiter comme un seul bloc)
const NAME = "Paul TEULE .";

export default function NameCollision() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <div className="w-full h-[35vh] md:h-[50vh] bg-white flex items-center justify-center overflow-hidden relative border-b border-gray-100">
      
      <div ref={containerRef} className="relative z-10 w-full flex justify-center px-4">
        
        {/* On anime le conteneur entier, pas chaque lettre séparément */}
        <motion.h2
          initial={{
            scale: 2, // Commence 2x plus grand
            filter: "blur(16px)", // Très flou
            opacity: 0,
          }}
          animate={isInView ? {
            scale: 1, // Taille normale
            filter: "blur(0px)", // Net
            opacity: 1,
          } : {}}
          transition={{
            duration: 2.5, // 1.5 secondes pour un effet de révélation lente et classe
            ease: [0.16, 1, 0.3, 1], // Courbe d'accélération douce
          }}
          // Typo massive et responsive
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-quant-red text-center leading-none"
        >
          {NAME}
        </motion.h2>

      </div>
    </div>
  );
}