/** @type {import('next').NextConfig} */

import withLitSSR from '@lit-labs/nextjs';

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

export default withLitSSR()(nextConfig);
