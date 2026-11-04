import NameCollision from "@/app/components/namecollision";

export default function Home() {
  return (
    <div className="w-full">
      
      {/* --- SECTION HERO --- */}
      <section className="flex flex-col justify-center items-center text-center px-6 pt-24 pb-32">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl leading-tight mb-6">
          Construire l'avenir avec <span className="text-quant-red">passion & précision</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12">
          Portfolio personnel. Passionné par la tech, la blockchain et les interfaces minimalistes. 
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="relative overflow-hidden bg-white text-quant-dark border border-gray-300 px-8 py-3.5 rounded-none font-medium transition-colors duration-300 group">
            <span className="absolute inset-0 w-full h-full bg-quant-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Voir mes projets
            </span>
          </button>
          <button className="relative overflow-hidden bg-white text-quant-dark border border-gray-300 px-8 py-3.5 rounded-none font-medium transition-colors duration-300 group">
            <span className="absolute inset-0 w-full h-full bg-quant-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Me contacter
            </span>
          </button>
        </div>
      </section>
      <NameCollision />
    </div>
  );
}