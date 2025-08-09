import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      // { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/kkn-gebang-c3ff2.firebasestorage.app/o/**",
      },
    ],
    domains: ["firebasestorage.googleapis.com"],
  },
  webpack: (
    config: any,
    { buildId, dev, isServer, defaultLoaders, webpack }: any
  ) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

export default nextConfig;
