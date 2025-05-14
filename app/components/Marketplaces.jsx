'use client';

import { motion } from 'framer-motion';
import { GlowCapture, Glow } from '@codaworks/react-glow';
import Image from 'next/image';
import { FaAmazon } from 'react-icons/fa';

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

const marketplaces = [
  {
    name: 'Mercado Libre México',
    link: 'https://www.mercadolibre.com.mx/pagina/geekshivemxf?item_id=MLM2141063737&category_id=MLM151595&seller_id=1855979976&client=recoview-selleritems&recos_listing=true#origin=pdp&component=sellerData&typeSeller=eshop',
    image: '/MLmex.png',
    icon: null,
    description: `We have an active and growing presence in Mexico’s largest online marketplace.
    With a solid logistics network and authorized seller status, we ensure reliable fulfillment and visibility for every product.
    Our strategy focuses on localization, fast delivery, and listing optimization tailored to Mexican buyers.`,
  },
  {
    name: 'Mercado Libre Argentina',
    link: 'https://www.mercadolibre.com.ar/pagina/geekshivearf?item_id=MLA2046284742&category_id=MLA412089&seller_id=2378407094&client=recoview-selleritems&recos_listing=true#origin=pdp&component=sellerData&typeSeller=eshop',
    image: '/MLarg.png',
    icon: null,
    description: `In Argentina, we specialize in launching and scaling brands through custom content,
    efficient inventory handling, and promotional placement. As official sellers, we bring local experience and market insight
    into one of South America’s most competitive digital spaces.`,
  },
  {
    name: 'Amazon',
    link: 'https://www.amazon.com/sp?ie=UTF8&seller=A1MD6J1KVR2O2V&isAmazonFulfilled=1&asin=B0DQ92ZKMW&ref_=olp_merch_name_1',
    image: null,
    icon: <FaAmazon size={100} className="mx-auto text-white" />,
    description: `With over 15 years of experience on Amazon and more than 62,000 verified reviews,
    Geekshive is one of the most trusted sellers on the platform.
    We support both FBA and FBM logistics and help products grow by placing them into
    a system built for conversion, performance, and brand visibility.`,
  },
];

export default function Marketplaces() {
  return (
    <GlowCapture>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center mb-30">
          {marketplaces.map((item, i) => (
            <Glow key={i} color='#F2D300'>
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
              >
                <div className="bg-white/6 backdrop-blur-3xl border border-white/9 rounded-3xl shadow-lg p-8 h-full flex flex-col justify-start items-center space-y-6  transition-transform duration-300 glow:bg-purple">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={140}
                        height={140}
                        className="mx-auto mb-2"
                      />
                    ) : (
                      item.icon
                    )}
                  </a>

                  <h2 className="text-2xl font-semibold text-white">{item.name}</h2>

                  <p className="text-base md:text-lg text-white/80 leading-relaxed text-center">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </Glow>
          ))}
        </div>
    </GlowCapture>
  );
}