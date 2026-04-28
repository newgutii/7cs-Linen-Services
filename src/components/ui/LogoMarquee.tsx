"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const partners = [
  "THE SETAI", 
  "NOBU HOTEL", 
  "CARBONE", 
  "STK STEAKHOUSE", 
  "SOHO HOUSE", 
  "ZUMA",
  "FOUR SEASONS",
  "MANDARIN ORIENTAL"
];

export function LogoMarquee() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Duplicate Array twice for a perfect seamless infinite loop buffer
  const items = [...partners, ...partners];

  return (
    <section 
      className="w-full py-20 border-y border-white/5 overflow-hidden relative bg-[#050505]" 
      aria-label="Our Trusted Industry Partnerships"
    >
      {/* Vignette gradients to hide edges */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex space-x-24 md:space-x-32 w-max items-center px-12"
        animate={{ x: isHovered ? "0%" : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {items.map((partner, idx) => (
          <div 
            key={idx} 
            className="text-3xl md:text-5xl font-black tracking-[0.2em] uppercase text-white/20 hover:text-[#FDFCF0] transition-colors duration-500 cursor-default select-none whitespace-nowrap"
          >
            {partner}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
