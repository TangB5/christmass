/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.supabase.co',
                pathname: '/storage/v1/object/public/**',
            },
        ],
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '10mb',
        },
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        /** * Correction ERR_BLOCKED_BY_RESPONSE :
                         * 'credentialless' permet de charger des images tierces (Supabase)
                         * sans que le navigateur n'exige des headers CORP sur chaque image.
                         */
                        key: 'Cross-Origin-Embedder-Policy',
                        value: 'credentialless',
                    },
                    {
                        key: 'Cross-Origin-Opener-Policy',
                        value: 'same-origin',
                    },
                ],
            },
        ];
    },
}

module.exports = nextConfig