import { PROJECTSDEV } from "../constants"
import { motion } from "framer-motion"

const Projectslink = () => {
  return (
    <div className="pb-4 ">
        <motion.h2 
            whileInView={{opacity: 1, y:0}}
            initial={{opacity:0 , y:-100}}
            transition={{duration: 0.5}}
            className="my-20 text-4xl text-center ">Dev Projects</motion.h2>
        <div>
            {PROJECTSDEV.map((project, index) => (
                <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
                    <motion.div
                        whileInView={{opacity: 1, x:0}}
                        initial={{opacity:0 , x:-100}}
                        transition={{duration: 1}} 
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
                            {/* if({project.link}) {<a href={project.link}> Link to </a>} */}
                            {/* if({project.link} === ""){
                                <div className="">" "</div>
                            }
                            <a href={project.link}> Link to </a> */}
                            
                            
                    <div className="flex flex-row clear-both w-full ">
                            {project.technologies.map((tech, index) => (
                                <motion.span
                                    whileInView={{opacity: 1, y:0}}
                                    initial={{opacity:0 , y:15}}
                                    transition={{duration:1.5 }}
                                    className="p-2 mr-2 text-sm font-medium rounded bg-stone-900 text-stone-300" key={index}>
                                        {tech}
                                </motion.span>
                            ))}
                            {/* <a href={project.link}> Link to </a> */}
                            </div>
                            <div className="mt-5 ">
                                <a href={project.link} className="w-full ">
                                <span
                                    whileInView={{opacity: 1, y:0}}
                                    initial={{opacity:0 , y:15}}
                                    transition={{duration:1.5 }}
                                    className="justify-center p-3 mt-4 mr-2 font-mono text-sm font-medium rounded bg-stone-300 text-stone-800">
                                    Link To Build
                                </span>
                                </a>
                            </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}
export default Projectslink