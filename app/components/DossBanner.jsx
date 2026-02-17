'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';

const DossBanner = () => {
  const { t } = useI18n();
  return (
    <motion.div
      className="relative w-full bg-white/[0.03] backdrop-blur-sm border-t border-b border-[#F2D300]/15 py-8 md:py-10 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F2D300]/[0.03] to-transparent" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#F2D300] text-black font-bold px-5 py-2 rounded-full text-xs md:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(242,211,0,0.3)]">
              🎵 {t('doss.new')}
            </span>
          </motion.div>
          
          <motion.h2
            className="text-white font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight mb-4"
            dangerouslySetInnerHTML={{ __html: t('doss.headline') }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          />
          
          <motion.p
            className="text-white/60 font-medium text-sm md:text-base lg:text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {t('doss.features')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              href="https://www.dosslatam.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#F2D300] text-black font-bold px-7 py-3 rounded-full text-sm md:text-base hover:bg-[#ffe44d] transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(242,211,0,0.2)] hover:shadow-[0_0_40px_rgba(242,211,0,0.35)]"
            >
              {t('doss.cta')}
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DossBanner; 