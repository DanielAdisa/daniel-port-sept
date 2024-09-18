import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className="pb-4 ">
        <motion.h2 
            whileInView={{opacity: 1, y:0}}
            initial={{opacity:0 , y:-100}}
            transition={{duration: 0.5}}
            className="my-20 text-4xl text-center ">Projects</motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
                    <motion.div
                        whileInView={{opacity: 1, x:0}}
                        initial={{opacity:0 , x:-100}}
                        transition={{duration: 1.5}} 
                        className="w-full lg:w-1/4">
                        <img src={project.image} alt={project.title} className="mb-6 rounded " width={250} height={250} />
                    </motion.div>
                    <motion.div 
                        whileInView={{opacity: 1, x:0}}
                        initial={{opacity:0 , x:100}}
                        transition={{duration: 1.5}}
                        className="w-full max-w-full my-auto lg:w-3/4">
                            <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
                            <p className="mb-4 text-left text-stone-400">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span className="p-2 mr-2 text-sm font-medium rounded bg-stone-900 text-stone-300" key={index}>
                                    {tech}
                                </span>
                            ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}
export default Projects