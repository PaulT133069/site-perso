// app/projet/ProjetsList.tsx
"use client";

import { useState } from "react";
import ProjectCard from "../components/projectcard";

const MES_PROJETS = [
    {
    id: 1,
    title: "Site Personnel",
    description: "Le site que vous regardez en ce moment. Construit de zéro pour apprendre Next.js.",
    tags: ["Next.js", "Framer Motion", "TypeScript", "API", "Vercel"],
    link: "#",
    logo: "/logos/logo-site-perso.png", 
    date: "2026-11-08",
    status: "Terminé" as const,
  },
  {
    id: 2,
    title: "Ktemas",
    description: "Exploration de l'écosystème Web3, découverte des smart contracts.",
    tags: ["Token", "Web3", "Solidity", "Hardhat", "Vercel"],
    logo: "/logos/logo-Ktemas.png", 
    date: "2026-11-07",
    status: "Terminé" as const,
  }, // ... tes vrais projets ici
];

export default function ProjetsList() {
  const [sortBy, setSortBy] = useState<"alpha" | "chrono" | "default">("default");

  const projetsTries = [...MES_PROJETS].sort((a, b) => {
    if (sortBy === "alpha") return a.title.localeCompare(b.title);
    if (sortBy === "chrono") return new Date(b.date).getTime() - new Date(a.date).getTime();
    return 0;
  });

  const handleSort = (type: "alpha" | "chrono") => {
    if (sortBy === type) setSortBy("default");
    else setSortBy(type);
  };

  return (
    <>
      {/* Les boutons de tri */}
      <div className="flex items-center justify-center w-full md:w-fit gap-2 bg-gray-50 p-1 border border-gray-200 mb-12">
          <button 
            onClick={() => handleSort("chrono")}
            className={`cursor-pointer flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${
              sortBy === "chrono" ? "bg-white text-quant-red shadow-sm" : "text-gray-500 hover:text-quant-dark hover:bg-gray-100"
            }`}
          >
            <span className="text-quant-red font-bold">›</span> Chronologique
          </button>
          <button 
            onClick={() => handleSort("alpha")}
            className={`cursor-pointer flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${
              sortBy === "alpha" ? "bg-white text-quant-red shadow-sm" : "text-gray-500 hover:text-quant-dark hover:bg-gray-100"
            }`}
          >
            <span className="text-quant-red font-bold">›</span> A-Z
          </button>
      </div>

      {/* La grille de cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 mt-12">
        {projetsTries.map((projet) => (
          <ProjectCard 
            key={projet.id}
            title={projet.title}
            description={projet.description}
            tags={projet.tags}
            link={projet.link}
            logo={projet.logo}
            status={projet.status} 
          />
        ))}
      </div>
    </>
  );
}