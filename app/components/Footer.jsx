'use client'
import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import LanguageToggle from './LanguageToggle'
import { useI18n } from '../i18n/I18nProvider'

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-black/90 text-white py-10 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm font-light">

    <div>
      <h2 className="text-xl font-semibold text-[#F2D300] mb-2">{t('common.brand')}</h2>
      <p className="text-[#EFDE95]">{t('common.tagline')}</p>
    </div>

    <div>
      <h3 className="text-[#F4CB00] font-semibold mb-2">{t('common.menu')}</h3>
      <ul className="space-y-1">
        <li><a href="#about" className="hover:text-[#F2D300]">{t('footer.menu.aboutUs')}</a></li>
        <li><a href="#marketplaces" className="hover:text-[#F2D300]">{t('footer.menu.marketplaces')}</a></li>
        <li><a href="#brands" className="hover:text-[#F2D300]">{t('footer.menu.brands')}</a></li>
        <li><a href="#boosting" className="hover:text-[#F2D300]">{t('footer.menu.boosting')}</a></li>
        <li><a href="#contact" className="hover:text-[#F2D300]">{t('footer.menu.contact')}</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-[#F4CB00] font-semibold mb-2">{t('footer.contact.title')}</h3>
      <p>{t('footer.contact.email')}: <a href="mailto:fran@geekshive.com" className="hover:text-[#F2D300]">fran@geekshive.com</a></p>
      <p>{t('footer.contact.phone')}: <a href="tel:+1 (888) 797-4335" className="hover:text-[#F2D300]">+1 (888) 797-4335</a></p>
      <p>{t('footer.contact.city')}</p>
    </div>


    <div>
      <h3 className="text-[#F4CB00] font-semibold mb-2">{t('common.followUs')}</h3>
      <div className="flex space-x-4">
                <a href="https://instagram.com/geekshive" target="_blank" className="hover:text-[#F2D300]">
                  <FaInstagram/>
                   </a>
                   <a href="https://www.facebook.com/share/1DYoj1tG8x/?mibextid=wwXIfr" target="_blank" className="hover:text-[#F2D300]">
                  <FaFacebook/>
                   </a>
                   <a href="https://www.linkedin.com/company/geekshive" target="_blank" className="hover:text-[#F2D300]">
                  <FaLinkedin/>
                   </a>
                   <a href="https://www.tiktok.com/@geekshive" target="_blank" className="hover:text-[#F2D300]">
                  <FaTiktok/>
                   </a>
                   <a href="https://www.youtube.com/@geekshive" target="_blank" className="hover:text-[#F2D300]"> 
                   <FaYoutube/>
                   </a>
      </div>
    </div>
  </div>

  <div className="flex flex-wrap items-center justify-center gap-x-3 mt-10 text-center text-xs text-gray-400">
    <LanguageToggle />
    <span className="hidden sm:inline">|</span>
    <span>{t('common.rights')}</span>
    <span className="hidden sm:inline">|</span>
    <div className="flex items-center">
      <span>{t('common.poweredBy')}</span>
      <a 
        href="https://x.com/ValenBorras_" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center hover:text-[#F2D300] transition-colors ml-1"
      >
        <FaXTwitter size={14} />
      </a>
    </div>
  </div>
</footer>
  )
}

export default Footer