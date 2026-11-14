// app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {

  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-8">
      {/* Ajout de text-center pour mobile, et text-left pour desktop */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center md:text-left">
        
        {/* Partie supérieure du footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Bloc Identité */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <Link href="/" className="font-bold text-xl tracking-tight mb-4 block">
              <span className="text-quant-red">Paul TEULE .</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Portfolio personnel. Passionné par la blockchain, la tech et le service client.
            </p>
          </div>

          {/* Bloc Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-gray-900">Navigation</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-quant-red transition-colors">Accueil</Link></li>
              <li><Link href="/presentation" className="hover:text-quant-red transition-colors">Présentation</Link></li>
              <li><Link href="/projet" className="hover:text-quant-red transition-colors">Projet</Link></li>
              <li><Link href="/contact" className="hover:text-quant-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Bloc Réseaux Sociaux */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-gray-900">Réseaux</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <a href="https://github.com/PaulT133069" target="_blank" rel="noopener noreferrer" className="hover:text-quant-red transition-colors flex items-center gap-2">
                  GitHub <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/paul-teule-516a321a0/" target="_blank" rel="noopener noreferrer" className="hover:text-quant-red transition-colors flex items-center gap-2">
                  LinkedIn <span className="text-[10px]">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation et copyright */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 Mon Nom. Tous droits réservés.</p>
          <p>
            Construit avec <span className="text-quant-red">Next.js</span> & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}