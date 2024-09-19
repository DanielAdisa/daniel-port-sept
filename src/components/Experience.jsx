import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <div className="pb-4">
        <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity:0 , y:-100}}
        transition={{duration:0.5 }}
        className="my-20 text-4xl text-center">Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="flex flex-wrap mb-10 lg:justify-center">
                    <motion.div 
                    whileInView={{opacity: 1, x:0}}
                    initial={{opacity:0 , x:-100}}
                    transition={{duration:1 }}
                    
                        className="w-full lg:w-1/4">
                        <p className="items-center mb-4 text-sm text-stone-400 ">
                            {experience.year}
                        </p>
                    </motion.div>
                    <div className="w-full max-w-xl lg:w-3/4">
                    <motion.div
                         whileInView={{opacity: 1, x:0}}
                         initial={{opacity:0 , x:100}}
                         transition={{duration:1 }}
                    >
                        <h3 className="mb-2 font-semibold">
                            {experience.role} @{" "}
                            <span className="px-2 py-1 mt-4 mr-2 text-sm font-bold rounded bg-stone-300 text-stone-900">{experience.company}
                            </span>
                        </h3>
                        <p className="mb-4 text-stone-400">
                            {experience.description}
                        </p>
                        </motion.div>
                        <motion.div
                        whileInView={{opacity: 1, y:0}}
                        initial={{opacity:0 , y:30}}
                        transition={{duration:0.5 }}
                        
                        >
                        {experience.technologies.map((tech, index) => (
                            <span key={index} className="px-2 py-1 mt-4 mr-2 text-sm font-medium rounded bg-stone-900 text-stone-300">
                                {tech}
                            </span>
                        ))}
                        </motion.div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
export default Experience