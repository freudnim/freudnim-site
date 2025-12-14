import type { NextConfig } from "next";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // REQUIRED for GitHub Pages
  },
};

export default nextConfig;
