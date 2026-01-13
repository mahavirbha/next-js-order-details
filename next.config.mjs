/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization - converts images to modern formats (AVIF/WebP) for faster loading
  // Automatically optimizes images for different screen sizes
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Security headers - protect against common vulnerabilities
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            // X-DNS-Prefetch-Control - allows browser to perform DNS lookups faster
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            // X-Frame-Options - prevents clickjacking attacks (page can't be embedded in iframe)
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            // X-Content-Type-Options - prevents MIME type sniffing attacks
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            // Referrer-Policy - controls how much referrer info is shared
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  },
};

export default nextConfig;
