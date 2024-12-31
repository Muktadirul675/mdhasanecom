/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google-hosted images
        pathname: '**', // Matches all paths
      },
    ],
  },
};

export default nextConfig;
