/** @type {import('next').NextConfig} */
module.exports = {
  compiler: {
    // See https://nextjs.org/docs/advanced-features/compiler#styled-components for more info on the options.
    styledComponents: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cf.geekdo-images.com',
      }],
  },
  reactStrictMode: true,
};
