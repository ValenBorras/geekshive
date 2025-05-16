'use client';

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import brands from '@/data/brands.json';
import Image from 'next/image';

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
            className="w-32 sm:w-40 md:w-48 grayscale hover:scale-125 hover:grayscale-0 transition-transform duration-300 object-contain max-h-[80%]" // Limit height to 80% of container
          />
        </div>
      </a>
    </div>
  ));

  return (
    <section className="relative z-10 mt-24 w-full bg-white/10 border-white/12 border-1 text-black py-15 overflow-hidden">
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