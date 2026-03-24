import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";

const AdminSwitcher = () => {
  const { user, isAdmin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // If user is not admin, or if they are currently on an admin page, don't show the switcher
  if (!user || !isAdmin || location.pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        onClick={() => navigate("/admin")} 
        size="lg"
        className="shadow-xl rounded-full px-6 flex items-center gap-2 hover:scale-105 transition-transform"
      >
        <LayoutDashboard className="w-5 h-5" />
        <span className="font-semibold">Back to Admin</span>
      </Button>
    </div>
  );
};

export default AdminSwitcher;
