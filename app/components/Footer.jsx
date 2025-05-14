import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm font-light font-[Raleway]">

    <div>
      <h2 className="text-xl font-semibold text-[#F2D300] mb-2">GEEKSHIVE</h2>
      <p className="text-[#EFDE95]">Your online geek store.</p>
    </div>

    <div>
      <h3 className="text-[#F4CB00] font-semibold mb-2">Navegación</h3>
      <ul className="space-y-1">
        <li><a href="/about" className="hover:text-[#F2D300]">Sobre Nosotros</a></li>
        <li><a href="/shop" className="hover:text-[#F2D300]">Tienda</a></li>
        <li><a href="/brands" className="hover:text-[#F2D300]">Marcas</a></li>
        <li><a href="/contact" className="hover:text-[#F2D300]">Contacto</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-[#F4CB00] font-semibold mb-2">Contacto</h3>
      <p>Email: <a href="mailto:contact@geekshive.com" className="hover:text-[#F2D300]">contact@geekshive.com</a></p>
      <p>Paraná, Entre Ríos, Argentina</p>
    </div>


    <div>
      <h3 className="text-[#F4CB00] font-semibold mb-2">Seguinos</h3>
      <div className="flex space-x-4">
        <a href="https://instagram.com/geekshive" target="_blank" className="hover:text-[#F2D300]">Instagram</a>
      </div>
    </div>
  </div>

  <div className="mt-10 text-center text-xs text-gray-400">
    © 2025 Geekshive Inc. Todos los derechos reservados.
  </div>
</footer>
  )
}

export default Footer