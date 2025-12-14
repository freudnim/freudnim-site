import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "/freudnim-site";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? repoName : "",
  assetPrefix: isProd ? repoName : "",
  images: {
    unoptimized: true, // REQUIRED for GitHub Pages
  },
};

export default nextConfig;
