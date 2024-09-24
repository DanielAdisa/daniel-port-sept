import { FaLocationArrow } from "react-icons/fa"
import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { FaLocationPin } from "react-icons/fa6"
import { BiPhoneOutgoing } from "react-icons/bi"
import { TfiEmail } from "react-icons/tfi"

const Contact = () => {
  return (
    <div className="pb-20 border-t border-stone-900">
        <motion.h2 
             whileInView={{opacity: 1, y:0}}
             initial={{opacity:0 , y:-50}}
             transition={{duration:0.5 }}
            className="my-8 text-4xl text-center">
            Let's Talk
        </motion.h2>
        <div className="">
        <div className="flex justify-center gap-10 tracking-tighter text-center">
            <motion.p 
            whileInView={{opacity: 1, y:0}}
            initial={{opacity:0 , y:40}}
            transition={{duration:0.5 }}
            className="flex items-center justify-center gap-1 text-2xl md:text-3xl">
                <a href={CONTACT.location}>
                    <FaLocationPin/>
                </a>
            </motion.p>

            <motion.p 
             whileInView={{opacity: 1, y:0}}
             initial={{opacity:0 , y:40}}
             transition={{duration:1 }}
            className="flex items-center justify-center text-2xl md:text-3xl">
                <a href={"tel:+2349166423642"}>
                <BiPhoneOutgoing/>
                </a>
            </motion.p>
            <motion.div
            whileInView={{opacity: 1, y:0}}
            initial={{opacity:0 , y:40}}
            transition={{duration:1.5 }}
            className="flex items-center justify-center text-2xl md:text-3xl"
            >
            <a href={'mailto:adisadaniel4@gmail.com'} className="">
                < TfiEmail/>
            </a>
            </motion.div>
        </div>
        </div>
    </div>
  )
}
export default Contact