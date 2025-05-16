module.exports = {
  plugins: [
    require('@codaworks/react-glow/tailwind'),
    require('tailwindcss-textshadow')
  ],
    theme: {
      extend: {
        animation: {
          orbit: 'orbitPulse 2s ease-in-out infinite',
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
        },
        fontFamily: {
          sans: ['Raleway', 'sans-serif'],
          raleway: ['Raleway', 'sans-serif'],
        },
        textShadow: {
          glow: '0 0 10px #F2D300, 0 0 20px #F2D300',
        },
      },
    },
    
  };
  