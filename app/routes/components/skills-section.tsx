import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../data/portofolioData";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Group skills into categories for visual interest
  const skillGroups = [
    {
      name: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Bootstrap"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "PostgreSQL"],
    },
    {
      name: "Tools",
      skills: ["VS Code", "Postman", "dBeaver", "Figma"],
    },
  ];

  return (
    <section className="section-organic relative" ref={ref}>
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 right-20 w-60 h-60 rounded-full border border-border/30 opacity-40"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-40 h-40 rounded-full border border-primary/20"
      />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              Skills & Technologies
            </span>
            <h2 className="section-heading-organic mb-6">
              Tools I use to
              <br />
              <span className="text-gradient">bring ideas</span>
              <br />
              <span className="italic font-normal">to life</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              I'm constantly learning and adapting to new technologies. Here are
              the tools and technologies I work with most frequently.
            </p>
          </motion.div>

          {/* Right - Skills in organic groups */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + groupIndex * 0.1 }}
              >
                <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                  {group.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.4 + groupIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="pill-tag cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* All skills as flowing tags */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 pt-16 border-t border-border/50"
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            All Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.03 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full text-sm bg-card border border-border/50 text-foreground/80 hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
