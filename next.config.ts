import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/label2026",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
