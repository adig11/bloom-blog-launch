import { Avatar } from "./Avatar";
import { SocialLinks } from "./SocialLinks";

export const Hero = () => {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="container flex flex-col items-center gap-8 md:flex-row md:gap-16 md:text-left">
        <div className="flex flex-1 flex-col gap-6 opacity-0 animate-fade-up">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Hi, I'm 📝 <span className="text-primary">The Thoughtful Writer</span>
          </h1>
          
          <p className="text-lg text-muted-foreground md:text-xl">
            Personal blog sharing stories, ideas & creative musings
          </p>
          
          <p className="max-w-xl text-muted-foreground">
            Welcome to my corner of the internet where I share thoughts on life, creativity, 
            technology, and everything in between. Grab a cup of coffee and explore my latest writings.
          </p>
          
          <div className="pt-2 opacity-0 animate-fade-up animation-delay-300">
            <SocialLinks />
          </div>
        </div>
        
        <div className="order-first opacity-0 animate-scale-in md:order-last">
          <Avatar />
        </div>
      </div>
    </section>
  );
};
