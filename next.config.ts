import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "z-cdn-media.chatglm.cn",
        pathname: "/files/**",
      },
    ],
  },
};

export default nextConfig;
