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
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Brands = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items = brands.map((brand, index) => (
    <div 
      key={index} 
      className="flex items-center justify-center h-36" // Fixed height container for consistent alignment
    >
      <a
        href={brand.link}
        target="_blank"
        rel="noopener noreferrer"
        onDragStart={handleDragStart}
        className="flex items-center justify-center h-full" // Full height of parent
      >
        <div className="flex items-center justify-center h-full"> {/* Extra wrapper for centering */}
          <Image
            src={brand.url}
            alt={brand.name}
            width={100}
            height={50}
            className="w-32 sm:w-40 md:w-48 hover:scale-125 transition-transform duration-300 object-contain max-h-[80%]" // Limit height to 80% of container
          />
        </div>
      </a>
    </div>
  ));

  const { t } = useI18n();
  return (
    <section id="brands" className="relative z-10 mt-24 w-full bg-white/10 border-white/12 border-1 text-black py-15 overflow-hidden">
      {/* Title and Description */}
      <motion.div 
        className="text-center space-y-6 mb-16 px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#F2D300]">{t('brands.title')}</h2>
        <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">{t('brands.description')}</p>
      </motion.div>

      {/* Original Carousel */}
      <div className="w-full">
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