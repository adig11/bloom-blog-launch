import { Layout } from "@/components/layout/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { SeriesCard } from "@/components/SeriesCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FloatingElement } from "@/components/animations/FloatingElement";
import { getFeaturedArticle, getLatestArticles, series } from "@/lib/articles";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featured = getFeaturedArticle();
  const latest = getLatestArticles(4).filter((a) => a.slug !== featured?.slug);
  const graphOfTheWeek = latest.find((a) => a.series === "graph-of-the-week");

  return (
    <Layout>
      {/* Cinematic Hero */}
      <section className="relative min-h-[90vh] flex items-center border-b border-border overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <FloatingElement delay={0} duration={8} distance={30} className="absolute top-20 right-[15%]">
            <div className="w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          </FloatingElement>
          <FloatingElement delay={2} duration={10} distance={20} className="absolute bottom-32 left-[10%]">
            <div className="w-48 h-48 rounded-full bg-primary/3 blur-2xl" />
          </FloatingElement>
          <FloatingElement delay={4} duration={12} distance={25} className="absolute top-1/2 right-[5%]">
            <div className="w-32 h-32 rounded-full bg-secondary blur-2xl" />
          </FloatingElement>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-6 opacity-0 animate-fade-up">
              Essays on building
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-text-headline leading-[1.05] mb-8 opacity-0 animate-fade-up animation-delay-100">
              Deep thinking for{" "}
              <span className="text-primary">founders</span>,{" "}
              <span className="text-primary">operators</span>, and the{" "}
              <span className="text-primary">curious</span>.
            </h1>
            <p className="text-xl md:text-2xl text-text-body max-w-2xl mb-10 opacity-0 animate-fade-up animation-delay-200 leading-relaxed">
              Analytical essays on startups, systems, markets, and ideas. 
              High signal. No fluff.
            </p>
            <div className="opacity-0 animate-fade-up animation-delay-300">
              <NewsletterForm variant="hero" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-1000">
          <div className="flex flex-col items-center gap-2 text-text-meta">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Featured Essay */}
      {featured && (
        <section className="border-b border-border">
          <div className="container py-24 md:py-32">
            <ScrollReveal>
              <div className="flex items-center justify-between mb-12">
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-text-meta">
                  Latest Essay
                </h2>
                <Link to="/articles" className="inline-flex items-center gap-2 text-sm text-primary hover:underline group">
                  All articles <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ArticleCard article={featured} variant="featured" />
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Graph of the Week + Series */}
      <section className="border-b border-border">
        <div className="container py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Graph of the Week */}
            {graphOfTheWeek && (
              <ScrollReveal animation="slide-left">
                <div>
                  <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-text-meta mb-10">
                    Graph of the Week
                  </h2>
                  <ArticleCard article={graphOfTheWeek} />
                </div>
              </ScrollReveal>
            )}

            {/* Series */}
            <ScrollReveal animation="slide-right">
              <div>
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-text-meta mb-10">
                  Essay Series
                </h2>
                <div className="space-y-6">
                  {series.slice(0, 2).map((s, i) => (
                    <ScrollReveal key={s.slug} delay={0.1 * (i + 1)}>
                      <SeriesCard series={s} />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Recent Essays */}
      <section className="border-b border-border">
        <div className="container py-24 md:py-32">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-text-meta">
                Recent Essays
              </h2>
              <Link to="/articles" className="inline-flex items-center gap-2 text-sm text-primary hover:underline group">
                View all <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {latest.slice(0, 4).map((article, i) => (
              <ScrollReveal key={article.slug} delay={0.1 * i}>
                <ArticleCard article={article} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="relative bg-surface-sunken overflow-hidden">
        <FloatingElement delay={1} duration={10} distance={15} className="absolute top-10 right-[20%] pointer-events-none">
          <div className="w-40 h-40 rounded-full bg-primary/5 blur-2xl" />
        </FloatingElement>
        
        <div className="container py-24 md:py-32 relative z-10">
          <ScrollReveal animation="scale">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-headline mb-6">
                Writing with conviction
              </h2>
              <p className="text-lg text-text-body mb-8 leading-relaxed">
                This blog exists to explore the ideas that matter. Each essay is researched, 
                structured, and written to earn your time. No hot takes. No engagement bait. 
                Just honest thinking about hard problems.
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline group"
              >
                Learn more about this project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
