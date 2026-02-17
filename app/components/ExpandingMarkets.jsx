'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const countries = (t) => [
  {
    name: t('expanding.countries.brasil.name'),
    flag: '🇧🇷',
    description: t('expanding.countries.brasil.desc'),
    color: 'from-green-500/10 to-yellow-500/10',
    borderColor: 'border-green-500/20 hover:border-green-400/50',
    accentColor: 'text-green-400',
    glowColor: 'rgba(34, 197, 94, 0.15)',
  },
  {
    name: t('expanding.countries.chile.name'),
    flag: '🇨🇱',
    description: t('expanding.countries.chile.desc'),
    color: 'from-red-500/10 to-blue-500/10',
    borderColor: 'border-red-500/20 hover:border-red-400/50',
    accentColor: 'text-red-400',
    glowColor: 'rgba(239, 68, 68, 0.15)',
  },
  {
    name: t('expanding.countries.colombia.name'),
    flag: '🇨🇴',
    description: t('expanding.countries.colombia.desc'),
    color: 'from-yellow-500/10 to-blue-500/10',
    borderColor: 'border-yellow-500/20 hover:border-yellow-400/50',
    accentColor: 'text-yellow-400',
    glowColor: 'rgba(234, 179, 8, 0.15)',
  },
];

export default function ExpandingMarkets() {
  const { t } = useI18n();

  return (
    <section className="w-full py-24 px-6 md:px-24 font-raleway relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F2D300]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          className="text-center space-y-5 mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.span
            className="inline-block bg-[#F2D300]/10 border border-[#F2D300]/20 text-[#F2D300] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {t('expanding.badge')}
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t('expanding.title')} <span className="text-[#F2D300]">Mercado Libre</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            {t('expanding.subtitle')}
          </p>
        </motion.div>

        {/* Countries Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {countries(t).map((country, index) => (
            <motion.div
              key={index}
              className={`relative group rounded-2xl border ${country.borderColor} bg-gradient-to-br ${country.color} backdrop-blur-sm p-7 md:p-9 transition-all duration-500`}
              variants={fadeInUp}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 50px ${country.glowColor}`,
                transition: { duration: 0.3 }
              }}
            >
              {/* Flag */}
              <motion.div
                className="text-5xl md:text-6xl mb-5"
                whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
              >
                {country.flag}
              </motion.div>

              {/* Country Name */}
              <h3 className={`text-xl md:text-2xl font-bold mb-3 ${country.accentColor}`}>
                {country.name}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                {country.description}
              </p>

              {/* Mercado Libre badge */}
              <div className="mt-6 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/60 text-xs font-medium px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-[#F2D300] rounded-full animate-pulse" />
                  Mercado Libre
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
