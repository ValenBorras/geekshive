'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaGlobeAmericas, FaStore } from 'react-icons/fa';
import Image from 'next/image';
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

const stats = (t) => ([
  { icon: FaRocket, value: '15+', label: t('about.stats.years'), description: t('about.stats.desc1') },
  { icon: FaUsers, value: '50K+', label: t('about.stats.customers'), description: t('about.stats.desc2') },
  { icon: FaGlobeAmericas, value: '50+', label: t('about.stats.brands'), description: t('about.stats.desc3') },
  { icon: FaStore, value: '5K+', label: t('about.stats.products'), description: t('about.stats.desc4') },
]);

export default function AboutUs() {
  const { t } = useI18n();
  return (
    <section
      id="about"
      className="w-full text-white pt-28 pb-16 px-6 md:px-24 font-raleway relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F2D300]/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        {/* Main content */}
        <motion.div 
          className="text-center space-y-8 mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-[#F2D300]"
            variants={fadeInUp}
          >
            {t('about.title')}
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {t('about.p1')}
          </motion.p>
          
          <motion.p 
            className="text-base md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {t('about.p2')}
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {stats(t).map((stat, index) => (
            <motion.div
              key={index}
              className="bg-black/40 border border-[#F2D300]/20 backdrop-blur-sm rounded-xl p-6 hover:bg-black/60 hover:border-[#F2D300]/40 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-4xl text-[#F2D300]">
                  <stat.icon />
                </div>
                <h3 className="text-3xl font-bold text-[#F2D300]">
                  {stat.value}
                </h3>
                <h4 className="text-lg font-semibold text-white">{stat.label}</h4>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Image Section */}
        <motion.div 
          className="mt-20 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#F2D300]/20 hover:border-[#F2D300]/40 transition-all duration-300">
            <Image
              src="/GroupGH.JPEG"
              alt="The Geekshive Team"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#F2D300] mb-2">{t('about.meetTeam')}</h3>
              <p className="text-white/90 text-lg">{t('about.teamSubtitle')}</p>
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#F2D300]">{t('about.mission')}</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">{t('about.missionText')}</p>
        </motion.div>
      </div>
    </section>
  );
}
