export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  tags: string[];
  series?: string;
  seriesOrder?: number;
  featured?: boolean;
  draft?: boolean;
  scheduledFor?: string;
  coverImage?: string;
}

export interface Series {
  slug: string;
  title: string;
  description: string;
  articles: string[]; // article slugs
}

export interface GraphOfTheWeek {
  slug: string;
  title: string;
  description: string;
  chartType: 'line' | 'bar' | 'area' | 'pie';
  data: any[];
  publishedAt: string;
}

export type CalloutType = 'insight' | 'warning' | 'quote' | 'contrarian' | 'build';
