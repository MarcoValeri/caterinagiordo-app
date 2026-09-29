import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/classes",
        destination: "/schedule",
        permanent: true,
      },
      {
        source: "/admin/classes",
        destination: "/admin/schedule",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
