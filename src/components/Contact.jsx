import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="pb-20 border-t border-stone-900">
        <motion.h2 
             whileInView={{opacity: 1, y:0}}
             initial={{opacity:0 , y:50}}
             transition={{duration:0.5 }}
            className="my-10 text-4xl text-center">
            Let's Talk
        </motion.h2>
        <div className="tracking-tighter text-center ">
            <motion.p 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0 , x:-50}}
            transition={{duration:0.5 }}
            className="my-4">
                {CONTACT.address}
            </motion.p>

            <motion.p 
             whileInView={{opacity: 1, x:0}}
             initial={{opacity:0 , x:50}}
             transition={{duration:0.5 }}
            className="my-4">
                <a href={"tel:+2349166423642"}>
                {CONTACT.phoneNo}
                </a>
            </motion.p>
            <motion.div
            whileInView={{opacity: 1, y:0}}
            initial={{opacity:0 , y:30}}
            transition={{duration:0.5 }}
            >
            <a href={'mailto:adisadaniel4@gmail.com'} className="border-b ">
                {CONTACT.email}
            </a>
            </motion.div>
        </div>
    </div>
  )
}
export default Contact