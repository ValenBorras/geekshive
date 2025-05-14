'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {useRef, useEffect} from 'react';

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
  const radiusOuter = 250; // Radio órbita exterior
  const radiusInner = 150; // Radio órbita interior
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });
  
  const glowX = useTransform(smoothX, (x) => x - 80 );
  const glowY = useTransform(smoothY, (y) => y - 80);

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

  const handleMouseLeave = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      animate(mouseX, centerX, { duration: 0.5 });
      animate(mouseY, centerY, { duration: 0.5 });
    }
  };

  return (

    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-8 antialiased pt-10 bg-[url('/fondoColmena1.png')]">
      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-30">

        <div className="flex flex-col items-start text-left w-full md:w-1/2 space-y-6 ">
                    {/* ABEJA ASOMÁNDOSE */}
        <div className="absolute -top-90 -left-10 z-10">
          <Image
            src="/abeja.png"
            alt="Geekshive Bee"
            width={400}
            height={400}
            className="select-none"
            style={{
              transform: 'translateY(40%)',
            }}
          />
        </div>
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative inline-block"
          >
            <motion.div
              className="absolute w-40 h-40 rounded-full bg-yellow-300 opacity-50 pointer-events-none blur-3xl z-0"
              style={{
                x: smoothX,
                y: smoothY,
                translateX: '-50%',
                translateY: '-50%',
              }}
            />

          <h1
            className="relative z-20 text-black text-4xl md:text-5xl font-raleway font-bold bg-white rounded-full p-12 inline-block shadow-md border-[#F2D300] border-5"
            style={{
              boxShadow: '0 0 80px #F2D300',
            }}
          >
            Geekshive: Your online geek store.
          </h1>
          </div>
        </div>

        


        {/* DERECHA: ÓRBITAS Y MARCAS */}
        <div className="relative w-full md:w-1/2 h-[500px] flex items-center justify-center mt-12 md:mt-0">
          
          {/* CÍRCULOS VISIBLES (sólo líneas) */}
          {/* Órbita extra exterior */}
          <div className="absolute w-[600px] h-[600px] rounded-full border-2 border-transparent opacity-40" style={{
            maskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0) 45deg, rgba(0,0,0,1) 90deg, rgba(0,0,0,0) 135deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0) 225deg, rgba(0,0,0,1) 270deg, rgba(0,0,0,0) 315deg, rgba(0,0,0,1) 360deg)",
            WebkitMaskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0) 45deg, rgba(0,0,0,1) 90deg, rgba(0,0,0,0) 135deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0) 225deg, rgba(0,0,0,1) 270deg, rgba(0,0,0,0) 315deg, rgba(0,0,0,1) 360deg)",
            borderColor: "rgba(255,255,255,1)",
          }} />

          {/* Órbita exterior con marcas */}
          {/* Círculo visible */}
          <div className="absolute w-[500px] h-[500px] rounded-full border-2 border-transparent opacity-40" style={{
            maskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0.2) 90deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg)",
            WebkitMaskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0.2) 90deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg)",
            borderColor: "rgba(255,255,255,1)",
          }} />

          {/* Órbita intermedia extra */}
          <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-transparent opacity-40" style={{
            maskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0) 45deg, rgba(0,0,0,1) 90deg, rgba(0,0,0,0) 135deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0) 225deg, rgba(0,0,0,1) 270deg, rgba(0,0,0,0) 315deg, rgba(0,0,0,1) 360deg)",
            WebkitMaskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0) 45deg, rgba(0,0,0,1) 90deg, rgba(0,0,0,0) 135deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0) 225deg, rgba(0,0,0,1) 270deg, rgba(0,0,0,0) 315deg, rgba(0,0,0,1) 360deg)",
            borderColor: "rgba(255,255,255,1)",
          }} />

          {/* Órbita interior con marcas */}
          <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-transparent opacity-40" style={{
            maskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0.2) 90deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg)",
            WebkitMaskImage: "conic-gradient(rgba(0,0,0,1) 0deg, rgba(0,0,0,0.2) 90deg, rgba(0,0,0,1) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg)",
            borderColor: "rgba(255,255,255,1)",
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
