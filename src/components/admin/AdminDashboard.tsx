import { useState } from "react";
import { articles as initialArticles, series } from "@/lib/articles";
import { Article } from "@/lib/types";
import { ArticleEditor } from "./ArticleEditor";
import { 
  FileText, 
  FolderOpen, 
  Settings, 
  LogOut, 
  Plus, 
  Edit2, 
  Trash2,
  Eye,
  Calendar,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface AdminDashboardProps {
  onLogout: () => void;
}

type Tab = "articles" | "series" | "settings";

export const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [activeTab, setActiveTab] = useState<Tab>("articles");
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const tabs = [
    { id: "articles" as Tab, label: "Articles", icon: FileText },
    { id: "series" as Tab, label: "Series", icon: FolderOpen },
    { id: "settings" as Tab, label: "Settings", icon: Settings },
  ];

  const handleNewArticle = () => {
    setEditingArticle({
      slug: "",
      title: "",
      subtitle: "",
      excerpt: "",
      content: "",
      publishedAt: new Date().toISOString().split("T")[0],
      readingTime: 5,
      tags: [],
      draft: true,
    });
    setIsCreating(true);
  };

  const handleSave = (article: Article) => {
    // In a real app, this would save to a database
    console.log("Saving article:", article);
    setEditingArticle(null);
    setIsCreating(false);
  };

  if (editingArticle) {
    return (
      <ArticleEditor
        article={editingArticle}
        isNew={isCreating}
        onSave={handleSave}
        onCancel={() => {
          setEditingArticle(null);
          setIsCreating(false);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="font-serif text-xl font-bold text-text-headline">
              thepaperfounder
            </Link>
            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              Admin
            </span>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-sm text-text-meta hover:text-text-headline transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border min-h-[calc(100vh-4rem)] p-4">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "text-text-meta hover:bg-secondary hover:text-text-headline"
                )}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "articles" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-text-headline">Articles</h1>
                <button
                  onClick={handleNewArticle}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  New Article
                </button>
              </div>

              <div className="space-y-3">
                {initialArticles.map((article) => (
                  <div
                    key={article.slug}
                    className="flex items-center justify-between p-4 rounded-lg border border-border bg-surface-raised hover:border-primary/30 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-text-headline truncate">
                          {article.title}
                        </h3>
                        {article.draft && (
                          <span className="px-2 py-0.5 rounded-full bg-secondary text-xs text-text-meta">
                            Draft
                          </span>
                        )}
                        {article.featured && (
                          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-xs text-primary">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-xs text-text-meta">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {article.publishedAt}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readingTime} min
                        </span>
                        {article.series && (
                          <span className="text-primary">{article.series}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Link
                        to={`/articles/${article.slug}`}
                        className="p-2 text-text-meta hover:text-text-headline transition-colors"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => setEditingArticle(article)}
                        className="p-2 text-text-meta hover:text-text-headline transition-colors"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-text-meta hover:text-destructive transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "series" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-text-headline">Series</h1>
                <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                  <Plus className="h-4 w-4" />
                  New Series
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {series.map((s) => (
                  <div
                    key={s.slug}
                    className="p-4 rounded-lg border border-border bg-surface-raised"
                  >
                    <h3 className="font-serif text-lg font-semibold text-text-headline mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-text-meta mb-3">{s.description}</p>
                    <p className="text-xs text-text-meta">
                      {s.articles.length} articles
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div>
              <h1 className="text-2xl font-bold text-text-headline mb-6">Settings</h1>
              <div className="max-w-xl space-y-6">
                <div className="p-4 rounded-lg border border-border bg-surface-raised">
                  <h3 className="font-medium text-text-headline mb-2">Site Settings</h3>
                  <p className="text-sm text-text-meta">
                    Configure your blog settings, metadata, and social links.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-surface-raised">
                  <h3 className="font-medium text-text-headline mb-2">Newsletter</h3>
                  <p className="text-sm text-text-meta">
                    Connect your newsletter provider to collect subscribers.
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
