// app/presentation/page.tsx
import Link from "next/link";

export default function Presentation() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-24">
      
      {/* En-tête */}
      <div className="mb-16">
        <span className="text-quant-red font-bold text-sm tracking-widest uppercase mb-2 block">
          Curriculum Vitae
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Mon parcours.
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
          De la curiosité pour la blockchain à la création d'interfaces web. 
          Un parcours guidé par l'apprentissage continu et la pratique.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Colonne de gauche : Timeline */}
        <div className="md:col-span-2 space-y-12">
          
          <div>
            <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-6">Expérience & Apprentissage</h2>
            <div className="space-y-8">
              
              {/* Item 1 */}
              <div className="relative pl-6 border-l-2 border-quant-red">
                <div className="absolute w-3 h-3 bg-quant-red rounded-full -left-[7px] top-1.5"></div>
                <span className="text-sm font-bold text-quant-red mb-1 block">2024 - Aujourd'hui</span>
                <h3 className="text-xl font-bold text-quant-dark">Apprentissage Next.js</h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  Création de ce portfolio, exploration de l'écosystème React, 
                  des animations avec Framer Motion et du déploiement sur Vercel.
                </p>
              </div>

              {/* Item 2 */}
              <div className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[7px] top-1.5"></div>
                <span className="text-sm font-bold text-gray-500 mb-1 block">2023 - 2024</span>
                <h3 className="text-xl font-bold text-quant-dark">Immersion dans la Crypto</h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  Découverte de la blockchain, des smart contracts et de l'écosystème Web3. 
                  Compréhension des enjeux techniques et économiques.
                </p>
              </div>

            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-6">Formation</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">Autodidacte</h3>
                  <p className="text-gray-500 text-sm">Développement Web & Tech</p>
                </div>
                <span className="text-sm text-gray-400">En continu</span>
              </div>
            </div>
          </div>

        </div>

        {/* Colonne de droite : Compétences & Infos */}
        <div className="space-y-8">
          
          <div className="bg-gray-50 p-6 border border-gray-100 rounded-none">
            <h3 className="font-bold mb-4 text-quant-dark">Compétences</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium">Next.js / React</span>
                <span className="text-quant-red">Intermédiaire</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium">Tailwind CSS</span>
                <span className="text-quant-red">Avancé</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium">TypeScript</span>
                <span className="text-quant-red">Débutant</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium">Framer Motion</span>
                <span className="text-quant-red">Débutant</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Blockchain / Web3</span>
                <span className="text-quant-red">Curieux</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-gray-200 rounded-none">
             <h3 className="font-bold mb-4 text-quant-dark">Télécharger</h3>
             <Link href="#" className="flex items-center justify-between text-sm font-medium hover:text-quant-red transition-colors group">
               Version PDF du CV
               <span className="text-quant-red group-hover:translate-x-1 transition-transform">→</span>
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
}