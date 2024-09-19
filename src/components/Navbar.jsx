import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Asset from "../assets/Asset.webp";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 ">
        <motion.div
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0 , x:-30}}
        transition={{duration:1.5 }}
        >
          <a href="/" aria-label="Home">
          <img src={Asset} alt={"Logo"} width={50} height={50} className="mx-2 "/>
          </a>
        </motion.div>
        <div className="flex items-center justify-center gap-4 m-8 text-2xl">

          <motion.a 
           whileInView={{opacity: 1, y:0}}
           initial={{opacity:0 , y:50}}
           transition={{duration:0.5 }}
            href="https://www.linkedin.com/in/daniel-oluwatobi-adisa-7b076a199/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin/>
          </motion.a>

          <motion.a 
          whileInView={{opacity: 1, y:0}}
          initial={{opacity:0 , y:50}}
          transition={{duration:1 }}
          href="https://github.com/DanielAdisa/" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <FaGithub/>
          </motion.a>

          <motion.a 
          whileInView={{opacity: 1, y:0}}
          initial={{opacity:0 , y:50}}
          transition={{duration:1.5 }}
          href="https://www.instagram.com/daniel.made.it?igsh=MXY2Nmt3bWRvaHJxdQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram/>
          </motion.a>

          <motion.a 
          whileInView={{opacity: 1, y:0}}
          initial={{opacity:0 , y:50}}
          transition={{duration:2 }}
          href="https://wa.me/message/V4TC5GSQTN7RM1" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
            <FaWhatsapp/>
          </motion.a>
          
        </div>
    </nav>
  )
}
export default Navbar