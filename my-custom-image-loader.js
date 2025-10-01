// my-custom-image-loader.js (Change 2: Loader logic)

export default function myImageLoader({ src }) {
    // Apne repo ke naam wala base path
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    
    // Agar src already absolute URL hai toh usse waise hi return kar do
    if (src.startsWith('http') || src.startsWith('//')) {
        return src;
    }

    // Warna, basePath ko src ke aage jod do
    // Example: /L-G-Technologies + /images/blog/blog-details-02.jpg
    return `${basePath}${src}`;
}