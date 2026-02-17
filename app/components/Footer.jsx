'use client'
import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import LanguageToggle from './LanguageToggle'
import { useI18n } from '../i18n/I18nProvider'

const socialLinks = [
  { icon: FaInstagram, href: 'https://instagram.com/geekshive', label: 'Instagram' },
  { icon: FaFacebook, href: 'https://www.facebook.com/share/1DYoj1tG8x/?mibextid=wwXIfr', label: 'Facebook' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/company/geekshive', label: 'LinkedIn' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@geekshive', label: 'TikTok' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@geekshive', label: 'YouTube' },
];

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="relative bg-black/60 backdrop-blur-sm border-t border-[#F2D300]/10 text-white py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm font-light">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-[#F2D300] mb-3">{t('common.brand')}</h2>
            <p className="text-white/40 leading-relaxed">{t('common.tagline')}</p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-[#F2D300] font-semibold mb-3 text-sm uppercase tracking-wider">{t('common.menu')}</h3>
            <ul className="space-y-2">
              {[
                { href: '#about', label: t('footer.menu.aboutUs') },
                { href: '#marketplaces', label: t('footer.menu.marketplaces') },
                { href: '#brands', label: t('footer.menu.brands') },
                { href: '#boosting', label: t('footer.menu.boosting') },
                { href: '#contact', label: t('footer.menu.contact') },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white/40 hover:text-[#F2D300] transition-colors duration-300">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#F2D300] font-semibold mb-3 text-sm uppercase tracking-wider">{t('footer.contact.title')}</h3>
            <div className="space-y-2 text-white/40">
              <p>{t('footer.contact.email')}: <a href="mailto:fran@geekshive.com" className="hover:text-[#F2D300] transition-colors duration-300">fran@geekshive.com</a></p>
              <p>{t('footer.contact.phone')}: <a href="tel:+1 (888) 797-4335" className="hover:text-[#F2D300] transition-colors duration-300">+1 (888) 797-4335</a></p>
              <p>{t('footer.contact.city')}</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-[#F2D300] font-semibold mb-3 text-sm uppercase tracking-wider">{t('common.followUs')}</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#F2D300] hover:border-[#F2D300]/30 hover:bg-[#F2D300]/10 transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-white/30">
            <LanguageToggle />
            <span className="hidden sm:inline text-white/10">|</span>
            <span>{t('common.rights')}</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <div className="flex items-center gap-1">
              <span>{t('common.poweredBy')}</span>
              <a 
                href="https://x.com/ValenBorras_" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-[#F2D300] transition-colors"
              >
                <FaXTwitter size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer