import type { NextConfig } from "next";

const nextConfig = {
  output: "export",
  // basePath: isProd ? repoName : "",
  // assetPrefix: isProd ? repoName : "",
  images: {
    unoptimized: true, // REQUIRED for GitHub Pages
  },
};

export default nextConfig;
