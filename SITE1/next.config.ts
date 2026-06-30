import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/.next/**",
          "C:\\pagefile.sys",
          "C:\\hiberfil.sys",
          "C:\\swapfile.sys",
          "C:\\DumpStack.log.tmp",
        ],
      };
    }
    return config;
  },
};

export default nextConfig;
