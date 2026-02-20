/** @type {import('next').NextConfig} */
const repoName = process.env.NEXT_PUBLIC_BASE_PATH || '';
const nextConfig = {
  output: 'export',
  basePath: repoName ? `/${repoName.replace(/^\/+/, '')}` : '',
  assetPrefix: repoName ? `/${repoName.replace(/^\/+/, '')}` : '',
  trailingSlash: true,
};

export default nextConfig;
