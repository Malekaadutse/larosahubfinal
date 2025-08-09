import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    // Uncomment the line below if you want to ignore TypeScript build errors
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;