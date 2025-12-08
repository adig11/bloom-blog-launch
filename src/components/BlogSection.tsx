import { BlogCard } from "./BlogCard";

const blogPosts = [
  {
    title: "The Art of Mindful Writing",
    excerpt: "Exploring how mindfulness practices can transform your creative process and help you write with more clarity and purpose.",
    date: "Dec 5, 2025",
    readTime: "5 min read",
    category: "Creativity",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
  },
  {
    title: "Building Better Habits",
    excerpt: "A practical guide to creating sustainable habits that stick, backed by behavioral science and personal experience.",
    date: "Nov 28, 2025",
    readTime: "7 min read",
    category: "Lifestyle",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
  },
  {
    title: "Digital Minimalism in 2025",
    excerpt: "How I reclaimed my attention by simplifying my digital life and what you can learn from my journey.",
    date: "Nov 20, 2025",
    readTime: "6 min read",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  },
];

export const BlogSection = () => {
  return (
    <section className="px-4 py-16">
      <div className="container">
        <div className="mb-12 text-center opacity-0 animate-fade-up">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Latest from the Blog
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Thoughts, stories, and ideas worth sharing. Dive into my latest writings 
            and discover something new.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={post.title} 
              {...post} 
              delay={200 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
