// next.config.js (Change 1: Public variable export)
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'L-G-Technologies';
const basePathValue = isProd ? `/${repoName}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: basePathValue,
    assetPrefix: isProd ? `${basePathValue}/` : '',
    
    // 👇 Naya addition: BASE_PATH ko public karna
    env: {
        NEXT_PUBLIC_BASE_PATH: basePathValue, 
    },
    
    images: {
        unoptimized: true, 
        loader: 'custom', 
        loaderFile: './my-custom-image-loader.js', 
    },
};

module.exports = nextConfig;