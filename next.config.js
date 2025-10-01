/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // static export ke liye
  images: {
    unoptimized: true, // Next Image optimization disable (GitHub Pages me nahi chalta)
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  basePath: "/lgTechnologies",   // 👈 repo name dalna zaroori hai
  assetPrefix: "/lgTechnologies",
};

module.exports = nextConfig;
