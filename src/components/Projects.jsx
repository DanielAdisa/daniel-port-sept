import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="relative py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-purple-500/5 to-transparent"></div>
        <div className="absolute rounded-full -top-40 -left-40 w-80 h-80 bg-purple-500/5 blur-3xl"></div>
        <div className="absolute rounded-full top-1/2 -right-40 w-80 h-80 bg-blue-500/5 blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:mb-24"
        >
          <h2 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
            Graphics Portfolio
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-stone-400">
            Creative designs and visual experiences crafted with precision and artistic flair
          </p>
          <div className="w-24 h-1 mx-auto mt-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-16 md:space-y-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              {/* Project card with glassmorphism */}
              <div className="overflow-hidden border shadow-lg rounded-2xl bg-white/5 backdrop-blur-md border-white/10">
                <div className="flex flex-col md:flex-row">
                  {/* Image container */}
                  <div className="w-full p-6 md:w-2/5 md:p-8">
                    <div className="overflow-hidden rounded-xl aspect-[4/3] shadow-lg relative group-hover:shadow-xl transition-all duration-500">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        src={project.image}
                        alt={project.title}
                        className="object-cover object-center w-full h-full"
                        loading="lazy"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100"></div>
                      
                      {/* View link if available */}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute flex items-center gap-2 px-4 py-2 text-white transition-all duration-300 rounded-full opacity-0 bottom-4 right-4 bg-white/20 backdrop-blur-sm group-hover:opacity-100 hover:bg-white/30"
                        >
                          <span className="font-medium">View Project</span>
                          <FiExternalLink />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content container */}
                  <div className="flex flex-col justify-center w-full p-6 md:w-3/5 md:p-8">
                    <motion.h3
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="mb-4 text-2xl font-bold md:text-3xl text-stone-100"
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="mb-6 text-base leading-relaxed md:text-lg text-stone-300"
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="mt-auto"
                    >
                      <h4 className="mb-3 text-sm tracking-wider uppercase text-stone-500">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 text-sm rounded-full bg-stone-800/70 text-stone-300 backdrop-blur-sm border border-stone-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Background glow on hover */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 -z-10 group-hover:opacity-30">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;