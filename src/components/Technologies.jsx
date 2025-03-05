import { BiLogoPostgresql } from "react-icons/bi"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsFill } from "react-icons/ri"
import { SiAdobephotoshop, SiBlender, SiCinema4D, SiMongodb, SiPhp } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"

// Tech stack data with skill levels and categories
const TECH_STACK = [
  { Icon: RiReactjsFill, name: "React", color: "text-cyan-400", level: 95, category: "frontend", },
  { Icon: TbBrandNextjs, name: "Next.js", color: "text-white", level: 90, category: "frontend" },
  { Icon: SiMongodb, name: "MongoDB", color: "text-emerald-500", level: 85, category: "backend" },
  { Icon: FaNodeJs, name: "Node.js", color: "text-green-500", level: 88, category: "backend" },
  { Icon: SiPhp, name: "PHP", color: "text-purple-600", level: 80, category: "backend" },
  { Icon: BiLogoPostgresql, name: "PostgreSQL", color: "text-blue-500", level: 82, category: "backend" },
  { Icon: DiRedis, name: "Redis", color: "text-red-500", level: 75, category: "backend" },
  { Icon: SiAdobephotoshop, name: "Photoshop", color: "text-[#00ffff]", level: 85, category: "design" },
  { Icon: SiBlender, name: "Blender", color: "text-[#e87d0d]", level: 75, category: "design" },
  { Icon: SiCinema4D, name: "Cinema 4D", color: "text-sky-600", level: 70, category: "design" },
];

// Tech card component with hover effects
const TechCard = ({ tech, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
          delay: index * 0.1
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative flex flex-col items-center p-4 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Glowing background effect */}
        <motion.div 
          className={`absolute inset-0 rounded-full blur-xl opacity-40 ${tech.color}`}
          animate={{
            scale: isHovered ? 1.2 : 0.9,
            opacity: isHovered ? 0.6 : 0.1
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Orbital animation */}
        <motion.div 
          className="absolute inset-0 border rounded-full border-white/10"
          animate={{ 
            rotate: 360, 
            scale: isHovered ? 1.3 : 1.1
          }}
          transition={{ 
            rotate: { 
              duration: 10, 
              ease: "linear", 
              repeat: Infinity 
            },
            scale: {
              duration: 0.3
            }
          }}
        />
        
        {/* Icon */}
        <motion.div
          className="relative z-10 flex items-center justify-center w-20 h-20 border rounded-full bg-black/50 backdrop-blur-sm border-white/10"
          animate={{ 
            y: isHovered ? -5 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300,
            damping: 15
          }}
        >
          <tech.Icon className={`text-5xl ${tech.color}`} />
        </motion.div>
      </div>

      {/* Tech name */}
      <motion.div
        className="mt-4 text-center"
        animate={{
          opacity: isHovered ? 1 : 0.7
        }}
      >
        <p className="font-medium tracking-wider">{tech.name}</p>
        
        {/* Skill progress bar */}
        {isHovered && (
          <motion.div 
            className="relative w-24 h-1 mt-2 overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className={`absolute top-0 left-0 h-full ${tech.color.replace('text-', 'bg-')}`}
              style={{ width: `${tech.level}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Technologies = () => {
  const ref = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Filter technologies by category
  const filteredTech = activeFilter === "all" 
    ? TECH_STACK 
    : TECH_STACK.filter(tech => tech.category === activeFilter);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-20"
        style={{ backgroundPosition: `0 ${yBg.get()}px` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_center,rgba(255,255,255,0.04),transparent)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)]" style={{ backgroundSize: "40px 40px" }}></div>
      </motion.div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container mx-auto mb-16 text-center"
      >
        <h2 className="mb-3 text-4xl font-bold tracking-tighter text-transparent bg-gradient-to-r from-stone-100 to-stone-400 bg-clip-text md:text-5xl">
          Technology Stack
        </h2>
        <p className="max-w-2xl mx-auto text-stone-400">
          Modern tools and technologies I use to bring ideas to life
        </p>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {["all", "frontend", "backend", "design"].map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-1 text-sm rounded-full backdrop-blur-md transition-all ${
                activeFilter === category 
                  ? "bg-stone-800 text-white border-white/20" 
                  : "bg-stone-900/50 text-stone-400 border-stone-800"
              } border`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Tech grid with animation */}
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5"
          layout
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          {filteredTech.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;