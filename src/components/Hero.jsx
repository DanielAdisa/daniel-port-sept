import profilePic from "../assets/12.png"
import {HERO_CONTENT} from "../constants"
import { motion } from "framer-motion"
import desire from "../assets/projects/1.png"

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { 
            duration: 0.5,
            staggerChildren: 0.5,
         }
    }
}

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1,x: 0,transition: {duration: 0.5,}}
}

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2 ">
                <div className="flex justify-center lg:p-8 ">
                    <motion.img 
                    src={desire} 
                    alt="Daniel Adisa"
                    className="border border-stone-900 rounded-3xl"
                    width={650}
                    height={650}
                    initial={{x:100, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{ duration: 1, delay:1.5 }}
                    />
                </div>
            </div>
        <div className="w-full lg:w-1/2">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col items-center mt-10 lg:items-start">
                    <motion.h2
                        variants={childVariants}
                        className="pb-2 text-4xl tracking-tighter lg:text-8xl">
                        Daniel Adisa
                    </motion.h2>
                    <motion.span
                        variants={childVariants}
                        className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text animate-pulse">
                        Full Stack Developer
                    </motion.span>
                    <motion.p
                        variants={childVariants}
                        className="max-w-lg py-6 my-2 text-xl leading-relaxed tracking-tighter ">
                        {HERO_CONTENT}
                    </motion.p>
                    <motion.a 
                        variants={childVariants}
                        href="/resume.pdf" 
                        target="_blank"
                        rel="noopener norreferrer"
                        download
                        className="p-4 mb-10 text-sm bg-white rounded-full text-stone-800">
                            Download Resume
                    </motion.a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}
export default Hero