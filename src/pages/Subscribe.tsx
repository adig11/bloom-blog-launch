import { Layout } from "@/components/layout/Layout";
import { NewsletterForm } from "@/components/NewsletterForm";

const Subscribe = () => {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-text-headline mb-4">
            Subscribe to the Newsletter
          </h1>
          <p className="text-lg text-text-body mb-8">
            One essay per week. Deep thinking on startups, systems, and ideas. 
            No spam, no fluff, just substance.
          </p>

          <NewsletterForm variant="hero" className="text-left" />

          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="font-serif text-xl font-semibold text-text-headline mb-4">
              What to expect
            </h2>
            <ul className="text-left text-text-body space-y-3">
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>One analytical essay per week, delivered on Wednesday</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>Topics: founder challenges, market analysis, strategic thinking</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>Occasional "Graph of the Week" with data-driven insights</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>No affiliate links, no sponsored content, no noise</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Subscribe;
