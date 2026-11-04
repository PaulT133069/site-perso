// app/components/ProjectCard.tsx

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export default function ProjectCard({ title, description, tags, link }: ProjectProps) {
  return (
    <div className="group border border-gray-200 rounded-none p-6 hover:border-quant-red transition-all duration-300 hover:shadow-md bg-white flex flex-col h-full relative overflow-hidden">
      
      {/* Petite barre rouge décorative qui apparaît au survol en haut de la carte */}
      <div className="absolute top-0 left-0 w-full h-1 bg-quant-red transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

      <div className="flex-1">
        <h3 className="text-xl font-bold mb-3 group-hover:text-quant-red transition-colors">
          {title}
        </h3>
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
          className="text-sm font-bold text-quant-dark flex items-center gap-1 hover:gap-2 transition-all mt-auto"
        >
          Voir le projet <span className="text-quant-red">→</span>
        </a>
      )}
    </div>
  );
}