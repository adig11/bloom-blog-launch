import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  delay?: number;
}

export const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  category,
  imageUrl,
  delay = 0 
}: BlogCardProps) => {
  return (
    <article 
      className="group cursor-pointer opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-[16/10] overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="p-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {category}
            </span>
          </div>
          
          <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
            {title}
          </h3>
          
          <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {readTime}
              </span>
            </div>
            
            <span className="flex items-center gap-1 font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Read more
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
