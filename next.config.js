/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   pageExtensions: ['page.tsx'],

   modularizeImports: {
      '@mui/icons-material/?(((\\w*)?/?)*)': {
         transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}',
      },
   },
};

module.exports = nextConfig;
