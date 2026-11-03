export default function Home() {
  return (
    <div className="w-full">
      
      {/* --- SECTION HERO --- */}
      <section className="flex flex-col justify-center items-center text-center px-6 pt-24 pb-32">
        <div className="inline-block bg-red-50 text-quant-red px-4 py-1.5 rounded-none text-sm font-bold mb-8">
          En apprentissage continu
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl leading-tight mb-6">
          Construire l'avenir avec <span className="text-quant-red">passion & précision</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12">
          Portfolio personnel. Passionné par la tech, la blockchain et les interfaces minimalistes. 
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-quant-dark text-white px-8 py-3.5 rounded-none font-medium hover:bg-gray-800 transition-all">
            Voir mes projets
          </button>
          <button className="bg-white text-quant-dark border border-gray-200 px-8 py-3.5 rounded-none font-medium hover:border-quant-red hover:text-quant-red transition-all">
            Me contacter
          </button>
        </div>
      </section>
    </div>
  );
}