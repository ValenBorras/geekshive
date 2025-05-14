module.exports = {
  plugins: [
    require('@codaworks/react-glow/tailwind')
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
      },
    },
    
  };
  