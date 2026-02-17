import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center py-24 px-6">
      <div className="glass-card rounded-2xl p-12 md:p-16 max-w-md mx-auto">
        <div className="text-7xl md:text-8xl font-bold text-[#F2D300] mb-4 font-raleway" style={{ textShadow: '0 0 40px rgba(242, 211, 0, 0.3)' }}>
          404
        </div>
        <p className="text-white/50 text-lg mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2D300] text-black font-bold rounded-full transition-all duration-300 hover:bg-[#ffe44d] hover:scale-105 shadow-[0_0_25px_rgba(242,211,0,0.2)]"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}


