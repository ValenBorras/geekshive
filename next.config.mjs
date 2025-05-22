/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/es/historia.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/es/argentina/arg_buenosaires.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/es/LaComunidad.html',
        destination: '/',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
