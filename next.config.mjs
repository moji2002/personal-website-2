import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Inline CSS to eliminate render-blocking request, improving FCP/LCP
    inlineCss: true,
    optimizePackageImports: [
      "lucide-react",
      "react-markdown",
      "@radix-ui/react-accordion",
      "@radix-ui/react-avatar",
      "@radix-ui/react-icons",
      "@radix-ui/react-separator",
      "@radix-ui/react-slot",
      "@radix-ui/react-tooltip",
      "motion",
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        pathname: "/api/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./src/lib/modern-polyfill.js",
      "next/dist/build/polyfills/polyfill-module": "./src/lib/modern-polyfill.js",
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "../build/polyfills/polyfill-module": false,
      "next/dist/build/polyfills/polyfill-module": false,
    };
    return config;
  },
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
