import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/reviews-booster",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
