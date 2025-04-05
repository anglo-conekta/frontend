/** @type {import('next').NextConfig} */
const nextConfig = {

 images: {
   remotePatterns: [
      {
        protocol: 'https', // o 'https', dependiendo de tu Strapi
        hostname: 'webstrapi2-acfcc0aafycue7bh.centralus-01.azurewebsites.net',
        port: '', // Si tu Strapi usa un puerto específico
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
