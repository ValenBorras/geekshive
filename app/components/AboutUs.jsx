'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaGlobeAmericas, FaStore } from 'react-icons/fa';
import Image from 'next/image';
import { useI18n } from '../i18n/I18nProvider';
import { useState } from 'react';

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

const teamMembers = (t) => ([
  {
    name: 'Francisco Borras',
    title: t('about.team.francisco.title'),
    description: t('about.team.francisco.desc'),
    image: '/Team/fran.png',
    focus: t('about.team.francisco.focus'),
  },
  {
    name: 'Joaquín Petric',
    title: t('about.team.joaquin.title'),
    description: t('about.team.joaquin.desc'),
    image: '/Team/jope.png',
    focus: t('about.team.joaquin.focus'),
  },
  {
    name: 'Agustín Acosta',
    title: t('about.team.agustin.title'),
    description: t('about.team.agustin.desc'),
    image: '/Team/agus.png',
    focus: t('about.team.agustin.focus'),
  },
  {
    name: 'Matías Jacob',
    title: t('about.team.matias.title'),
    description: t('about.team.matias.desc'),
    image: '/Team/mati.png',
    focus: t('about.team.matias.focus'),
  },
  {
    name: 'Valentina Borras',
    title: t('about.team.valentina.title'),
    description: t('about.team.valentina.desc'),
    image: '/Team/valen.jpg',
    focus: t('about.team.valentina.focus'),
  },
]);

export default function AboutUs() {
  const { t } = useI18n();
  const [flipped, setFlipped] = useState(null);

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

        {/* Team Section */}
        <motion.div 
          className="mt-24 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-bold text-[#F2D300] mb-3">{t('about.meetTeam')}</h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">{t('about.teamSubtitle')}</p>
          </div>

          {/* Team grid - 3 top, 2 bottom centered */}
          <div className="flex flex-col items-center gap-6">
            {/* First row - 3 members */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {teamMembers(t).slice(0, 3).map((member) => (
                <motion.div
                  key={member.name}
                  className="group relative bg-black/40 border border-[#F2D300]/20 rounded-2xl p-5 flex flex-col items-center text-center hover:border-[#F2D300]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(242,211,0,0.08)]"
                  variants={fadeInUp}
                >
                  <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[#F2D300]/30 group-hover:border-[#F2D300]/70 transition-all duration-500 mb-4 shadow-lg">
                    <Image src={member.image} alt={member.name} fill className="object-cover object-top" sizes="256px" quality={95} unoptimized />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                  <p className="text-[#F2D300] font-semibold text-xs mb-3 leading-snug">{member.title}</p>
                  <p className="text-white/60 text-xs leading-relaxed mb-3">{member.description}</p>
                  <span className="inline-block bg-[#F2D300]/10 border border-[#F2D300]/20 text-[#F2D300]/80 text-[10px] font-medium px-2.5 py-1 rounded-full">
                    {member.focus}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Second row - 2 members centered */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl lg:max-w-[66%]"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {teamMembers(t).slice(3).map((member) => (
                <motion.div
                  key={member.name}
                  className="group relative bg-black/40 border border-[#F2D300]/20 rounded-2xl p-5 flex flex-col items-center text-center hover:border-[#F2D300]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(242,211,0,0.08)]"
                  variants={fadeInUp}
                >
                  <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[#F2D300]/30 group-hover:border-[#F2D300]/70 transition-all duration-500 mb-4 shadow-lg">
                    <Image src={member.image} alt={member.name} fill className="object-cover object-top" sizes="256px" quality={95} unoptimized />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                  <p className="text-[#F2D300] font-semibold text-xs mb-3 leading-snug">{member.title}</p>
                  <p className="text-white/60 text-xs leading-relaxed mb-3">{member.description}</p>
                  <span className="inline-block bg-[#F2D300]/10 border border-[#F2D300]/20 text-[#F2D300]/80 text-[10px] font-medium px-2.5 py-1 rounded-full">
                    {member.focus}
                  </span>
                </motion.div>
              ))}
            </motion.div>
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
