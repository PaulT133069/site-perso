// app/projet/page.tsx
import type { Metadata } from "next";
import ProjetsList from "./projetslist";

export const metadata: Metadata = {
  title: "Projets",
  description: "Découvrez mes projets, expérimentations et travaux autour de la tech et de la crypto.",
};

export default function Projets() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-24">
      
      <div className="mb-16">
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

      {/* On appelle le composant client ici */}
      <ProjetsList />
      
    </div>
  );
}