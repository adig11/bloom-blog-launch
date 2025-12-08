import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { getLatestArticles, getAllTags, series } from "@/lib/articles";
import { cn } from "@/lib/utils";

const Articles = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);

  const allArticles = getLatestArticles(50);
  const tags = getAllTags();

  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      if (selectedTag && !article.tags.includes(selectedTag)) return false;
      if (selectedSeries && article.series !== selectedSeries) return false;
      return true;
    });
  }, [allArticles, selectedTag, selectedSeries]);

  const clearFilters = () => {
    setSelectedTag(null);
    setSelectedSeries(null);
  };

  return (
    <Layout>
      <div className="container py-12 md:py-16">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-text-headline mb-4">
            All Articles
          </h1>
          <p className="text-text-body">
            Deep analytical essays on startups, systems, markets, and ideas. 
            Filter by topic or series to find what interests you.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 space-y-4">
          {/* Series filter */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-text-meta mr-2 self-center">
              Series:
            </span>
            {series.map((s) => (
              <button
                key={s.slug}
                onClick={() => setSelectedSeries(selectedSeries === s.slug ? null : s.slug)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                  selectedSeries === s.slug
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Tags filter */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-text-meta mr-2 self-center">
              Topics:
            </span>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm transition-colors",
                  selectedTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Active filters */}
          {(selectedTag || selectedSeries) && (
            <div className="flex items-center gap-2 pt-2">
              <span className="text-sm text-text-meta">
                Showing {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
              </span>
              <button
                onClick={clearFilters}
                className="text-sm text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-meta">No articles match your filters.</p>
            <button
              onClick={clearFilters}
              className="mt-2 text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Articles;
