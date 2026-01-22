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
          {/* Left column - Replaced Image with Floating Tech Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[400px]"
          >
            {/* Big Organic Background Blob */}
            <div className="absolute inset-0 blob-shape bg-gradient-sage opacity-20 blur-2xl" />
            <div className="absolute inset-10 blob-shape bg-gradient-warm opacity-10 animate-blob-morph" />

            {/* Floating Icons Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Center Core */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="z-10 bg-card/80 backdrop-blur-md border border-border/50 p-8 rounded-[3rem] shadow-float text-center"
              >
                <div className="text-5xl mb-2">🚀</div>
                <h3 className="font-serif text-2xl font-bold">Full Stack</h3>
                <p className="text-xs text-primary font-medium tracking-widest uppercase">
                  Developer
                </p>
              </motion.div>

              {/* Small Floating Circles Around (Skills) */}
              {[
                { icon: "⚛️", pos: "top-10 left-10", delay: 0 },
                { icon: "🎨", pos: "top-20 right-10", delay: 1 },
                { icon: "🛠️", pos: "bottom-10 left-20", delay: 0.5 },
                { icon: "📱", pos: "bottom-20 right-20", delay: 1.5 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: item.delay,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${item.pos} w-16 h-16 rounded-2xl bg-card border border-border/40 shadow-soft flex items-center justify-center text-2xl`}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>

            {/* Location badge tetap dipertahankan karena keren */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 organic-card px-5 py-3 flex items-center gap-3 z-20"
            ></motion.div>
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
