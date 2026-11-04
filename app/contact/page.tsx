// app/contact/page.tsx
export default function Contact() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-24">
      
      <div className="mb-12 text-center">
        <span className="text-quant-red font-bold text-sm tracking-widest uppercase mb-2 block">
          Discutons
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Me contacter.
        </h1>
        <p className="text-gray-500 leading-relaxed">
          Une question, une idée de collaboration, ou juste envie de dire bonjour ? 
          Remplissez ce formulaire et je te répondrai rapidement.
        </p>
      </div>

      <form className="space-y-6 bg-white p-8 border border-gray-200">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
            <input 
              type="text" 
              id="name" 
              className="w-full border border-gray-300 px-4 py-3 rounded-none focus:outline-none focus:border-quant-red focus:ring-1 focus:ring-quant-red transition-colors"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full border border-gray-300 px-4 py-3 rounded-none focus:outline-none focus:border-quant-red focus:ring-1 focus:ring-quant-red transition-colors"
              placeholder="vous@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea 
            id="message" 
            rows={5}
            className="w-full border border-gray-300 px-4 py-3 rounded-none focus:outline-none focus:border-quant-red focus:ring-1 focus:ring-quant-red transition-colors resize-none"
            placeholder="Comment puis-je vous aider ?"
          ></textarea>
        </div>

        <button 
          type="button" // On met type="button" pour éviter que le formulaire s'envoie sans logique derrière
          className="w-full relative overflow-hidden bg-white text-quant-dark border border-gray-300 px-8 py-4 rounded-none font-medium transition-colors duration-300 group"
        >
          <span className="absolute inset-0 w-full h-full bg-quant-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Envoyer le message
          </span>
        </button>

      </form>
    </div>
  );
}