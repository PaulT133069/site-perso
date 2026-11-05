// app/contact/page.tsx
"use client";

import { useState } from "react";

export default function Contact() {
  // État pour gérer les champs et le statut de l'envoi
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

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
          Remplissez ce formulaire et je vous répondrai dès que possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 border border-gray-200">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
            <input 
              type="text" 
              id="name" 
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 rounded-none focus:outline-none focus:border-quant-red focus:ring-1 focus:ring-quant-red transition-colors"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 rounded-none focus:outline-none focus:border-quant-red focus:ring-1 focus:ring-quant-red transition-colors"
              placeholder="vous@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea 
            id="message" 
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full border border-gray-300 px-4 py-3 rounded-none focus:outline-none focus:border-quant-red focus:ring-1 focus:ring-quant-red transition-colors resize-none"
            placeholder="Comment puis-je vous aider ?"
          ></textarea>
        </div>

        {/* Message de succès ou d'erreur */}
        {status === "success" && (
          <div className="p-4 bg-green-50 text-green-700 text-sm border border-green-200">
            Message envoyé avec succès ! Je vous répondrai dès que possible.
          </div>
        )}
        {status === "error" && (
          <div className="p-4 bg-red-50 text-red-700 text-sm border border-red-200">
            Une erreur est survenue. N'hésite pas à me contacter directement par email.
          </div>
        )}

        <button 
          type="submit" 
          disabled={status === "loading"}
          className="w-full relative overflow-hidden bg-white text-quant-dark border border-gray-300 px-8 py-4 rounded-none font-medium transition-colors duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="absolute inset-0 w-full h-full bg-quant-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
          </span>
        </button>

      </form>
    </div>
  );
}