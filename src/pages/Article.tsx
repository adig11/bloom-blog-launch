import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ArticleCard } from "@/components/ArticleCard";
import { Callout } from "@/components/writing/Callout";
import { PullQuote } from "@/components/writing/PullQuote";
import { getArticleBySlug, getLatestArticles, getArticlesForSeries } from "@/lib/articles";
import { Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import { useEffect, useState } from "react";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [readingProgress, setReadingProgress] = useState(0);

  const article = slug ? getArticleBySlug(slug) : undefined;

  // Reading progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / documentHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!article) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-text-headline mb-4">Article not found</h1>
          <Link to="/articles" className="text-primary hover:underline">
            ← Back to articles
          </Link>
        </div>
      </Layout>
    );
  }

  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Get related articles
  const seriesArticles = article.series 
    ? getArticlesForSeries(article.series).filter((a) => a.slug !== article.slug)
    : [];
  const relatedArticles = seriesArticles.length > 0 
    ? seriesArticles.slice(0, 2) 
    : getLatestArticles(2).filter((a) => a.slug !== article.slug);

  // Get next/prev in series
  const currentIndex = seriesArticles.findIndex((a) => a.slug === article.slug);
  const prevArticle = article.series && seriesArticles.length > 0 
    ? getArticlesForSeries(article.series)[currentIndex - 1] 
    : undefined;
  const nextArticle = article.series && seriesArticles.length > 0 
    ? getArticlesForSeries(article.series)[currentIndex + 1] 
    : undefined;

  return (
    <Layout>
      {/* Reading progress bar */}
      <div className="fixed top-16 left-0 right-0 h-0.5 bg-border z-50">
        <div 
          className="h-full bg-primary transition-all duration-100"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Article Header */}
      <header className="border-b border-border">
        <div className="container py-12 md:py-16">
          <div className="max-w-content mx-auto">
            <Link 
              to="/articles"
              className="inline-flex items-center gap-1 text-sm text-text-meta hover:text-primary mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              All articles
            </Link>

            {article.series && (
              <Link 
                to={`/series/${article.series}`}
                className="block text-sm font-medium uppercase tracking-wider text-primary mb-4 hover:underline"
              >
                {article.series.replace(/-/g, " ")}
              </Link>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-headline leading-tight mb-4">
              {article.title}
            </h1>

            {article.subtitle && (
              <p className="text-xl md:text-2xl text-text-meta mb-6">
                {article.subtitle}
              </p>
            )}

            <div className="flex items-center gap-6 text-sm text-text-meta">
              <span>{formattedDate}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readingTime} min read
              </span>
              <button 
                className="flex items-center gap-1 hover:text-primary transition-colors"
                onClick={() => navigator.share?.({ title: article.title, url: window.location.href })}
              >
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="container py-12 md:py-16">
        <div className="max-w-content mx-auto">
          <div className="prose">
            {/* Render content - in production this would be MDX */}
            {article.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return <h2 key={i}>{block.replace("## ", "")}</h2>;
              }
              if (block.startsWith("### ")) {
                return <h3 key={i}>{block.replace("### ", "")}</h3>;
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i}>
                    {items.map((item, j) => (
                      <li key={j}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              if (block.startsWith("1. ")) {
                const items = block.split("\n").filter((l) => /^\d+\. /.test(l));
                return (
                  <ol key={i}>
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^\d+\. /, "")}</li>
                    ))}
                  </ol>
                );
              }
              if (block.trim()) {
                // Handle bold text
                const parts = block.split(/\*\*(.*?)\*\*/g);
                return (
                  <p key={i}>
                    {parts.map((part, j) => 
                      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                    )}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* Example callout - would be inline in MDX */}
          <Callout type="insight" className="mt-12">
            This essay is part of an ongoing exploration of founder challenges. 
            Subscribe to follow along as I publish new essays each week.
          </Callout>
        </div>
      </article>

      {/* Tags */}
      <div className="container pb-8">
        <div className="max-w-content mx-auto">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                to={`/articles?tag=${tag}`}
                className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Series Navigation */}
      {article.series && (prevArticle || nextArticle) && (
        <div className="border-t border-border">
          <div className="container py-8">
            <div className="max-w-content mx-auto flex justify-between">
              {prevArticle ? (
                <Link to={`/articles/${prevArticle.slug}`} className="group">
                  <span className="text-xs text-text-meta block mb-1">← Previous</span>
                  <span className="text-sm font-medium text-text-headline group-hover:text-primary transition-colors">
                    {prevArticle.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextArticle && (
                <Link to={`/articles/${nextArticle.slug}`} className="group text-right">
                  <span className="text-xs text-text-meta block mb-1">Next →</span>
                  <span className="text-sm font-medium text-text-headline group-hover:text-primary transition-colors">
                    {nextArticle.title}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Newsletter CTA */}
      <div className="bg-surface-sunken border-t border-border">
        <div className="container py-12 md:py-16">
          <div className="max-w-content mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold text-text-headline mb-3">
              Enjoyed this essay?
            </h2>
            <p className="text-text-meta mb-6">
              Subscribe to get new essays delivered to your inbox every week.
            </p>
            <NewsletterForm variant="hero" className="max-w-md mx-auto" />
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="border-t border-border">
          <div className="container py-12 md:py-16">
            <div className="max-w-wide mx-auto">
              <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-text-meta mb-8">
                Continue Reading
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedArticles.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Article;
