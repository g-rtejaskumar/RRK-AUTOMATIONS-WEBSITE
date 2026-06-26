import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";
import { FileQuestion, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background px-4 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center max-w-md mx-auto"
      >
        <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6 border border-secondary/20">
          <FileQuestion className="w-8 h-8 text-secondary" />
        </div>
        
        <h1 className="mb-2 text-6xl font-extrabold tracking-tight text-foreground">404</h1>
        <h2 className="mb-4 text-xl font-bold text-foreground">Page Not Found</h2>
        <p className="mb-8 text-muted-foreground text-sm leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track to automating your business growth.
        </p>
        
        <div className="flex justify-center">
          <Button asChild variant="cta" size="lg">
            <Link to="/">
              Return to Home
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
