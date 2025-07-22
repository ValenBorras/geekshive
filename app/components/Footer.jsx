import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white py-10 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm font-light">

    <div>
      <h2 className="text-xl font-semibold text-[#F2D300] mb-2">GEEKSHIVE</h2>
      <p className="text-[#EFDE95]">Your online geek store.</p>
    </div>

    <div>
      <h3 className="text-[#F4CB00] font-semibold mb-2">Menu</h3>
      <ul className="space-y-1">
        <li><a href="#about" className="hover:text-[#F2D300]">About us</a></li>
        <li><a href="#marketplaces" className="hover:text-[#F2D300]">Marketplaces</a></li>
        <li><a href="#brands" className="hover:text-[#F2D300]">Brands</a></li>
        <li><a href="#boosting" className="hover:text-[#F2D300]">Boosting</a></li>
        <li><a href="#contact" className="hover:text-[#F2D300]">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-[#F4CB00] font-semibold mb-2">Contact</h3>
      <p>Email: <a href="mailto:fran@geekshive.com" className="hover:text-[#F2D300]">fran@geekshive.com</a></p>
      <p>Phone: <a href="tel:+1 (888) 797-4335" className="hover:text-[#F2D300]">+1 (888) 797-4335</a></p>
      <p>Miami, Florida, USA</p>
    </div>


    <div>
      <h3 className="text-[#F4CB00] font-semibold mb-2">Follow Us</h3>
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

  <div className="flex flex-wrap items-center justify-center gap-x-2 mt-10 text-center text-xs text-gray-400">
    <span>© 2025 Geekshive Inc. All rights reserved.</span>
    <span className="hidden sm:inline">|</span>
    <div className="flex items-center">
      <span>Powered by ValenBorras</span>
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