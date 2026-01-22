import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Code2, Cpu, Wrench } from "lucide-react"; // Tambahan icon untuk visual
import { skills } from "../data/portofolioData";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillGroups = [
    {
      name: "Frontend",
      icon: <Code2 className="w-4 h-4" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "Bootstrap"],
    },
    {
      name: "Backend",
      icon: <Cpu className="w-4 h-4" />,
      skills: ["Node.js", "PostgreSQL"],
    },
    {
      name: "Tools",
      icon: <Wrench className="w-4 h-4" />,
      skills: ["VS Code", "Postman", "dBeaver", "Figma"],
    },
  ];

  return (
    <section className="section-organic relative overflow-hidden" ref={ref}>
      {/* --- BACKGROUND DECORATION --- */}
      {/* Lingkaran Berputar (v4 Border Utility) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 -right-20 w-96 h-96 rounded-full border-2 border-dashed border-primary/10 opacity-40 -z-10"
      />

      {/* Floating Blobs (v4 Blob Shape) */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 blob-shape bg-secondary/20 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-64 h-64 blob-shape bg-primary/5 blur-2xl -z-10" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE: Content Header */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4" /> Expertise
            </div>

            <h2 className="section-heading-organic mb-8">
              Tools I use to
              <br />
              <span className="text-gradient">bring ideas</span>
              <br />
              <span className="italic font-normal">to life</span>
            </h2>

            <div className="relative p-6 organic-card bg-card/30 backdrop-blur-sm border-white/10 max-w-md">
              <p className="text-muted-foreground text-lg leading-relaxed italic">
                "I'm constantly learning and adapting to new technologies. Here
                are the tools and technologies I work with most frequently."
              </p>
              {/* Decorative dot */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 blob-shape bg-primary opacity-20" />
            </div>
          </motion.div>

          {/* RIGHT SIDE: Skill Groups as Interactive Cards */}
          <div className="space-y-6">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + groupIndex * 0.1 }}
                className="group p-6 organic-card bg-card/50 hover:bg-card transition-all duration-500 border-border/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {group.icon}
                  </div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-[0.2em]">
                    {group.name}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="pill-tag bg-background/80 group-hover:border-primary/30 transition-all cursor-pointer shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM: All Skills Marquee-like area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-32 pt-16 border-t border-border/50 relative"
        >
          {/* Background Text Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 bg-background text-xs font-bold tracking-[0.5em] text-muted-foreground uppercase">
            Tech Ecosystem
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.02 }}
                whileHover={{ y: -5, color: "var(--color-primary)" }}
                className="px-5 py-2.5 rounded-2xl bg-secondary/30 text-muted-foreground text-sm font-medium hover:bg-white hover:shadow-float transition-all duration-300 cursor-default border border-transparent hover:border-primary/10"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
