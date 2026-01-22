import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, ArrowUpRight, Sparkles } from "lucide-react";
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
      {/* --- DEKORASI BACKGROUND (Agar tidak sepi) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] blob-shape bg-secondary/20 opacity-40 blur-3xl -z-10" />
      <div className="absolute -right-20 top-1/3 w-72 h-72 blob-shape bg-primary/5 blur-2xl -z-10" />

      {/* Pattern Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" /> Learning Path
          </div>
          <h2 className="section-heading-organic">
            <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Garis Tengah (Hanya muncul di Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="grid gap-16 md:gap-24">
            {educations.map((edu, index) => {
              const isEven = index % 2 === 1;
              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center`}
                >
                  {/* Penanda Titik di Garis Tengah */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-border items-center justify-center z-20">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  {/* Kolom Tahun/Period */}
                  <div className={`${isEven ? "md:order-2" : "md:text-right"}`}>
                    <div
                      className={`flex flex-col ${isEven ? "items-start" : "md:items-end items-start"}`}
                    >
                      {/* Angka Tahun Besar Background */}
                      <span className="text-7xl font-serif font-bold opacity-[0.04] absolute -top-8 hidden md:block">
                        {edu.period.split(" ")[0]}
                      </span>
                      <span className="pill-tag bg-secondary/50 backdrop-blur-sm border-none text-primary font-bold">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {/* Kolom Kartu Konten */}
                  <div className={`${isEven ? "md:order-1" : ""}`}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.01 }}
                      className="organic-card p-8 bg-card/40 backdrop-blur-md border-white/20 relative group overflow-hidden"
                    >
                      {/* Efek Hover Glass */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/20">
                            <GraduationCap className="w-6 h-6 text-white" />
                          </div>
                          <div className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                            <ArrowUpRight className="w-4 h-4 text-primary" />
                          </div>
                        </div>

                        <h3 className="text-2xl font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                          {edu.title}
                        </h3>
                        <p className="text-primary/80 font-medium mb-4 tracking-wide uppercase text-xs">
                          {edu.university}
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {edu.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
