import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Heart, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portofolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ajiwijayatamaa",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ajiwijayatama/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/aji.iiii/",
      label: "Instagram",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-16 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 rounded-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.a
              href="#home"
              className="inline-flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 blob-shape bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <span
                className="text-xl font-semibold"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Aji Wijayatama<span className="text-gradient">.</span>
              </span>
            </motion.a>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Crafting digital experiences that inspire and innovate. Let's
              build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-5 text-sm uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-5 text-sm uppercase tracking-wider text-muted-foreground">
              Contact
            </h4>
            <p className="text-foreground/70 text-sm mb-2">
              {personalInfo.email}
            </p>
            <p className="text-foreground/70 text-sm mb-5">
              {personalInfo.location}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-11 h-11 rounded-2xl bg-secondary/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Made with <Heart size={14} className="text-primary" /> using React &
            Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
