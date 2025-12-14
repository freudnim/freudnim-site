const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: ".", // use relative paths for _next/static
  images: {
    unoptimized: true, // REQUIRED for GitHub Pages
  },
};

export default nextConfig;
