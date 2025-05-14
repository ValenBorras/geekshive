'use client';

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const brands = [
  { logo: '/placeholder.png', alt: 'Brand 1', link: 'https://amazon.com/brand1' },
  { logo: '/placeholder.png', alt: 'Brand 2', link: 'https://amazon.com/brand2' },
  { logo: '/placeholder.png', alt: 'Brand 3', link: 'https://mercadolibre.com/brand3' },
  { logo: '/placeholder.png', alt: 'Brand 4', link: 'https://amazon.com/brand4' },
  { logo: '/placeholder.png', alt: 'Brand 5', link: 'https://mercadolibre.com/brand5' },
  { logo: '/placeholder.png', alt: 'Brand 6', link: 'https://amazon.com/brand6' },
  { logo: '/placeholder.png', alt: 'Brand 7', link: 'https://amazon.com/brand7' },
  { logo: '/placeholder.png', alt: 'Brand 7', link: 'https://amazon.com/brand7' },
  { logo: '/placeholder.png', alt: 'Brand 7', link: 'https://amazon.com/brand7' },
  { logo: '/placeholder.png', alt: 'Brand 7', link: 'https://amazon.com/brand7' },
  { logo: '/placeholder.png', alt: 'Brand 7', link: 'https://amazon.com/brand7' },
  { logo: '/placeholder.png', alt: 'Brand 7', link: 'https://amazon.com/brand7' },
  { logo: '/placeholder.png', alt: 'Brand 7', link: 'https://amazon.com/brand7' },
  { logo: '/placeholder.png', alt: 'Brand 7', link: 'https://amazon.com/brand7' },

];

const Brands = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items = brands.map((brand, index) => (
    <div key={index} className="md:px-5"> {/* Add spacing here */}
      <a
        href={brand.link}
        target="_blank"
        rel="noopener noreferrer"
        onDragStart={handleDragStart}
      >
        <img
          src={brand.logo}
          alt={brand.alt}
          className="w-32 sm:w-40 md:w-48 h-auto grayscale hover:scale-125 transition-transform duration-300"
        />
      </a>
    </div>
  ));

  return (
    <section className="relative z-10 mt-24 w-full bg-white/10 text-black py-28 px-6 md:px-20 font-raleway border-white/12 border-y-1">
      <div className="w-full mx-auto space-y-16">
        <AliceCarousel
          mouseTracking
          autoPlayStrategy='none'
          items={items}
          autoPlay
          infinite
          autoPlayInterval={0}
          animationDuration={6000}
          animationEasingFunction="linear"
          disableButtonsControls
          disableDotsControls
          responsive={{
            0: { items: 2 },
            768: { items: 5 },
            1024: { items: 7 },
          }}
        />
      </div>
    </section>
  );
};

export default Brands;
