import profilePic from "../assets/1.png"
import {HERO_CONTENT} from "../constants"


const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2 ">
                <div className="flex justify-center lg:p-8 ">
                    <img src={profilePic} alt="Daniel Adisa"
                    className="border border-stone-900 rounded-3xl"/>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center mt-10 lg:items-start">
                    <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
                        Daniel Adisa
                    </h2>
                    <span className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text animate-pulse">
                        Full Stack Developer
                    </span>
                    <p className="max-w-lg py-6 my-2 text-2xl leading-relaxed tracking-tighter ">
                        {HERO_CONTENT}
                    </p>
                    <a href="/resume.pdf" 
                    target="_blank"
                    rel="noopener norreferrer"
                    download
                    className="p-4 mb-10 text-sm bg-white rounded-full text-stone-800">
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Hero