/** @type {import('next').NextConfig} */
// Static export: works on Vercel, and the `out/` folder can also be uploaded to cPanel.
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
