import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [new URL('https://flagcdn.com/w320/**')],
    },
};

export default nextConfig;
