/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Without this, Next.js might render the page without
  // styles on the first load.
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
