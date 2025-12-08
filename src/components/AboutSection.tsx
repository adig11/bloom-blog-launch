import { BookOpen, Coffee, Lightbulb, Heart } from "lucide-react";

const highlights = [
  { icon: BookOpen, label: "100+ Articles" },
  { icon: Coffee, label: "Daily Musings" },
  { icon: Lightbulb, label: "Creative Ideas" },
  { icon: Heart, label: "With Passion" },
];

export const AboutSection = () => {
  return (
    <section className="bg-card px-4 py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold opacity-0 animate-fade-up md:text-4xl">
            About Me
          </h2>
          
          <div className="space-y-4 text-muted-foreground opacity-0 animate-fade-up animation-delay-200">
            <p>
              I'm a writer, thinker, and eternal learner with a passion for exploring 
              the intersection of <strong className="text-foreground">creativity and everyday life</strong>. 
              Through this blog, I share my thoughts on personal growth, technology, 
              and the small moments that make life meaningful.
            </p>
            
            <p>
              When I'm not writing, you can find me <strong className="text-foreground">exploring new coffee shops</strong>, 
              reading philosophy, or taking long walks to clear my mind. I believe in 
              the power of words to connect, inspire, and transform.
            </p>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-6 opacity-0 animate-fade-up animation-delay-400">
            {highlights.map(({ icon: Icon, label }) => (
              <div 
                key={label}
                className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
              >
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
