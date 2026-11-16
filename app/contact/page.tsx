// app/contact/page.tsx

import type { Metadata } from "next";
import ContactForm from "./contactform";

export const metadata: Metadata = {
  title: "Contact",
  description: "Me contacter pour toute question ou collaboration.",
};

export default function Contact() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-24">
      
      {/* L'en-tête (aligné à gauche par défaut) */}
      <div className="mb-12">
        <span className="text-quant-red font-bold text-sm tracking-widest uppercase mb-2 block">
          Discutons
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Me contacter.
        </h1>
        <p className="text-gray-500 leading-relaxed max-w-2xl">
          Une question, une idée de collaboration, une demande de CV ou juste envie de dire bonjour ? 
          Remplissez ce formulaire et je vous répondrai rapidement.
        </p>
      </div>

      {/* On appelle le formulaire ici */}
      <ContactForm />
      
    </div>
  );
}