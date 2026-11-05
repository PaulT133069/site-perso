// app/presentation/page.tsx
import Link from "next/link";

export default function Presentation() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-24">
      
      {/* --- EN-TÊTE --- */}
      <div className="mb-16"> {/* On garde le mb-16 global */}
        <span className="text-quant-red font-bold text-sm tracking-widest uppercase mb-2 block">
          Curriculum Vitae
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Mon parcours.
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mb-8">
          De la curiosité pour la blockchain à la création d'interfaces web. <br/>
          Un parcours guidé par l'apprentissage continu, la pratique et une passion <br/>
          pour l'écosystème tech.
        </p>

        {/* NOUVELLE LIGNE : Localisation */}
        <div className="flex items-center gap-2 text-sm font-medium text-black mt-8 mb-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-quant-red"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Marseille & Alès</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* --- COLONNE DE GAUCHE : LES TOGGLES --- */}
        <div className="md:col-span-2 space-y-4">
          
          {/* 1. EXPÉRIENCE */}
          <details className="group bg-white border border-gray-200 rounded-none [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-xl text-quant-dark hover:text-quant-red transition-colors">
              {/* On a retiré la ligne et le point du titre */}
              Expérience
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            
            {/* Le contenu du toggle avec la timeline */}
            <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 mt-2">
              
              {/* La timeline apparaît seulement ici, quand c'est ouvert */}
              <div className="relative pl-6 border-l-2 border-quant-red py-4 mt-4">
                <div className="absolute w-3 h-3 bg-quant-red rounded-full -left-[7px] top-4"></div>
                
                <p className="mb-4">
                  <strong>ÉQUIPIER LIBRE SERVICE</strong> - Intermarché / Intérim <br/>
                  2025 - 2026
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Accueillir et conseiller la clientèle de manière proactive</li>
                  <li>Conseiller efficacement la clientèle et renforcer la satisfaction</li>
                  <li>Déployer des campagnes de communication visuelle</li>
                </ul>
              </div>

              <div className="relative pl-6 border-l-2 border-quant-red py-4 mt-4">
                <div className="absolute w-3 h-3 bg-quant-red rounded-full -left-[7px] top-4"></div>
                
                <p className="mb-4">
                  <strong>ASSISTANT DE DIRECTION</strong> - Agence SOKEO / Alternance <br/>
                  2024 - 2025
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Assister et coordonner la communication interne</li>
                  <li>Suivre une interface technique entre les clients et l'équipe technique</li>
                  <li>Élaborer un reporting et un dossier d’agrément CII</li>
                </ul>
              </div>

              <div className="relative pl-6 border-l-2 border-quant-red py-4 mt-4">
                <div className="absolute w-3 h-3 bg-quant-red rounded-full -left-[7px] top-4"></div>
                
                <p className="mb-4">
                  <strong>ÉQUIPIER LIBRE SERVICE</strong> - Carrefour MARKET / Alternance <br/>
                  2023 - 2024
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Mettre en œuvre des procédures de merchandising</li>
                  <li>Adapter l’agencement pour renforcer l’attractivité du point de vente</li>
                  <li>Superviser les flux monétaires et la caisse centrale</li>
                </ul>
              </div>

              <div className="relative pl-6 border-l-2 border-quant-red py-4 mt-4">
                <div className="absolute w-3 h-3 bg-quant-red rounded-full -left-[7px] top-4"></div>
                
                <p className="mb-4">
                  <strong>ASSISTANT COURTIER</strong> - EMPRUNTIS l'agence / Alternance <br/>
                  2022 - 2023
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Analyse et instruction de dossier de financement</li>
                  <li>Interface opérationnelle entre les clients et les partenaires bancaires</li>
                  <li>Contrôle de conformité des pièces justificatives</li>
                </ul>
              </div>

              <div className="relative pl-6 border-l-2 border-quant-red py-4 mt-4">
                <div className="absolute w-3 h-3 bg-quant-red rounded-full -left-[7px] top-4"></div>
                
                <p className="mb-4">
                  <strong>ÉQUIPIER LIBRE SERVICE</strong> - E.LECLERC / CDD <br/>
                  2020 - 2022 - 2023
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Accueillir et conseiller la clientèle de manière proactive</li>
                  <li>Conseiller efficacement la clientèle et renforcer la satisfaction</li>
                  <li>Déployer des campagnes de communication visuelle</li>
                </ul>
              </div>

            </div>
          </details>

          {/* 2. FORMATION */}
          <details className="group bg-white border border-gray-200 rounded-none [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-xl text-quant-dark hover:text-quant-red transition-colors">
              Formation
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 mt-2">
              
              <div className="relative pl-6 border-l-2 border-quant-red py-4 mt-4">
                <div className="absolute w-3 h-3 bg-quant-red rounded-full -left-[7px] top-4"></div>
                <p className="mb-4">
                  <strong>Licence ASSURANCE BANQUE FINANCE / Chargé de clientèle</strong> <br/>
                  ES Banque & Université Aix Marseille - 2023
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-quant-red py-4 mt-4">
                <div className="absolute w-3 h-3 bg-quant-red rounded-full -left-[7px] top-4"></div>
                <p className="mb-4">
                  <strong>BTS MCO Management Commercial de l'Opérationnel</strong> <br/>
                  Lycée Périer - 2020-2022
                </p>
              </div>

            </div>
          </details>

          {/* 3. APPRENTISSAGE */}
          <details className="group bg-white border border-gray-200 rounded-none [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-xl text-quant-dark hover:text-quant-red transition-colors">
              Apprentissage & Projets
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 mt-2">
              
              <div className="relative pl-6 border-l-2 border-quant-red py-4 mt-4">
                <div className="absolute w-3 h-3 bg-quant-red rounded-full -left-[7px] top-4"></div>
                <p className="mb-4">
                  <strong>Apprentissage autodidacte & Tech</strong> <br/>
                  [En continu]
                </p>
                <p>
                  [Explique comment tu as appris à coder et ce que tu as fait dans la crypto. Ex: 
                  Création de ce portfolio avec Next.js. Exploration de l'écosystème React et 
                  des animations avec Framer Motion. Immersion dans l'écosystème Web3...]
                </p>
              </div>

            </div>
          </details>

        </div>

        {/* --- COLONNE DE DROITE --- */}
        <div className="space-y-8">
          
          <div className="bg-gray-50 p-6 border border-gray-100 rounded-none">
            <h3 className="font-bold mb-4 text-quant-dark">Compétences</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium">Expérience client</span>
                <span className="text-quant-red">Avancé</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium">Commande client</span>
                <span className="text-quant-red">Avancé</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium">Communication interne</span>
                <span className="text-quant-red">Avancé</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium">Solutions de paiements</span>
                <span className="text-quant-red">Intermédiaire</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium">Outils CRM & Gestion</span>
                <span className="text-quant-red">Intermédiaire</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium">Next.js / React & Typescript</span>
                <span className="text-quant-red">Débutant</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Blockchain / Web3</span>
                <span className="text-quant-red">Curieux</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-100 rounded-none">
             <h3 className="font-bold mb-4 text-quant-dark">Qualités</h3>
             <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-quant-red font-bold">›</span> Flexibilité</li>
                <li className="flex items-start gap-2"><span className="text-quant-red font-bold">›</span> Créativité</li>
                <li className="flex items-start gap-2"><span className="text-quant-red font-bold">›</span> Problem Solving</li>
                <li className="flex items-start gap-2"><span className="text-quant-red font-bold">›</span> Autodidacte</li>
                <li className="flex items-start gap-2"><span className="text-quant-red font-bold">›</span> Relation client</li>
             </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-100 rounded-none">
             <h3 className="font-bold mb-4 text-quant-dark">Me retrouver</h3>
             <div className="flex flex-col gap-3 text-sm text-gray-600">
               <a href="https://github.com/ton-profil" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-quant-red transition-colors group">
                 <span className="text-quant-red font-bold group-hover:translate-x-1 transition-transform">›</span> GitHub
               </a>
               <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-quant-red transition-colors group">
                 <span className="text-quant-red font-bold group-hover:translate-x-1 transition-transform">›</span> LinkedIn
               </a>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}