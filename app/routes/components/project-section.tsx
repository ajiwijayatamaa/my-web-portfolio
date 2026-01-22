import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects } from "../data/portofolioData";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesSearch;
  });

  return (
    <section id="projects" className="section-organic relative" ref={ref}>
      {/* Decorative blob */}
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] blob-shape bg-secondary/40 opacity-60" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            Featured Work
          </span>
          <h2 className="section-heading-organic">
            Selected
            <br />
            <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Filters and Search - Organic layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12"
        >
          {/* Search Input */}
          <div className="relative">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-organic pl-14 w-72"
            />
          </div>
        </motion.div>

        {/* Bento Grid Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`group ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <motion.div
                whileHover={{ y: -6 }}
                className="organic-card overflow-hidden h-full flex flex-col"
              >
                {/* Thumbnail with organic overlay */}
                <div
                  className={`relative overflow-hidden ${index === 0 ? "aspect-[16/10]" : "aspect-video"}`}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        window.open(`/${project.thumbnail}`, "_blank")
                      }
                      className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg"
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                    {/* <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center shadow-lg"
                    >
                      <Github size={20} />
                    </motion.button> */}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`p-6 flex-1 flex flex-col ${index === 0 ? "md:p-8" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3
                      className={`font-semibold group-hover:text-primary transition-colors ${
                        index === 0 ? "text-2xl" : "text-xl"
                      }`}
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <p
                    className={`text-muted-foreground mb-4 flex-1 ${index === 0 ? "text-base" : "text-sm"}`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">
              No projects found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
