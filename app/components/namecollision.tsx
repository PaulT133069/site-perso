"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const NAME = "Paul TEULE".split("");

export default function NameCollision() {
  // 1. On crée une référence pour la boîte qui contient les lettres
  const containerRef = useRef(null);
  
  // 2. On demande à Framer Motion de nous dire si cette boîte est visible
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <div className="w-full h-[50vh] bg-white flex items-center justify-center overflow-hidden relative border-b border-gray-100">
      
      {/* 3. On attache la référence à ce conteneur flex */}
      <div ref={containerRef} className="flex flex-wrap justify-center px-4 max-w-4xl gap-0 relative z-10">
        {NAME.map((char, index) => {
          const isLeft = index % 2 === 0;
          const randomY = (index % 3 - 1) * 30; 
          
          return (
            <motion.span
              key={index}
              initial={{
                x: isLeft ? -600 : 600,
                y: randomY,
                opacity: 0,
                rotate: isLeft ? -20 : 20,
                scale: 1.2,
                filter: "blur(4px)",
              }}
              animate={isInView ? {
                x: 0, 
                y: 0,
                opacity: 1,
                rotate: 0,
                scale: 1, 
                filter: "blur(0px)",
              } : {}}
              transition={{
                type: "spring",
                stiffness: 80, // Avant 120 (c'est beaucoup plus lent/mou)
                damping: 14,   // Un peu moins d'amortissement pour garder le rebond
                mass: 1,     // Un peu plus lourd pour l'inertie
                delay: 0.1 + index * 0.07, // On espace un tout petit peu plus l'arrivée des lettres
              }}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-quant-red cursor-default"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}