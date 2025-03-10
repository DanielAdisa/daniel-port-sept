import { PRICING } from "../constants";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const Pricing = () => {
  return (
    <section className="relative py-20 mb-10 overflow-hidden bg-gradient-to-b rounded-xl from-stone-950 to-stone-900/90" id="pricing">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl -top-32 -left-32" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl -bottom-32 -right-32" />
      </div>

      <div className="container relative px-4 mx-auto">
        {/* Section header with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text">
            Services & Pricing
          </h2>
          <div className="w-32 h-1.5 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" />
          <p className="text-gray-400">Choose the perfect plan that suits your needs</p>
        </motion.div>

        {/* Services grid with improved layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1">
          {PRICING.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Enhanced service card */}
              <div className="relative overflow-hidden transition-all duration-300 border shadow-2xl rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-white/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1">
                {/* Service header with improved styling */}
                <div className="px-6 py-5 border-b md:py-6 border-white/10 bg-gradient-to-r from-white/10 to-transparent">
                  <h3 className="text-xl font-bold tracking-tight text-transparent md:text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                    {service.title}
                  </h3>
                </div>
                
                {/* Tiers with enhanced styling */}
                <div className="p-6">
                  {service.tiers.map((tier, tierIndex) => (
                    <div key={tierIndex} className="relative mb-8 last:mb-0 group/tier">
                      <div className="flex flex-col gap-4 p-4 transition-colors rounded-lg md:flex-row md:items-start md:justify-between group-hover/tier:bg-white/5">
                        {/* Tier content with improved layout */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-lg font-semibold tracking-tight text-white">
                              {tier.name}
                            </h4>
                            {tier.discount && (
                              <motion.span 
                                className="px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                                whileHover={{ scale: 1.05 }}
                              >
                                {tier.discount}% OFF
                              </motion.span>
                            )}
                          </div>
                          
                          {/* Description */}
                          <p className="mb-2 text-sm text-gray-400">
                            {tier.description}
                          </p>
                          
                          {/* Feature Bullets */}
                          {tier.features && (
                            <ul className="space-y-1">
                              {tier.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-300">
                                  <span className="flex items-center justify-center w-4 h-4 mt-0.5 rounded-full bg-gradient-to-r from-gray-600/30 to-gray-700/30">
                                    <FiCheck className="text-xs text-green-400" />
                                  </span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        
                        {/* Enhanced price block */}
                        <div className="relative flex flex-col items-start p-3 transition-transform rounded-lg md:items-end group-hover/tier:scale-105 bg-gradient-to-br from-white/10 to-transparent md:min-w-[140px]">
                          {tier.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {tier.originalPrice}
                            </span>
                          )}
                          <span className="text-2xl font-bold tracking-tight text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                            {tier.price}
                          </span>
                          {tier.period && (
                            <span className="text-xs text-gray-400">
                              {tier.period}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Enhanced divider */}
                      {tierIndex < service.tiers.length - 1 && (
                        <div className="w-full h-px my-6 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="p-8 mt-16 text-center border rounded-xl bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-sm"
        >
          <h3 className="mb-4 text-2xl font-semibold tracking-tight text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
            Need a custom solution?
          </h3>
          <p className="max-w-2xl mx-auto mb-6 text-gray-300">
            Contact me for personalized quotes tailored to your specific project requirements.
          </p>
          <motion.a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white transition-all rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-purple-500/25 hover:shadow-purple-500/40"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
