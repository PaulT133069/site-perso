// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-gray-200 py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      {/* Le Halo rouge (blur) en arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[40px] bg-quant-red/20 blur-[40px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-3 items-center relative z-10">
        
        {/* 1. Logo : à gauche */}
        <div className="flex justify-start">
          <Link 
            href="/" 
            className="font-bold text-2xl md:text-3xl tracking-tight text-quant-red hover:opacity-80 transition-opacity"
          >
            Paul TEULE
          </Link>
        </div>

        {/* 2. Liens de navigation : au centre */}
        <div className="hidden md:flex items-center justify-center gap-8 text-sm font-medium text-gray-600">
          
          <Link href="/presentation" className="flex items-center gap-1.5 hover:text-quant-red transition-colors group">
            Présentation
            <svg 
              xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="group-hover:translate-y-0.5 transition-transform"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </Link>

          <Link href="/projet" className="flex items-center gap-1.5 hover:text-quant-red transition-colors group">
            Projets
            <svg 
              xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="group-hover:translate-y-0.5 transition-transform"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </Link>

          <Link href="/contact" className="flex items-center gap-1.5 hover:text-quant-red transition-colors group">
            Contact
            <svg 
              xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="group-hover:translate-y-0.5 transition-transform"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </Link>
        </div>

        {/* 3. Bouton GitHub : à droite */}
        <div className="flex justify-end">
          <a
            href="https://github.com/ton-profil"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-quant-dark text-white px-5 py-2.5 rounded-none hover:bg-gray-800 transition-colors font-medium"
          >
            Mon GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}