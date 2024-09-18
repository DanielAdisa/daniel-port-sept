import { BiLogoPostgresql } from "react-icons/bi"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsFill, RiReactjsLine } from "react-icons/ri"
import { SiAdobephotoshop, SiBlender, SiCinema4D, SiMongodb, SiPhp } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="pb-24 ">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0 , y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-4xl text-center ">
            Stacks
        </motion.h2 >
            <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1.5}}
                className="flex flex-wrap items-center content-center justify-center gap-4 mx-auto">
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="ml-4">
                    <RiReactjsFill className=" text-7xl text-cyan-400" />   
                </motion.div>

                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className="p-4 ml-4">
                    <TbBrandNextjs className=" text-7xl" />   
                </motion.div>

                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}
                    className="p-4 ">
                    <SiMongodb className=" text-7xl text-cyan-500" />   
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)} 
                    className="p-4 ">
                <SiAdobephotoshop className=" text-7xl text-[#00ffff]" />   
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4.5)} 
                    className="p-4 ">
                    <SiBlender className="text-[#e87d0d]  text-7xl" />   
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(6.5)} 
                    className="p-4 ">
                    <FaNodeJs className="text-green-500 text-7xl" />   
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(8)} 
                    className="p-4 ">
                    <SiPhp className=" text-7xl text-sky-700" />   
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)} 
                    className="p-4 ">
                    <SiCinema4D className=" text-7xl text-sky-700" />   
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(5)} 
                    className="p-4 ">
                    <BiLogoPostgresql className=" text-7xl text-sky-700" />   
                </motion.div>
                
            </motion.div>    
    </div>
  )
}
export default Technologies