import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Frown } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* 404 Illustration */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="text-[150px] lg:text-[200px] font-bold bg-gradient-primary bg-clip-text text-transparent leading-none">
                404
              </div>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="absolute -top-8 -right-8"
              >
                <Frown className="w-16 h-16 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
              <br />
              <span className="text-sm mt-2 block text-muted-foreground/70">
                Path attempted: <code className="text-primary">{location.pathname}</code>
              </span>
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 gap-2 shadow-lg hover:shadow-primary/50"
              asChild
            >
              <Link to="/">
                <Home className="w-5 h-5" />
                Go Home
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary/30 hover:bg-primary/10"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Maybe these links will help:
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link to="/about" className="text-primary hover:underline">
                About
              </Link>
              <Link to="/projects" className="text-primary hover:underline">
                Projects
              </Link>
              <Link to="/contact" className="text-primary hover:underline">
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
