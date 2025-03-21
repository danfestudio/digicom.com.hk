module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    // domains: ['localhost', '202.51.82.80', '128.140.100.225', 'digicom.com.hk', 'digicom', 'digicom.com'],
  },
}