import Link from 'next/link';

const DossBanner = () => {
  return (
    <div className="relative w-full bg-white/5 border-t-1 border-b-1 border-yellow-400/30 py-6">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-orange-50 opacity-5"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-4">
            <span className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-full text-sm md:text-base uppercase tracking-wide shadow-lg border-2 border-yellow-300">
              🎵 ¡NOVEDAD!
            </span>
          </div>
          
          <h2 className="text-white font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight mb-3">
            Geekshive trajo la marca{' '}
            <span 
              className="text-yellow-400 font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
              style={{
                filter: 'drop-shadow(0 0 8px #facc15)'
              }}
            >
              DOSS
            </span>
            {' '}a{' '}
            <span className="text-slate-200 font-bold">
              <span 
                className="underline decoration-yellow-400 decoration-2 underline-offset-2"
                style={{
                  textDecorationColor: '#facc15',
                }}
              >
                Argentina
              </span>
              {' y '}
              <span 
                className="underline decoration-yellow-400 decoration-2 underline-offset-2"
                style={{
                  textDecorationColor: '#facc15',
                }}
              >
                México
              </span>
            </span>
          </h2>
          
          <p className="text-slate-200 font-medium text-sm md:text-base lg:text-lg mb-5 max-w-4xl mx-auto">
            Parlantes premium • Sonido superior • Bluetooth 5.3 • Precios accesibles • Resistentes al agua
          </p>
          
          <Link 
            href="https://www.dosslatam.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-6 py-3 rounded-full text-sm md:text-base lg:text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-yellow-600 hover:shadow-2xl"
          >
            Descubrí DOSS en www.dosslatam.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DossBanner; 