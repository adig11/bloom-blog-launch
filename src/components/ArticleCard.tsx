import { Link } from "react-router-dom";
import { Article } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Clock, ArrowRight } from "lucide-react";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "featured" | "compact";
  className?: string;
}

export const ArticleCard = ({ article, variant = "default", className }: ArticleCardProps) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (variant === "featured") {
    return (
      <article className={cn("group", className)}>
        <Link to={`/articles/${article.slug}`} className="block">
          <div className="space-y-4">
            {article.series && (
              <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary">
                {article.series.replace(/-/g, " ")}
              </span>
            )}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-headline leading-tight group-hover:text-primary transition-colors">
              {article.title}
            </h2>
            {article.subtitle && (
              <p className="text-lg md:text-xl text-text-meta">
                {article.subtitle}
              </p>
            )}
            <p className="text-text-body leading-relaxed max-w-2xl">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-text-meta">
              <span>{formattedDate}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readingTime} min read
              </span>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className={cn("group", className)}>
        <Link to={`/articles/${article.slug}`} className="flex items-start gap-4">
          <span className="shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-serif font-bold text-text-headline">
            {article.seriesOrder || "•"}
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-lg font-semibold text-text-headline group-hover:text-primary transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="mt-1 text-sm text-text-meta line-clamp-1">
              {article.excerpt}
            </p>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className={cn("group", className)}>
      <Link to={`/articles/${article.slug}`} className="block space-y-3">
        {article.series && (
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary">
            {article.series.replace(/-/g, " ")}
          </span>
        )}
        <h3 className="font-serif text-xl md:text-2xl font-semibold text-text-headline group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        {article.subtitle && (
          <p className="text-text-meta">{article.subtitle}</p>
        )}
        <p className="text-text-body text-sm line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-text-meta pt-2">
          <div className="flex items-center gap-4">
            <span>{formattedDate}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {article.readingTime} min
            </span>
          </div>
          <span className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Read <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </article>
  );
};
