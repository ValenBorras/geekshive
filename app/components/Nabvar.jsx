'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md px-6 py-4 flex items-center justify-between ">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <a href="#hero">
          <Image
            src="/GeekshiveAmarillo.png"
            alt="Geekshive Logo"
            width={30}
            height={30}
            className="object-contain"
          />
        </a>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-6 text-[#F2D300] font-raleway font-semibold text-sm md:text-base">
        <a href="#hero" className="hover:underline transition">Home</a>
        <a href="#marketplaces" className="hover:underline transition">Marketplaces</a>
        <a href="#brands" className="hover:underline transition">Brands</a>
        <a href="#about" className="hover:underline transition">About</a>
        <a href="#contact" className="hover:underline transition">Contact</a>
      </div>
    </nav>
  );
}
