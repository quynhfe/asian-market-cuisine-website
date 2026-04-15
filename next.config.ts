import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "scontent.fdad2-1.fna.fbcdn.net" },
      { protocol: "https", hostname: "scontent.fdad1-3.fna.fbcdn.net" },
      { protocol: "https", hostname: "**.fbcdn.net" },
    ],
  },
};

export default nextConfig;
