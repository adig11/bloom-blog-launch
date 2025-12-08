import { Article, Series } from "./types";

// Sample articles data - in production, these would be MDX files
export const articles: Article[] = [
  {
    slug: "the-founders-paradox",
    title: "The Founder's Paradox",
    subtitle: "Why the skills that get you to $1M will destroy you at $10M",
    excerpt: "Every founder faces a moment where their greatest strengths become their biggest liabilities. This essay explores the uncomfortable transition from builder to leader.",
    content: `
The most dangerous moment in a startup's life isn't the funding crunch or the market crash. It's the quiet Tuesday morning when everything is working.

## The Trap of Early Success

When you're a first-time founder, you learn by doing. You write the code, close the deals, hire the team, design the product. This generalist superpower is exactly what gets you from zero to one.

But here's what nobody tells you: **the same relentless execution that built your company will eventually break it.**

I've watched dozens of founders hit this wall. The symptoms are always the same:

- Every decision bottlenecks through you
- Your best people start leaving
- You're working harder than ever but moving slower

## The Uncomfortable Truth

The transition from founder-operator to founder-leader isn't an upgrade—it's a complete rewiring. The skills that got you here (bias to action, hands-on problem solving, knowing every detail) become liabilities at scale.

Your new job isn't to be the best at everything. It's to build a system where you're not needed for anything.

This is emotionally brutal. Your identity is tied to being the person who can do it all. Letting go feels like failure, even when it's the only path to success.

## The Way Through

The founders who navigate this successfully share three traits:

1. **They hire people who intimidate them.** Not just competent people—people who are genuinely better than them in their domain.

2. **They obsess over systems, not tasks.** Every problem becomes a question: "How do I make sure I never have to solve this again?"

3. **They redefine their value.** From "person who does things" to "person who ensures things get done."

The irony is beautiful: the best way to honor what you built is to build a company that doesn't need you to build it anymore.
    `,
    publishedAt: "2025-12-06",
    readingTime: 8,
    tags: ["founders", "leadership", "scale"],
    series: "zero-to-one",
    seriesOrder: 1,
    featured: true,
  },
  {
    slug: "why-most-markets-are-smaller-than-you-think",
    title: "Why Most Markets Are Smaller Than You Think",
    subtitle: "The TAM delusion and how to actually size opportunities",
    excerpt: "Every pitch deck shows a billion-dollar market. Here's how to see through the fantasy and find the real opportunity.",
    content: `
There's a moment in every investor meeting where the founder clicks to the market size slide. $50 billion. $100 billion. A number so large it feels abstract—and that's exactly the point.

## The TAM Theater

Total Addressable Market (TAM) has become performance art. The formula is simple:

1. Find the biggest possible category
2. Apply creative definitions
3. Present with confidence

A coffee shop isn't competing for the $450B global coffee market. It's competing for the morning routines of people within a 10-minute walk who prefer independent shops over chains.

## The Honest Framework

Real market sizing works backward from constraints:

**Who actually has this problem?** Not everyone who could theoretically benefit—everyone who's actively looking for a solution and has budget.

**What are they spending today?** The strongest signal is existing spend. If they're not paying for something similar, you're creating demand, not capturing it.

**What's your realistic capture?** Even category winners rarely exceed 30% market share. Plan for 5-10% and be pleasantly surprised.

## Why This Matters

Honest market sizing isn't about lowering ambition. It's about focusing intensity.

A $50M market you can dominate beats a $5B market where you'll be a rounding error. The first gives you pricing power, customer intimacy, and a platform for expansion. The second gives you a pitch deck that excites nobody who's paying attention.

The founders who understand this build better companies, faster, with less capital. They're not aiming at the moon—they're aiming at the precise coordinate where they can actually land.
    `,
    publishedAt: "2025-12-01",
    readingTime: 6,
    tags: ["markets", "strategy", "fundraising"],
    series: "zero-to-one",
    seriesOrder: 2,
  },
  {
    slug: "graph-of-the-week-saas-net-retention",
    title: "SaaS Net Retention Is Collapsing",
    subtitle: "What the data tells us about the end of expansion revenue",
    excerpt: "Net retention rates have fallen 20 points since 2021. Here's what's driving it and what it means for SaaS valuations.",
    content: `
This week's chart tells a story that most SaaS founders don't want to hear.

## The Data

Net Revenue Retention (NRR) across public SaaS companies has dropped from 120%+ averages in 2021 to under 105% in 2024. The decline isn't isolated—it's structural.

The drivers:

1. **Seat-based pricing is dying.** AI is reducing headcount needs, which means fewer seats to expand.
2. **Budget scrutiny is permanent.** CFOs learned to audit software spend during the downturn. They're not unlearning.
3. **Competitive pressure on pricing.** Every category has 5+ credible players now.

## What This Means

The era of "land and expand" as a default growth strategy is over. Companies need to rethink their expansion model entirely:

- **Usage-based pricing** becomes essential, not optional
- **Product depth** matters more than breadth
- **Gross retention** becomes the metric that matters

The companies adapting fastest are those who never relied on seat expansion. They built for value capture from day one.

## The Takeaway

If your model depends on customers buying more seats over time, you're building on a foundation that's cracking. The next generation of SaaS will be built on consumption, not headcount.
    `,
    publishedAt: "2025-11-25",
    readingTime: 4,
    tags: ["saas", "data", "trends"],
    series: "graph-of-the-week",
    seriesOrder: 1,
  },
  {
    slug: "the-case-for-boring-businesses",
    title: "The Case for Boring Businesses",
    subtitle: "Why unsexy markets produce the best returns",
    excerpt: "The most successful founders I know run businesses you've never heard of. Here's why boring is the new brilliant.",
    content: `
Nobody writes TechCrunch articles about waste management software. There are no podcasts about HVAC scheduling tools. LinkedIn influencers don't post about accounts receivable automation.

And that's exactly why these businesses work.

## The Unsexy Advantage

Boring markets share characteristics that make them exceptional for building companies:

**Low competition.** Top talent wants to work on AI, crypto, consumer social. This means B2B infrastructure is talent-starved—and talent arbitrage is real.

**Stable demand.** Plumbers will always need scheduling. Accountants will always need to send invoices. These problems don't go away with market cycles.

**High retention.** Switching costs in boring software are massive. Once you're the system of record, you're the system of record.

**Rational buyers.** Small business owners care about ROI, not trends. They'll pay for value and stay forever.

## The Pattern

The most successful bootstrap founders I know follow the same playbook:

1. Find a trade or profession with terrible software
2. Build something 10x better than Excel
3. Charge appropriately
4. Compound for a decade

No venture funding required. No exit pressure. Just steady, profitable growth in a market where you matter to your customers.

## The Reframe

The best businesses aren't the ones that get attention. They're the ones that quietly compound while everyone else chases the next hype cycle.

Boring is a feature, not a bug.
    `,
    publishedAt: "2025-11-18",
    readingTime: 5,
    tags: ["strategy", "bootstrapping", "markets"],
  },
];

export const series: Series[] = [
  {
    slug: "zero-to-one",
    title: "0 → 1",
    description: "Essays on the journey from idea to product-market fit. The hardest phase of building, examined honestly.",
    articles: ["the-founders-paradox", "why-most-markets-are-smaller-than-you-think"],
  },
  {
    slug: "graph-of-the-week",
    title: "Graph of the Week",
    description: "One chart. One insight. Every week I dig into data that reveals something unexpected about markets, companies, or trends.",
    articles: ["graph-of-the-week-saas-net-retention"],
  },
  {
    slug: "founder-whiteboard",
    title: "Founder Whiteboard",
    description: "Tactical frameworks for the decisions founders face. Pricing, hiring, positioning—explained with examples.",
    articles: [],
  },
];

// Utility functions
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getSeriesBySlug(slug: string): Series | undefined {
  return series.find((s) => s.slug === slug);
}

export function getArticlesForSeries(seriesSlug: string): Article[] {
  const s = getSeriesBySlug(seriesSlug);
  if (!s) return [];
  return s.articles
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => !!a)
    .sort((a, b) => (a.seriesOrder || 0) - (b.seriesOrder || 0));
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find((a) => a.featured && !a.draft);
}

export function getLatestArticles(count: number = 10): Article[] {
  return articles
    .filter((a) => !a.draft)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
}

export function getArticlesByTag(tag: string): Article[] {
  return articles.filter((a) => a.tags.includes(tag) && !a.draft);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  articles.forEach((a) => a.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}
