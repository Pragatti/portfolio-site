import { motion } from "framer-motion";
import { ArrowRight, Code, Palette, Zap, Rocket, Briefcase, Users, Award, Coffee, Globe, Smartphone, Layout, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SkillCard from "@/components/SkillCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SectionHeader } from "@/components/SectionHeader";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const skills = [
    { icon: Code, name: "React.js", level: 95 },
    { icon: Code, name: "Next.js", level: 90 },
    { icon: Code, name: "TypeScript", level: 92 },
    { icon: Palette, name: "Tailwind CSS", level: 95 },
    { icon: Zap, name: "JavaScript (ES6+)", level: 93 },
    { icon: Database, name: "GraphQL", level: 85 },
  ];

  const stats = [
    { value: 3, suffix: "+", label: "Years Experience" },
    { value: 98, suffix: "%", label: "Cross-Browser Compatibility" },
    { value: 20, suffix: "%", label: "Performance Improvement" },
    { value: 30, suffix: "%", label: "API Response Time Reduction" },
  ];

  const services = [
    {
      icon: Layout,
      title: "Frontend Development",
      description: "Building modular, responsive UI using React.js, Next.js, and Tailwind CSS. Optimizing site load speed and ensuring cross-browser compatibility.",
    },
    {
      icon: Database,
      title: "API Integration",
      description: "Integrating headless CMS with GraphQL, RESTful APIs, and microservices. Reducing API response time and enabling dynamic content updates.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Conducting Lighthouse audits, implementing Core Web Vitals, code splitting, and lazy loading for optimal application performance.",
    },
    {
      icon: Globe,
      title: "Accessibility & UX",
      description: "Ensuring 98% cross-browser compatibility, implementing accessibility best practices, and following modern UI/UX principles.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-medium text-primary mb-4 tracking-wider uppercase"
              >
                React.js Developer
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
              >
                Pragatti Harchand
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
              >
                Frontend Developer with <span className="text-primary font-semibold">3+ years</span> of experience building high-performance, scalable, and accessible web applications using <span className="text-primary font-semibold">React.js</span>, <span className="text-primary font-semibold">Next.js</span>, and <span className="text-primary font-semibold">TypeScript</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-[0_0_30px_rgba(0,196,255,0.3)] hover:shadow-[0_0_40px_rgba(0,196,255,0.5)] transition-all"
                  asChild
                >
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Hire Me</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right hero visual removed as requested */}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="bg-card/60 backdrop-blur-glass border-border hover:border-primary/50 transition-all duration-300 p-6 hover:shadow-[0_0_40px_rgba(96,165,250,0.15)]">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm lg:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-secondary relative">
        <div className="absolute inset-0 bg-[var(--gradient-mesh)]" />
        <div className="container mx-auto px-4 relative">
          <SectionHeader
            icon={Zap}
            title="Technical Skills"
            subtitle="Expertise in modern frontend technologies and frameworks"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Briefcase}
            title="What I Do"
            subtitle="Comprehensive web development services tailored to your needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-card/60 backdrop-blur-glass border-border hover:border-primary/50 transition-all duration-300 p-8 h-full hover:shadow-[0_0_40px_rgba(96,165,250,0.15)]">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="absolute inset-0 bg-[var(--gradient-mesh)]" />
            <div className="relative z-10 bg-card/40 backdrop-blur-glass border border-primary/20 rounded-3xl p-12 lg:p-16 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6"
              >
                <Coffee className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's grab a virtual coffee and create something extraordinary!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-[0_0_30px_rgba(96,165,250,0.3)] hover:shadow-[0_0_50px_rgba(96,165,250,0.5)] transition-all text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/contact">
                    Get In Touch
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 gap-2 text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/projects">
                    View Projects
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
