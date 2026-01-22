import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Rocket } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Agent Console - EarthLink",
      description: "Developed a high-performance internal portal for 500+ support agents, improving task efficiency by 30% through modular UI and state optimization. Connected backend microservices (NestJS, Prisma) with the frontend React modules, enabling seamless data flow and reducing API latency by 25%. Led peer code reviews, fostering a collaborative environment and mentoring junior developers.",
      tech: ["React.js", "NestJS", "Prisma", "TypeScript", "Microservices"],
      category: "web",
      image: "",
      liveUrl: "https://earthlink.net",
    },
    {
      title: "EarthLink.net - Internet Service Provider",
      description: "Designed and deployed adaptive, mobile-first UI layouts, improving page load time by 20% and enhancing user retention. Incorporated headless WordPress CMS with GraphQL, reducing API response time by 30%. Built scalable React components achieving 98% cross-browser compatibility.",
      tech: ["React.js", "Next.js", "GraphQL", "WordPress CMS", "Tailwind CSS"],
      category: "web",
      image: "",
      liveUrl: "https://earthlink.net",
    },
    {
      title: "Portal Web - News & Media Portal",
      description: "Built a real-time content delivery system using React Query, cutting content update latency by 40%. Implemented custom notification and reminder modules to increase user engagement and revisit rate.",
      tech: ["React.js", "React Query", "TypeScript", "Real-time Updates"],
      category: "web",
      image: "",
      liveUrl: "https://portalweb.com",
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <SectionHeader
          icon={Rocket}
          title="Featured Projects"
          subtitle="A selection of my recent work showcasing various technologies and design approaches"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <Tabs value={filter} onValueChange={setFilter} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-4 bg-card/60 backdrop-blur-glass border border-border">
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="web"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Web
              </TabsTrigger>
              <TabsTrigger 
                value="mobile"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Mobile
              </TabsTrigger>
              <TabsTrigger 
                value="dashboard"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Dashboard
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
