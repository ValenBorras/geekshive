'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

export default function Brands() {
  const sliderRef = useRef(null);
  const [sliderInstanceRef, slider] = useKeenSlider({
    loop: true,
    mode: 'free',
    renderMode: 'performance',
    slides: {
      perView: 'auto',
      spacing: 10,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 5, spacing: 40 },
        mode: 'snap',
      },
    },
    created(s) {
      sliderRef.current = s;
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.next();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 mt-24 w-full bg-neutral-900 text-black py-28 px-6 md:px-20 font-raleway  border-neutral-800 border-y-1">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="relative pt-8 pb-8">
          <div ref={sliderInstanceRef} className="keen-slider">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="keen-slider__slide flex justify-center items-center snap-center w-[70vw] sm:w-48"
              >
                <a
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center"
                >
                  <img
                    src={brand.logo}
                    alt={brand.alt}
                    className="w-32 sm:w-40 md:w-48 h-auto transition-transform duration-300 transform hover:scale-125 grayscale"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
