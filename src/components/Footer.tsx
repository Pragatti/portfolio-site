import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Pragatti?tab=overview&from=2026-03-01&to=2026-03-15",
      label: "GitHub",
      color: "hover:text-foreground",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pragatti-harchand-b266921b2/",
      label: "LinkedIn",
      color: "hover:text-[#0077B5]",
    },
    {
      icon: Mail,
      href: "mailto:pragatti4667@gmail.com",
      label: "Email",
      color: "hover:text-primary",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative mt-20 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-lg font-bold text-primary-foreground">PH</span>
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Pragatti Harchand
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              React.js Developer with 3+ years of experience building performant, scalable, and accessible web applications.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              <span>and</span>
              <Code2 className="w-4 h-4 text-primary" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Connect
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Let's connect and build something amazing together!
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg bg-card/60 backdrop-blur-glass border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Pragatti Harchand. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span>Designed & Developed by</span>
              <span className="text-primary font-semibold">Pragatti Harchand</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
