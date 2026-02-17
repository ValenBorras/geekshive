'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaStore, FaChartLine, FaShoppingCart, FaBullhorn, FaSearch } from 'react-icons/fa';
import { useI18n } from '../i18n/I18nProvider';

const fadeInUp = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12
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
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="boosting" className="w-full py-28 px-6 md:px-24 font-raleway relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F2D300]/[0.03] to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Engaging Question */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="glass-card rounded-2xl p-8 md:p-14"
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t('boosting.questionTitle') }} />
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: t('boosting.questionDesc') }} />
          </motion.div>
        </motion.div>

        {/* Title and Description */}
        <motion.div 
          className="text-center space-y-5 mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F2D300]">{t('boosting.title')}</h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">{t('boosting.desc')}</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services(t).map((service, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl p-7 transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-[#F2D300]/10 flex items-center justify-center text-xl text-[#F2D300] mb-5">
                  <service.icon />
                </div>
                <h3 className="text-lg font-bold text-[#F2D300] mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm mb-5 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2.5">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-white/55 text-sm gap-2">
                      <span className="w-1.5 h-1.5 bg-[#F2D300]/60 rounded-full mt-1.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-24 text-center relative z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass-card rounded-2xl p-10 md:p-14 relative">
            <h3 className="text-2xl md:text-3xl font-bold text-[#F2D300] mb-4">
              {t('boosting.ctaTitle')}
            </h3>
            <p className="text-white/60 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('boosting.ctaDesc')}
            </p>
            <div className="relative z-30">
              <motion.button 
                onClick={() => scrollToSection('Contact')}
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-[#F2D300] text-black font-bold rounded-full 
                  transition-all duration-300 hover:bg-[#ffe44d] shadow-[0_0_25px_rgba(242,211,0,0.2)] hover:shadow-[0_0_40px_rgba(242,211,0,0.35)] focus:outline-none cursor-pointer"
                style={{ pointerEvents: 'auto' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {t('boosting.ctaButton')}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 