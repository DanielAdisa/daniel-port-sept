import { PROJECTSDEV } from "../constants";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiLink } from "react-icons/fi";
import { SiTypescript, SiTailwindcss, SiThreedotjs, SiFigma, SiAdobexd, SiReact, SiNextdotjs } from "react-icons/si";

// Tech icon mapping for visual enhancement
const TECH_ICONS = {
  "TypeScript": <SiTypescript className="text-blue-400" />,
  "Tailwind": <SiTailwindcss className="text-cyan-400" />,
  "Three.js": <SiThreedotjs className="text-emerald-400" />,
  "Figma": <SiFigma className="text-pink-400" />,
  "Adobe XD": <SiAdobexd className="text-purple-400" />,
  "React": <SiReact className="text-cyan-500" />,
  "Next.js": <SiNextdotjs className="text-white" />
};

const Projectslink = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container max-w-6xl px-4 mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:mb-20"
        >
          <h2 className="mb-3 text-4xl font-bold text-transparent md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">
            Dev Projects
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-600" />
        </motion.div>

        <div className="grid gap-16 md:gap-24">
          {PROJECTSDEV.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              {/* Card with glassmorphism */}
              <div className="overflow-hidden border shadow-xl rounded-3xl bg-white/5 backdrop-blur-sm border-white/10">
                <div className="grid gap-6 p-5 sm:p-8 md:grid-cols-3">
                  {/* Image container */}
                  <div className="md:col-span-1">
                    <div className="relative overflow-hidden rounded-xl aspect-video md:aspect-square">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="object-cover object-center w-full h-full transition-transform duration-700 transform group-hover:scale-105" 
                        loading="lazy"
                      />
                      
                      {/* Image overlay with gradient */}
                      <div className="absolute inset-0 transition-opacity bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-40 group-hover:opacity-60"></div>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="flex flex-col justify-between md:col-span-2">
                    <div>
                      {/* Project title */}
                      <h3 className="mb-3 text-2xl font-bold md:text-3xl text-stone-100">
                        {project.title}
                      </h3>

                      {/* Project description */}
                      <p className="mb-5 text-base md:text-lg text-stone-300">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + techIndex * 0.1 }}
                            className="flex items-center px-3 py-1.5 text-xs rounded-full bg-stone-800/70 text-stone-300 gap-1.5 border border-stone-700/50"
                          >
                            {TECH_ICONS[tech] || null}
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3 mt-auto">
                      {/* Original link from your code - styled to match new design */}
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-mono text-sm font-medium transition-all rounded-lg sm:flex-none sm:px-6 bg-stone-300 text-stone-800 hover:bg-stone-200"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FiLink className="text-lg" />
                          Link To Build
                        </motion.a>
                      )}

                      {/* GitHub repository link */}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-medium transition-all border rounded-lg sm:flex-none sm:px-6 bg-stone-800 text-stone-200 border-stone-700 hover:bg-stone-700"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FiGithub />
                          GitHub
                        </motion.a>
                      )}

                      {/* Live demo link */}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-medium text-white transition-all rounded-lg sm:flex-none sm:px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FiExternalLink />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-700 opacity-0 -z-10 group-hover:opacity-100">
                <div className="absolute w-40 h-40 rounded-full -top-10 -left-10 bg-purple-500/10 blur-3xl"></div>
                <div className="absolute w-40 h-40 rounded-full -bottom-10 -right-10 bg-blue-500/10 blur-3xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none -z-20 opacity-30">
        <div className="absolute top-[30%] left-[10%] w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] right-[10%] w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Projectslink;