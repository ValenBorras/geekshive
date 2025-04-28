'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Arrays de marcas para las órbitas
const brandsOuter = [
  { src: '/brand1.jpg', alt: 'Brand 1' },
  { src: '/brand2.png', alt: 'Brand 2' },
  { src: '/brand3.png', alt: 'Brand 3' },
  { src: '/brand4.png', alt: 'Brand 4' },
  { src: '/brand5.png', alt: 'Brand 5' },
];

const brandsInner = [
  { src: '/brand6.png', alt: 'Brand 6' },
  { src: '/brand7.png', alt: 'Brand 7' },
  { src: '/brand8.png', alt: 'Brand 8' },
];

export default function Hero() {
  const radiusOuter = 250; // Radio órbita exterior
  const radiusInner = 150; // Radio órbita interior

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-8 antialiased">
      {/* FONDO */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,1)_0%,_rgba(242,211,0,1)_26%,_rgba(244,203,0,1)_29%,_rgba(0,0,0,1)_80%)] opacity-80" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        
        {/* IZQUIERDA: SLOGAN Y BOTÓN */}
        <div className="flex flex-col items-start text-left w-full md:w-1/2 space-y-6">
          <h1 className="text-white text-4xl md:text-6xl font-raleway font-semibold">
            GeeksHive: Your online geek store.
          </h1>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition font-raleway">
            Become a Partner
          </button>
        </div>

        {/* DERECHA: ÓRBITAS Y MARCAS */}
        <div className="relative w-full md:w-1/2 h-[500px] flex items-center justify-center mt-12 md:mt-0">
          
          {/* CÍRCULOS VISIBLES (sólo líneas) */}
          {/* Órbita extra exterior */}
          <div className="absolute w-[600px] h-[600px] rounded-full border-2 border-transparent opacity-40" style={{
            maskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0.2) 90deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg)",
            WebkitMaskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0.2) 90deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg)",
            borderColor: "rgba(255,255,255,0.2)",
          }} />

          {/* Órbita exterior con marcas */}
          {/* Círculo visible */}
          <div className="absolute w-[500px] h-[500px] rounded-full border-2 border-transparent opacity-40" style={{
            maskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0.2) 90deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg)",
            WebkitMaskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0.2) 90deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg)",
            borderColor: "rgba(255,255,255,0.2)",
          }} />

          {/* Órbita intermedia extra */}
          <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-transparent opacity-40" style={{
            maskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0.2) 90deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg)",
            WebkitMaskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0.2) 90deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg)",
            borderColor: "rgba(255,255,255,0.2)",
          }} />

          {/* Órbita interior con marcas */}
          <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-transparent opacity-40" style={{
            maskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0.2) 90deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg)",
            WebkitMaskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0.2) 90deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg)",
            borderColor: "rgba(255,255,255,0.2)",
          }} />

          {/* NÚMERO Y TEXTO EN EL CENTRO */}
          <div className="absolute flex flex-col items-center justify-center text-center antialiased">
            <div className="text-white text-6xl md:text-8xl font-semibold font-raleway">
              50+
            </div>
            <div className="text-white text-xl md:text-2xl font-normal font-raleway mt-2">
              brands
            </div>
          </div>

          {/* ORBITA EXTERIOR CON MARCAS */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
            className="absolute w-full h-full top-0 left-0"
          >
            {brandsOuter.map((brand, index) => {
              const angle = (index / brandsOuter.length) * 360;
              const radian = (angle * Math.PI) / 180;
              const x = radiusOuter * Math.cos(radian);
              const y = radiusOuter * Math.sin(radian);

              return (
                <motion.div
                  key={`outer-${index}`}
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
                  className="absolute"
                >

                  <Image src={brand.src} alt={brand.alt} width={50} height={50} className='rounded-full' />
                </motion.div>
              );
            })}
          </motion.div>

          {/* ORBITA INTERIOR CON MARCAS */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
            className="absolute w-[80%] h-[80%] top-[10%] left-[10%]"
          >
            {brandsInner.map((brand, index) => {
              const angle = (index / brandsInner.length) * 360;
              const radian = (angle * Math.PI) / 180;
              const x = radiusInner * Math.cos(radian);
              const y = radiusInner * Math.sin(radian);

              return (
                <motion.div
                  key={`inner-${index}`}
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
                  className="absolute"
                >
                  <Image src={brand.src} alt={brand.alt} width={40} height={40} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
