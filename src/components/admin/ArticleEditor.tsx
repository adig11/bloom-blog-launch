import { useState } from "react";
import { Article } from "@/lib/types";
import { series } from "@/lib/articles";
import { ArrowLeft, Save, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleEditorProps {
  article: Article;
  isNew: boolean;
  onSave: (article: Article) => void;
  onCancel: () => void;
}

export const ArticleEditor = ({ article, isNew, onSave, onCancel }: ArticleEditorProps) => {
  const [form, setForm] = useState<Article>(article);
  const [tagsInput, setTagsInput] = useState(article.tags.join(", "));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...form,
      slug: form.slug || form.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
      tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean),
      readingTime: Math.ceil(form.content.split(/\s+/).length / 200),
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-6">
          <button
            onClick={onCancel}
            className="flex items-center gap-2 text-sm text-text-meta hover:text-text-headline transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <div className="flex items-center gap-3">
            {!isNew && (
              <Link
                to={`/articles/${article.slug}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-text-meta hover:text-text-headline transition-colors"
              >
                <Eye className="h-4 w-4" />
                Preview
              </Link>
            )}
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Save className="h-4 w-4" />
              {isNew ? "Publish" : "Save"}
            </button>
          </div>
        </div>
      </header>

      {/* Editor */}
      <div className="container max-w-4xl py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Article title..."
              className="w-full bg-transparent text-3xl md:text-4xl font-serif font-bold text-text-headline placeholder:text-text-meta/50 focus:outline-none"
            />
          </div>

          {/* Subtitle */}
          <div>
            <input
              type="text"
              value={form.subtitle || ""}
              onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
              placeholder="Add a subtitle..."
              className="w-full bg-transparent text-xl text-text-meta placeholder:text-text-meta/50 focus:outline-none"
            />
          </div>

          {/* Meta Row */}
          <div className="flex flex-wrap gap-4 py-4 border-y border-border">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-xs font-medium text-text-meta mb-1">
                Publish Date
              </label>
              <input
                type="date"
                value={form.publishedAt}
                onChange={(e) => setForm({ ...form, publishedAt: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="block text-xs font-medium text-text-meta mb-1">
                Series
              </label>
              <select
                value={form.series || ""}
                onChange={(e) => setForm({ ...form, series: e.target.value || undefined })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">No series</option>
                {series.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.featured || false}
                  onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
                />
                <span className="text-sm text-text-meta">Featured</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.draft || false}
                  onChange={(e) => setForm({ ...form, draft: e.target.checked })}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
                />
                <span className="text-sm text-text-meta">Draft</span>
              </label>
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-xs font-medium text-text-meta mb-2">
              Excerpt
            </label>
            <textarea
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              placeholder="A brief summary of the article..."
              rows={2}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm placeholder:text-text-meta/50 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-xs font-medium text-text-meta mb-2">
              Tags (comma separated)
            </label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="founders, strategy, markets"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm placeholder:text-text-meta/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-xs font-medium text-text-meta mb-2">
              Content (Markdown)
            </label>
            <textarea
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder="Start writing your article...

## Use Markdown

You can use **bold**, *italic*, and other formatting.

- Lists work too
- Like this

> And blockquotes"
              rows={20}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm font-mono placeholder:text-text-meta/50 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-y"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
