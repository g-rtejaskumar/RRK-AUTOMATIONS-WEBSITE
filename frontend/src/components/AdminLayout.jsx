import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import { Button } from "./ui/button";
import { LogOut, ArrowLeft, LayoutDashboard, Settings, DollarSign, Loader2, Users } from "lucide-react";

const AdminLayout = ({ children, title }) => {
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-secondary" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-destructive" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-6">
            You don't have admin privileges to access this dashboard.
          </p>
          <Button variant="outline" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const navItems = [
    { name: "Overview", path: "/admin", icon: LayoutDashboard },
    { name: "Services", path: "/admin/services", icon: Settings },
    { name: "Pricing", path: "/admin/pricing", icon: DollarSign },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-card border-b border-border sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto no-scrollbar">
              <Button variant="ghost" size="sm" onClick={() => navigate("/")} className="shrink-0 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" /> <span className="hidden sm:inline">Live Site</span>
              </Button>
              
              <div className="h-6 w-px bg-border shrink-0 hidden md:block" />
              
              <nav className="flex items-center gap-1 shrink-0">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive 
                        ? "bg-secondary/10 text-secondary" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:mr-2" />
                      <span className="hidden sm:inline">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <Button variant="outline" size="sm" onClick={handleSignOut} className="shrink-0 ml-2">
              <LogOut className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Sign Out</span>
            </Button>
            
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {title && (
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
        )}
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
