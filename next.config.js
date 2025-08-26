/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["pt-BR", "en"],
    defaultLocale: "pt-BR",
  },
};

module.exports = nextConfig;
