import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/rent",
        destination: "/vehicles",
        permanent: true,
      },
      {
        source: "/rent/:slug",
        destination: "/vehicles",
        permanent: true,
      },
      {
        source: "/cabs",
        destination: "/vehicles",
        permanent: true,
      },
      {
        source: "/taxi",
        destination: "/transfers",
        permanent: true,
      },
      {
        source: "/ooty-taxi",
        destination: "/transfers",
        permanent: true,
      },
      {
        source: "/self-drive-cars-ooty",
        destination: "/vehicles",
        permanent: true,
      },
      {
        source: "/used-cars-ooty",
        destination: "/vehicles",
        permanent: true,
      },
      {
        source: "/second-hand-cars-nilgiris",
        destination: "/vehicles",
        permanent: true,
      },
      {
        source: "/coimbatore-to-ooty-taxi",
        destination: "/transfers",
        permanent: true,
      },
      {
        source: "/cabs-in-ooty",
        destination: "/tours",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
