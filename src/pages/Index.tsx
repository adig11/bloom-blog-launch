import { Layout } from "@/components/layout/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { getFeaturedArticle, getLatestArticles, getArticlesForSeries } from "@/lib/articles";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FloatingElement } from "@/components/animations/FloatingElement";

const Index = () => {
  const featured = getFeaturedArticle();
  const latest = getLatestArticles(4).filter((a) => a.slug !== featured?.slug);
  const graphOfTheWeek = getArticlesForSeries("graph-of-the-week");

  return (
    <Layout>
      {/* Hero */}
      <section className="border-b border-border relative overflow-hidden">
        {/* Floating decorative elements */}
        <FloatingElement className="absolute top-20 right-[15%] w-2 h-2 rounded-full bg-primary/20" delay={0}><span /></FloatingElement>
        <FloatingElement className="absolute top-40 right-[25%] w-1.5 h-1.5 rounded-full bg-primary/30" delay={1}><span /></FloatingElement>
        <FloatingElement className="absolute bottom-20 right-[10%] w-3 h-3 rounded-full bg-primary/10" delay={2}><span /></FloatingElement>
        
        <div className="container py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3 opacity-0 animate-fade-up">
              Essays on building
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-headline leading-[1.1] mb-4 opacity-0 animate-fade-up animation-delay-100">
              Thoughts on building,{" "}
              <span className="text-primary">for India</span>.
            </h1>
            <p className="text-lg text-text-body max-w-2xl mb-6 opacity-0 animate-fade-up animation-delay-200">
              A personal lens on startups, systems, markets, and ideas. High signal. No fluff.
            </p>
            <div className="opacity-0 animate-fade-up animation-delay-300">
              <NewsletterForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Essay */}
      {featured && (
        <ScrollReveal>
          <section className="border-b border-border">
            <div className="container py-10 md:py-12">
              <div className="flex items-center justify-between mb-6">
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
        </ScrollReveal>
      )}

      {/* Graph of the Week */}
      {graphOfTheWeek.length > 0 && (
        <ScrollReveal delay={0.1}>
          <section className="border-b border-border">
            <div className="container py-10 md:py-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-text-meta">
                  Graph of the Week
                </h2>
                <Link to="/series/graph-of-the-week" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                  View all <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <ArticleCard article={graphOfTheWeek[0]} />
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* Recent Essays */}
      <ScrollReveal delay={0.2}>
        <section className="border-b border-border">
          <div className="container py-10 md:py-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-text-meta">
                Recent Essays
              </h2>
              <Link to="/articles" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {latest.slice(0, 4).map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* About Teaser */}
      <section className="bg-surface-sunken">
        <div className="container py-10 md:py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-headline mb-3">
              Writing with conviction
            </h2>
            <p className="text-text-body mb-4">
              This blog exists to explore the ideas that matter. Each essay is researched, 
              structured, and written to earn your time.
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
