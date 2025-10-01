/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/lgTechnologies",      // 👈 repo ka naam
  assetPrefix: "/lgTechnologies/",  // 👈 trailing slash important hai
  trailingSlash: true,              // 👈 static export ke liye zaroori hai
  images: {
    unoptimized: true,
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
