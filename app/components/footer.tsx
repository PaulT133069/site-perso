// app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {

  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Partie supérieure du footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Bloc Identité */}
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-xl tracking-tight mb-4 block">
              <span className="text-quant-red">Paul TEULE</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Portfolio personnel. Passionné par la tech, la blockchain et les interfaces minimalistes.
            </p>
          </div>

          {/* Bloc Navigation */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-gray-900">Navigation</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-quant-red transition-colors">Accueil</Link></li>
              <li><Link href="/projets" className="hover:text-quant-red transition-colors">Projets</Link></li>
              <li><Link href="/a-propos" className="hover:text-quant-red transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-quant-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Bloc Réseaux Sociaux */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-gray-900">Réseaux</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <a href="https://github.com/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-quant-red transition-colors flex items-center gap-2">
                  GitHub <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-quant-red transition-colors flex items-center gap-2">
                  Twitter / X <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-quant-red transition-colors flex items-center gap-2">
                  LinkedIn <span className="text-[10px]">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation et copyright */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 Paul TEULE. Tous droits réservés.</p>
          <p>
            Construit avec <span className="text-quant-red">Next.js</span> & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}