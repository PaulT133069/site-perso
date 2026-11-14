// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        scrolled || isOpen
          ? "bg-white/90 backdrop-blur-md border-gray-200 py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[40px] bg-quant-red/20 blur-[40px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-3 items-center relative z-10">
        
        {/* 1. Logo : prend 1 colonne sur mobile, 1 sur desktop */}
        <div className="flex justify-start col-span-1">
          <Link 
            href="/" 
            className="font-bold text-xl md:text-3xl tracking-tight text-quant-red hover:opacity-80 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            Paul TEULE .
          </Link>
        </div>

        {/* 2. Liens Desktop : cachés sur mobile */}
        <div className="hidden md:flex items-center justify-center gap-8 text-sm font-medium text-gray-600 col-span-1">
          <Link href="/presentation" className="flex items-center gap-1.5 hover:text-quant-red transition-colors group">
            Présentation
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform"><path d="m6 9 6 6 6-6"/></svg>
          </Link>
          <Link href="/projet" className="flex items-center gap-1.5 hover:text-quant-red transition-colors group">
            Projet
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform"><path d="m6 9 6 6 6-6"/></svg>
          </Link>
          <Link href="/contact" className="flex items-center gap-1.5 hover:text-quant-red transition-colors group">
            Contact
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform"><path d="m6 9 6 6 6-6"/></svg>
          </Link>
        </div>

        {/* 3. Boutons à droite : prend 2 colonnes sur mobile pour pousser à droite, 1 sur desktop */}
        <div className="flex justify-end items-center gap-4 col-span-2 md:col-span-1">
          <a 
            href="https://github.com/PaulT133069" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:inline-block bg-quant-dark text-white px-5 py-2.5 rounded-none hover:bg-gray-800 transition-colors"
          >
            Mon GitHub
          </a>

          <button 
            className="md:hidden p-2 text-quant-red hover:opacity-80 transition-opacity"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <path d="M18 6 6 18M6 6l12 12"/>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu déroulant Mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg py-6 px-6 flex flex-col items-center gap-6 text-center">
          
          <Link href="/presentation" className="flex items-center gap-1.5 text-gray-600 font-medium hover:text-quant-red" onClick={() => setIsOpen(false)}>
            Présentation
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </Link>
          
          <Link href="/projet" className="flex items-center gap-1.5 text-gray-600 font-medium hover:text-quant-red" onClick={() => setIsOpen(false)}>
            Projet
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </Link>
          
          <Link href="/contact" className="flex items-center gap-1.5 text-gray-600 font-medium hover:text-quant-red" onClick={() => setIsOpen(false)}>
            Contact
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </Link>
          
          <a href="https://github.com/PaulT133069" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs bg-quant-dark text-white text-center px-5 py-3 rounded-none font-medium mt-2">
            Mon GitHub
          </a>
        </div>
      )}
    </nav>
  );
}