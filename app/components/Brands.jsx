'use client';

import React from 'react';
import dynamic from 'next/dynamic';
const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false });
import 'react-alice-carousel/lib/alice-carousel.css';
import brands from '@/data/brands.json';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Brands = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items = brands.map((brand, index) => (
    <div 
      key={index} 
      className="flex items-center justify-center h-36 px-2"
    >
      <a
        href={brand.link}
        target="_blank"
        rel="noopener noreferrer"
        onDragStart={handleDragStart}
        className="flex items-center justify-center h-full group"
      >
        <div className="flex items-center justify-center h-full">
          <Image
            src={brand.url}
            alt={brand.name}
            width={100}
            height={50}
            className="w-32 sm:w-40 md:w-48 transition-all duration-500 object-contain max-h-[80%] opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(242,211,0,0.15)]"
          />
        </div>
      </a>
    </div>
  ));

  const { t } = useI18n();
  return (
    <section id="brands" className="relative z-10 mt-8 w-full bg-white/[0.03] backdrop-blur-sm border-t border-b border-[#F2D300]/10 text-black py-20 overflow-hidden">
      {/* Title and Description */}
      <motion.div 
        className="text-center space-y-5 mb-16 px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F2D300]">{t('brands.title')}</h2>
        <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">{t('brands.description')}</p>
      </motion.div>

      {/* Carousel with fade edges */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#060608] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#060608] to-transparent z-10 pointer-events-none" />
        <AliceCarousel
          items={items}
          mouseTracking
          autoPlay
          autoPlayStrategy="none"
          infinite
          autoPlayInterval={0}
          animationDuration={5000}
          animationEasingFunction='linear'
          disableButtonsControls
          disableDotsControls
          responsive={{
            0: { items: 2 },
            768: { items: 4 },
            1024: { items: 6 }
          }}
          ssrSilentMode={false}
        />
      </div>
    </section>
  );
};

export default Brands;