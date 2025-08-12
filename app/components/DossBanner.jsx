'use client'
import Link from 'next/link';
import { useI18n } from '../i18n/I18nProvider';

const DossBanner = () => {
  const { t } = useI18n();
  return (
    <div className="relative w-full bg-white/5 border-t-1 border-b-1 border-yellow-400/30 py-6">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-orange-50 opacity-5"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-4">
            <span className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-full text-sm md:text-base uppercase tracking-wide shadow-lg border-2 border-yellow-300">
              🎵 {t('doss.new')}
            </span>
          </div>
          
          <h2
            className="text-white font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight mb-3"
            dangerouslySetInnerHTML={{ __html: t('doss.headline') }}
          />
          
          <p className="text-slate-200 font-medium text-sm md:text-base lg:text-lg mb-5 max-w-4xl mx-auto">
            {t('doss.features')}
          </p>
          
          <Link 
            href="https://www.dosslatam.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-6 py-3 rounded-full text-sm md:text-base lg:text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-yellow-600 hover:shadow-2xl"
          >
            {t('doss.cta')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DossBanner; 