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
};

export default nextConfig;
