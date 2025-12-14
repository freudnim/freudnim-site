const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "",
  images: {
    unoptimized: true, // REQUIRED for GitHub Pages
  },
};

export default nextConfig;
