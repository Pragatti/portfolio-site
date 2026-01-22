import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({ title, description, tech, image, githubUrl, liveUrl, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      layout
      className="group h-full"
    >
      <motion.div 
        whileHover={{ y: -10 }}
        className="bg-card/60 backdrop-blur-glass border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_50px_rgba(96,165,250,0.2)] h-full flex flex-col"
      >
        <div className="relative overflow-hidden h-56 bg-gradient-to-br from-muted via-muted to-background">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
              {title.charAt(0)}
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all duration-300" />
          <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-accent/5 blur-xl group-hover:bg-accent/10 transition-all duration-300" />
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-auto">
            {githubUrl && (
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 flex-1 hover:bg-primary/10 hover:border-primary/50" 
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button 
                size="sm" 
                className="gap-2 flex-1 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/50 transition-all" 
                asChild
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
