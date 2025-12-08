import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { getSeriesBySlug, getArticlesForSeries } from "@/lib/articles";
import { ArrowLeft, BookOpen } from "lucide-react";

const Series = () => {
  const { slug } = useParams<{ slug: string }>();
  const seriesData = slug ? getSeriesBySlug(slug) : undefined;
  const articles = slug ? getArticlesForSeries(slug) : [];

  if (!seriesData) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-text-headline mb-4">Series not found</h1>
          <Link to="/series" className="text-primary hover:underline">
            ← Back to series
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <header className="border-b border-border">
        <div className="container py-12 md:py-16">
          <Link 
            to="/series"
            className="inline-flex items-center gap-1 text-sm text-text-meta hover:text-primary mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All series
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-headline mb-4">
            {seriesData.title}
          </h1>
          
          <p className="text-lg text-text-body max-w-2xl mb-6">
            {seriesData.description}
          </p>

          <div className="flex items-center gap-1 text-sm text-text-meta">
            <BookOpen className="h-4 w-4" />
            {articles.length} {articles.length === 1 ? "essay" : "essays"} in this series
          </div>
        </div>
      </header>

      {/* Articles */}
      <div className="container py-12 md:py-16">
        {articles.length > 0 ? (
          <div className="space-y-8">
            {articles.map((article, index) => (
              <div key={article.slug} className="flex gap-6 items-start">
                <div className="shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-serif text-lg font-bold text-text-headline">
                  {index + 1}
                </div>
                <div className="flex-1 pt-1">
                  <ArticleCard article={article} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-text-meta">
            <p>No essays in this series yet. Check back soon!</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Series;
