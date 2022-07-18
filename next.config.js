/** @type {import('next').NextConfig} */
module.exports = {
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
  devIndicators: {
    autoPrerender: true,
  },
  images: {
    domains: ['cf.geekdo-images.com'],
  },
  reactStrictMode: true,
};
