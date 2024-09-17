import { BiLogoPostgresql } from "react-icons/bi"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsFill, RiReactjsLine } from "react-icons/ri"
import { SiAdobephotoshop, SiBlender, SiCinema4D, SiMongodb, SiPhp } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const Technologies = () => {
  return (
    <div className="pb-24 ">
        <h2 className="my-20 text-4xl text-center ">Stacks</h2>
        <div className="flex flex-wrap items-center justify-center gap-4 ">
            <div>
                <RiReactjsFill className=" text-7xl text-cyan-400" />   
            </div>
            <div className="p-4 ">
                <TbBrandNextjs className=" text-7xl" />   
            </div>
            <div className="p-4 ">
                <SiMongodb className=" text-7xl text-cyan-500" />   
            </div>
            <div className="p-4 ">
            <SiAdobephotoshop className=" text-7xl text-[#00ffff]" />   
            </div>
            <div className="p-4 ">
                <SiBlender className="text-[#e87d0d]  text-7xl" />   
            </div>
            <div className="p-4 ">
                <FaNodeJs className="text-green-500 text-7xl" />   
            </div>
            <div className="p-4 ">
                <SiPhp className=" text-7xl text-sky-700" />   
            </div>
            <div className="p-4 ">
                <SiCinema4D className=" text-7xl text-sky-700" />   
            </div>
            <div className="p-4 ">
                <BiLogoPostgresql className=" text-7xl text-sky-700" />   
            </div>
        </div>    
    </div>
  )
}
export default Technologies