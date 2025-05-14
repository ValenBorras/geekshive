'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

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

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });
  
  const glowX = useTransform(smoothX, (x) => x - 80);
  const glowY = useTransform(smoothY, (y) => y - 80);

  // Responsive orbit radii
  const getRadii = () => {
    if (isMobile) {
      return { outer: 120, inner: 70 };
    } else {
      return { outer: 250, inner: 150 };
    }
  };

  const { outer: radiusOuter, inner: radiusInner } = getRadii();

  // Check for mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      mouseX.set(centerX);
      mouseY.set(centerY);
    }
  }, []);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Calculate orbit sizes based on viewport
  const getOrbitSize = (size) => {
    return isMobile ? size / 1.8 : size;
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 antialiased pt-16 md:pt-24 bg-[url('/fondoColmena1.png')]">
      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 flex flex-col items-center justify-between w-full max-w-7xl lg:flex-row lg:gap-16 xl:gap-24">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center mt-10 lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-6 mb-20 lg:mb-0 lg:mt-0">
          {/* ABEJA ASOMÁNDOSE - Responsive positioning */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none ">
            <div className="absolute -top-15 sm:-top-32 sm:mt-12 left-1/2 lg:-top-75 lg:-left-10 transform -translate-x-1/2 lg:translate-x-0 z-10">
              <Image
                src="/abeja.png"
                alt="Geekshive Bee"
                width={isMobile ? 250 : 400}
                height={isMobile ? 250 : 400}
                className="select-none"
                style={{
                  transform: 'translateY(20%)',
                }}
              />
            </div>
            
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              className="relative inline-block mt-28 sm:mt-32 lg:mt-36"
            >
              <motion.div
                className="absolute w-20 md:w-40 h-20 md:h-40 rounded-full bg-yellow-300 opacity-50 pointer-events-none blur-3xl z-0"
                style={{
                  x: smoothX,
                  y: smoothY,
                  translateX: '-50%',
                  translateY: '-50%',
                }}
              />

              <h1
                className="relative z-20 text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-raleway font-bold bg-white rounded-full p-6 md:p-8 lg:p-12 inline-block shadow-md border-[#F2D300] border-4"
                style={{
                  boxShadow: '0 0 80px #F2D300',
                }}
              >
                Geeks
                {/* <p className='inline-block text-[#F2D300]'> */}
                  hive
                  {/* </p> */}
                  : Your online geek store.
              </h1>
            </div>
          </div>
        </div>

        {/* RIGHT: ÓRBITAS Y MARCAS - Aligned with title */}
        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
          
          {/* CÍRCULOS VISIBLES (sólo líneas) - Responsive sizes */}
          {/* Órbita extra exterior */}
          <div className={`absolute w-[${getOrbitSize(600)}px] h-[${getOrbitSize(600)}px] rounded-full border-2 border-transparent opacity-40`} style={{
            maskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0) 45deg, rgba(0,0,0,1) 90deg, rgba(0,0,0,0) 135deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0) 225deg, rgba(0,0,0,1) 270deg, rgba(0,0,0,0) 315deg, rgba(0,0,0,1) 360deg)",
            WebkitMaskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0) 45deg, rgba(0,0,0,1) 90deg, rgba(0,0,0,0) 135deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0) 225deg, rgba(0,0,0,1) 270deg, rgba(0,0,0,0) 315deg, rgba(0,0,0,1) 360deg)",
            borderColor: "rgba(255,255,255,1)",
            width: getOrbitSize(600),
            height: getOrbitSize(600),
          }} />

          {/* Órbita exterior con marcas */}
          <div className="absolute rounded-full border-2 border-transparent opacity-40" style={{
            maskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0.2) 90deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg)",
            WebkitMaskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0.2) 90deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg)",
            borderColor: "rgba(255,255,255,1)",
            width: getOrbitSize(500),
            height: getOrbitSize(500),
          }} />

          {/* Órbita intermedia extra */}
          <div className="absolute rounded-full border-2 border-transparent opacity-40" style={{
            maskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0) 45deg, rgba(0,0,0,1) 90deg, rgba(0,0,0,0) 135deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0) 225deg, rgba(0,0,0,1) 270deg, rgba(0,0,0,0) 315deg, rgba(0,0,0,1) 360deg)",
            WebkitMaskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0) 45deg, rgba(0,0,0,1) 90deg, rgba(0,0,0,0) 135deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0) 225deg, rgba(0,0,0,1) 270deg, rgba(0,0,0,0) 315deg, rgba(0,0,0,1) 360deg)",
            borderColor: "rgba(255,255,255,1)",
            width: getOrbitSize(400),
            height: getOrbitSize(400),
          }} />

          {/* Órbita interior con marcas */}
          <div className="absolute rounded-full border-2 border-transparent opacity-40" style={{
            maskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0.2) 90deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg)",
            WebkitMaskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0.2) 90deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg)",
            borderColor: "rgba(255,255,255,1)",
            width: getOrbitSize(300),
            height: getOrbitSize(300),
          }} />

          {/* NÚMERO Y TEXTO EN EL CENTRO */}
          <div className="absolute flex flex-col items-center justify-center text-center antialiased">
            <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold font-raleway">
              50+
            </div>
            <div className="text-white text-lg sm:text-xl md:text-2xl font-normal font-raleway mt-2">
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
                  <Image 
                    src={brand.src} 
                    alt={brand.alt} 
                    width={isMobile ? 30 : 50} 
                    height={isMobile ? 30 : 50} 
                    className='rounded-full' 
                  />
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
                  <Image 
                    src={brand.src} 
                    alt={brand.alt} 
                    width={isMobile ? 25 : 40} 
                    height={isMobile ? 25 : 40} 
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}