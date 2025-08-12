'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaStore, FaChartLine, FaShoppingCart, FaBullhorn, FaSearch } from 'react-icons/fa';
import { useRef } from 'react';
import { useI18n } from '../i18n/I18nProvider';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const services = (t) => [
  {
    icon: FaRocket,
    title: t('boosting.services.account.title'),
    description: t('boosting.services.account.desc'),
    features: t('boosting.services.account.features'),
  },
  {
    icon: FaStore,
    title: t('boosting.services.storefront.title'),
    description: t('boosting.services.storefront.desc'),
    features: t('boosting.services.storefront.features'),
  },
  {
    icon: FaChartLine,
    title: t('boosting.services.listingOpt.title'),
    description: t('boosting.services.listingOpt.desc'),
    features: t('boosting.services.listingOpt.features'),
  },
  {
    icon: FaShoppingCart,
    title: t('boosting.services.listingCreate.title'),
    description: t('boosting.services.listingCreate.desc'),
    features: t('boosting.services.listingCreate.features'),
  },
  {
    icon: FaBullhorn,
    title: t('boosting.services.marketing.title'),
    description: t('boosting.services.marketing.desc'),
    features: t('boosting.services.marketing.features'),
  },
  {
    icon: FaSearch,
    title: t('boosting.services.analytics.title'),
    description: t('boosting.services.analytics.desc'),
    features: t('boosting.services.analytics.features'),
  },
];

export default function Boosting() {
  const { t } = useI18n();
  // Use the same scroll behavior as Navbar
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="boosting" className="w-full py-28 px-6 md:px-24 font-raleway relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F2D300]/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Engaging Question */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/40 border border-[#F2D300]/20 rounded-2xl p-8 md:p-12 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" dangerouslySetInnerHTML={{ __html: t('boosting.questionTitle') }} />
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: t('boosting.questionDesc') }} />
          </div>
        </motion.div>

        {/* Title and Description */}
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F2D300]">{t('boosting.title')}</h2>
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">{t('boosting.desc')}</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services(t).map((service, index) => (
            <motion.div
              key={index}
              className="bg-black/40 border border-[#F2D300]/20 rounded-xl p-6 hover:bg-black/60 hover:border-[#F2D300]/40 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col h-full">
                <div className="text-4xl text-[#F2D300] mb-4">
                  <service.icon />
                </div>
                <h3 className="text-xl font-bold text-[#F2D300] mb-3">
                  {service.title}
                </h3>
                <p className="text-white/80 mb-4 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/70 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#F2D300] rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center relative z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-black/40 border border-[#F2D300]/20 rounded-xl p-8 md:p-12 relative">
            <h3 className="text-2xl md:text-3xl font-bold text-[#F2D300] mb-4">
              Ready to Boost Your Brand?
            </h3>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help your brand grow on Amazon and Mercado Libre. 
              Our team of experts is ready to create a customized strategy for your success.
            </p>
            <div className="relative z-30">
              <button 
                onClick={() => scrollToSection('Contact')}
                className="relative inline-block px-8 py-3 bg-[#F2D300] text-black font-semibold rounded-lg 
                  transition-all duration-300 hover:bg-[#F2D300]/80 hover:scale-105 focus:outline-none cursor-pointer"
                style={{ pointerEvents: 'auto' }}
              >
                {t('boosting.ctaButton')}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 