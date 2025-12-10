import { useState, useEffect } from "react";
import { checkPassword, setAuthenticated, isAuthenticated, logout } from "@/lib/adminAuth";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { Lock, Eye, EyeOff } from "lucide-react";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [authenticated, setAuthState] = useState(false);

  useEffect(() => {
    setAuthState(isAuthenticated());
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkPassword(password)) {
      setAuthenticated();
      setAuthState(true);
      setError("");
    } else {
      setError("Invalid password");
    }
  };

  const handleLogout = () => {
    logout();
    setAuthState(false);
    setPassword("");
  };

  if (authenticated) {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
            <Lock className="h-8 w-8 text-text-headline" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-text-headline">
            Admin Access
          </h1>
          <p className="text-sm text-text-meta mt-2">
            Enter password to continue
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 pr-12 text-sm placeholder:text-text-meta focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-meta hover:text-text-headline"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-xs text-text-meta mt-8">
          thepaperfounder admin panel
        </p>
      </div>
    </div>
  );
};

export default Admin;
