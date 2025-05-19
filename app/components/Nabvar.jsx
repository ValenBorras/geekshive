'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  const navItems = ['Home', 'Marketplaces', 'Brands', 'About', 'Boosting', 'Contact'];

  return (
    <nav className={'w-full fixed top-0 left-0 z-50 transition-all duration-300 bg-black/80 backdrop-blur-md '}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <button onClick={() => scrollToSection('home')} className="focus:outline-none">
              <Image
                src="/GeekshiveAmarillo.png"
                alt="Geekshive Logo"
                width={30}
                height={30}
                className="object-contain hover:drop-shadow-[0_0_6px_#F2D300] transition"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-[#F2D300] font-raleway font-semibold text-base">
            {navItems.map((text) => (
              <button
                key={text}
                onClick={() => scrollToSection(text)}
                className="relative transition hover:drop-shadow-[0_0_6px_#F2D300] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#F2D300] after:transition-all hover:after:w-full focus:outline-none"
              >
                {text}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#F2D300] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="flex flex-col space-y-4 py-4">
            {navItems.map((text) => (
              <button
                key={text}
                onClick={() => scrollToSection(text)}
                className="text-[#F2D300] font-raleway font-semibold text-base transition hover:drop-shadow-[0_0_6px_#F2D300] focus:outline-none"
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
