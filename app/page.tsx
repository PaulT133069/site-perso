import Link from "next/link";
import NameCollision from "@/app/components/namecollision";

export default function Home() {
  return (
    <div className="w-full">
      
      {/* --- SECTION HERO --- */}
      {/* On ajoute relative, overflow-hidden et bg-white à la section */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-24 pb-32 bg-white overflow-hidden">
        
        {/* 👇 LE GRAPHISME DE L'HÉMISPHÈRE / GLOBE EN ARRIÈRE-PLAN 👇 */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            // w-[800px] pour la taille, opacity-[0.04] pour la transparence
            className="w-[800px] h-[800px] text-quant-dark opacity-[0.04] animate-[spin_60s_linear_infinite]"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <ellipse cx="12" cy="12" rx="10" ry="4"></ellipse>
            <ellipse cx="12" cy="12" rx="4" ry="10"></ellipse>
            <path d="M2 12h20"></path>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </div>

        {/* 👇 TON CONTENU HERO EXISTANT 👇 */}
        {/* On ajoute relative z-10 pour que le texte passe au-dessus du graphisme */}
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl leading-tight mb-6">
            Construire l'avenir avec <span className="text-quant-red">passion & précision</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12">
            Portfolio personnel. Passionné par la blockchain, la tech et le service client. 
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/projet" 
              className="relative overflow-hidden bg-white text-quant-dark border border-gray-300 px-8 py-3.5 rounded-none font-medium transition-colors duration-300 group text-center"
            >
              <span className="absolute inset-0 w-full h-full bg-quant-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Voir mes projets
              </span>
            </Link>
            <Link 
              href="/contact" 
              className="relative overflow-hidden bg-white text-quant-dark border border-gray-300 px-8 py-3.5 rounded-none font-medium transition-colors duration-300 group text-center"
            >
              <span className="absolute inset-0 w-full h-full bg-quant-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Me contacter
              </span>
            </Link>
          </div>
        </div>

      </section>
      
      <NameCollision />
    </div>
  );
}