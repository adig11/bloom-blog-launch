import { Link } from "react-router-dom";
import { Series } from "@/lib/types";
import { getArticlesForSeries } from "@/lib/articles";
import { cn } from "@/lib/utils";
import { ArrowRight, BookOpen } from "lucide-react";

interface SeriesCardProps {
  series: Series;
  className?: string;
}

export const SeriesCard = ({ series, className }: SeriesCardProps) => {
  const articles = getArticlesForSeries(series.slug);

  return (
    <article className={cn("group", className)}>
      <Link 
        to={`/series/${series.slug}`} 
        className="block rounded-lg border border-border bg-surface-raised p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5"
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-serif text-xl font-semibold text-text-headline group-hover:text-primary transition-colors">
            {series.title}
          </h3>
          <span className="flex items-center gap-1 text-xs text-text-meta">
            <BookOpen className="h-3.5 w-3.5" />
            {articles.length} {articles.length === 1 ? "essay" : "essays"}
          </span>
        </div>
        
        <p className="text-sm text-text-body mb-4">
          {series.description}
        </p>

        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
          Explore series <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </article>
  );
};
