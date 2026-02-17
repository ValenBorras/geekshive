'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaAmazon } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import React from 'react'
import { useI18n } from '../i18n/I18nProvider';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const formatDescription = (text) => {
  if (!text) return [];
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-bold text-white">{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
};

const buildMarketplaces = (t) => [
  {
    name: 'Mercado Libre México',
    link: 'https://www.mercadolibre.com.mx/pagina/geekshivemxf?item_id=MLM2141063737&category_id=MLM151595&seller_id=1855979976&client=recoview-selleritems&recos_listing=true#origin=pdp&component=sellerData&typeSeller=eshop',
    image: '/MLmex.png',
    icon: null,
    description: t('marketplaces.ml_mx_desc'),
  },
  {
    name: 'Mercado Libre Argentina',
    link: 'https://www.mercadolibre.com.ar/pagina/geekshivearf?item_id=MLA2046284742&category_id=MLA412089&seller_id=2378407094&client=recoview-selleritems&recos_listing=true#origin=pdp&component=sellerData&typeSeller=eshop',
    image: '/MLarg.png',
    icon: null,
    description: t('marketplaces.ml_ar_desc'),
  },
  {
    name: 'Amazon',
    link: 'https://www.amazon.com/sp?ie=UTF8&seller=A1MD6J1KVR2O2V&isAmazonFulfilled=1&asin=B0DQ92ZKMW&ref_=olp_merch_name_1',
    image: null,
    icon: <FaAmazon size={100} className="mx-auto text-white" />,
    description: t('marketplaces.amazon_desc'),
  },
];

const buildCountries = (t) => [
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

export default function Marketplaces() {
  const { t } = useI18n();
  const [iconSize, setIconSize] = useState(100);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setIconSize(70);
      else if (window.innerWidth < 1024) setIconSize(85);
      else setIconSize(100);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="marketplaces" className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 font-raleway relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F2D300]/[0.03] to-transparent pointer-events-none" />

      {/* Section Title */}
      <motion.div
        className="text-center space-y-5 mb-16 max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F2D300]">{t('marketplaces.title')}</h2>
        <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">{t('marketplaces.subtitle')}</p>
      </motion.div>

      {/* Main Marketplace Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 relative z-10">
        {buildMarketplaces(t).map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="h-full"
          >
            <motion.div
              className="glass-card rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-start items-center space-y-5 sm:space-y-6 transition-all duration-500"
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(242,211,0,0.2)]"
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={140}
                    height={140}
                    className="mx-auto mb-2"
                  />
                ) : (
                  item.icon && React.cloneElement(item.icon, { 
                    size: iconSize,
                    className: "mx-auto text-white" 
                  })
                )}
              </a>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#F2D300]">{item.name}</h2>
              <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed text-center">
                {formatDescription(item.description)}
              </p>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-[#F2D300]/70 hover:text-[#F2D300] transition-colors duration-300 mt-auto pt-2"
              >
                Visit Store
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Expanding Markets Sub-section */}
      <div className="max-w-7xl mx-auto relative z-10 mt-20">
        <motion.div
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="inline-block bg-[#F2D300]/10 border border-[#F2D300]/20 text-[#F2D300] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {t('expanding.badge')}
          </motion.span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            {t('expanding.title')} <span className="text-[#F2D300]">Mercado Libre</span>
          </h3>
          <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-2xl mx-auto">
            {t('expanding.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {buildCountries(t).map((country, index) => (
            <motion.div
              key={index}
              className={`relative group rounded-2xl border ${country.borderColor} bg-gradient-to-br ${country.color} backdrop-blur-sm p-7 md:p-9 transition-all duration-500`}
              variants={staggerItem}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 50px ${country.glowColor}`,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="text-5xl md:text-6xl mb-5"
                whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
              >
                {country.flag}
              </motion.div>
              <h4 className={`text-xl md:text-2xl font-bold mb-3 ${country.accentColor}`}>
                {country.name}
              </h4>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                {country.description}
              </p>
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