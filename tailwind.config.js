module.exports = {
  plugins: [
    require('@codaworks/react-glow/tailwind'),
    require('tailwindcss-textshadow')
  ],
    theme: {
      extend: {
        animation: {
          orbit: 'orbitPulse 2s ease-in-out infinite',
          'fade-in': 'fadeIn 0.6s ease-out forwards',
          'slide-up': 'slideUp 0.6s ease-out forwards',
          'scale-in': 'scaleIn 0.4s ease-out forwards',
        },
        keyframes: {
          orbitPulse: {
            '0%, 100%': {
              opacity: '0.4',
              borderWidth: '2px',
            },
            '50%': {
              opacity: '0.7',
              borderWidth: '3px',
            },
          },
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          scaleIn: {
            '0%': { opacity: '0', transform: 'scale(0.95)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
          },
        },
        fontFamily: {
          raleway: ['var(--font-raleway)', 'sans-serif'],
        },
        textShadow: {
          glow: '0 0 10px #F2D300, 0 0 20px #F2D300',
        },
        boxShadow: {
          'glow-sm': '0 0 15px rgba(242, 211, 0, 0.1)',
          'glow-md': '0 0 30px rgba(242, 211, 0, 0.15)',
          'glow-lg': '0 0 60px rgba(242, 211, 0, 0.2)',
        },
      },
    },
    
  };
  