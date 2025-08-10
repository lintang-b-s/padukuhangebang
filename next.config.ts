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
  async redirects() {
    return [
      {
        source: "/stream_0/playlist.m3u8",
        destination:
          "https://firebasestorage.googleapis.com/v0/b/kkn-gebang-c3ff2.firebasestorage.app/o/public%2Fstream_0%2Fplaylist.m3u8?alt=media&token=10e63e50-a98b-4240-a791-cb148bafaf16",
        permanent: true,
      },
      {
        source: "/stream_1/playlist.m3u8",
        destination:
          "https://firebasestorage.googleapis.com/v0/b/kkn-gebang-c3ff2.firebasestorage.app/o/public%2Fstream_1%2Fplaylist.m3u8?alt=media&token=ab43212e-26a8-4646-ba4a-29ee6605beac",
        permanent: true,
      },
      {
        source: "/stream_2/playlist.m3u8",
        destination:
          "https://firebasestorage.googleapis.com/v0/b/kkn-gebang-c3ff2.firebasestorage.app/o/public%2Fstream_2%2Fplaylist.m3u8?alt=media&token=6157af6b-06bf-4845-a379-a1924824224d",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
