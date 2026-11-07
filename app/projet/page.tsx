// app/projet/page.tsx
"use client";

import { useState } from "react";
import ProjectCard from "../components/projectcard";

const MES_PROJETS = [
  {
    id: 1,
    title: "Ce Portfolio",
    description: "Le site que vous regardez en ce moment. Construit de zéro pour apprendre Next.js.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
    logo: "/logos/logo-portfolio.png", 
    date: "2024-05-01",
    status: "Terminé" as const,
  },
  {
    id: 2,
    title: "Apprentissage Crypto",
    description: "Exploration de l'écosystème Web3, découverte des smart contracts.",
    tags: ["Blockchain", "Web3"],
    logo: "/logos/logo-crypto.png", 
    date: "2023-11-15",
    status: "Terminé" as const,
  },
  {
    id: 3,
    title: "Mon futur projet",
    description: "Un emplacement vide pour te montrer à quoi ressemble l'ajout d'une nouvelle carte.",
    tags: ["React", "API"],
    link: "https://github.com/ton-profil",
    logo: "/logos/logo-default.png", 
    date: "2024-06-10",
    status: "En cours" as const, 
  },
];

export default function Projets() {
  const [sortBy, setSortBy] = useState<"alpha" | "chrono" | "default">("default");

  const projetsTries = [...MES_PROJETS].sort((a, b) => {
    if (sortBy === "alpha") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "chrono") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return 0; 
    }
  });

  const handleSort = (type: "alpha" | "chrono") => {
    if (sortBy === type) {
      setSortBy("default");
    } else {
      setSortBy(type);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-24">
      
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-quant-red font-bold text-sm tracking-widest uppercase mb-2 block">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Mes projets.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
            Une sélection de mes travaux, expérimentations et projets d'apprentissage.
          </p>
        </div>

        {/* Boutons de tri avec guillemets rouges */}
        <div className="flex items-center gap-2 bg-gray-50 p-1 border border-gray-200">
          <button 
            onClick={() => handleSort("chrono")}
            className={`cursor-pointer flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${
              sortBy === "chrono" 
                ? "bg-white text-quant-red shadow-sm" 
                : "text-gray-500 hover:text-quant-dark hover:bg-gray-100"
            }`}
          >
            <span className="text-quant-red font-bold">›</span> Chronologique
          </button>
          <button 
            onClick={() => handleSort("alpha")}
            className={`cursor-pointer flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${
              sortBy === "alpha" 
                ? "bg-white text-quant-red shadow-sm" 
                : "text-gray-500 hover:text-quant-dark hover:bg-gray-100"
            }`}
          >
            <span className="text-quant-red font-bold">›</span> A-Z
          </button>
        </div>
      </div>

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

    </div>
  );
}