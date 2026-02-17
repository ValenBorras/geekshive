'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect + active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['home', 'marketplaces', 'brands', 'about', 'boosting', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const close = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  }, []);

  const navItems = [
    { label: t('nav.home'), id: 'home' },
    { label: t('nav.marketplaces'), id: 'marketplaces' },
    { label: t('nav.brands'), id: 'brands' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.boosting'), id: 'boosting' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/70 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-[#F2D300]/10'
          : 'bg-transparent backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button onClick={() => scrollToSection('home')} className="focus:outline-none">
              <Image
                src="/GeekshiveAmarillo.png"
                alt="Geekshive Logo"
                width={32}
                height={32}
                className="object-contain transition-all duration-300 hover:drop-shadow-[0_0_8px_#F2D300]"
              />
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 text-sm font-raleway font-semibold">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 focus:outline-none ${
                  activeSection === item.id
                    ? 'text-black bg-[#F2D300] shadow-[0_0_20px_rgba(242,211,0,0.3)]'
                    : 'text-[#F2D300]/80 hover:text-[#F2D300] hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-white/80">
              <LanguageToggle />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#F2D300] focus:outline-none p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <FaTimes size={22} />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <FaBars size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-1 py-4 border-t border-[#F2D300]/10 mt-3">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-3 rounded-xl font-raleway font-semibold text-base transition-all duration-200 focus:outline-none ${
                      activeSection === item.id
                        ? 'text-black bg-[#F2D300]'
                        : 'text-[#F2D300]/80 hover:text-[#F2D300] hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="pt-3 px-4 text-white/80">
                  <LanguageToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
