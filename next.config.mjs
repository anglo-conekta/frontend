/** @type {import('next').NextConfig} */
const nextConfig = {

 images: {
   remotePatterns: [
      {
        protocol: 'http', // o 'https', dependiendo de tu Strapi
        hostname: 'localhost',
        port: '1337', // Si tu Strapi usa un puerto específico
        pathname: '/uploads/**', // Permite todas las rutas dentro de /uploads/
      },
      // Si tienes un dominio de producción, agrega otro objeto aquí
      // {
      //   protocol: 'https',
      //   hostname: 'api.mi-dominio.com',
      //   pathname: '/uploads/**',
      // },
    ],
  },

};

export default nextConfig;
