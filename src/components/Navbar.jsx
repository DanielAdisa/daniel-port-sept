import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Asset from "../assets/Asset.webp";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 ">
        <div>
          <a href="/" aria-label="Home">
          <img src={Asset} alt={"Logo"} width={50} height={50} className="mx-2 "/>
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 m-8 text-2xl">

          <a href="" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin/>
          </a>

          <a href="" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <FaGithub/>
          </a>

          <a href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram/>
          </a>

          <a href="" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
            <FaWhatsapp/>
          </a>
          
        </div>
    </nav>
  )
}
export default Navbar