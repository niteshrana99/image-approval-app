/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['cdn.pixabay.com', 'images.unsplash.com']
  },
}

module.exports = nextConfig
