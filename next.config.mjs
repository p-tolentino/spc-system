/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'protonproducts.com',
            },
          ],
    }
};

export default nextConfig;
