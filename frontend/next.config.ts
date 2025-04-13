import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const rules = {
      beforeFiles: [
        { source: "/log-in", destination: "/auth/login" },
        { source: "/sign-up", destination: "/auth/signup" },
      ],
    };
    
    console.log("Rewrites Config:", rules);
    return rules;
  },
};

export default nextConfig;
