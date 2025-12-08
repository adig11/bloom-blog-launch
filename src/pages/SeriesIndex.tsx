import { Layout } from "@/components/layout/Layout";
import { SeriesCard } from "@/components/SeriesCard";
import { series } from "@/lib/articles";

const SeriesIndex = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-text-headline mb-4">
            Essay Series
          </h1>
          <p className="text-text-body">
            Structured collections of essays that build on each other. 
            Each series explores a theme in depth, with narrative continuity between posts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {series.map((s) => (
            <SeriesCard key={s.slug} series={s} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SeriesIndex;
