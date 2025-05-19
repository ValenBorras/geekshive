'use client';
import { motion } from 'framer-motion';
import { GlowCapture, Glow } from '@codaworks/react-glow';
import Image from 'next/image';
import { FaAmazon } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import React from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 1.2,
      ease: 'easeInOut',
    },
  }),
};

// Parse description text with markdown-like bold syntax
// Use ** around text to make it bold, e.g., "This is **bold text** in a sentence"
const formatDescription = (text) => {
  if (!text) return [];
  
  // Split by bold markers
  const parts = text.split(/(\*\*.*?\*\*)/g);
  
  return parts.map((part, index) => {
    // Check if this part is bold (surrounded by **)
    if (part.startsWith('**') && part.endsWith('**')) {
      // Remove the ** markers and return as bold
      return <strong key={index} className="font-bold text-white">{part.slice(2, -2)}</strong>;
    }
    // Return regular text
    return <span key={index}>{part}</span>;
  });
};

const marketplaces = [
  {
    name: 'Mercado Libre México',
    link: 'https://www.mercadolibre.com.mx/pagina/geekshivemxf?item_id=MLM2141063737&category_id=MLM151595&seller_id=1855979976&client=recoview-selleritems&recos_listing=true#origin=pdp&component=sellerData&typeSeller=eshop',
    image: '/MLmex.png',
    icon: null,
    description: `We have an active and growing presence in **Mexico's largest online marketplace**.
    With a solid logistics network and authorized seller status, we ensure **reliable fulfillment and visibility** for every product.
    Our strategy focuses on localization, fast delivery, and listing optimization tailored to Mexican buyers.`,
  },
  {
    name: 'Mercado Libre Argentina',
    link: 'https://www.mercadolibre.com.ar/pagina/geekshivearf?item_id=MLA2046284742&category_id=MLA412089&seller_id=2378407094&client=recoview-selleritems&recos_listing=true#origin=pdp&component=sellerData&typeSeller=eshop',
    image: '/MLarg.png',
    icon: null,
    description: `In Argentina, we specialize in **launching and scaling brands** through custom content,
    efficient inventory handling, and promotional placement. As official sellers, we bring **local experience and market insight**
    into one of South America's most competitive digital spaces.`,
  },
  {
    name: 'Amazon',
    link: 'https://www.amazon.com/sp?ie=UTF8&seller=A1MD6J1KVR2O2V&isAmazonFulfilled=1&asin=B0DQ92ZKMW&ref_=olp_merch_name_1',
    image: null,
    icon: <FaAmazon size={100} className="mx-auto text-white" />,
    description: `With over **15 years of experience** on Amazon and more than **62,000 verified reviews**,
    Geekshive is one of the most **trusted sellers** on the platform.
    We support both FBA logistics and help products grow by placing them into
    a system built for **conversion, performance, and brand visibility**.`,
  },
];

export default function Marketplaces() {
  const [iconSize, setIconSize] = useState(100);
  
  // Adjust icon size based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIconSize(70);
      } else if (window.innerWidth < 1024) {
        setIconSize(85);
      } else {
        setIconSize(100);
      }
    };
    
    // Set initial size
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="marketplaces" className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-16">
        {marketplaces.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="h-full"
          >
            <div className="bg-white/10 rounded-3xl shadow-lg p-5 sm:p-6 md:p-8 h-full flex flex-col 
            justify-start items-center space-y-4 sm:space-y-6 transition-all duration-300 hover:scale-105 
             border border-[#F2D300]/20 hover:border-[#F2D300]/40 ">
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110"
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
              <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed text-center">
                {formatDescription(item.description)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}