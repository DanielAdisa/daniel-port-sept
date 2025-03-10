import { PRICING } from "../constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import { useRef, useState } from "react";

const Pricing = () => {
  const sectionRef = useRef(null);
  const [selectedService, setSelectedService] = useState("all");
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Filter services based on selection
  const filteredPricing = selectedService === "all" 
    ? PRICING 
    : PRICING.filter(service => service.title.toLowerCase() === selectedService.toLowerCase());

  return (
    <section
      ref={sectionRef}
      className="relative py-20 mb-10 overflow-hidden bg-gradient-to-b rounded-xl from-stone-950 to-stone-900/90"
      id="pricing"
    >
      {/* Parallax background with animated blobs */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl -top-40 -left-40 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl -bottom-40 -right-40 animate-pulse" />
      </motion.div>

      <div className="container relative px-4 mx-auto">
        {/* Section header with scroll-based fade */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="max-w-3xl mx-auto mb-10 text-center"
        ></motion.div>
        {/* Services grid with staggered animations */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1">
          {PRICING.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Glassmorphism card */}
              <div className="relative overflow-hidden transition-all duration-500 border rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-white/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:-translate-y-2">
                {/* Service header */}
                <div className="px-6 py-5 border-b md:py-6 border-white/10 bg-gradient-to-r from-white/10 to-transparent">
                  <h3 className="text-2xl font-bold tracking-tight text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                    {service.title}
                  </h3>
                </div>

                {/* Tiers */}
                <div className="p-4">
                  {service.tiers.map((tier, tierIndex) => (
                    <div key={tierIndex} className="relative mb-8 last:mb-0 group/tier">
                      <div className="flex flex-col gap-4 p-4 transition-colors rounded-lg md:flex-row md:items-start md:justify-between group-hover/tier:bg-white/5">
                        {/* Tier content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-xl font-semibold tracking-tight text-white">
                              {tier.name}
                            </h4>
                            {tier.discount && (
                              <motion.span
                                className="px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                                whileHover={{ scale: 1.1 }}
                              >
                                {tier.discount}% OFF
                              </motion.span>
                            )}
                          </div>
                          <p className="mb-3 text-sm text-gray-300">{tier.description}</p>
                          {tier.features && (
                            <ul className="space-y-2">
                              {tier.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-200">
                                  <span className="flex items-center justify-center w-5 h-5 mt-0.5 rounded-full bg-gradient-to-r from-green-400/30 to-green-500/30">
                                    <FiCheck className="text-sm text-green-400" />
                                  </span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {/* Price block */}
                        <motion.div
                          className="relative flex flex-col items-start p-4 transition-transform rounded-lg md:items-end group-hover/tier:scale-105 bg-gradient-to-br from-white/10 to-transparent md:min-w-[160px]"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tier.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              {tier.originalPrice}
                            </span>
                          )}
                          <span className="text-3xl font-bold tracking-tight text-transparent bg-gradient-to-r from-white to-gray-200 bg-clip-text">
                            {tier.price}
                          </span>
                          {tier.period && (
                            <span className="text-xs text-gray-400">{tier.period}</span>
                          )}
                        </motion.div>
                      </div>
                      {tierIndex < service.tiers.length - 1 && (
                        <div className="w-full h-px my-6 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="p-8 mt-16 text-center border rounded-xl bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-sm"
        >
          <h3 className="mb-4 text-3xl font-semibold tracking-tight text-transparent bg-gradient-to-r from-white to-gray-200 bg-clip-text">
            Need a custom solution?
          </h3>
          <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-200">
            Contact me for personalized quotes tailored to your specific project requirements.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white transition-all rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-purple-500/30 hover:shadow-purple-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;