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
            className="object-contain hover:drop-shadow-[0_0_6px_#F2D300] transition"
          />
        </a>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-6 text-[#F2D300] font-raleway font-semibold text-sm md:text-base ">
        {['Home', 'Marketplaces', 'Brands', 'About', 'Contact'].map((text, i) => (
          <a
            key={text}
            href={`#${text.toLowerCase()}`}
            className="transition hover:drop-shadow-[0_0_6px_#F2D300] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full "
          >
            {text}
          </a>
        ))}
      </div>
    </nav>
  );
}
