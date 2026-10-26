'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import roboticsBrands from '@/data/roboticsBrands.json';
import { useI18n } from '../i18n/I18nProvider';
import { goToContact } from './Contact';

const fadeInUp = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// Add a brand by appending it to data/roboticsBrands.json and adding
// robotics.items.<id> (tagline, desc, products) to every dictionary.
function BrandLogo({ brand, className }) {
  return (
    <Image
      src={brand.logo}
      alt={brand.name}
      width={240}
      height={60}
      unoptimized
      className={`object-contain object-left ${brand.invertLogo ? 'brightness-0 invert' : ''} ${className}`}
    />
  );
}

function ProductChips({ products }) {
  if (!Array.isArray(products)) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {products.map((product) => (
        <li
          key={product}
          className="px-3 py-1 rounded-full text-xs font-semibold text-white/70 bg-white/5 border border-white/10"
        >
          {product}
        </li>
      ))}
    </ul>
  );
}

export default function RoboticsBrands() {
  const { t } = useI18n();
  const featured = roboticsBrands.filter((brand) => brand.featured);
  const others = roboticsBrands.filter((brand) => !brand.featured);

  return (
    <section id="robotics" className="relative w-full py-20 px-6 md:px-12 font-raleway overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#2DCCD3]/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center space-y-5 mb-14"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#F2D300]/80">
            {t('robotics.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F2D300]">{t('robotics.title')}</h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">{t('robotics.description')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured brand (Livox): full-width card with its own CTA */}
          {featured.map((brand) => (
            <motion.article
              key={brand.id}
              className="md:col-span-2 relative rounded-3xl p-8 md:p-12 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border-2 border-[#F2D300]/40 shadow-[0_0_60px_rgba(242,211,0,0.08)]"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="absolute -top-4 left-8 inline-flex items-center gap-2 bg-[#F2D300] text-black font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(242,211,0,0.3)]">
                <FaStar className="text-[10px]" />
                {t('robotics.specialty')}
              </span>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-3 space-y-5">
                  <BrandLogo brand={brand} className="h-10 md:h-12 w-auto" />
                  <p className="text-sm font-bold uppercase tracking-wider text-[#2DCCD3]">
                    {t(`robotics.items.${brand.id}.tagline`)}
                  </p>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    {t(`robotics.items.${brand.id}.desc`)}
                  </p>
                  <ProductChips products={t(`robotics.items.${brand.id}.products`)} />
                </div>

                <div className="lg:col-span-2 flex flex-col items-start lg:items-center gap-4 lg:text-center">
                  <motion.button
                    type="button"
                    onClick={() => goToContact(t('robotics.contactSubject'))}
                    className="group inline-flex items-center gap-2 bg-[#F2D300] text-black font-bold px-7 py-3.5 rounded-full text-sm md:text-base hover:bg-[#ffe44d] shadow-[0_0_25px_rgba(242,211,0,0.2)] hover:shadow-[0_0_40px_rgba(242,211,0,0.35)]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {t('robotics.cta')}
                    <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                  <p className="text-white/40 text-sm max-w-xs">{t('robotics.ctaNote')}</p>
                  <a
                    href={brand.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-[#F2D300] underline underline-offset-4"
                  >
                    {t('robotics.learnMore')}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Other robotics brands */}
          {others.map((brand) => (
            <motion.article
              key={brand.id}
              className="glass-card rounded-2xl p-8 flex flex-col gap-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <BrandLogo brand={brand} className="h-8 md:h-9 w-auto" />
              <p className="text-sm font-bold uppercase tracking-wider text-[#F2D300]/80">
                {t(`robotics.items.${brand.id}.tagline`)}
              </p>
              <p className="text-white/60 leading-relaxed flex-1">{t(`robotics.items.${brand.id}.desc`)}</p>
              <ProductChips products={t(`robotics.items.${brand.id}.products`)} />
              <a
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-[#F2D300] underline underline-offset-4 self-start"
              >
                {t('robotics.learnMore')}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
