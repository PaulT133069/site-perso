// app/projet/page.tsx
import ProjectCard from "../components/projectcard";

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard 
          title="Analyse Crypto & Dashboard"
          description="Un tableau de bord pour suivre mes apprentissages sur la blockchain et analyser les tendances du marché en temps réel."
          tags={["Next.js", "TypeScript", "Tailwind", "API"]}
          link="#"
        />
        <ProjectCard 
          title="Ce Portfolio"
          description="Le site que tu regardes en ce moment. Construit de zéro pour apprendre Next.js, avec une direction artistique inspirée de la fintech."
          tags={["Next.js", "Tailwind CSS", "Vercel"]}
          link="#"
        />
        {/* Tu pourras ajouter d'autres cartes ici */}
      </div>

    </div>
  );
}