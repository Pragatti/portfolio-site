import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with cart, checkout, and payment integration. Built with React, Redux, and Stripe API.",
      tech: ["React", "Redux", "Node.js", "Stripe"],
      image: "",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "TypeScript", "Firebase", "Tailwind"],
      image: "",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with forecasts, historical data, and interactive charts. Integrated with multiple weather APIs.",
      tech: ["Next.js", "Chart.js", "API Integration"],
      image: "",
      githubUrl: "https://github.com",
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for portfolio websites with drag-and-drop builder and real-time preview capabilities.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduling, and engagement metrics.",
      tech: ["React", "D3.js", "REST API"],
      image: "",
      liveUrl: "https://example.com",
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with group chats, file sharing, and emoji support. Built with WebSocket technology.",
      tech: ["React", "Socket.io", "Node.js"],
      image: "",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and design approaches
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
