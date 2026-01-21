import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, ArrowUpRight } from "lucide-react";
import { educations, personalInfo } from "../data/portofolioData";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="section-organic relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] blob-shape bg-secondary/30 opacity-50" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            My Journey
          </span>
          <h2 className="section-heading-organic">Education</h2>
        </motion.div>

        {/* Timeline with profile intro */}
        <div className="max-w-4xl mx-auto">
          {/* Profile intro card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-16"
          >
            <div className="organic-card p-6 flex items-center gap-6 max-w-md">
              <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {personalInfo.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-1">
                  {personalInfo.title}
                </p>
                <p className="text-muted-foreground text-sm">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Timeline items - Bento-style cards */}
          <div className="grid gap-6">
            {educations.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`grid md:grid-cols-12 gap-6 items-center ${
                  index % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                {/* Date/Period - Side column */}
                <div
                  className={`md:col-span-3 ${index % 2 === 1 ? "md:order-2 md:text-left" : "md:text-right"}`}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <GraduationCap className="w-4 h-4" />
                    {edu.period}
                  </span>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -1 }}
                  className={`md:col-span-9 organic-card p-6 md:p-8 ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3
                        className="text-xl font-semibold mb-1"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {edu.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {edu.university}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
