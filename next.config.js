/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/lgTechnologies",   // repo name
  assetPrefix: "/lgTechnologies", // assets ke liye bhi repo prefix
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
