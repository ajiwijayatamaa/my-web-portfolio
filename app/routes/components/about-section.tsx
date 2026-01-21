import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Briefcase, Heart } from "lucide-react";
import { personalInfo } from "../data/portofolioData";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Briefcase,
      label: "Problem Solver",
      description: "Turning complex challenges into elegant solutions",
    },
    {
      icon: Heart,
      label: "User Focused",
      description: "Creating experiences that resonate with users",
    },
  ];

  return (
    <section id="about" className="section-organic relative" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 blob-shape bg-secondary opacity-50" />
      <div className="absolute bottom-40 left-10 w-24 h-24 blob-shape bg-primary/10" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left column - Image with organic layout */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Stacked images effect */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[2.5rem] bg-secondary/60 rotate-3" />
              <div className="absolute -top-2 -left-2 w-full h-full rounded-[2.5rem] bg-primary/10 rotate-1" />

              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Location badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 organic-card px-5 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">{personalInfo.location}</p>
                  <p className="text-xs text-muted-foreground">Based in</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-7"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              About Me
            </span>

            <h2 className="section-heading-organic mb-6">
              Crafting digital
              <br />
              <span className="text-gradient">experiences</span> with
              <br />
              <span className="italic font-normal">passion & purpose</span>
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {personalInfo.longBio}
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="organic-card p-5 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {personalInfo.email}
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
