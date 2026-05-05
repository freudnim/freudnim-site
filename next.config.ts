const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  ...(isProd && {
    output: "export",
    assetPrefix: ".",
  }),
  trailingSlash: true,
  assetPrefix: "/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
