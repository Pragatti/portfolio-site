import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Download, Trophy, Target, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";

const About = () => {
  const experiences = [
    {
      year: "Mar '22 – Mar '26",
      role: "Frontend Developer",
      company: "Digimantra Labs",
      description: "Engineered and optimized modular and responsive UI using React.js, Next.js, and Tailwind CSS, improving site load speed by 20% and user experience across devices. Integrated headless WordPress CMS with GraphQL, reducing API response time by 30% and enabling dynamic content updates. Collaborated with backend teams on Node.js and NestJS services for end-to-end product delivery. Conducted Lighthouse audits and implemented accessibility best practices for a 98% cross-browser compatibility score.",
    },
    {
      year: "Nov '21 – Jan '22",
      role: "Assistant Consultant (Frontend Developer)",
      company: "Oodles Technologies",
      description: "Migrated and refactored legacy frontends to modern React architecture, improving maintainability and page responsiveness by 15%. Partnered with design and product teams to deliver scalable UI components following Atomic Design principles. Standardized reusable React hooks and components, reducing code redundancy by 20%. Participated in code reviews, ensuring adherence to clean coding standards and TypeScript best practices.",
    },
  ];

  const achievements = [
    {
      icon: Target,
      title: "20% Site Load Speed Improvement",
      organization: "Digimantra Labs",
      description: "Optimized modular and responsive UI, improving site load speed by 20% and enhancing user experience across devices",
    },
    {
      icon: Trophy,
      title: "98% Cross-Browser Compatibility",
      organization: "Accessibility Best Practices",
      description: "Conducted Lighthouse audits and implemented accessibility best practices achieving 98% cross-browser compatibility score",
    },
    {
      icon: Sparkles,
      title: "30% API Response Time Reduction",
      organization: "GraphQL Integration",
      description: "Integrated headless WordPress CMS with GraphQL, reducing API response time by 30% and enabling dynamic content updates",
    },
  ];

  const skills = [
    { category: "Frontend Technologies", items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "State Management", items: ["Redux", "Redux Toolkit", "Context API", "React Query"] },
    { category: "Backend & API Integration", items: ["RESTful APIs", "GraphQL", "Axios", "Fetch API", "Node.js", "Prisma"] },
    { category: "Tools & Methodologies", items: ["Git", "GitHub", "Webpack", "Vite", "Jest", "Lighthouse", "Core Web Vitals", "Agile", "Scrum", "CI/CD"] },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section with Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  About Me
                </h1>
                
                <div className="space-y-4 mb-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm a <span className="text-primary font-semibold">Frontend Developer</span> with <span className="text-primary font-semibold">3+ years</span> of experience in building high-performance, scalable, and accessible web applications using <span className="text-primary font-semibold">React.js</span>, <span className="text-primary font-semibold">Next.js</span>, and <span className="text-primary font-semibold">TypeScript</span>. Skilled in developing modular UI components, optimizing application performance, and ensuring cross-browser compatibility.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Proficient in state management (Redux, React Query), REST/GraphQL integration, and Agile collaboration with backend teams. Strong understanding of Core Web Vitals, Lighthouse performance audits, and modern UI/UX practices. Familiar with Node.js, NestJS, and Prisma for end-to-end product development and microservice-based architecture.
                  </p>
                </div>

                <Button 
                  size="lg" 
                  asChild
                  className="bg-primary hover:bg-primary/90 gap-2 shadow-lg hover:shadow-primary/50"
                >
                  <a href="/Pragatti_Harchand_Resume.pdf" download>
                    <Download className="w-5 h-5" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Right-side image/avatar section removed as requested */}
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-20">
          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              icon={Sparkles}
              title="Technical Expertise"
              subtitle="Technologies and tools I work with"
              centered={false}
            />
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/60 backdrop-blur-glass border-border hover:border-primary/30 transition-all p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">{skill.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="text-sm px-3 py-1.5 rounded-full bg-primary/5 text-foreground border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              icon={Award}
              title="Achievements & Recognition"
              subtitle="Awards and milestones throughout my career"
              centered={false}
            />
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-card/60 backdrop-blur-glass border-border hover:border-primary/30 transition-all p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-primary mb-3">{achievement.organization}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              icon={GraduationCap}
              title="Education"
              centered={false}
            />
            <Card className="bg-card/60 backdrop-blur-glass border-border hover:border-primary/30 transition-all p-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Master of Computer Applications (MCA)</h3>
                  <p className="text-muted-foreground mb-4">Chandigarh Group of Colleges, Landran, Mohali • Apr '19 – Apr '21</p>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    GPA: 8.21. Specialized in Computer Applications with focus on software development and web technologies.
                  </p>
                  <h3 className="text-xl font-semibold mb-2 mt-6">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-muted-foreground mb-4">Govt. College Daulatpur Chowk, Himachal Pradesh • Apr '16 – Apr '19</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    GPA: 8.14. Foundation in computer applications and programming fundamentals.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              icon={Briefcase}
              title="Work Experience"
              subtitle="My professional journey and career milestones"
              centered={false}
            />

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-10 border-l-2 border-primary/30 hover:border-primary/60 transition-colors"
                >
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(96,165,250,0.5)]" />
                  <Card className="bg-card/60 backdrop-blur-glass border-border hover:border-primary/40 hover:shadow-[0_0_30px_rgba(96,165,250,0.1)] transition-all p-6">
                    <div className="text-sm text-primary font-semibold mb-2 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                        {exp.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-muted-foreground mb-4 font-medium">{exp.company}</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{exp.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;
