
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cinematic-dark">
      <div className="text-center max-w-md px-6">
        <h1 className="text-8xl font-display text-primary mb-4">404</h1>
        <p className="text-xl text-white mb-8">This scene didn't make the final cut</p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved to another location.
        </p>
        <Link 
          to="/" 
          className="glass px-6 py-3 rounded-full text-primary border border-primary/20 hover:bg-primary/10 transition-colors duration-300 inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Set
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
