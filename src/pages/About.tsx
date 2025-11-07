import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  const experiences = [
    {
      year: "2021 - Present",
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      description: "Leading frontend development initiatives and mentoring junior developers.",
    },
    {
      year: "2019 - 2021",
      role: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed responsive web applications using React and modern JavaScript.",
    },
    {
      year: "2018 - 2019",
      role: "Junior Developer",
      company: "StartUp Ventures",
      description: "Started my journey in web development, focusing on UI/UX implementation.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h1>
          
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Frontend Developer with over 4 years of experience in creating beautiful, 
              responsive, and user-friendly web applications. My journey in web development started with 
              a curiosity about how websites work, and it has evolved into a deep passion for crafting 
              exceptional digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              I specialize in React, TypeScript, and modern CSS frameworks, with a keen eye for design 
              and user experience. When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="bg-card/60 backdrop-blur-glass border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Computer Science</h3>
              <p className="text-muted-foreground">University of Technology • 2014 - 2018</p>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary/30 hover:border-primary/60 transition-colors"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="bg-card/60 backdrop-blur-glass border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
                    <div className="text-sm text-primary font-semibold mb-2">{exp.year}</div>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-muted-foreground mb-3">{exp.company}</p>
                    <p className="text-sm text-foreground/80">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card/60 backdrop-blur-glass border border-border rounded-lg p-4 hover:border-primary/50 transition-all">
                <h4 className="font-semibold mb-1">Advanced React & TypeScript</h4>
                <p className="text-sm text-muted-foreground">2023</p>
              </div>
              <div className="bg-card/60 backdrop-blur-glass border border-border rounded-lg p-4 hover:border-primary/50 transition-all">
                <h4 className="font-semibold mb-1">UI/UX Design Fundamentals</h4>
                <p className="text-sm text-muted-foreground">2022</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
