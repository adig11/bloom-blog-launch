import { Layout } from "@/components/layout/Layout";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Callout } from "@/components/writing/Callout";

const About = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <article className="max-w-content mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-text-headline mb-8">
            About This Blog
          </h1>

          <div className="prose">
            <p>
              <strong>thepaperfounder</strong> exists to publish deep, analytical essays 
              on startups, systems, markets, and ideas. It's a space for thinking clearly 
              about hard problems—not hot takes or engagement bait.
            </p>

            <h2>Why This Exists</h2>
            <p>
              The internet is full of noise. Everyone has a take. Most content is optimized 
              for clicks, not clarity. I wanted a place to write the essays I wish existed 
              when I was starting out.
            </p>
            <p>
              Each piece is researched, structured, and written to earn your time. The goal 
              is simple: one idea, explored thoroughly, with honest acknowledgment of complexity.
            </p>

            <h2>Who It's For</h2>
            <p>
              This blog is for <strong>founders</strong> building companies, <strong>operators</strong> 
              {" "}scaling them, <strong>investors</strong> evaluating them, and <strong>curious 
              generalists</strong> who want to understand how things work.
            </p>
            <p>
              If you appreciate long-form thinking, structured arguments, and ideas that 
              challenge conventional wisdom—you're in the right place.
            </p>

            <h2>Writing Philosophy</h2>
            <p>
              Every essay follows a few principles:
            </p>
            <ul>
              <li><strong>Structure over sprawl.</strong> Clear arguments with clear progression.</li>
              <li><strong>Specificity over generality.</strong> Real examples, real data, real stakes.</li>
              <li><strong>Honesty over polish.</strong> Acknowledging what I don't know.</li>
              <li><strong>Density over fluff.</strong> Every sentence earns its place.</li>
            </ul>
          </div>

          <Callout type="insight" className="mt-12">
            I publish one essay per week. Subscribe to get it delivered to your inbox.
          </Callout>

          <div className="mt-12">
            <NewsletterForm />
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default About;
