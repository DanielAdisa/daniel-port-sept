import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { SiTypescript, SiTailwindcss, SiFigma, SiAdobexd, SiThreedotjs, SiJest, SiStorybook, SiWebgl } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";

const techIcons = {
  TypeScript: <SiTypescript className="text-blue-400" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  Figma: <SiFigma className="text-pink-400" />,
  'Adobe XD': <SiAdobexd className="text-purple-400" />,
  'Three.js': <SiThreedotjs className="text-emerald-400" />,
  Jest: <SiJest className="text-red-400" />,
  Storybook: <SiStorybook className="text-pink-400" />,
  WebGL: <SiWebgl className="text-orange-400" />
};

const Experience = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-stone-950 to-stone-900/50">
      <div className="container px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 text-5xl font-bold text-center text-transparent md:text-6xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text"
        >
          Professional Journey
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-600" />
        </motion.h2>

        <div className="relative w-full grid gap-6 before:absolute before:left-[calc(20%+12px)] before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-purple-500/20 to-blue-600/20 before:ml-[-1px]">
          {EXPERIENCES.map((experience, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              
              {/* Experience card */}
              <div className="w-full p-6 transition-all border shadow-2xl rounded-3xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-8 lg:flex-row">
                  {/* Year */}
                  <motion.div 
                    className="lg:w-1/4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-lg font-semibold text-purple-400">
                      {experience.year}
                    </p>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-6 lg:w-3/4">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="mb-2 text-2xl font-bold text-stone-100">
                        {experience.role}
                        <span className="inline-block px-3 py-1 ml-2 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-stone-100">
                          @ {experience.company}
                          <FiArrowUpRight className="inline-block ml-1" />
                        </span>
                      </h3>
                      <p className="text-lg leading-relaxed text-stone-300">
                        {experience.description}
                      </p>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div 
                      className="flex flex-wrap gap-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {experience.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-stone-200 flex items-center gap-2 hover:bg-white/10 transition-colors"
                        >
                          {techIcons[tech] || null}
                          {tech}
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;