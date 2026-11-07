// app/components/ProjectCard.tsx
import Image from "next/image";

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  logo?: string;
  status?: "En cours" | "Terminé";
};

export default function ProjectCard({ title, description, tags, link, logo, status }: ProjectProps) {
  return (
    // mt-12 pour laisser de la place au logo qui dépasse, pt-12 pour que le titre soit bien en dessous
    <div className="group border border-gray-200 rounded-none p-6 pt-12 hover:border-quant-red transition-all duration-300 hover:shadow-md bg-white flex flex-col h-full relative mt-12">
      
      {/* Le Logo, remonté avec -top-10 */}
      {logo && (
        <div className="absolute -top-12 left-6 w-40 h-20 bg-white border border-gray-200 flex items-center justify-center p-2 z-10">
           <Image 
             src={logo} 
             alt={`Logo ${title}`} 
             width={48} 
             height={48} 
             className="object-contain" 
             onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
             }}
           />
        </div>
      )}

      {/* Barre décorative rouge au survol */}
      <div className="absolute top-0 left-0 w-full h-1 bg-quant-red transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

      <div className="flex justify-between items-start gap-4 mb-3">
        <h3 className="text-xl font-bold group-hover:text-quant-red transition-colors">
          {title}
        </h3>
        
        {status === "En cours" && (
          <span className="text-[10px] font-bold uppercase tracking-wider bg-red-50 text-quant-red border border-red-100 px-2 py-1 shrink-0">
            En cours
          </span>
        )}
      </div>

      <div className="flex-1">
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="text-xs font-medium bg-gray-50 text-gray-600 px-2.5 py-1 rounded-none border border-gray-100"
          >
            {tag}
          </span>
        ))}
      </div>

      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-bold text-quant-dark flex items-center gap-1 hover:gap-2 transition-all mt-auto w-fit"
        >
          Voir le projet <span className="text-quant-red">→</span>
        </a>
      )}
    </div>
  );
}