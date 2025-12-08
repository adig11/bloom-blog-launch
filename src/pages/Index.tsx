import { Layout } from "@/components/layout/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { SeriesCard } from "@/components/SeriesCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { getFeaturedArticle, getLatestArticles, series } from "@/lib/articles";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featured = getFeaturedArticle();
  const latest = getLatestArticles(4).filter((a) => a.slug !== featured?.slug);
  const graphOfTheWeek = latest.find((a) => a.series === "graph-of-the-week");

  return (
    <Layout>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4 opacity-0 animate-fade-up">
              Essays on building
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-headline leading-[1.1] mb-6 opacity-0 animate-fade-up animation-delay-100">
              Deep thinking for{" "}
              <span className="text-primary">founders</span>,{" "}
              <span className="text-primary">operators</span>, and the{" "}
              <span className="text-primary">curious</span>.
            </h1>
            <p className="text-lg md:text-xl text-text-body max-w-2xl mb-8 opacity-0 animate-fade-up animation-delay-200">
              Analytical essays on startups, systems, markets, and ideas. 
              High signal. No fluff. One essay per week.
            </p>
            <div className="opacity-0 animate-fade-up animation-delay-300">
              <NewsletterForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Essay */}
      {featured && (
        <section className="border-b border-border">
          <div className="container py-16 md:py-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-text-meta">
                Latest Essay
              </h2>
              <Link to="/articles" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                All articles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ArticleCard article={featured} variant="featured" />
          </div>
        </section>
      )}

      {/* Graph of the Week + Series */}
      <section className="border-b border-border">
        <div className="container py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Graph of the Week */}
            {graphOfTheWeek && (
              <div>
                <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-text-meta mb-8">
                  Graph of the Week
                </h2>
                <ArticleCard article={graphOfTheWeek} />
              </div>
            )}

            {/* Series */}
            <div>
              <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-text-meta mb-8">
                Essay Series
              </h2>
              <div className="space-y-4">
                {series.slice(0, 2).map((s) => (
                  <SeriesCard key={s.slug} series={s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Essays */}
      <section className="border-b border-border">
        <div className="container py-16 md:py-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-text-meta">
              Recent Essays
            </h2>
            <Link to="/articles" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {latest.slice(0, 4).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-surface-sunken">
        <div className="container py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-headline mb-4">
              Writing with conviction
            </h2>
            <p className="text-text-body mb-6">
              This blog exists to explore the ideas that matter. Each essay is researched, 
              structured, and written to earn your time. No hot takes. No engagement bait. 
              Just honest thinking about hard problems.
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Learn more about this project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
