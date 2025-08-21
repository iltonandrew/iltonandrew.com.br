/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "pt-BR"],
    defaultLocale: "pt-BR",
  },
};

const nextTranslate = require('next-translate');
module.exports = nextTranslate(nextConfig);
