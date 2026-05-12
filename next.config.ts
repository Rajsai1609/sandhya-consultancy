import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/industries",
        destination: "/ai-products",
        permanent: true,
      },
      {
        source: "/for-candidates",
        destination: "/for-employees",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
