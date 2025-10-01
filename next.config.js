/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/lgTechnologies" : "",
  assetPrefix: isProd ? "/lgTechnologies/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 👇 ye line add karo
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/lgTechnologies" : "",
  },
};

module.exports = nextConfig;
