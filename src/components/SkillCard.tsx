import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  level: number;
  index: number;
}

const SkillCard = ({ icon: Icon, name, level, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <motion.div 
        whileHover={{ scale: 1.05, y: -8 }}
        className="bg-card/60 backdrop-blur-glass border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.2)] relative overflow-hidden"
      >
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300" />
        
        <div className="flex flex-col items-center gap-4 relative">
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all"
          >
            <Icon className="w-8 h-8 text-primary" />
          </motion.div>
          
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          {/* Progress bar */}
          <div className="w-full space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-muted-foreground">Proficiency</span>
              <span className="text-sm font-bold text-primary">{level}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden border border-border">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-primary relative"
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
